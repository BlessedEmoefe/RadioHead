/*
 * component: CustomScrollingCards
 * author: Eze Bernardine May
 * Date: April 16th, 2020
 * EmBED CustomScrollingCards component
 */

import React, { useState, useEffect } from "react";
import { ScrollingContainer } from "./scrollingCard.styled";
import { FlexibleDiv } from "../../../../../components/flexibleDiv/flexibleDiv.component";
import {
  BsArrowLeft as LeftIcon,
  BsArrowRight as RightIcon,
} from "react-icons/bs";
import PropTypes from "prop-types";
import { Spacer } from "../../../../../components/spacer/spacer.component";

const ScrollingDiv = ({
  children,
  autoScroll = true,
  scrollOuterBg,
  scrollInnerWidth,
  scrollInnerPad,
  scrollCardWidth,
  scrollCardHeight,
  scrollCardBg,
  scrollArrowBg,
  scrollArrowCol,
  scrollCardGaps,
}) => {
  const cards = React.createRef();

  const [callScroll, setCallScroll] = useState(true);
  const [scrollLeftValue, setScrollLeftValue] = useState(null);
  const [scrollLeftMaxValue, setScrollLeftMaxtValue] = useState(null);

  const handleScroll = (direction) => {
    direction === "left" &&
      (cards.current.scrollLeft -= cards.current.clientWidth);
    direction === "right" &&
      (cards.current.scrollLeft += cards.current.clientWidth);

    setScrollLeftValue(cards.current.scrollLeft);
    setScrollLeftMaxtValue(
      cards.current.scrollWidth - cards.current.offsetWidth
    );
  };

  const handlePlainScroll = () => {
    try {
      const { scrollLeft } = cards.current;

      setScrollLeftValue(scrollLeft);
      setScrollLeftMaxtValue(
        cards.current.scrollWidth - cards.current.offsetWidth
      );
    } catch (err) {}
  };

  useEffect(() => {
    window.addEventListener("scroll", handlePlainScroll, { passive: true });
    return () => window.removeEventListener("scroll", handlePlainScroll);
  });

  const mouseEvent = (event) => {
    event === "enter" && setCallScroll(false);
    event === "leave" && setCallScroll(true);
  };

  autoScroll &&
    callScroll &&
    setInterval(() => {
      try {
        const { scrollLeft } = cards.current;

        setScrollLeftValue(scrollLeft);
        setScrollLeftMaxtValue(
          cards.current.scrollWidth - cards.current.offsetWidth
        );

        cards.current.scrollWidth - cards.current.offsetWidth === scrollLeft
          ? (cards.current.scrollLeft = 0)
          : (cards.current.scrollLeft += cards.current.clientWidth);
      } catch (err) {}
    }, 1500);

  return (
    <ScrollingContainer
      scrollOuterBg={scrollOuterBg}
      scrollInnerWidth={scrollInnerWidth}
      scrollInnerPad={scrollInnerPad}
      scrollCardWidth={scrollCardWidth}
      scrollCardHeight={scrollCardHeight}
      scrollCardBg={scrollCardBg}
      scrollCardGaps={scrollCardGaps}
      scrollArrowBg={scrollArrowBg}
      scrollArrowCol={scrollArrowCol}
      onMouseEnter={() => mouseEvent("enter")}
      onMouseLeave={() => mouseEvent("leave")}
      LeftIconActive={scrollLeftValue !== 0 ? true : false}
      RightIconActive={!(scrollLeftMaxValue === scrollLeftValue) ? true : false}
    >
      <div className="main">
        <div className="cardsContainer" ref={cards}>
          {/* takes already prepared cards */}
          {children}
        </div>
      </div>
      <Spacer size="small" />
      <FlexibleDiv paddingVertical="0" justifyContent="center" resFlexDirection="row">
        <FlexibleDiv
          height="50px"
          width="50px"
          className="scrollMoreMain_left"
          onClick={() => handleScroll("left")}
          paddingVertical="0"
          justifyContent="center"
          alignItems="center"
        >
          <LeftIcon />
        </FlexibleDiv>
        <FlexibleDiv
          background="purple"
          height="50px"
          width="50px"
          className="scrollMoreMain_right"
          onClick={() => handleScroll("right")}
          paddingVertical="0"
          justifyContent="center"
          alignItems="center"
        >
          <RightIcon />
        </FlexibleDiv>
      </FlexibleDiv>
    </ScrollingContainer>
  );
};

ScrollingDiv.propTypes = {
  autoScroll: PropTypes.bool,
};

export default ScrollingDiv;
