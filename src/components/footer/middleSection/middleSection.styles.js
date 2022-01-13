import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "../../button/button.component";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";
import { Input } from "../../input/input.component";

export const MiddleSectionWrapper = styled(FlexibleDiv)`
  width: 30%;
  min-width: 26rem;

  @media (max-width: 1280px) {
    width: 50%;
    min-width: 0;
  }
  @media (max-width: 800px) {
    width: 100%;
    p{
      text-align:center;
    }
    input {
      width: 100%;
      margin-bottom:1rem;
    }

    button {
      width: 100%;
    }
  }
`;
