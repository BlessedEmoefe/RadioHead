import React from "react";
import { Link } from "react-router-dom";
import { colors } from "../../../../infrastructure/theme/colors";
import { Button } from "../../../button/button.component";
import { Wrapper } from "./action.styles";

export const ActionSection = ({display}) => {
  return (
    <Wrapper display={display}>
      <Button
        btnText="Register"
        background={colors.primary}
        border={`1px solid ${colors.primary}`}
      />
      <div className="spacer"></div>
      <Button
        btnText="Apply"
        background={colors.transparent}
        border={`1px solid ${colors.primary}`}
        btnColor={colors.primary}
      />
    </Wrapper>
  );
};
