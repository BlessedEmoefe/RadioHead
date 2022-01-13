import React from 'react'
import styled from "styled-components";
import { colors } from '../../infrastructure/theme/colors';


const InputStyles = styled.input`
  border: ${({ border }) => (border ? border : "0")};
  width:${({ width }) => (width ? width : "100%")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  border-radius:${({ borderRadius }) => (borderRadius ? borderRadius : "0")};
  outline:none;
  padding: 1rem;
  
`;

const TextAreaStyles = styled.textarea`
  border: ${({ border }) => (border ? border : "0")};
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0")};
  padding: 1rem;
  resize: none;
  outline: none;
`;

const DropDownStyles = styled.select`
  border: ${({ border }) => (border ? border : "0")};
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0")};
  color:${colors.text.strong};
  padding: 1rem;
  outline: none;
`;

export const Input = ({type,placeholder,border,fontSize,borderRadius,width}) => {
  return <InputStyles type={type} placeholder={placeholder} border={border} fontSize={fontSize} borderRadius={borderRadius} width={width} />;
}

export const TextArea = ({
  type,
  placeholder,
  border,
  fontSize,
  borderRadius,
}) => {
  return (
    <TextAreaStyles
      type={type}
      placeholder={placeholder}
      border={border}
      fontSize={fontSize}
      borderRadius={borderRadius}
    />
  );
};



export const DropDown = ({
  border,
  fontSize,
  borderRadius,
}) => {
  return (
    <DropDownStyles
      border={border}
      fontSize={fontSize}
      borderRadius={borderRadius}
    >
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="vw">VW</option>
      <option value="audi" selected>
        Audi
      </option>
    </DropDownStyles>
  );
};