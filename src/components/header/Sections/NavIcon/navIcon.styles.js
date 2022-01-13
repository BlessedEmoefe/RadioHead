import styled from "styled-components";
import { colors } from "../../../../infrastructure/theme/colors";

export const NavIconWrapper = styled.div`
  display: none;

  @media (max-width: 970px) {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0.4rem 0.7rem;
    border-radius: 5px;
    transition: 0.3s;
    color: ${colors.white};
    background: ${colors.black};
  }
`;
