// src\carousel.js

import React, { PureComponent } from "react";
import CarouselButton from "./carousel-button";
import CarouselSlide from "./carousel-slide";
import PropTypes from "prop-types";

class Carousel extends PureComponent {
  constructor() {
    super();
    this.state = {
      slideIndex: 0,
    };
  }

  handlePrevClick = () => {
    this.setState((prev) => ({
      slideIndex:
        (prev.slideIndex + this.props.slides.length - 1) %
        this.props.slides.length,
    }));
  };

  handleNextClick = () => {
    this.setState((prev) => ({
      slideIndex: (prev.slideIndex + 1) % this.props.slides.length,
    }));
  };

  render() {
    const { slides, ...rest } = this.props;
    return (
      <div {...rest}>
        <CarouselSlide {...slides[this.state.slideIndex]} />
        <CarouselButton data-action="prev" onClick={this.handlePrevClick}>
          Prev
        </CarouselButton>
        <CarouselButton data-action="next" onClick={this.handleNextClick}>
          Next
        </CarouselButton>
      </div>
    );
  }
}

export default Carousel;

Carousel.propTypes = {
  slides: PropTypes.array.isRequired,
};
