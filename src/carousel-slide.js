import React from "react";
import PropTypes from "prop-types";

const CarouselSlide = ({ imgUrl, description, attribution, ...rest }) => {
  console.log(attribution);
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

export default CarouselSlide;

CarouselSlide.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  attribution: PropTypes.object.isRequired,
};
