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
import { BottomSectionWrapper } from "./bottomSection.styles";

export const BottomSection = () => {
  const facebook = "#",
    twitter = "#",
    linkedin = "#",
    instagram = "#",
    youtube = "#";
  return (
    <BottomSectionWrapper flexDirection="column" paddingVertical="1.5em 1rem">
      <FlexibleDiv width="auto" paddingVertical="0" justifyContent="center">
        <SocialIcon
          facebook={facebook}
          twitter={twitter}
          linkedin={linkedin}
          instagram={instagram}
          youtube={youtube}
        />
      </FlexibleDiv>
      <Spacer />
      <FlexibleDiv justifyContent="center" paddingVertical="0">
        <Text color="white">
          © ITechnology Terrain Limited | All Rights Reserved. | 2021
        </Text>
      </FlexibleDiv>
    </BottomSectionWrapper>
  );
};
