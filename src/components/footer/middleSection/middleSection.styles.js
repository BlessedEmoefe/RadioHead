import styled from "styled-components";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";

export const MiddleSectionWrapper = styled(FlexibleDiv)`
  width: 30%;
  min-width: 26rem;
  margin-right: 4rem;

  @media (max-width: 1280px) {
    width: 50%;
    min-width: 0;
    margin-bottom: 1.7rem;
    margin-right: 0;
  }
  @media (max-width: 800px) {
    width: 100%;
    p {
      text-align: center;
    }
    input {
      width: 100%;
      margin-bottom: 1rem;
    }

    button {
      width: 100%;
    }
  }
`;
