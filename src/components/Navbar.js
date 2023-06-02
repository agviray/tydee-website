import React from 'react';
import { StyledNavbar } from './styles/Navbar.styled';
import TydeeLogo from '../images/logo-01.svg';

const Navbar = () => {
  return (
    <StyledNavbar>
      <div>
        <nav>
          <div>
            <span>
              <img src={TydeeLogo} alt="Tydee logo" />
            </span>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
