import React from "react";
import Blurb from "../../../../components/blurb/blurb.component.jsx";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component.jsx";
import { Button } from "../../../../components/button/button.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { fontWeights } from "../../../../infrastructure/theme/fonts.js";
import { colors } from "../../../../infrastructure/theme/colors.js";
import Playlist1 from "../../../../assets/images/playlist1.png";
import Playlist2 from "../../../../assets/images/playlist2.png";
import { PlaylistContainer, ImageCard } from "./Playlist.styles";

const Playlist = () => {
  const MusicCard = [
    { image: Playlist1, alt: "artist" },
    { image: Playlist2, alt: "artist" },
  ];
  return (
    <PlaylistContainer boxedLayout >
      <FlexibleDiv width="40%" >
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

      <FlexibleDiv width="42%" >
        {MusicCard.map(({ image, alt }) => (
          <ImageCard paddingVertical="0">
            <img src={image} alt={alt} width="100%" height="100%" />
          </ImageCard>
        ))}
      </FlexibleDiv>
    </PlaylistContainer>
  );
};

export default Playlist;
