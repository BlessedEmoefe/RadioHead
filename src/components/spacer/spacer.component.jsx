import styled from "styled-components";


const variantSize = (size) =>
  size
    ? size === "small"
      ? "1rem"
      : size === "medium"
      ? "3rem"
      : size === "large"
      ? "5rem"
      : ""
    : "0.5rem";

const SpacerStyle = styled.div`
  flex: 1;
  padding: ${({ size }) => size ? variantSize(size) : "0.5rem"} 0;

`
const HorizontalSpacerStyle = styled.div`
flex-direction: column;
  flex: 1;
  padding: ${({ size }) => (size ? variantSize(size) : "0.5rem")} 0;
`;


export const Spacer = ({size}) => {
  return <SpacerStyle size={size}></SpacerStyle>
}

export const HorizontalSpacer = ({ size }) => {
  return <HorizontalSpacerStyle size={size}></HorizontalSpacerStyle>;
};
