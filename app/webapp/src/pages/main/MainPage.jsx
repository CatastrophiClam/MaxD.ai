import React, { useState, useEffect } from "react";

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
  const [scrollY, setScrollY] = useState(window.scrollY);

  const setScroll = () => {
    setScrollY(window.scrollY);
  };

  const scrollToSection = id => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => window.removeEventListener("scroll", setScroll);
  }, []);

  return (
    <PageWrapper>
      <div id={NAME_PAGE_SECTION_ID}>
        <NamePageSection scrollToSection={scrollToSection} scrollY={scrollY} />
      </div>
      <div id={DESCRIPTION_PAGE_SECTION_ID}>
        <DescriptionPageSection
          scrollToSection={scrollToSection}
          scrollY={scrollY}
        />
      </div>
    </PageWrapper>
  );
};

export default MainPage;
