import React from "react";
import { BlurbContainer } from "./blurb.styles";

const Blurb = (props) => {
  return (
    <BlurbContainer
      titleColor={props.titleColor}
      paragraphColor={props.paragraphColor}
      paragraphFontSize={props.paragraphFontSize}
      textAlign={props.textAlign}
      alignItems={props.alignItems}
    >
      {props.children}
    </BlurbContainer>
  );
};

export default Blurb;
