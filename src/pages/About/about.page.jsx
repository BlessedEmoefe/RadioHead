import React from "react";
import { Spacer } from "../../components/spacer/spacer.component";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";

/*importing Home sections*/
import Hero from "./Sections/Hero/hero.section";
import Principles from "./Sections/Principles/principles.section";
import SoftwareDevelopment from "./Sections/SoftwareDevelopment/softwareDevelopment.section";
import DeepTechnologiesMarketing from "./Sections/DeepTechnologiesMarketing/deepTechnologiesMarketing.section";
import CallToAction from "./Sections/CallToActionText/callToActionText.section";
import Footer from "../../components/footer/footer.component";

const About = () => {
  return (
    <FlexibleDiv flexDirection="column" paddingVertical="0">
      <Spacer size="small" />
      <Hero />
      <Spacer size="medium" />
      <Principles />
      <Spacer size="medium" />
      <SoftwareDevelopment />
      <Spacer size="medium" />
      <DeepTechnologiesMarketing />
      <Spacer size="medium" />
      <CallToAction />
      <Spacer size="medium" />
    </FlexibleDiv>
  );
};

export default About;
