// src\carousel.js

import React, { PureComponent } from "react";
import CarouselButton from "./carousel-button";
import CarouselSlide from "./carousel-slide";
import PropTypes from "prop-types";

import HasIndex from "./has-index";

export class Carousel extends PureComponent {
  constructor() {
    super();
    this.state = {
      slideIndex: 0,
    };
  }

  static propTypes = {
    defaultImg: CarouselSlide.defaultProps.Img,
    defaultImgHeight: CarouselSlide.propTypes.imgHeight,
    slides: PropTypes.array.isRequired,
    slideIndex: PropTypes.number.isRequired,
    slideIndexDecrement: PropTypes.func.isRequired,
    slideIndexIncrement: PropTypes.func.isRequired,
  };

  static defaultProps = {
    defaultImg: CarouselSlide.defaultProps.Img,
    defaultImgHeight: CarouselSlide.defaultProps.imgHeight,
  };

  handlePrevClick = () => {
    // console.log(this.defaultProps);
    // this.setState((prev) => ({
    //   slideIndex:
    //     (prev.slideIndex + this.props.slides.length - 1) %
    //     this.props.slides.length,
    // }));

    const { slideIndexDecrement, slides } = this.props;
    slideIndexDecrement(slides.length);
  };

  handleNextClick = () => {
    // this.setState((prev) => ({
    //   slideIndex: (prev.slideIndex + 1) % this.props.slides.length,
    // }));
    const { slideIndexIncrement, slides } = this.props;
    slideIndexIncrement(slides.length);
  };

  render() {
    const {
      slideIndex,
      defaultImg,
      defaultImgHeight,
      slides,
      slideIndexIncrement: _slideIndexIncrement,
      slideIndexDecrement: _slideIndexDecrement,
      ...rest
    } = this.props;
    return (
      <div {...rest}>
        <CarouselSlide
          Img={defaultImg}
          imgHeight={defaultImgHeight}
          {...slides[slideIndex]}
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

export default HasIndex(Carousel, "slideIndex");

// Carousel.propTypes = {
//   defaultImgHeight: PropTypes.number,
//   slides: PropTypes.array.isRequired,
// };
