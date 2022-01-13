import React from "react";
import Blurb from "../../../../components/blurb/blurb.component";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component";
import { ImageTextCard } from "../../../../components/ImageTextCard/imageTextCard.component";
import PlayStation from "../../../../assets/images/playstation-wordmark.svg";
import BlackBerry from "../../../../assets/images/BlackBerry.svg";
import RedBull from "../../../../assets/images/redbull.svg";
import TikTok from "../../../../assets/images/tiktok.svg";
import SenHeiser from "../../../../assets/images/SENNHEISER_Basic_logo.svg";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { colors } from "../../../../infrastructure/theme/colors";

const Clients = () => {
  const data = [
    { image: PlayStation },
    { image: BlackBerry },
    { image: RedBull },
    { image: TikTok },
    { image: SenHeiser },
  ];
  return (
    <FlexibleDiv boxedLayout paddingVertical="0" background={colors.secondary}>
      <FlexibleDiv paddingVertical="0">
        <FlexibleDiv paddingVertical="0" justifyContent="space-between">
          {data.map(({ label, image }) => (
            <>
              <ImageTextCard image={image} text={label} />
              {/* {console.log(image.formats.thumbnail.name)} */}
            </>
          ))}
        </FlexibleDiv>
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default Clients;
