import React, { useState,useEffect } from "react";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component";
import { MonoTextCard } from "../../../../components/monoTextCard/monoTextCard.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { useFetch } from "../../../../components/hooks/useFetch";
import { Wrapper } from "./whyChooseUs.styles";

const WhyChooseUs = () => {
  /*Integration code*/
  const [centerCard, setCenterCard] = useState(false);
  const { data, error, loading } = useFetch(
    "http://localhost:1337/mono-text-cards"
  );

  if (loading) return <p>Loading</p>;
  if (error) return <h1>error</h1>;


  return (
    <Wrapper>
      <FlexibleDiv boxedLayout className="wrapper" alignItems="flex-end">
        {data.map(({ cardText, id }) => (
          <FlexibleDiv width="30%" key={id}>
            <MonoTextCard
              cardText={cardText}
              style={{ background: "blue" }}
              centerCard={id=="2"||id=="5" ? true:false}
            />
          </FlexibleDiv>
        ))}
      </FlexibleDiv>
    </Wrapper>
  );
};

export default WhyChooseUs;
