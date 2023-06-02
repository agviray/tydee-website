import React from 'react';
import { StyledHamburger } from './styles/Hamburger.styled';

const Hamburger = ({ isMenuOpen, onIsMenuOpenChange }) => {
  return (
    <StyledHamburger
      isMenuOpen={isMenuOpen}
      onClick={() => onIsMenuOpenChange(!isMenuOpen)}
    >
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </StyledHamburger>
  );
};

export default Hamburger;
