import React, { useState, useEffect } from 'react';
import { StyledNavbar } from './styles/Navbar.styled';
import TydeeLogo from '../images/logo-01.svg';
import Hamburger from './Hamburger';
import NavMenu from './NavMenu';
import useNavigationDisplay from './hooks/useNavigationDisplay';
import useWindowDimensions from './hooks/useWindowDimensions';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const windowWidth = useWindowDimensions().width;
  const isNavigationShown = useNavigationDisplay(windowWidth);

  // - Pause scrolling on the website if the the mobile menu is open.
  useEffect(() => {
    if (isMenuOpen === true) {
      document.body.style.overflow = 'hidden';
    } else if (isMenuOpen === false) {
      document.body.style.overflow = 'visible';
    }
  }, [isMenuOpen]);

  return (
    <StyledNavbar isNavigationShown={isNavigationShown}>
      <nav>
        <div>
          <div className={`${windowWidth >= 900 ? 'desktopStyle' : ''}`}>
            <span>
              <img src={TydeeLogo} alt="Tydee logo" />
            </span>
            <Hamburger
              isMenuOpen={isMenuOpen}
              onIsMenuOpenChange={setIsMenuOpen}
            />
            <NavMenu isMenuOpen={isMenuOpen} />
          </div>
        </div>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;
