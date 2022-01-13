import React from "react";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import {
  RiFacebookCircleLine as FacebookIcon,
  RiLinkedinLine as LinkedInIcon,
  RiYoutubeLine as YoutubeIcon,
  RiTwitterLine as TwitterIcon,
  RiInstagramLine as InstagramIcon,
} from "react-icons/ri";
import { SocialIconWrapper } from "./socialIcon.styles";
import { useFetch } from "../hooks/useFetch";

export const SocialIcon = ({
  facebook,
  twitter,
  linkedin,
  instagram,
  color,
  fontSize,
  youtube,
}) => {
  return (
    <SocialIconWrapper
      paddingVertical="0.2rem"
      resFlexDirection="row"
      resWidth="auto"
    >
      {facebook ? (
        <a href={facebook}>
          <FacebookIcon
            fontSize={fontSize ? fontSize : "16px"}
            color={color ? color : "white"}
          />
        </a>
      ) : null}
      {twitter ? (
        <a href={twitter}>
          <TwitterIcon
            fontSize={fontSize ? fontSize : "16px"}
            color={color ? color : "white"}
          />
        </a>
      ) : null}
      {instagram?<a href={instagram}>
        <InstagramIcon
          fontSize={fontSize ? fontSize : "16px"}
          color={color ? color : "white"}
        />
      </a>:null}
     {linkedin? <a href={linkedin}>
        <LinkedInIcon
          fontSize={fontSize ? fontSize : "16px"}
          color={color ? color : "white"}
        />
      </a>:null}
    {youtube?  <a href={youtube}>
        <YoutubeIcon
          fontSize={fontSize ? fontSize : "16px"}
          color={color ? color : "white"}
        />
      </a>:null}
    </SocialIconWrapper>
  );
};
