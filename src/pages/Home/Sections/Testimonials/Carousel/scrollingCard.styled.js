import styled from "styled-components";
import { colors } from "../../../../../infrastructure/theme/colors";

export const ScrollingContainer = styled("div")`
  background: ${(props) => props.scrollOuterBg || "white"};
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  &:hover .scrollMoreMain_right,
  &:hover .scrollMoreMain_left {
    visibility: visible;
  }

  .main {
    width: ${(props) => props.scrollInnerWidth || "95%"};
    margin: 0 auto;
  }

  .cardsContainer {
    display: flex;
    justify-content: flex-start;
    overflow-x: scroll;
    align-items: stretch;
    scroll-behavior: smooth;
    scrollbar-width: none;
    padding: ${(props) => props.scrollInnerPad || "20px 0"};
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      display: none;
      height: 0;
      width: 0;
    }
  }

  .scrollMoreMain_right {
    background: ${({ RightIconActive }) => (true ? colors.secondary : "white")};
    border-radius: 50%;
    border: 2px solid ${colors.secondary};
    margin-left: 1rem;
    cursor: pointer;
    @media (max-width: 800px) {
      height: 40px;
      width: 40px;
    }
    & svg {
      font-size: 2rem;
      color: white;
      @media (max-width: 800px) {
        font-size: 1rem;
      }
    }
  }
  .scrollMoreMain_left {
    /* background: ${(LeftIconActive) =>
      true ? colors.secondary : "white"}; */
    background: white;
    margin-right: 1rem;
    border: 2px solid ${colors.secondary};
    border-radius: 50%;
    cursor: pointer;
    @media (max-width: 800px) {
      height: 40px;
      width: 40px;
    }
    & svg {
      font-size: 2rem;
      color: ${colors.secondary};
      @media (max-width: 800px) {
        font-size: 1rem;
      }
    }
  }
`;
