import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import {
  randBetween,
  pickOneRandomly,
  shouldDoWithProbablity
} from "../../utils/Random";

/* Styled Components */
import { Canvas } from "./styles/BackgroundAnimation";

/* Utils */
import { timer, interval } from "d3-timer";

const BackgroundAnimation = () => {
  const canvasRef = useRef();
  const [context, setContext] = useState(null);
  const [contextSet, setContextSet] = useState(false);
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const lineRef = useRef(0);
  const desiredNumLines = 5;
  const getInitialsForDirection = direction => {
    var x, y, dir;
    if (direction === "up") {
      x = randBetween(-width / 2, width / 2);
      y = height / 2;
      dir = [0, -1];
    } else if (direction === "down") {
      x = randBetween(-width / 2, width / 2);
      y = -height / 2;
      dir = [0, 1];
    } else if (direction === "left") {
      x = width / 2;
      y = randBetween(-height / 2, height / 2);
      dir = [-1, 0];
    } else {
      x = -width / 2;
      y = randBetween(-height / 2, height / 2);
      dir = [1, 0];
    }
    return [x, y, dir];
  };

  useEffect(() => {
    setHeight(window.innerHeight);
  }, [window.innerHeight]);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [window.innerWidth]);

  const updateLinePoints = ([x, y, dir, pastPoints]) => {
    var newDir = dir;
    if (shouldDoWithProbablity(0.007)) {
      const s = parseInt(pickOneRandomly({ "-1": 0.5, "1": 0.5 }));
      newDir = [s * (Math.abs(dir[0]) - 1), s * (Math.abs(dir[1]) - 1)];
      pastPoints.push([x + dir[0] * 5, y + dir[1] * 5]);
    }
    return [x + dir[0] * 5, y + dir[1] * 5, newDir, pastPoints];
  };

  const spawnLine = () => {
    const direction = pickOneRandomly({
      up: 0.25,
      down: 0.25,
      left: 0.25,
      right: 0.25
    });
    var [x, y, dir] = getInitialsForDirection(direction);
    var pastPoints = [[x, y]];

    context.globalCompositeOperation = "source-over";
    context.lineWidth = 1;
    const color = "gray";

    let t = timer(t0 => {
      context.strokeStyle = color;
      [x, y, dir, pastPoints] = updateLinePoints([x, y, dir, pastPoints]);
      const allPoints = [...pastPoints, [x, y]];
      for (let i = 0; i < pastPoints.length; i++) {
        context.beginPath();
        context.moveTo(allPoints[i][0], allPoints[i][1]);
        context.lineTo(allPoints[i + 1][0], allPoints[i + 1][1]);
        context.stroke();
      }

      if (
        x < -width / 2 ||
        x > width / 2 ||
        y < -height / 2 ||
        y > height / 2
      ) {
        lineRef.current -= 1;
        t.stop();
      }
    });
  };

  const lineGenerator = () => {
    const generator = interval(() => {
      if (
        shouldDoWithProbablity(
          Math.pow(10, -((lineRef.current * 2) / desiredNumLines))
        )
      ) {
        lineRef.current += 1;
        spawnLine();
      }
    }, 100);

    return () => {
      generator.stop();
    };
  };

  const fadeTick = () => {
    context.globalCompositeOperation = "source-atop";
    context.fillStyle = "rgba(0,0,0,.3)";
    context.fillRect(-width / 2, -height / 2, width, height);
  };

  useEffect(() => {
    setContext(canvasRef.current.getContext("2d"));
    setContextSet(true);

    return () => setContextSet(false);
  }, []);

  useLayoutEffect(() => {
    var stopAllTimers = null;

    if (contextSet) {
      context.translate(width / 2, height / 2);
      context.fillStyle = "#000";
      context.fillRect(-width / 2, -height / 2, width, height);

      const stopLines = lineGenerator();
      const fadeInterval = interval(fadeTick, 60);
      stopAllTimers = () => {
        stopLines();
        fadeInterval.stop();
      };
    }

    return () => {
      if (typeof stopAllTimers == "function") {
        stopAllTimers();
      }
    };
  }, [contextSet, width, height]);

  return <Canvas width={width} height={height} ref={canvasRef} />;
};

export default BackgroundAnimation;
