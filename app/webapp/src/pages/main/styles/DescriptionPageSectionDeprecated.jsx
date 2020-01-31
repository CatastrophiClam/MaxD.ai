import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const AllPanelsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const LeftPanelWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const RightPanelWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const BottomPanelWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;
