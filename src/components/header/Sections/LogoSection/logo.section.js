import React from "react";
import { Link } from "react-router-dom";

/*Importing logo image and styles*/
import logo from "../../../../assets/images/logo.png";
import { LogoWrapper } from "./logo.styles";

export const LogoSection = () => {
  return (
    <LogoWrapper>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </LogoWrapper>
  );
};
