import styled from "styled-components";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component";


export const PlaylistContainer = styled(FlexibleDiv)`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const ImageCard = styled(FlexibleDiv)`
  width: 47%;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  background: red;
  overflow: hidden;
  background: red;

  @media (max-width: 1050px) {
    min-width:300px;
    width:70%;
  }
`;
