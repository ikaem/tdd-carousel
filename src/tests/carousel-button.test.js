// src\tests\carousel-button.test.js

import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import CarouselButton from "../carousel-button";

configure({ adapter: new Adapter() });

describe("CarouseButton", () => {
  it("renders a <button />", () => {
    const wrapper = shallow(<CarouselButton />);
    expect(wrapper.type()).toBe("button");
  });
});
