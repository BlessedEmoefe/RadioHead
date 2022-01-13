import React from "react";

import { AiOutlineMenu as NavIcon } from "react-icons/ai";
import { VscChromeClose as CloseIcon } from "react-icons/vsc";
import { NavIconWrapper } from "./navIcon.styles";

export const NavIconSection = ({ toggleNav, displayNav }) => {
  return (
    <NavIconWrapper
      displayNav={displayNav?true:false}
      onClick={() => {
        toggleNav();
      }}
    >
      {displayNav ? (
        <CloseIcon className="closeIcon" size="22px" />
      ) : (
        <NavIcon className="navIcon" size="22px" />
      )}
    </NavIconWrapper>
  );
};
