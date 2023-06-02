import React, { useState, useEffect } from 'react';
import { StyledNavbar } from './styles/Navbar.styled';
import TydeeLogo from '../images/logo-01.svg';
import Hamburger from './Hamburger';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log(isMenuOpen);
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
          </div>
        </div>
      </nav>
    </StyledNavbar>
  );
};

export default Navbar;
