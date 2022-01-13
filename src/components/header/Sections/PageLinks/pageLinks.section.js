import React from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./pageLinks.styles";

export const PageLinkSection = ({ display }) => {
  return (
    <Wrapper display={display}>
      <Link to="/">Home</Link>
      <Link to="/">Blog</Link>
      <Link to="/">Our Products</Link>
      <Link to="/">Portfolio</Link>
      <Link to="/">Support</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Hire Us!</Link>
    </Wrapper>
  );
};
