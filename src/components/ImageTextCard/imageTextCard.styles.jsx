import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";

export const ImageCardContainer = styled(FlexibleDiv)`
  width: auto;
  min-width: 16rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  border: 0.5px solid ${colors.bg.primary};
  transition: 0.3s;
  overflow:hidden;

  :hover {
    transition: 0.3s;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
 @media (max-width: 800px) {
width:100%;
 }

`;

export const ImageWrapper = styled(FlexibleDiv)`
 
`;

export const LabelWrapper = styled(FlexibleDiv)`

`;