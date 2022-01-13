import React from "react";
import Blurb from "../../../../components/blurb/blurb.component";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component";
import { ImageTextCard } from "../../../../components/ImageTextCard/imageTextCard.component";
import BEOLogo from "../../../../assets/images/Blessed-Emoefe.jpg";
import Google from "../../../../assets/images/googleAssistant.svg";
import Chike from "../../../../assets/images/chike-trivia.png";
import Embed from "../../../../assets/images/EMBED1.png";
import { Spacer } from "../../../../components/spacer/spacer.component";

const Clients = () => {
const data = [
  { image: BEOLogo, name: "Blemo" },
  { image: Google, name: "Google" },
  { image: BEOLogo, name: "Blemo" },
  { image: Embed, name: "Embed" },
  { image: Google, name: "Google" },
  { image: Embed, name: "Embed" },
  { image: Chike, name: "Chike" },
];
  return (
    <FlexibleDiv boxedLayout paddingVertical="0.7rem">
      <FlexibleDiv paddingVertical="0" flexDirection="column" flexWrap="wrap">
        <Blurb>
          <h5>Clients</h5>
          <h3>Our Reputable Clients</h3>
        </Blurb>
        <Spacer size="small" />
        <FlexibleDiv paddingVertical="0">
          {data.map(({ label, image }) => (
            <ImageTextCard image={image} text={label} />
          ))}
        </FlexibleDiv>
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default Clients;
