import styled from "styled-components";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component";
import { Text } from "../../../../components/typography/text.component";
import { colors } from "../../../../infrastructure/theme/colors";
import { fontSizes } from "../../../../infrastructure/theme/fonts";
import { lineHeights } from "../../../../infrastructure/theme/lineHeight";

export const Wrapper = styled(FlexibleDiv)``;
export const ContentContainer = styled(FlexibleDiv)``;

export const HeaderText = styled.h3`
  font-size: ${fontSizes.h3};
  color: ${({ titleColor }) => (titleColor ? titleColor : colors.white)};
  line-height: ${lineHeights.title};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  margin: 0 0 0.7rem 0;
  cursor: pointer;
`;
