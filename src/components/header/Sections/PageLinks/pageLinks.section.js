import React from "react";
import { Link } from "react-router-dom";
import { ActionSection } from "../Actions/action.section";

import { Wrapper } from "./pageLinks.styles";

export const PageLinkSection = ({ display }) => {
  return (
    <Wrapper display={display}>
      <Link to="/">Contact</Link>
      <Link to="/">Plans</Link>
      <Link to="/">Blog</Link>
      <ActionSection />
    </Wrapper>
  );
};
