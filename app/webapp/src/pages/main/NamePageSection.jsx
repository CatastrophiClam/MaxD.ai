import React, { useCallback } from "react";
import { useSpring } from "react-spring";

/* Styled Components */
import {
  PageWrapper,
  NameAndSocialButtonsSectionWrapper,
  NameWrapper,
  SocialButtonsWrapper,
  ScrollBannerWrapper
} from "./styles/NamePageSection";

/* Child Components */
import SocialButton from "../../components/widgets/SocialButton";
import ScrollBanner from "../../components/widgets/ScrollBanner";
import BackgroundAnimation from "./BackgroundAnimation";

/* Constants */
import { LINKEDIN_URL, GITHUB_URL, RESUME_URL } from "../../constants/Urls";
import { Linkedin, Link, Github, Document, Download } from "../../img/Svgs";
import { DESCRIPTION_PAGE_SECTION_ID } from "../../constants/PageConstants";

const openPage = url => {
  const win = window.open(url, "_blank");
  win.focus();
};

const openLinkedin = () => openPage(LINKEDIN_URL);
const openGithub = () => openPage(GITHUB_URL);

const download = url => {
  var file_path = url;
  var a = document.createElement("a");
  a.href = file_path;
  a.download = file_path.substr(file_path.lastIndexOf("/") + 1);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const downloadResume = () => download(RESUME_URL);

const max = (a, b) => {
  if (a > b) {
    return a;
  }
  return b;
};

const min = (a, b) => {
  if (a < b) {
    return a;
  }
  return b;
};

const NamePageSection = ({ scrollToSection, scrollY }) => {
  const startDisappearThreshold = 0.15;
  const endDisappearThreshold = 0.4;
  const fadeSpeed = 8;
  const displayingScrollBanner = scrollY < (window.innerHeight * 2) / 5;

  const onScrollDown = useCallback(() => {
    if (displayingScrollBanner) {
      scrollToSection(DESCRIPTION_PAGE_SECTION_ID);
    }
  }, [displayingScrollBanner]);

  // offset x by window width when scroll at disappearThreshold, scale linearly
  const goalXOffset =
    (window.innerWidth *
      min(
        max(0, scrollY - window.innerHeight * startDisappearThreshold),
        window.innerHeight * endDisappearThreshold
      )) /
    (window.innerHeight * endDisappearThreshold);

  // offset y to keep stuff at same position on page
  const goalYOffset = max(
    0,
    scrollY - startDisappearThreshold * window.innerHeight
  );

  // exponentially decrease opacity as user scrolls down
  const goalOpacity = Math.pow(
    2,
    (-min(
      max(0, scrollY - window.innerHeight * startDisappearThreshold),
      window.innerHeight * endDisappearThreshold
    ) *
      fadeSpeed) /
      (window.innerHeight * endDisappearThreshold)
  );

  const { offsets, newOpacity } = useSpring({
    native: true,
    to: { offsets: [goalXOffset, goalYOffset], newOpacity: goalOpacity },
    config: { duration: 0.1 }
  });

  return (
    <PageWrapper>
      <NameAndSocialButtonsSectionWrapper>
        <BackgroundAnimation />
        <NameWrapper
          style={{
            transform: offsets.interpolate(
              (x, y) => `translate(${-x}px, ${y}px)`
            ),
            opacity: newOpacity.interpolate(newOpacity => newOpacity)
          }}
        >
          MAX DAI
        </NameWrapper>
        <SocialButtonsWrapper
          style={{
            transform: offsets.interpolate(
              (x, y) => `translate(${x}px, ${y}px)`
            ),
            opacity: newOpacity.interpolate(newOpacity => newOpacity)
          }}
        >
          <SocialButton
            defaultSvg={Linkedin}
            hoverSvg={Link}
            onClick={openLinkedin}
          />
          <SocialButton
            defaultSvg={Github}
            hoverSvg={Link}
            onClick={openGithub}
          />
          <SocialButton
            defaultSvg={Document}
            hoverSvg={Download}
            onClick={downloadResume}
          />
        </SocialButtonsWrapper>
      </NameAndSocialButtonsSectionWrapper>
      <ScrollBannerWrapper displaying={displayingScrollBanner}>
        <ScrollBanner
          onBottom
          onClick={onScrollDown}
          disabled={!displayingScrollBanner}
        />
      </ScrollBannerWrapper>
    </PageWrapper>
  );
};

export default NamePageSection;
