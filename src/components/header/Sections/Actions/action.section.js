import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../../../infrastructure/theme/colors";
import { Button } from "../../../button/button.component";
import { Wrapper } from "./action.styles";

export const ActionSection = ({ display }) => {
  return (
    <Wrapper display={display}>
      <Button
        btnText="Sign In"
        background={colors.primary}
        border={`1px solid ${colors.primary}`}
        className="btn"
      />
      <div className="spacer" />
      <Button
        btnText="Sign Up"
        background={colors.transparent}
        border={`1px solid ${colors.primary}`}
        btnColor={colors.primary}
        className="btn"
        // width="100%"
      />
    </Wrapper>
  );
};
