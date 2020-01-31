import styled from "styled-components";
import { OnedayHeading1 } from "../../../constants/Mixins";
import { animated } from "react-spring";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: black;
  position: relative;
`;

export const NameAndSocialButtonsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameWrapper = styled(animated.div)`
  ${OnedayHeading1}
  color: white;
  margin-bottom: 75px;
  user-select: none;
  z-index: 2;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

export const SocialButtonsWrapper = styled(animated.div)`
  display: flex;
  justify-content: space-between;
  width: 70%;
`;

export const ScrollBannerWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  opacity: ${({ displaying }) => (displaying ? 1 : 0)};

  transition: opacity 0.5s ease-in-out;
`;
