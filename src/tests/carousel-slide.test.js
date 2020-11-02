// src\tests\carousel-slide.test.js

import React from "react";
import { shallow } from "enzyme";
import CarouselSlide from "../carousel-slide";
import "./jestSetup";

describe("Carousel Slide", () => {
  let wrapper;

  beforeEach(() => {
    const imgUrl = "https://example.com/default.jpg";
    const description = "Default test image";
    const attribution = "Default test attribution";
    wrapper = shallow(
      <CarouselSlide
        imgUrl={imgUrl}
        description={description}
        attribution={attribution}
      />
    );
  });

  it("renders a <figure>", () => {
    expect(wrapper.type()).toBe("figure");
  });

  it("renders an <img> and a <figcaption> as children", () => {
    expect(wrapper.childAt(0).type()).toBe("img");
    expect(wrapper.childAt(1).type()).toBe("figcaption");
  });

  it("passes 'imgUrl' through to the <img>", () => {
    const imgUrl = "https://example.com/image.png";
    wrapper.setProps({ imgUrl });
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(imgUrl);
  });

  it("uses 'description' and 'attribution' as the <figcaption>", () => {
    const description = "A jaw droppingly spectacular image";
    const attribution = "John Doe";
    wrapper.setProps({ description, attribution });
    expect(wrapper.find("figcaption").text()).toBe(
      `${description} ${attribution}`
    );
    expect(wrapper.find("figcaption strong").text()).toBe(description);
  });

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
