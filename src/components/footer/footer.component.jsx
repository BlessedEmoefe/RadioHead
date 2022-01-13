import React from "react";
import { colors } from "../../infrastructure/theme/colors";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";
import Blurb from "../blurb/blurb.component";
import { Spacer, HorizontalSpacer } from "../spacer/spacer.component";


import { LeftSection } from "./leftSection/leftSection.component";
import { RightSection } from "./rightSection/rightSection.component";
import { MiddleSection } from "./middleSection/middleSection.component";
import { BottomSection } from "./bottomSection/bottomSection.component";

 const Footer = () => {
  return (
    <FlexibleDiv paddingVertical="0" background={colors.bg}>
      <FlexibleDiv
        alignItems="flex-start"
        background={colors.secondary}
        boxedLayout
        paddingVertical="3rem"
      >
        <MiddleSection />
        <LeftSection />
      </FlexibleDiv>
      <FlexibleDiv justifyContent="center"  paddingVertical="0">
        <BottomSection />
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default Footer;
