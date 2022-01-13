import styled from "styled-components";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component";
import { colors } from "../../../../infrastructure/theme/colors";

export const TextCarouselWrap = styled(FlexibleDiv)`
  margin: 0 0 0 1rem;
  min-width: 400px;

  @media (max-width: 800px) {
    margin: 0 0 0 0.5rem;
    min-width: 50vw;
  }
  @media (max-width: 600px) {
    margin: 0 0 0 0.5rem;
    min-width: 90vw;
  }
`;
export const TextContainer = styled(FlexibleDiv)`
  border-radius: 10px;
  border: 2px solid ${colors.secondary};
  padding: 2rem 1.5rem;

  @media (max-width: 800px) {
    .cardText {
      font-size: 10px;
    }
  }
  @media (max-width: 500px) {
    .cardText {
      font-size: 2px;
      padding: 1rem 0.5rem;
    }
  }
`;

export const PersonalInfo = styled(FlexibleDiv)`
  padding: 0 2%;
  .imageContainer {
    border-radius: 50%;
    overflow: hidden;
    width: 3rem;
    height: 3rem;
    @media (max-width: 800px) {
      flex-direction: row;
    }
    img {
    }
  }

  @media (max-width: 800px) {
    flex-direction: row;
   .textSection{
     align-items:flex-start;
     width:80%;
   }
  }
`;
