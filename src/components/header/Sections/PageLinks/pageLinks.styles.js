import styled from "styled-components";
import { colors } from "../../../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../../../infrastructure/theme/fonts";

export const Wrapper = styled.div`
  min-width: 550px;
  /* background: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    font-size: ${fontSizes.smallTitle};
    font-weight: ${fontWeights.semiBold};
    text-decoration: none;
    color: ${colors.white};
    text-transform: capitalize;
  }

  @media (max-width: 960px) {
    width: 100%;
    min-width: auto;
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
