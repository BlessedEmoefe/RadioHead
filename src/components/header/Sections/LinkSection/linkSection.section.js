import React, { useState, useEffect } from "react";
import { ActionSection } from "../Actions/action.section";
import { NavIconSection } from "../NavIcon/navIcon.section";
import { PageLinkSection } from "../PageLinks/pageLinks.section";

import { LinkSectionWrapper } from "./linkSection.styles";

export const LinkSection = ({ displayNav }) => {
  return (
    <LinkSectionWrapper display={displayNav ? true : false}>
      <PageLinkSection  />
      {/* <ActionSection  /> */}
    </LinkSectionWrapper>
  );
};
