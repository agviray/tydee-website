import React, { useState } from 'react';
import useWindowDimensions from './hooks/useWindowDimensions';
import {
  StyledCarouselWrapper,
  StyledCarousel,
  StyledCarouselItems,
  StyledControl,
} from './styles/Carousel.styled';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const updateViewedImageIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= images.length) {
      newIndex = images.length - 1;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
    <StyledCarouselWrapper>
      <StyledCarousel>
        <div>
          <StyledCarouselItems
            style={{ transform: `translate(-${currentImageIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="imageContainer">
                {image.content()}
              </div>
            ))}
          </StyledCarouselItems>
        </div>
      </StyledCarousel>
      <StyledControl
        className={`previous ${currentImageIndex <= 0 ? 'disabled' : ''}`}
      >
        <div onClick={() => updateViewedImageIndex(currentImageIndex - 1)}>
          <span></span>
        </div>
      </StyledControl>
      <StyledControl
        className={`next ${
          currentImageIndex >= images.length - 1 ? 'disabled' : ''
        }`}
      >
        <div onClick={() => updateViewedImageIndex(currentImageIndex + 1)}>
          <span></span>
        </div>
      </StyledControl>
    </StyledCarouselWrapper>
  );
};

export default Carousel;
