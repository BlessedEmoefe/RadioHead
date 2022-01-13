import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { theme } from "../../infrastructure/theme/index";
import { lineHeights } from "../../infrastructure/theme/lineHeight";

const TextStyles = styled.p`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "auto")};
  color: ${({ color }) => (color ? color : colors.text.strong)};
  margin: 0;
  padding: 0;
  line-height: ${({ lineHeight }) => lineHeight || lineHeights.paragraph};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};

  @media (max-width: 1050px) {
    font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.8rem")};
    text-align: ${({ resTextAlign }) => (resTextAlign ? resTextAlign : "center")};
  }
`;

export const Text = (props) => {
  return (
    <TextStyles
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      color={props.color}
      lineHeight={props.lineHeight}
      textAlign={props.textAlign}
      resTextAlign={props.resTextAlign}
    >
      {props.children}
    </TextStyles>
  );
};
