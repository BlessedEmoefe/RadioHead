import React from "react";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import {
  RiFacebookFill as FacebookIcon,
  RiTwitterFill as TwitterIcon,
  RiInstagramLine as InstagramIcon,
} from "react-icons/ri";
import { SocialIconWrapper } from "./socialIcon.styles";
import { useFetch } from "../hooks/useFetch";

export const SocialIcon = ({
  facebook,
  twitter,
  instagram,
  color,
  fontSize,
}) => {
  return (
    <SocialIconWrapper
      paddingVertical="0"
      resFlexDirection="row"
      resWidth="auto"
      
    >
      {instagram ? (
        <a href={instagram}>
          <InstagramIcon
            fontSize={fontSize ? fontSize : "16px"}
            color={color ? color : "white"}
          />
        </a>
      ) : null}
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
    </SocialIconWrapper>
  );
};
