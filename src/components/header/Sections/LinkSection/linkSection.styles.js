import styled from "styled-components";
import { colors } from "../../../../infrastructure/theme/colors";
import { FlexibleDiv } from "../../../flexibleDiv/flexibleDiv.component";

export const LinkSectionWrapper = styled(FlexibleDiv)`
  width: auto;

  @media (max-width: 1130px) {
    width: 87%;
    justify-content:flex-end;
  }

  @media (max-width: 970px) {
    height: auto;
    width: 100%;
    top: 4rem;
    left: 0;
    background: ${colors.secondary};
    position: absolute;
    transform: ${({ display }) => (display ? "scaleY(1)" : "scaleY(0)")};
    transform-origin: 1% 1%;
    transition: 0.3s;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
  }
`;
