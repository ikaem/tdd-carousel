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

  static propTypes = {
    defaultImgHeight: CarouselSlide.propTypes.imgHeight,
    slides: PropTypes.array.isRequired,
  };

  static defaultProps = {
    defaultImgHeight: CarouselSlide.defaultProps.imgHeight,
  };

  handlePrevClick = () => {
    // console.log(this.defaultProps);
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
    const { defaultImgHeight, slides, ...rest } = this.props;
    return (
      <div {...rest}>
        <CarouselSlide
          imgHeight={defaultImgHeight}
          {...slides[this.state.slideIndex]}
        />
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

// Carousel.propTypes = {
//   defaultImgHeight: PropTypes.number,
//   slides: PropTypes.array.isRequired,
// };
