import React from 'react';
import { StyledHero } from './styles/Hero.styled';

const Hero = () => {
  return (
    <StyledHero>
      <div className="innerWrapper">
        <div className={'headingContainer'}>
          <h1>
            <span>KEEP'N IT TYDEE</span>
            <span>SO YOU DON'T</span>
            <span>HAVE TO</span>
          </h1>
        </div>
        <div className={'subtextContainer'}>
          <p>
            5 star rated home and balcony cleaning services by the best cleaners
            in your area
          </p>
        </div>
        <div className="bookButtonContainer">
          <button>
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
