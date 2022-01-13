import React from "react";
import { Spacer } from "../../components/spacer/spacer.component";
import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import { ServicesForm } from "./services.styles";
import { Input, TextArea,DropDown } from "../../components/input/input.component";
import { Text } from "../../components/typography/text.component";
import { Button } from "../../components/button/button.component";

/*importing Home sections*/
import Footer from "../../components/footer/footer.component";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights } from "../../infrastructure/theme/fonts";

const Services = () => {
  return (
    <FlexibleDiv
      flexDirection="column"
      paddingVertical="0"
      background="#f5fff4"
    >
      <Spacer size="medium" />
      <ServicesForm
        width="70%"
        paddingVertical="3rem"
        boxedLayout
        flexDirection="column"
        background="white"
      >
        <FlexibleDiv paddingVertical="0" boxedLayout>
          <FlexibleDiv justifyContent="center ">
            <Text
              fontSize="22px"
              fontWeight={fontWeights.bold}
              color={colors.secondary}
            >
              Apply To Intern WIth Us
            </Text>
          </FlexibleDiv>
          <FlexibleDiv flexDirection="column" alignItems="center" boxedLayout>
            <Input
              border="1.2px solid #B4BEC8"
              borderRadius="4px"
              placeholder="Full name"
              type="text"
            />
            <Spacer />
            <Input
              border="1.2px solid #B4BEC8"
              borderRadius="4px"
              placeholder="Email Address"
              type="email"
            />
            <Spacer />
            <Input
              border="1.2px solid #B4BEC8"
              borderRadius="4px"
              placeholder="Phone Number"
              type="number"
            />
            <Spacer />
            <FlexibleDiv paddingVertical="0">
              <FlexibleDiv paddingVertical="0" width="45%">
                <Input
                  border="1.2px solid #B4BEC8"
                  borderRadius="4px"
                  placeholder="Residential Address"
                  type="text"
                />
              </FlexibleDiv>
              <Spacer />
              <FlexibleDiv paddingVertical="0" width="45%">
                <Input
                  border="1.2px solid #B4BEC8"
                  borderRadius="4px"
                  placeholder="State of Origin"
                  type="text"
                />
              </FlexibleDiv>
            </FlexibleDiv>

            <Spacer />
            <Input
              border="1.2px solid #B4BEC8"
              borderRadius="4px"
              placeholder="Residential Address"
              type="text"
            />
            <Spacer size="medium" />

            <FlexibleDiv paddingVertical="0">
              <FlexibleDiv paddingVertical="0" width="45%">
                <Input
                  border="1.2px solid #B4BEC8"
                  borderRadius="4px"
                  placeholder="Residential Address"
                  type="text"
                />
              </FlexibleDiv>
              <Spacer />
              <FlexibleDiv paddingVertical="0" width="45%">
                <Input
                  border="1.2px solid #B4BEC8"
                  borderRadius="4px"
                  placeholder="Residential Address"
                  type="text"
                />
              </FlexibleDiv>
            </FlexibleDiv>
            <Spacer />
            <FlexibleDiv width="50%">
              <Button
                btnText={"Send"}
                background={colors.primary}
                borderRadius="4px"
              />
            </FlexibleDiv>
          </FlexibleDiv>
        </FlexibleDiv>
      </ServicesForm>
      <Spacer size="medium" />
    </FlexibleDiv>
  );
};

export default Services;
