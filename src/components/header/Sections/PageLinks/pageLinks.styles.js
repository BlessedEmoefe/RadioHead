import styled from "styled-components";
import { colors } from "../../../../infrastructure/theme/colors";
import { fontSizes } from "../../../../infrastructure/theme/fonts";

export const Wrapper = styled.div`
  min-width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-size: ${fontSizes.body};
    text-decoration: none;
    color: #2d2f30;
    text-transform: capitalize;
  }

  @media (max-width: 960px) {
    width: 100%;
    min-width:auto;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    a {
      font-size: 14px;
      text-decoration: none;
      text-transform: uppercase;
      width: 100%;
      text-align: left;
      padding: 1rem;
    }
  }
`;
