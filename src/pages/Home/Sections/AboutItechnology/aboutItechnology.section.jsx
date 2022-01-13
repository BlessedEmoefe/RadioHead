import React from "react";
import Blurb from "../../../../components/blurb/blurb.component";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { colors } from "../../../../infrastructure/theme/colors";
import { useFetch } from "../../../../components/hooks/useFetch";

const AboutItechnology = () => {
  return (
    <FlexibleDiv justifyContent="center">
      <Blurb>
        <h5>About</h5>
        <h3>About Itechnology Terrain</h3>
        <p> Revolutionizing Your Orginzation With Deep Tech Software</p>
        <p>
          Your success-driving partner for high-quality software development and
          marketing solutions.
        </p>
        <p>
          We help you turn your product into reality and reach your desired
          audience
        </p>
      </Blurb>
    </FlexibleDiv>
  );
};

export default AboutItechnology;
