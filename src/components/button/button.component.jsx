import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights } from "../../infrastructure/theme/fonts";

export const ButtonStyles = styled.button`
  width: ${({ width }) => (width ? width : "auto")};

  background: ${({ background }) =>
    background ? background : colors.secondary};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "5px")};
  color: ${({ btnColor }) => (btnColor ? btnColor : "white")};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "capitalize"};
  font-weight: ${({ fontWeight }) =>
    fontWeight ? fontWeight : fontWeights.bold};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  border: ${({ border }) => (border ? border : 0)};
  cursor: pointer;
  padding: ${({ padding }) => (padding ? padding : "0.7rem 2rem")};
  transition: 0.3s;
 :hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;

export const Button = ({
  btnText,
  background,
  borderRadius,
  btnColor,
  textTransform,
  fontWeight,
  fontSize,
  border,
  width,
  padding
}) => {
  return (
    <ButtonStyles
      background={background}
      borderRadius={borderRadius}
      btnColor={btnColor}
      textTransform={textTransform}
      fontWeight={fontWeight}
      fontSize={fontSize}
      border={border}
      width={width}
      padding={padding}
    >
      {btnText}
    </ButtonStyles>
  );
};
