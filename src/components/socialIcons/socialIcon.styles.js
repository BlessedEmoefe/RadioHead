import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const SocialIconWrapper = styled(FlexibleDiv)`
  a {
    padding:0 1rem;
  }
  a:hover {
    transform: scale(1.15);
    transition:0.4s;

  }
`;
