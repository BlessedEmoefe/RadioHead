import React from "react";
import Blurb from "../../../../components/blurb/blurb.component.jsx";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component.jsx";

const Hero = () => {
   
  return (
    <FlexibleDiv
      height="100vh"
      justifyContent="center"
      alignItems="center"
      
    >
      <FlexibleDiv justifyContent="center" alignItems="center"  width="60%">
        <Blurb>
          <h3>Future focused full-stack software development agency.</h3>
          <p>
            REDQ is a creative agency specializing in building scalable, high
            performance web & mobile application.
          </p>
        </Blurb>
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default Hero;
