import React from "react";
import { SecondIllustration } from "../../../../assets/svg/index.js";
import Blurb from "../../../../components/blurb/blurb.component.jsx";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component.jsx";
import { useFetch } from "../../../../components/hooks/useFetch";
import { Button } from "../../../../components/button/button.component";
import { Spacer} from "../../../../components/spacer/spacer.component";

const InternWithUs = () => {
  /*Integration code*/
  const { data, error, loading } = useFetch(
    "http://localhost:1337/intern-with-us"
  );

  if (loading ) return <p>Loading</p>;
  if (error ) return <h1>error</h1>;

  const { title, description, image } = data;

  return (
    <FlexibleDiv boxedLayout resFlexDirection="column-reverse">
      <FlexibleDiv width="40%">
        <Blurb textAlign="left" alignItems="flex-start">
          <h1>{title}</h1>
          <p>{description}</p>
        </Blurb>
        <Spacer size="small" />
        <FlexibleDiv width="60%" resWidth="50%">
          <Button btnText="Apply Now" />
        </FlexibleDiv>
      </FlexibleDiv>

      <FlexibleDiv width="40%">
        <img src={image} alt="intern with us" width="100%" height="auto" />
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default InternWithUs;
