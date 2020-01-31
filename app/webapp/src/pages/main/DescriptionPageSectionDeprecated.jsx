import React, { useCallback } from "react";
import {
  PageWrapper,
  ScrollBannerWrapper,
  AllPanelsWrapper,
  LeftPanelWrapper,
  RightPanelWrapper,
  BottomPanelWrapper
} from "./styles/DescriptionPageSectionDeprecated";

/* Constants */
import { NAME_PAGE_SECTION_ID } from "../../constants/PageConstants";

/* Child Components */
import ScrollBanner from "../../components/widgets/ScrollBanner";
import LeftPanel from "./description_page_panels/LeftPanel";
import BottomPanel from "./description_page_panels/BottomPanel";
import RightPanel from "./description_page_panels/RightPanel";

const DescriptionPageSection = ({ scrollToSection, scrollY }) => {
  const displayingScrollBanner = scrollY > (window.innerHeight * 3) / 5;

  const onScrollUp = useCallback(() => {
    if (displayingScrollBanner) {
      scrollToSection(NAME_PAGE_SECTION_ID);
    }
  }, [displayingScrollBanner]);

  return (
    <PageWrapper>
      <AllPanelsWrapper>
        <LeftPanelWrapper>
          <LeftPanel
            xInt={window.innerWidth / 3}
            yInt={(3 * window.innerHeight) / 4}
            angle={65}
          />
        </LeftPanelWrapper>
        <BottomPanelWrapper>
          <BottomPanel
            xOffset={window.innerWidth / 20}
            xLength={(4 * window.innerWidth) / 5}
            angle={35}
          />
        </BottomPanelWrapper>
        <RightPanelWrapper>
          <RightPanel
            xInt={(2 * window.innerWidth) / 7}
            yInt={(4 * window.innerHeight) / 5}
            angle={55}
          />
        </RightPanelWrapper>
      </AllPanelsWrapper>
      <ScrollBannerWrapper displaying={displayingScrollBanner}>
        <ScrollBanner onClick={onScrollUp} disabled={!displayingScrollBanner} />
      </ScrollBannerWrapper>
    </PageWrapper>
  );
};

export default DescriptionPageSection;
