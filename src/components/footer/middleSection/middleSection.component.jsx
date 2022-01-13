import React from "react";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import { Text } from "../../typography/text.component";
import { Spacer } from "../../spacer/spacer.component";
import { Button } from "../../button/button.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Input } from "../../input/input.component";
import {
  MiddleSectionWrapper,
  FormInput,
  FormButton,
} from "./middleSection.styles";
import { LogoSection } from "../../header/Sections/LogoSection/logo.section";
import { fontSizes } from "../../../infrastructure/theme/fonts";

export const MiddleSection = () => {
  return (
    <MiddleSectionWrapper paddingVertical="0">
      <FlexibleDiv
        paddingVertical="0"
        alignItems="flex-start"
        flexDirection="column"
      >
        <LogoSection />
        <Spacer size="small" />
        <Text fontSize={fontSizes.caption} color={colors.text} textAlign="left" resTextAlign="left">
          Radiohead is the first global music streaming service with high
          fidelity sound, hi-def video quality, along with expertly curated
          playlists and original content making it a trusted source for music
          and culture.
        </Text>
      </FlexibleDiv>
    </MiddleSectionWrapper>
  );
};
