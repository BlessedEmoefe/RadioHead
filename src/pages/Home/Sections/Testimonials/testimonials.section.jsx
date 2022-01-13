import React from "react";
import { FlexibleDiv } from "../../../../components/flexibleDiv/flexibleDiv.component";

import Blurb from "../../../../components/blurb/blurb.component";
import { colors } from "../../../../infrastructure/theme/colors";
import Slider from "../../../../components/Slider";
import GamifiedLearning from "../../../../assets/images/h1.png";
import Image1 from "../../../../assets/images/h2.png";
import Image2 from "../../../../assets/images/h3.png";
import Image3 from "../../../../assets/images/h5.png";
import { Text } from "../../../../components/typography/text.component";
import { Spacer } from "../../../../components/spacer/spacer.component";

import { TextCarouselWrap, TextContainer,PersonalInfo } from "./testimonials.styles";
import ScrollingDiv from "./Carousel";
import { generateID } from "../../../../infrastructure/lib/generateID";
import { fontWeights } from "../../../../infrastructure/theme/fonts";

const Testimonials = () => {
  const cardData = [
    {
      number: "01",
      year: "2020",
      quote:
        "  I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
      author: "Nelson Mandela",
    },
    {
      number: "02",
      year: "2020",
      quote:
        " The seeds of success in every nation on Earth are best planted in women and children.",
      author: "Joyce Banda",
    },
    {
      number: "03",
      year: "2020",
      quote:
        " Education is for improving the lives of others and for leaving your community and world better than you found it",
      author: "Marian Wright Edelman",
    },
    {
      number: "04",
      year: "2020",
      quote:
        "  I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
      author: "Nelson Mandela",
    },
  ];
  return (
    <FlexibleDiv justifyContent="center">
      <FlexibleDiv width="40%" paddingVertical="0">
        <Blurb>
          <h5>Testimonials</h5>
          <h3>Our Client's Thoughts!!!</h3>
        </Blurb>
      </FlexibleDiv>
      <FlexibleDiv paddingVertical="0">
        <ScrollingDiv
          scrollCardBg="transparent"
          scrollOuterBg="transparent"
          // scrollCardHeight='100%'
          scrollCardGaps="0 1rem"
        >
          {cardData.map((item, i) => (
            <TextCarouselWrap
              key={generateID(15)}
              flexDirection="column"
              paddingVertical="0"
              width="30vw"
            >
              <TextContainer paddingVertical="0">
                <Text fontSize="14px" className="cardText">
                  It is a distinct pleasure for me to recommend Deep Technologys
                  Limited to anyone and all interested parties. They have been
                  professional, comprehensive and competent throughout the
                  process of our working together. We feel that we have
                  established a relationship with them for years to come. The
                  reaction to our new web site has been overwhelmingly positive;
                  as one commented the site is “FANTASTIC.” .
                </Text>
              </TextContainer>
              <Spacer />
              <PersonalInfo  paddingVertical="0">
                <FlexibleDiv paddingVertical="0" className="imageContainer">
                  <img src={Image1} alt="er" width="100%" height="100%" />
                </FlexibleDiv>
                <FlexibleDiv
                  paddingVertical="0"
                  width="85%"
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="center"
                  className="textSection"
                >
                  <Text
                    lineHeight="auto"
                    fontSize="18px"
                    fontWeight={fontWeights.bold}
                  >
                    Blessed Emoefe
                  </Text>
                  <Text lineHeight="auto" fontSize="14px">
                    Blessed Emoefe gdjewkhf nfeje
                  </Text>
                </FlexibleDiv>
              </PersonalInfo>
            </TextCarouselWrap>
          ))}
        </ScrollingDiv>
      </FlexibleDiv>
    </FlexibleDiv>
  );
};

export default Testimonials;
