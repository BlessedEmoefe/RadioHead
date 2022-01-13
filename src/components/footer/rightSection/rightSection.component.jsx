import React from "react";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import { Text } from "../../typography/text.component";
import { Spacer } from "../../spacer/spacer.component";
import {
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
} from "../../../assets/svg";
import { SocialIcon } from "../../socialIcons/socialIcon.component";


export const RightSection = () => {
  const title="Company", facebook = "#", twitter="#", linkedin="#", instagram="#"
  
  return (
    <FlexibleDiv
      width="20%"
      paddingVertical="0"
      alignItems="flex-start"
      flexDirection="column"
    >
      <Text color="white" fontWeight="600" fontSize="1rem">
       {title}
      </Text>
      <Spacer />
      <SocialIcon facebook={facebook} twitter={twitter} linkedin={linkedin} instagram={instagram} />
    </FlexibleDiv>
  );
};
