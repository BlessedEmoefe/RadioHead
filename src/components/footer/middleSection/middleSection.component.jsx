import React from "react";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import { Text } from "../../typography/text.component";
import { Spacer } from "../../spacer/spacer.component";
import { Button } from "../../button/button.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Input } from "../../input/input.component";
import { MiddleSectionWrapper, FormInput,FormButton } from "./middleSection.styles";

export const MiddleSection = () => {

  return (
    <MiddleSectionWrapper paddingVertical="0">
      <FlexibleDiv
        paddingVertical="0"
        alignItems="flex-start"
        flexDirection="column"
      >
        <Text color="white" fontWeight="600" fontSize="1rem">
          Our Newsletter
        </Text>
        <Spacer size="small" />
        <Text color="white" textAlign="left" resTextAlign="left">
          Don’t miss any future updates of our new template and extensions and
          all the astonishing offers.
        </Text>
        <Spacer size="small" />
        <FlexibleDiv paddingVertical="0">
          <Input type="text" placeholder="youremailaddress@gmail.com" width="70%"/>
       
          <Button
            btnText="Subscribe"
            borderRadius="3px"
            background={colors.primary}
            width="27%"
            padding="1rem 0.5rem"
          />
        </FlexibleDiv>
        <Spacer size="small" />
      </FlexibleDiv>
    </MiddleSectionWrapper>
  );
};
