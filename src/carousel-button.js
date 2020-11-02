// src\carousel-button.jsx
import PropTypes from "prop-types";

import React from "react";

const CarouselButton = (props) => {
  return <button {...props} />;
};

export default CarouselButton;

CarouselButton.propTypes = {
  children: PropTypes.node.isRequired,
};
