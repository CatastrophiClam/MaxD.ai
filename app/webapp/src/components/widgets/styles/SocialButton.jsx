import styled from "styled-components";
import { animated } from "react-spring";

export const SocialButtonWrapper = styled(animated.div)`
  height: 100px;
  width: 100px;
  border-radius: 25%;
  overflow: hide;
  box-shadow: 0 0 4px 4px white;
  background: ${({ background }) => background};

  transition: transform 0.25s ease-in-out;
  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 0 5px 5px white;
    cursor: pointer;
  }
`;
