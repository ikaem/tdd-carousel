// src\tests\carousel-button.test.js

import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import CarouselButton from "../carousel-button";

configure({ adapter: new Adapter() });

describe("CarouseButton", () => {
  const text = "Button text";
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CarouselButton>{text}</CarouselButton>);
  });

  it("renders a <button />", () => {
    expect(wrapper.type()).toBe("button");
  });
  it("passes 'children' to the <button/>", () => {
    expect(wrapper.prop("children")).toBe(text);
  });
  it("passes other props to the <button />", () => {
    const onClick = () => {};
    const className = "my-carousel-button";
    const dataAction = "prev";
    wrapper.setProps({ onClick, className, "data-action": dataAction });
    expect(wrapper.prop("onClick")).toBe(onClick);
    expect(wrapper.prop("className")).toBe(className);
    expect(wrapper.prop("data-action")).toBe(dataAction);
  });
});