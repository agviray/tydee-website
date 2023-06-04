import React from 'react';
import {
  StyledHero,
  StyledHeading,
  StyledSubtext,
  StyledButtonContainer,
} from './styles/Hero.styled';
import heroCleaner from '../images/home-page/hero-cleaner.png';

const Hero = () => {
  return (
    <StyledHero>
      <div className="innerWrapper">
        <StyledHeading>
          <h1>
            <span>KEEP'N IT TYDEE</span>
            <span>SO YOU DON'T HAVE TO</span>
          </h1>
        </StyledHeading>
        <StyledSubtext>
          <p>
            5 star rated home and balcony cleaning services by the best cleaners
            in your area
          </p>
        </StyledSubtext>
        <StyledButtonContainer>
          <button>
            <span>Book Now</span>
          </button>
        </StyledButtonContainer>
        <div className={'imageContainer'}>
          <img src={heroCleaner} alt="Woman holding cleaning supplies" />
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
