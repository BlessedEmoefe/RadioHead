import React from "react";
import Blurb from "../../../../components/blurb/blurb.component.jsx";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component.jsx";

import { Button } from "../../../../components/button/button.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { colors } from "../../../../infrastructure/theme/colors.js";
import { Card, Wrapper } from "./ourProducts.styles";
import { VerticalCard } from "../../../../components/verticalCard/verticalCard.component";
import Chike from "../../../../assets/images/chike-trivia.png";

const OurProducts = () => {
  const title = "Our Products",
    description = "Explore our Products";

  const productsData = [
    {
      image: Chike,
      productName: "Proxify",
      productDescription:
        "Proxify leverages the unbelievable experience of virtual reality in creating a remote proxy or messenger for every user. Proxify revolutionizes the labour industry by strengthening the bond between clients/customers and their contractor or proxy.",
    },
    {
      image: Chike,
      productName: "Organogram",
      productDescription:
        "Organogram introduces a new system of messaging into the social media space. Organogram organises your messages and gives you greater flexibility in the way we communicate with others, making messaging predictable and organised.",
    },
    {
      image: Chike,
      productName: "Megaverse",
      productDescription:
        "The Megaverse is unlike anything the world has seen or experienced before. It is a world/planet of boundless possibilities shaped like earth where man can coexist by leveraging powerful virtual reality technologies.",
    },
  ];
  const handleTruncation = (text) =>
    text.length > 180 ? text.substring(0, 180).concat("...") : text;
  return (
    <FlexibleDiv boxedLayout flexDirection="column" background={colors.bg.primary}>
      <FlexibleDiv>
        <Blurb>
          <h5>{title}</h5>
          <h3>{description}</h3>
        </Blurb>
      </FlexibleDiv>
      <Spacer size="small" />
      <FlexibleDiv alignItems="center" justifyContent="space-around">
        {productsData.map(({ image, productName, productDescription }) => (
          <>
            <VerticalCard
              image={image}
              productName={productName}
              productDescription={handleTruncation(productDescription)}
            />
            <Spacer size="medium" />
          </>
        ))}
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default OurProducts;
