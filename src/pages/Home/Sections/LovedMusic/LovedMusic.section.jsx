import React from "react";
import Blurb from "../../../../components/blurb/blurb.component.jsx";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component.jsx";
import { Button } from "../../../../components/button/button.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { fontWeights } from "../../../../infrastructure/theme/fonts.js";
import { colors } from "../../../../infrastructure/theme/colors.js";
import Eminem from "../../../../assets/images/eminem.png";
import Drake from "../../../../assets/images/drake.png";
import Weekend from "../../../../assets/images/weekend.png";
import Lady from "../../../../assets/images/lady.png";
import Song from "../../../../assets/images/song.png";
import Rapper from "../../../../assets/images/rapper.png";
import { ImageCard } from "./LovedMusic.styles";

const LovedMusic = () => {
  const MusicCard = [
    { image: Weekend, alt: "artist" },
    { image: Drake, alt: "artist" },
    { image: Song, alt: "artist" },
    { image: Eminem, alt: "artist" },
    { image: Rapper, alt: "artist" },
    { image: Lady, alt: "artist" },
  ];
  return (
    <FlexibleDiv boxedLayout resFlexDirection="column-reverse" >
      <FlexibleDiv width="50%" paddingVertical="0">
        {MusicCard.map(({ image, alt }) => (
          <ImageCard paddingVertical="0">
            <img src={image} alt={alt} width="100%" height="100%" />
          </ImageCard>
        ))}
      </FlexibleDiv>
      <FlexibleDiv width="40%" paddingVertical="0">
        <Blurb textAlign="left" alignItems="flex-start">
          <h3>The music you love</h3>
          <Spacer />
          <p>
            With over 60 million tracks and tons of exclusive interviews and
            videos, TIDAL is here to bring you closer to the artists you listen
            to.
          </p>
        </Blurb>
        <Spacer />
        <FlexibleDiv width="60%" resWidth="50%">
          <Button
            btnText="More Featured"
            background="transparent"
            btnColor={colors.primary}
            arrow
            fontWeight={fontWeights.bold}
            padding="0.7rem 0.2rem"
          />
        </FlexibleDiv>
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default LovedMusic;
