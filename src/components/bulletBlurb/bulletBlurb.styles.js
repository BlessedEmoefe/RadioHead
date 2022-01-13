import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { lineHeights } from "../../infrastructure/theme/lineHeight";
import { FlexibleDiv } from "../flexibleDiv/flexibleDiv.component";
import { Text } from "../typography/text.component";

export const BlurbContainer = styled(FlexibleDiv)`
  width: 40%;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2.5rem;
  @media (max-width: 1050px) {
    max-width: 95vw;
    width: 100%;
  }
`;

export const TitleText = styled.h3`
  font-size: ${fontSizes.title};
  color: ${({ titleColor }) => (titleColor ? titleColor : colors.white)};
  line-height: ${lineHeights.subTitle};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  margin: 0 0 0.7rem 0;
  padding-left: 1rem;
  border-left: 4px solid ${colors.primary};
  cursor: pointer;
`;

export const DescriptionText = styled.p`
  font-size: ${({ paragraphFontSize }) =>
    paragraphFontSize ? paragraphFontSize : "17px"};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  color: ${({ paragraphColor }) =>
    paragraphColor ? paragraphColor : colors.text};
  line-height: ${lineHeights.paragraph};
  margin: 0;
  padding:0;
  padding-left: 1rem;

  @media (max-width: 1050px) {
    max-width: 95vw;
  }

  @media (max-width: 800px) {
    align-items: center;
    p {
      text-align: center;
    }
  }
`;
