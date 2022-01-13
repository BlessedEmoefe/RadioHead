import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: ${colors.secondary};
  position: fixed;
  top: ${({ hideHeader }) => (hideHeader ? "-16rem" : "0")};
  transition: top 0.5s ease;
  overflow: none;
  z-index: 1;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);

  .innerWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 6%;
  }
  @media (max-width: 1100px) {
    .innerWrapper {
      padding: 0 3%;
    }
  }
  @media (max-width: 800px) {
    .innerWrapper {
      position: relative;
    }
  }
`;
