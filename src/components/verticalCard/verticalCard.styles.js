import styled from "styled-components";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const VerticalCardWrapper = styled(FlexibleDiv)`
  width: 30%;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  flex-direction: column;
  padding: 2rem 1rem;

  @media (max-width: 800px) {
    width: 100%;
    /* margin-bottom:1.5rem; */
  }
`;

export const Wrapper = styled(FlexibleDiv)`
  justify-content: center;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 5px;
  img {
    width: 70%;
    height: auto;
    @media (max-width: 800px) {
      width: 50%;
    }
  }
`;
