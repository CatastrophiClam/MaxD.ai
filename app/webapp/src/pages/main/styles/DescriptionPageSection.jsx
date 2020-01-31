import styled from "styled-components";
import { Heading1, Body } from "../../../constants/Mixins";

export const PageWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const ScrollBannerWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  opacity: ${({ displaying }) => (displaying ? 1 : 0)};

  transition: opacity 0.5s ease-in-out;
`;

export const AboutSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const AboutSectionHeader = styled.div`
  ${Heading1}
  color: black;
  margin: 32px 0 0 32px;
`;

export const AboutSectionBody = styled.div`
  ${Body}
`;

export const ExperienceSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const ExperienceSectionHeader = styled.div`
  ${Heading1}
  color: black;
  margin: 32px 0 0 32px;
`;

export const ExperienceSectionBody = styled.div``;
