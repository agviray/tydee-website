import React, { useState } from 'react';
import useWindowDimensions from './hooks/useWindowDimensions';
import { StyledCarousel } from './styles/Carousel.styled';

const Carousel = ({ images }) => {
  const [imageInView, setImageInView] = useState(0);
  return (
    <div className="styledCarousel">
      <div className="carouselContent">
        <div className="carouselItems">
          {/* images will be rendered here */}
        </div>
        <div className="styledControls">
          <div className="controlsContent">
            <div className="control">
              <span className="previous"></span>
            </div>
            <div className="control">
              <span className="next"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
