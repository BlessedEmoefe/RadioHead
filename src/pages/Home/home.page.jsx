import React from "react";

/*Importing Wrapper for Home*/
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import { Spacer } from "../../components/spacer/spacer.component";

/*importing Home sections*/
import Hero from "./Sections/Hero/hero.section";
import WhyChooseUs from "./Sections/WhyRadioHead/WhyRadioHead.section";
import LovedMusic from "./Sections/LovedMusic/LovedMusic.section";
import Clients from "./Sections/Clients/clients.section";
import { colors } from "../../infrastructure/theme/colors";
import Playlist from "./Sections/Playlist/Playlist.section";
import WhyRadioHead from "./Sections/WhyRadioHead/WhyRadioHead.section";

const Home = () => {
  return (
    <FlexibleDiv
      flexDirection="column"
      paddingVertical="0"
      background={colors.bg}
    >
      <Spacer size="small" />
      <Hero />
      <Clients />
      <Spacer size="medium" />
      <LovedMusic />
      <Spacer size="medium" />
      <Playlist />
      <Spacer size="medium" />
      <WhyRadioHead />
    </FlexibleDiv>
  );
};

export default Home;
