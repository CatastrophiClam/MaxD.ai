import styled from "styled-components";
import { OnedayHeading1 } from "../../../constants/Mixins";

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

export const NameAndSocialButtonsSectionWrapper = styled.div``;

export const NameWrapper = styled.div`
  ${OnedayHeading1}
  color: white;
  margin-bottom: 75px;
  user-select: none;
`;

export const SocialButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ScrollBannerWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
`;
