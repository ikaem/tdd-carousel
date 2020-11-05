// example/index.js

import React from "react";
import ReactDOM from "react-dom";

import Carousel from "../src/carousel";
import slides from "./slides";

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Carousel slides={slides} />, container);

/* const BindProps = (Component, boundProps) => {
  const ComponentWithBoundProps = (props) => {
    return <Component {...props} {...boundProps} />;
  };

  ComponentWithBoundProps.displayName = `BindProps/${Component.displayName ||
    Component.name}`;
  return ComponentWithBoundProps;
};

const CarouselWithTestAttr = BindProps(Carousel, {
  "data-test-id": "carousel",
}); */


