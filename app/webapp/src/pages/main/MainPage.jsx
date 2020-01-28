import React from "react";

/* Styled Components */
import {
  PageWrapper,
  NameAndSocialButtonsSectionWrapper,
  NameWrapper,
  SocialButtonsWrapper
} from "./styles/MainPage";

/* Child Components */
import SocialButton from "../../components/widgets/SocialButton";
import { Linkedin, Link, Github, Document, Download } from "../../img/Svgs";

const MainPage = () => {
  return (
    <PageWrapper>
      <NameAndSocialButtonsSectionWrapper>
        <NameWrapper>MAX DAI</NameWrapper>
        <SocialButtonsWrapper>
          <SocialButton defaultSvg={Linkedin} hoverSvg={Link} />
          <SocialButton defaultSvg={Github} hoverSvg={Link} />
          <SocialButton defaultSvg={Document} hoverSvg={Download} />
        </SocialButtonsWrapper>
      </NameAndSocialButtonsSectionWrapper>
    </PageWrapper>
  );
};

export default MainPage;
