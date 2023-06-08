import React, { useState } from 'react';
import useWindowDimensions from './hooks/useWindowDimensions';
import {
  StyledCarouselWrapper,
  StyledCarousel,
  StyledCarouselItems,
  StyledControl,
  StyledIndicators,
} from './styles/Carousel.styled';

const Carousel = ({ children, items }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const updateActiveItemIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    setActiveItemIndex(newIndex);
  };

  return (
    <StyledCarouselWrapper>
      <StyledCarousel>
        <div>
          <StyledCarouselItems
            style={{ transform: `translate(-${activeItemIndex * 100}%)` }}
          >
            {children}
          </StyledCarouselItems>
        </div>
      </StyledCarousel>
      <StyledControl
        className={`previous ${activeItemIndex <= 0 ? 'disabled' : ''}`}
      >
        <div onClick={() => updateActiveItemIndex(activeItemIndex - 1)}>
          <span></span>
        </div>
      </StyledControl>
      <StyledControl
        className={`next ${
          activeItemIndex >= items.length - 1 ? 'disabled' : ''
        }`}
      >
        <div onClick={() => updateActiveItemIndex(activeItemIndex + 1)}>
          <span></span>
        </div>
      </StyledControl>
      <StyledIndicators>
        <div>
          {items.map((item, index, thisArray) => {
            return index < thisArray.length ? (
              <span
                key={index}
                className={index === activeItemIndex ? 'currentImage' : ''}
                onClick={() => updateActiveItemIndex(index)}
              ></span>
            ) : null;
          })}
        </div>
      </StyledIndicators>
    </StyledCarouselWrapper>
  );
};

export default Carousel;
