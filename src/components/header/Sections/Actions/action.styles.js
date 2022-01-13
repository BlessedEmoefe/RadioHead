import styled from "styled-components";

export const Wrapper = styled.div`
  width: auto;
  min-width: 220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .spacer {
    padding-left: 1rem;
  }

  @media (max-width: 960px) {
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    padding: 1rem;
    button {
      width: 100%;
    }
    .spacer {
      padding-left: 0;
      padding-bottom: 1rem;
    }
  }
`;
