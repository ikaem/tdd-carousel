import React from "react";
import PropTypes from "prop-types";

const CarouseSlide = ({ imgUrl, description, attribution, ...rest }) => {
  return (
    <figure {...rest}>
      <img src={imgUrl} />
      <figcaption>
        <strong>{description}</strong>
        {" "}
        {attribution}
      </figcaption>
    </figure>
  );
};

export default CarouseSlide;

CarouseSlide.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  attribution: PropTypes.string.isRequired,
};
