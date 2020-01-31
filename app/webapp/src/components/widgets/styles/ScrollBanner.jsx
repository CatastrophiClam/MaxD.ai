import styled from "styled-components";
import { animated } from "react-spring";

export const ScrollBannerWrapper = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  opacity: 0.4;

  &:hover {
    opacity: 0.7;
    ${({ disabled }) => (disabled ? "" : "cursor: pointer;")}
  }
`;

export const ScrollBannerHighlight = styled.div`
  width: 100vw;
  position: absolute;
  ${({ onBottom }) => (onBottom ? "bottom: 0;" : "top: 0;")}
  height: 100%;
  background-color: #5d5d5d;
  opacity: 0.2;
`;

export const DownArrowWrapper = styled(animated.div)`
  ${({ onBottom }) => (onBottom ? "" : "transform: rotate(180deg);")}
`;
