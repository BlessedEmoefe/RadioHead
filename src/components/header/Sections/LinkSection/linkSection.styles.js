import styled from "styled-components";
import { colors } from "../../../../infrastructure/theme/colors";
import { FlexibleDiv } from "../../../flexibleDiv/flexibleDiv.component";

export const LinkSectionWrapper = styled(FlexibleDiv)`
  width: 80%;

  @media (max-width: 1130px) {
    width: 87%;
  }

  @media (max-width: 970px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
    top: 6.2rem;
    left: 0;
    background: white;
    position: absolute;
    transform:${({ display }) => (display ? "scaleY(1)" : "scaleY(0)")};
     transform-origin: 1% 1%;
    transition: 0.3s;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
  }
`;
