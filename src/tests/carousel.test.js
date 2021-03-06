// src\tests\carousel.test.js

import React from "react";
import { shallow } from "enzyme";
import Carousel, { Carousel as CoreCarousel } from "../carousel";
// import "./jestSetup";
// import CarouselButton from "../carousel-button";
import CarouselSlide from "../carousel-slide";

describe("Carousel", () => {
  // let wrapper;

  const slides = [
    {
      imgUrl: "https://example.com/slide1.png",
      description: "Slide 1",
      attribution: "Uno Pizzeria",
    },
    {
      imgUrl: "https://example.com/slide2.png",
      description: "Slide 2",
      attribution: "Dos Equis",
    },
    {
      imgUrl: "https://example.com/slide3.png",
      description: "Slide 3",
      attribution: "Three Amigos",
    },
  ];
  // beforeEach(() => {
  //   wrapper = shallow(<Carousel slides={slides} />);
  // });

  describe("component with HOC", () => {
    // tests against hoc carousel

    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Carousel slides={slides} />);
    });

    it("sets slideIndex={0} on the core component", () => {
      expect(wrapper.find(CoreCarousel).prop("slideIndex")).toBe(0);
    });

    it("passes 'slides' down to the core component", () => {
      expect(wrapper.find(CoreCarousel).prop("slides")).toBe(slides);
    });
  });

  describe("core component", () => {
    // tests agains core carousel
    const slideIndexDecrement = jest.fn();
    const slideIndexIncrement = jest.fn();
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(
        <CoreCarousel
          slides={slides}
          slideIndex={0}
          slideIndexDecrement={slideIndexDecrement}
          slideIndexIncrement={slideIndexIncrement}
        />
      );
    });

    it("renders the current slide as a CarouselSlide", () => {
      let slideProps;
      slideProps = wrapper.find(CarouselSlide).props();
      expect(slideProps).toEqual({
        ...CarouselSlide.defaultProps,
        ...slides[0],
      });

      wrapper.setProps({ slideIndex: 1 });
      slideProps = wrapper.find(CarouselSlide).props();
      expect(slideProps).toEqual({
        ...CarouselSlide.defaultProps,
        ...slides[1],
      });
    });

    it("decrements slideIndex when Prev is clicked", () => {
      wrapper.find("[data-action='prev']").simulate("click");
      expect(slideIndexDecrement).toHaveBeenCalledWith(slides.length);
    });

    it("increments slideIndex when Next is clicked", () => {
      wrapper.find("[data-action='next']").simulate("click");
      expect(slideIndexIncrement).toHaveBeenCalledWith(slides.length);
    });
  });

  // it("passes defautlImgand defaultImgHeight to the CarouselSlide", () => {
  //   const defaultImg = () => "test";
  //   const defaultImgHeight = 1234;

  //   wrapper.setProps({ defaultImg, defaultImgHeight });
  //   expect(wrapper.find(CarouselSlide).prop("Img")).toBe(defaultImg); // fails
  //   expect(wrapper.find(CarouselSlide).prop("imgHeight")).toBe(
  //     defaultImgHeight
  //   );
  // });

  // it("allows individual slides to override Img and img Height", () => {
  //   const Img = () => "test";
  //   const imgHeight = 1234;

  //   wrapper.setProps({ slides: [{ ...slides[0], Img, imgHeight }] });

  //   expect(wrapper.find(CarouselSlide).prop("Img")).toBe(Img);
  //   expect(wrapper.find(CarouselSlide).prop("imgHeight")).toBe(imgHeight);
  // });

  // it("renders the current slide as a CarouselSlide", () => {
  //   let slideProps;
  //   slideProps = wrapper.find(CarouselSlide).props();
  //   expect(slideProps).toEqual({
  //     ...CarouselSlide.defaultProps,
  //     ...slides[0],
  //   });
  //   //
  //   wrapper.setState({ slideIndex: 1 });
  //   slideProps = wrapper.find(CarouselSlide).props();
  //   expect(slideProps).toEqual({
  //     ...CarouselSlide.defaultProps,
  //     ...slides[1],
  //   });
  // });

  // it("renders a <div>", () => {
  //   expect(wrapper.type()).toBe("div");
  // });

  // it("has an initial 'slideIndex' of 0", () => {
  //   expect(wrapper.state("slideIndex")).toBe(0);
  // });

  // it("renders a CarouselButton labeled 'Prev'", () => {
  //   expect(
  //     wrapper
  //       .find(CarouselButton)
  //       .at(0)
  //       .prop("children")
  //   ).toBe("Prev");
  // });

  // it("renders a CarouselButton labeled 'Next'", () => {
  //   expect(
  //     wrapper
  //       .find(CarouselButton)
  //       .at(1)
  //       .prop("children")
  //   ).toBe("Next");
  // });

  // describe("with a middle slide selected", () => {
  //   beforeEach(() => {
  //     wrapper.setState({ slideIndex: 1 });
  //   });

  //   it("decrements 'slideIndex' whewn Prev is clicked", () => {
  //     wrapper.setState({ slideIndex: 1 });
  //     wrapper.find("[data-action='prev']").simulate("click");
  //     expect(wrapper.state("slideIndex")).toBe(0);
  //   });

  //   it("increments 'slideIndex' when Next is clicked", () => {
  //     wrapper.setState({ slideIndex: 1 });
  //     wrapper.find("[data-action='next']").simulate("click");
  //     expect(wrapper.state("slideIndex")).toBe(2);
  //   });
  // });

  // describe("with the first slide selected", () => {
  //   it("wraps 'slideIndex' to the max value when prev is clicked", () => {
  //     wrapper.setState({ slideIndex: 0 });
  //     wrapper.find("[data-action='prev']").simulate("click");
  //     expect(wrapper.state("slideIndex")).toBe(2);
  //   });
  // });

  // describe("with the last slide selected", () => {
  //   it("wraps 'slideIndex' to the min value when next is clicked", () => {
  //     wrapper.setState({ slideIndex: slides.length - 1 });
  //     wrapper.find("[data-action='next']").simulate("click");
  //     expect(wrapper.state("slideIndex")).toBe(0);
  //   });
  // });
});
