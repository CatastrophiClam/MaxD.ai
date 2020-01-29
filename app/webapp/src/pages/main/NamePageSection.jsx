import React from "react";

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
import { Linkedin, Link, Github, Document, Download } from "../../img/Svgs";
import ScrollBanner from "../../components/widgets/ScrollBanner";

/* Constants */
import { LINKEDIN_URL, GITHUB_URL, RESUME_URL } from "../../constants/Urls";

const openPage = url => {
  const win = window.open(url, "_blank");
  win.focus();
};

const download = url => {
  var file_path = url;
  var a = document.createElement("a");
  a.href = file_path;
  a.download = file_path.substr(file_path.lastIndexOf("/") + 1);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const NamePageSection = () => {
  return (
    <PageWrapper>
      <NameAndSocialButtonsSectionWrapper>
        <NameWrapper>MAX DAI</NameWrapper>
        <SocialButtonsWrapper>
          <SocialButton
            defaultSvg={Linkedin}
            hoverSvg={Link}
            onClick={() => openPage(LINKEDIN_URL)}
          />
          <SocialButton
            defaultSvg={Github}
            hoverSvg={Link}
            onClick={() => openPage(GITHUB_URL)}
          />
          <SocialButton
            defaultSvg={Document}
            hoverSvg={Download}
            onClick={() => download(RESUME_URL)}
          />
        </SocialButtonsWrapper>
      </NameAndSocialButtonsSectionWrapper>
      <ScrollBannerWrapper>
        <ScrollBanner />
      </ScrollBannerWrapper>
    </PageWrapper>
  );
};

export default NamePageSection;
