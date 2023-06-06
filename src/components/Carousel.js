import React, { useState } from 'react';
import useWindowDimensions from './hooks/useWindowDimensions';
import { StyledCarousel, StyledCarouselItems } from './styles/Carousel.styled';

const Carousel = ({ images }) => {
  return (
    <StyledCarousel>
      <div className="carouselContent">
        <StyledCarouselItems>
          {images.map((image, index) => (
            <div key={index} className="imageContainer">
              {image.content()}
            </div>
          ))}
        </StyledCarouselItems>
      </div>
    </StyledCarousel>
  );
};

export default Carousel;
