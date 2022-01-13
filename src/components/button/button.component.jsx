import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights } from "../../infrastructure/theme/fonts";
import { FaChevronRight as RightArrow } from "react-icons/fa";

export const ButtonStyles = styled.div`
  width: ${({ width }) => (width ? width : "auto")};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ background }) => (background ? background : colors.primary)};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "4px")};
  color: ${({ btnColor }) => (btnColor ? btnColor : "white")};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : "capitalize"};
  font-weight: ${({ fontWeight }) =>
    fontWeight ? fontWeight : fontWeights.regular};
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
  padding,
  arrow,
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
      {arrow ? (
        <RightArrow color={btnColor || colors.white} size="16px" style={{marginRight:"0.5rem"}} />
      ) : null}
      {btnText}
    </ButtonStyles>
  );
};
