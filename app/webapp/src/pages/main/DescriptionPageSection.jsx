import React, { useCallback } from "react";
import {
  PageWrapper,
  ScrollBannerWrapper,
  AboutSectionWrapper,
  AboutSectionHeader,
  AboutSectionBody,
  ExperienceSectionWrapper,
  ExperienceSectionHeader,
  ExperienceSectionBody
} from "./styles/DescriptionPageSection";

/* Constants */
import { NAME_PAGE_SECTION_ID } from "../../constants/PageConstants";

/* Child Components */
import ScrollBanner from "../../components/widgets/ScrollBanner";

const DescriptionPageSection = ({ scrollToSection, scrollY }) => {
  const displayingScrollBanner = scrollY > (window.innerHeight * 3) / 5;

  const onScrollUp = useCallback(() => {
    if (displayingScrollBanner) {
      scrollToSection(NAME_PAGE_SECTION_ID);
    }
  }, [displayingScrollBanner]);

  return (
    <PageWrapper>
      <AboutSectionWrapper>
        <AboutSectionHeader>About Me</AboutSectionHeader>
        <AboutSectionBody></AboutSectionBody>
      </AboutSectionWrapper>
      <ExperienceSectionWrapper>
        <ExperienceSectionHeader>Experience</ExperienceSectionHeader>
        <ExperienceSectionBody></ExperienceSectionBody>
      </ExperienceSectionWrapper>
      <ScrollBannerWrapper displaying={displayingScrollBanner}>
        <ScrollBanner onClick={onScrollUp} disabled={!displayingScrollBanner} />
      </ScrollBannerWrapper>
    </PageWrapper>
  );
};

export default DescriptionPageSection;
