import styled from "styled-components";
import { animated } from "react-spring";

export const SocialButtonWrapper = styled(animated.div)`
  height: 125px;
  width: 125px;
  border-radius: 25%;
  overflow: hide;
  box-shadow: 0 0 4px 4px white;
  background: ${({ background }) => background};

  transition: transform 0.25s ease-in-out;
  &:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
`;
