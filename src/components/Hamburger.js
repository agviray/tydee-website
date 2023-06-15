import React, { useEffect } from 'react';
import { StyledHamburger } from './styles/Hamburger.styled';
import useWindowDimensions from './hooks/useWindowDimensions';

const Hamburger = ({ isMenuOpen, onIsMenuOpenChange }) => {
  const windowWidth = useWindowDimensions().width;

  // - Close mobile menu (if open) if windowWidth is equal to or
  //   greater than 950px.
  useEffect(() => {
    if (windowWidth >= 950) {
      if (isMenuOpen === true) {
        onIsMenuOpenChange(false);
      }
    }
  }, [windowWidth]);

  // - Remove Hamburger from navigation if window size is equal
  //   to or greater than 950px.
  return windowWidth >= 950 ? null : (
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
