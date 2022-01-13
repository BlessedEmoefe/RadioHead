import React from "react";
import {
  ImageCardContainer,
  ImageWrapper,
  LabelWrapper,
} from "./imageTextCard.styles";
import { Text } from "../typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights } from "../../infrastructure/theme/fonts";

export const ImageTextCard = ({ image, text }) => {
  return (
    <ImageCardContainer
      flexDirection="column"
      justifyContent="space-around"
      height="180px"
      paddingVertical="0"
    >
      <ImageWrapper
        width="100%"
        height="80%"
        justifyContent="center"
        alignItems="center"
        paddingVertical="0"
      >
        <img src={image} alt="card-logo" width="auto" height="70%" />
      </ImageWrapper>
     { text?<LabelWrapper
        height="20%"
        width="100%"
        justifyContent="center"
        paddingVertical="0"
        background={colors.black}
      >
        <Text
          // fontSize={fontSize}
          fontWeight={fontWeights.bold}
          color={colors.white}
        >
          {text}
        </Text>
      </LabelWrapper>:null}
    </ImageCardContainer>
  );
};
