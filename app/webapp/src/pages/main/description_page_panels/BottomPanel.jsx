import React, { memo } from "react";
import {
  PanelWrapper,
  BottomPanelBackground,
  BottomPanelContent
} from "./styles/PanelWrappers";

const BottomPanel = ({ xOffset, xLength, angle }) => {
  const angleRads = (angle / 180) * Math.PI;
  const angleCompl = Math.PI / 2 - angleRads;
  const backgroundWidth = Math.sin(angleCompl) * xLength;
  const backgroundHeight = Math.cos(angleCompl) * xLength;
  const backgroundCenterX = xOffset + xLength / 2;
  const backgroundAnchorX = backgroundCenterX - backgroundWidth / 2;
  const backgroundBottomOffset = -backgroundHeight / 2;

  return (
    <PanelWrapper>
      <BottomPanelBackground
        height={backgroundHeight}
        width={backgroundWidth}
        xOffset={backgroundAnchorX}
        yOffset={backgroundBottomOffset}
        angle={-angle}
      />
      <BottomPanelContent
        wHeight={window.innerHeight}
        wWidth={window.innerWidth}
      />
    </PanelWrapper>
  );
};

export default memo(BottomPanel);
