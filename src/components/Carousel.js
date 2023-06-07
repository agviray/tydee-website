import React, { useState } from 'react';
import useWindowDimensions from './hooks/useWindowDimensions';
import {
  StyledCarouselWrapper,
  StyledCarousel,
  StyledCarouselItems,
  StyledControl,
  StyledIndicators,
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
      <StyledIndicators>
        <div>
          {images.map((image, index, thisArray) => {
            return index < thisArray.length ? (
              <span
                key={index}
                className={index === currentImageIndex ? 'currentImage' : ''}
                onClick={() => updateViewedImageIndex(index)}
              ></span>
            ) : null;
          })}
        </div>
      </StyledIndicators>
    </StyledCarouselWrapper>
  );
};

export default Carousel;
