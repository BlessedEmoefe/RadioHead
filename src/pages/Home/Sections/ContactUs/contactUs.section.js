import React from "react";
import Blurb from "../../../../components/blurb/blurb.component.jsx";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component.jsx";

import { Button } from "../../../../components/button/button.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { colors } from "../../../../infrastructure/theme/colors.js";

const ContactUs = () => {
  const title = "Looking for custom Development? We are ready to help.",
    description =
      "We are ready to help. Reach us with your custom requirements or any kind of issues.";
  return (
    <FlexibleDiv boxedLayout>
      <FlexibleDiv width="60%">
        <Blurb textAlign="left" alignItems="flex-start">
          <h4>{title}</h4>
          <p>{description}</p>
        </Blurb>
      </FlexibleDiv>

      <FlexibleDiv width="30%" justifyContent="center">
        <Button
          btnText="Contact Us"
          background={colors.black}
          btnColor={colors.white}
        />
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default ContactUs;
