import React from "react";

/* Styled Components */
import { PageWrapper } from "./styles/MainPage";

/* Child Components */
import NamePageSection from "./NamePageSection";
import DescriptionPageSection from "./DescriptionPageSection";

/* Constants */
import {
  DESCRIPTION_PAGE_SECTION_ID,
  NAME_PAGE_SECTION_ID
} from "../../constants/PageConstants";

const MainPage = () => {
  const scrollToSection = id => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageWrapper>
      <div id={NAME_PAGE_SECTION_ID}>
        <NamePageSection scrollToSection={scrollToSection} />
      </div>
      <div id={DESCRIPTION_PAGE_SECTION_ID}>
        <DescriptionPageSection scrollToSection={scrollToSection} />
      </div>
    </PageWrapper>
  );
};

export default MainPage;
