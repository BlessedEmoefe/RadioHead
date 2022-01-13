import React from "react";
import {
  ImageCardContainer,
  ImageWrapper,
  LabelWrapper,
} from "./imageTextCard.styles";
import { Text } from "../typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights } from "../../infrastructure/theme/fonts";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const ImageTextCard = ({ image, text }) => {
  return (
    <FlexibleDiv
      width="20%"
      flexDirection="column"
      justifyContent="space-around"
      height="120px"
    >
      <FlexibleDiv
        width="100%"
        height="80%"
        justifyContent="center"
        alignItems="center"
        paddingVertical="0"
      >
        <img src={image} alt="card-logo" width="auto" />
      </FlexibleDiv>
      <label>{text}</label>
    </FlexibleDiv>
  );
};
