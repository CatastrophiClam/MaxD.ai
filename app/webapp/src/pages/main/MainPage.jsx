import React from "react";

/* Styled Components */
import { PageWrapper } from "./styles/MainPage";

/* Child Components */
import NamePageSection from "./NamePageSection";

const MainPage = () => {
  return (
    <PageWrapper>
      <NamePageSection />
    </PageWrapper>
  );
};

export default MainPage;
