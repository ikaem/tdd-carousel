// src\tests\carousel-slide.test.js

import React from "react";
import { shallow, mount } from "enzyme";
import CarouselSlide from "../carousel-slide";
// import renderer from "react-test-renderer";
import "./jestSetup";
import "jest-styled-components";
// import styled from "styled-components";

describe("Img", () => {
  let mounted;
  const imgUrl = "https://example.com/default.jpg";

  beforeEach(() => {
    const Img = CarouselSlide.defaultProps.Img;
    mounted = mount(<Img src={imgUrl} imgHeight={500} />);
  });

  it("renders correctly", () => {
    expect(mounted.find("img")).toMatchSnapshot();
  });

  // it("allows styles to be overridden", () => {
  //   const TestImg = styled(CarouselSlide.defaultProps.Img)`
  //     width: auto;
  //     height: auto;
  //     object-fit: fill;
  //   `;
  //   mounted = mount(
  //     <CarouselSlide
  //       Img={TestImg}
  //       imgUrl={imgUrl}
  //       description="This prop is required"
  //     />
  //   );

  //   expect(mounted.find(TestImg)).toHaveStyleRule("width", "auto");
  // });
  // it("renders an <img> with the given src", () => {
  //   expect(mounted.containsMatchingElement(<img src={imgUrl} />)).toBe(true);
  // });

  it("has the expected static styles", () => {
    // expect(mounted).toHaveStyleRule("width", "100%");
    expect(mounted).toHaveStyleRule("object-fit", "cover");
  });
});

describe("Carousel Slide", () => {
  let wrapper;

  beforeEach(() => {
    const imgUrl = "https://example.com/default.jpg";
    const description = "Default test image";
    // const attribution = "Default test attribution";
    wrapper = shallow(
      <CarouselSlide
        imgUrl={imgUrl}
        description={description}
        // attribution={attribution}
      />
    );
  });

  it("renders correctly", () => {
    wrapper.setProps({
      description: "Description",
      attribution: "Attribution",
    });

    expect(wrapper).toMatchSnapshot();
  });

  // it("renders a <figure>", () => {
  //   expect(wrapper.type()).toBe("figure");
  // });

  // it("renders an <img> and a <figcaption> as children", () => {
  //   expect(wrapper.childAt(0).type()).toBe(CarouselSlide.defaultProps.Img);
  //   expect(wrapper.childAt(1).type()).toBe("figcaption");
  // });

  // it("passes 'imgUrl' through to the <img>", () => {
  //   const imgUrl = "https://example.com/image.png";
  //   wrapper.setProps({ imgUrl });
  //   const img = wrapper.find(CarouselSlide.defaultProps.Img);
  //   expect(img.prop("src")).toBe(imgUrl);
  // });

  // it("uses 'description' and 'attribution' as the <figcaption>", () => {
  //   const description = "A jaw droppingly spectacular image";
  //   const attribution = "John Doe";
  //   wrapper.setProps({ description, attribution });
  //   expect(wrapper.find("figcaption").text()).toBe(
  //     `${description} ${attribution}`
  //   );
  //   expect(wrapper.find("figcaption strong").text()).toBe(description);
  // });

  it("passes other props through to the <fogure>", () => {
    const style = {};
    const onClick = () => {};
    const className = "my-carousel-slide";
    wrapper.setProps({ style, onClick, className });
    expect(wrapper.prop("style")).toBe(style);
    expect(wrapper.prop("onClick")).toBe(onClick);
    expect(wrapper.prop("className")).toBe(className);
  });
});
