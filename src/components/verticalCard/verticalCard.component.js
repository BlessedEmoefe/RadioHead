import React from "react";
import Blurb from "../blurb/blurb.component";
import { Button } from "../button/button.component";
import { Spacer } from "../spacer/spacer.component";
import { colors } from "../../infrastructure/theme/colors";
import { VerticalCardWrapper, Wrapper } from "./verticalCard.styles";

export const VerticalCard = ({ image, productName, productDescription }) => {
  const title = "Our Products",
    description = "Explore our Products";
  return (
    <VerticalCardWrapper>
      <Wrapper height="15rem" background={colors.bg.secondary}>
        <img src={image} alt="product image" />
      </Wrapper>
      <Spacer size="small" />
      <Blurb titleColor={colors.black}>
        <h5>{productName}</h5>

        <p>{productDescription}</p>
      </Blurb>
      <Spacer />
      <Button btnText="Expore More" width="100%" background={colors.black} />
    </VerticalCardWrapper>
  );
};
