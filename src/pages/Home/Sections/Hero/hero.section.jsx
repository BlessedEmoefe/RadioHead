import React from "react";
import Blurb from "../../../../components/blurb/blurb.component.jsx";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component.jsx";
import { Button } from "../../../../components/button/button.component";
import { Spacer } from "../../../../components/spacer/spacer.component";
import AppStore from "../../../../assets/images/AppStore.svg";
import PlayStore from "../../../../assets/images/PlayStore.svg";
import {HeroContainer, AppButton } from "./hero.styles";

const Hero = () => {
  return (
    <HeroContainer height="100vh" justifyContent="center" alignItems="center">
      <FlexibleDiv boxedLayout resFlexDirection="column-reverse">
        <FlexibleDiv width="40%">
          <Blurb textAlign="left" alignItems="flex-start">
            <h3>
              Discover, search, and play any song featuring voice control.
            </h3>
          </Blurb>
          <Spacer size="small" />
          <FlexibleDiv width="60%" resWidth="50%">
            <Button btnText="Try it free" />
          </FlexibleDiv>
          <Spacer size="small" />
          <FlexibleDiv width="70%" resWidth="50%" flexDirection="row" paddingVertical="0">
            <AppButton src={AppStore} />
            <AppButton src={PlayStore} />
          </FlexibleDiv>
        </FlexibleDiv>

        <FlexibleDiv width="40%">
          <div />
        </FlexibleDiv>
      </FlexibleDiv>
    </HeroContainer>
  );
};

export default Hero;
