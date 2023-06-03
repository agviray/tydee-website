import React, { useState, useEffect } from 'react';
import { StyledNavbar } from './styles/Navbar.styled';
import TydeeLogo from '../images/logo-01.svg';
import Hamburger from './Hamburger';
import NavMenu from './NavMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen === true) {
      document.body.style.overflow = 'hidden';
    } else if (isMenuOpen === false) {
      document.body.style.overflow = 'visible';
    }
  }, [isMenuOpen]);

  return (
    <StyledNavbar>
      <nav>
        <div>
          <div>
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
