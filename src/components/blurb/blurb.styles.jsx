import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { lineHeights } from "../../infrastructure/theme/lineHeight";

export const BlurbContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  h1 {
    font-size: ${fontSizes.h1};
    color: ${({ titleColor }) => (titleColor ? titleColor : colors.white)};
    line-height: 4rem;
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
    margin: 0 0 0.7rem 0;
  }
  h2 {
    font-size: ${fontSizes.h2};
    color: ${({ titleColor }) => (titleColor ? titleColor : colors.white)};
    line-height: ${lineHeights.title};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
    margin: 0 0 0.7rem 0;
  }
  h3 {
    font-size: ${fontSizes.h3};
    color: ${({ titleColor }) => (titleColor ? titleColor : colors.white)};
    line-height: ${lineHeights.title};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
    margin: 0 0 0.7rem 0;
  }
  h4 {
    font-size: ${fontSizes.h4};
    color: ${({ titleColor }) => (titleColor ? titleColor : colors.black)};
    /* line-height: ${lineHeights.subTitle}; */
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
    margin: 0 0 0.7rem 0;
  }
  h5 {
    font-size: ${fontSizes.h5};
    color: ${({ titleColor }) => (titleColor ? titleColor : colors.primary)};
    font-weight:${fontWeights.semiBold};
    line-height: ${lineHeights.subTitle};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
    margin: 0 0 0.7rem 0;
  }

  p {
    font-size: ${({ paragraphFontSize }) =>
      paragraphFontSize ? paragraphFontSize : "17px"};
    text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
    color: ${({ paragraphColor }) =>
      paragraphColor ? paragraphColor : colors.text};
    line-height: ${lineHeights.paragraph};
    margin: 0;
    padding: 0;
  }

  @media (max-width: 1050px) {
    max-width: 95vw;
    /* h1 {
      font-size: 2.2rem;
      line-height: 2.2rem;
    }
    h3 {
      font-size: 1.3rem;
      line-height: 1.2rem;
    } */

    p {
      font-size: ${({ paragraphFontSize }) =>
        paragraphFontSize ? paragraphFontSize : "14px"};
    }
  }

  @media (max-width: 800px) {
    align-items: center;
    h1 {
      font-size: 2.3rem;
      text-align: center;
    }
    h2 {
      text-align: center;
    }
    h3 {
      font-size: 1.8rem;
      text-align: center;
    }
    h4 {
      text-align: center;
    }
    h5 {
      text-align: center;
      font-size: 1.4rem;
    }

    p {
      text-align: center;
    }
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 1.6rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
`;
