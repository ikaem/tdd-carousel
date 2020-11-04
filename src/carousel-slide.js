import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CarouselSlide = ({
  Img,
  imgHeight,
  imgUrl,
  description,
  attribution,
  ...rest
}) => {
  return (
    <figure {...rest}>
      <Img src={imgUrl} imgHeight={imgHeight} />
      <figcaption>
        <strong>{description}</strong> {attribution}
      </figcaption>
    </figure>
  );
};

export default CarouselSlide;

const DefaultImageStyled = styled.img`
  object-fit: cover;
  width: 100%;
  height: ${(props) => {
    console.log(props);
    return props.imgHeight + "px";
  }};
`;

// const ImgStyled2 = styled.img({
//   objectFit: "cover",
//   width: "100%",
//   height: 200,
// });

CarouselSlide.propTypes = {
  Img: PropTypes.elementType,
  imgHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  attribution: PropTypes.object.isRequired,
};

CarouselSlide.defaultProps = {
  Img: DefaultImageStyled,
  imgHeight: 500,
};
