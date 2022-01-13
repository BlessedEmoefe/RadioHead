import React from "react";
import { Spacer } from "../../../../components/spacer/spacer.component";
import Blurb from "../../../../components/blurb/blurb.component.jsx";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component.jsx";
import { useFetch } from "../../../../components/hooks/useFetch.jsx";

const Hero = () => {
  /*Integration code*/
  const { data, error, loading } = useFetch("http://localhost:1337/about-hero");
  if (loading) return <p>Loading</p>;
  if (error) return <h1>error</h1>;

  const { title, description, illustration } = data;
  // console.log(illustration.url);

  return (
    <FlexibleDiv
      boxedLayout
      paddingVertical="0.7rem"
      resFlexDirection="column-reverse"
    >
      <FlexibleDiv width="40%">
        <Blurb textAlign="left" alignItems="flex-start">
          <h1>{title}</h1>
          <p>
            {description}
          </p>
        </Blurb>
      </FlexibleDiv>

      <FlexibleDiv width="40%" resWidth="70%">
        <img src={illustration.url} alt="About Us" />
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default Hero;
