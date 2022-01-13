import styled from "styled-components";
import { FlexibleDiv } from "../../flexibleDiv/flexibleDiv.component";

export const LeftSectionWrapper = styled(FlexibleDiv)`
  min-width: 60%;

  flex: 1;
  

  @media (max-width: 800px) {
    min-width: 100%;
    margin-right: 0;
  }
`;
