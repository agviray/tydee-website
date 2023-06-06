import React, { useState } from 'react';
import useWindowDimensions from './hooks/useWindowDimensions';
import {
  StyledCarouselWrapper,
  StyledCarousel,
  StyledCarouselItems,
  StyledControl,
} from './styles/Carousel.styled';

const Carousel = ({ images }) => {
  return (
    <StyledCarouselWrapper>
      <StyledControl className="previous">
        <span></span>
      </StyledControl>
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
      <StyledControl className="next">
        <span></span>
      </StyledControl>
    </StyledCarouselWrapper>
  );
};

export default Carousel;
