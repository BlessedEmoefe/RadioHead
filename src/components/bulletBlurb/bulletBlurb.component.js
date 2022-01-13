import React from "react";
import { Spacer } from "../spacer/spacer.component";
import { TitleText, DescriptionText, BlurbContainer } from "./bulletBlurb.styles";

const BulletBlurb = ({alignItems,title,description}) => {
  return (
    <BlurbContainer alignItems={alignItems} paddingVertical="0">
      <TitleText>{title}</TitleText>
      <Spacer />
      <DescriptionText>{description}</DescriptionText>
    </BlurbContainer>
  );
};

export default BulletBlurb;
