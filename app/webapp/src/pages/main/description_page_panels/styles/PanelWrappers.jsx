import styled from "styled-components";

export const PanelWrapper = styled.div`
  display: relative;
`;

export const LeftPanelBackground = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  position: absolute;
  left: ${({ xOffset }) => xOffset}px;
  top: ${({ yOffset }) => yOffset}px;
  transform: rotate(${({ angle }) => angle}deg);
  background: black;
`;

export const LeftPanelContent = styled.div``;

export const RightPanelBackground = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  position: absolute;
  right: ${({ xOffset }) => xOffset}px;
  top: ${({ yOffset }) => yOffset}px;
  transform: rotate(${({ angle }) => angle}deg);
  background: black;
`;

export const RightPanelContent = styled.div``;

export const BottomPanelBackground = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  position: absolute;
  left: ${({ xOffset }) => xOffset}px;
  bottom: ${({ yOffset }) => yOffset}px;
  transform: rotate(${({ angle }) => angle}deg);
  background: black;
`;

export const BottomPanelContent = styled.div``;
