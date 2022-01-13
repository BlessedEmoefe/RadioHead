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
    <BottomSectionWrapper
      flexDirection="column"
      justifyContent="center"
      paddingVertical="0"
    >
      <FlexibleDiv
        width="auto"
        paddingVertical="0"
        justifyContent="center"
      >
        <SocialIcon
          instagram={instagram}
          facebook={facebook}
          twitter={twitter}
        />
      </FlexibleDiv>
    </BottomSectionWrapper>
  );
};
