import styled from "styled-components";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component";
import HeroBg from "../../../../assets/images/heroBg.png"


export const HeroContainer = styled(FlexibleDiv)`
background:${`url(${HeroBg})`};
background-size:cover;
background-repeat:round;
`;

export const AppButton = styled.img`
min-width:100px;
`;
