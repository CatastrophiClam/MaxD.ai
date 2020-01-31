import React, { memo } from "react";
import {
  PanelWrapper,
  RightPanelBackground,
  RightPanelContent
} from "./styles/PanelWrappers";

const RightPanel = ({ xInt, yInt, angle }) => {
  const angleRads = (angle / 180) * Math.PI;
  const angleCompl = Math.PI / 2 - angleRads;
  const backgroundWidth = Math.cos(angleCompl) * yInt;
  const backgroundHeight =
    Math.sin(angleRads) * xInt + Math.cos(angleRads) * yInt;
  const backgroundCenterXDistFromRight =
    (Math.cos(angleCompl) * backgroundHeight -
      Math.cos(angleRads) * backgroundWidth) /
    2;
  const backgroundCenterY =
    yInt -
    (Math.sin(angleCompl) * backgroundHeight +
      Math.sin(angleRads) * backgroundWidth) /
      2;
  const backgroundAnchorXDistFromRight =
    backgroundCenterXDistFromRight - backgroundWidth / 2;
  const backgroundAnchorY = backgroundCenterY - backgroundHeight / 2;

  return (
    <PanelWrapper>
      <RightPanelBackground
        height={backgroundHeight}
        width={backgroundWidth}
        xOffset={backgroundAnchorXDistFromRight}
        yOffset={backgroundAnchorY}
        angle={-angle}
      />
      <RightPanelContent
        wHeight={window.innerHeight}
        wWidth={window.innerWidth}
      />
    </PanelWrapper>
  );
};

export default memo(RightPanel);
