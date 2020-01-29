import React, { useState, useMemo } from "react";
import { Spring, animated } from "react-spring/renderprops";
import { interpolate } from "flubber";

/* Styled Components */
import { SocialButtonWrapper } from "./styles/SocialButton";

const SocialButton = ({ onClick, defaultSvg, hoverSvg }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [touched, setTouched] = useState(false);

  const onMouseEnter = () => {
    setIsHovered(true);
    setTouched(true);
  };

  const onMouseLeave = () => {
    setIsHovered(false);
    setTouched(true);
  };

  const toHover = useMemo(
    () =>
      interpolate(defaultSvg.path, hoverSvg.path, {
        maxSegmentLength: 0.1
      }),
    [defaultSvg, hoverSvg]
  );

  const toDefault = useMemo(
    () =>
      interpolate(hoverSvg.path, defaultSvg.path, {
        maxSegmentLength: 0.1
      }),
    [defaultSvg, hoverSvg]
  );

  const interpolator = isHovered ? toHover : toDefault;

  return (
    <Spring
      native
      reset
      from={{ t: 0 }}
      to={{ t: 1 }}
      config={{ duration: 250 }}
    >
      {({ t }) => (
        <SocialButtonWrapper
          background={defaultSvg.background}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        >
          <animated.svg viewBox={defaultSvg.viewBox} fill={defaultSvg.fill}>
            {touched ? (
              <animated.path d={t.interpolate(interpolator)} />
            ) : (
              <path d={defaultSvg.path} />
            )}
          </animated.svg>
        </SocialButtonWrapper>
      )}
    </Spring>
  );
};

export default SocialButton;
