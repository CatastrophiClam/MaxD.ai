import React, { memo } from "react";
import {
  PanelWrapper,
  LeftPanelBackground,
  LeftPanelContent
} from "./styles/PanelWrappers";

const LeftPanel = ({ xInt, yInt, angle }) => {
  const angleRads = (angle / 180) * Math.PI;
  const angleCompl = Math.PI / 2 - angleRads;
  const backgroundWidth = Math.cos(angleCompl) * yInt;
  const backgroundHeight =
    Math.sin(angleRads) * xInt + Math.cos(angleRads) * yInt;
  const backgroundCenterX =
    (Math.cos(angleCompl) * backgroundHeight -
      Math.cos(angleRads) * backgroundWidth) /
    2;
  const backgroundCenterY =
    yInt -
    (Math.sin(angleCompl) * backgroundHeight +
      Math.sin(angleRads) * backgroundWidth) /
      2;
  const backgroundAnchorX = backgroundCenterX - backgroundWidth / 2;
  const backgroundAnchorY = backgroundCenterY - backgroundHeight / 2;

  return (
    <PanelWrapper>
      <LeftPanelBackground
        height={backgroundHeight}
        width={backgroundWidth}
        xOffset={backgroundAnchorX}
        yOffset={backgroundAnchorY}
        angle={angle}
      />
      <LeftPanelContent
        wHeight={window.innerHeight}
        wWidth={window.innerWidth}
      />
    </PanelWrapper>
  );
};

export default memo(LeftPanel);
