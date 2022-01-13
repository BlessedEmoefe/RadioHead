import React, { useState, useEffect } from "react";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component";
import { MonoTextCard } from "../../../../components/monoTextCard/monoTextCard.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { useFetch } from "../../../../components/hooks/useFetch";
import { Wrapper, ContentContainer, HeaderText } from "./WhyRadioHead.styles";
import BulletBlurb from "../../../../components/bulletBlurb/bulletBlurb.component";

const WhyRadioHead = () => {
  const bulletBlurbData = [
    {
      title: "A world of music in your pocket.",
      description:
        "Find new loves and old favourites from over 56 million tracks.",
    },
    {
      title: "Craft your collection.",
      description:
        "Create playlists from millions of tracks and take them with you wherever you go.",
    },
    {
      title: "No WiFi? No problem.",
      description:
        "With Deezer Premium, you don't need to be connected to enjoy your favourite tracks.",
    },
    {
      title: "Made for you.",
      description:
        "Flow gets to know what you like and what you don't. Discover your personal soundtrack.",
    },
  ];

  return (
    <Wrapper>
      <FlexibleDiv boxedLayout className="wrapper" alignItems="flex-end">
        <HeaderText>Why radiohead?</HeaderText>
        <Spacer />
        <ContentContainer paddingvertical="0">
          {bulletBlurbData.map(({ title, description }) => (
            <BulletBlurb title={title} description={description} />
          ))}
        </ContentContainer>
      </FlexibleDiv>
    </Wrapper>
  );
};

export default WhyRadioHead;
