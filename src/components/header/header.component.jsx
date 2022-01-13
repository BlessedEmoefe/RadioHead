import React, { useState, useEffect } from "react";

/*Importing logo image and styles*/
import { HeaderContainer } from "./header.styles";
import { LogoSection } from "./Sections/LogoSection/logo.section";
import { NavIconSection } from "./Sections/NavIcon/navIcon.section";
import { ActionSection } from "./Sections/Actions/action.section";
import { PageLinkSection } from "./Sections/PageLinks/pageLinks.section";
import { LinkSection } from "./Sections/LinkSection/linkSection.section";

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);
  const toggleNav = () => {
    setDisplayNav(!displayNav);
    console.log(displayNav);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    position > scrollPosition ? setHideHeader(true) : setHideHeader(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <HeaderContainer hideHeader={hideHeader}>
      <div className="innerWrapper">
        <LogoSection />
        <LinkSection displayNav={displayNav} />
        <NavIconSection toggleNav={toggleNav} displayNav={displayNav} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
