import React from 'react';
import { StyledNavMenu } from './styles/NavMenu.styled';

const NavMenu = ({ isMenuOpen }) => {
  return (
    <StyledNavMenu isMenuOpen={isMenuOpen}>
      <div>
        <ul>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Services & Pricing</span>
          </li>
          <li>
            <span>Commercial Inquiries</span>
          </li>
          <li>
            <span>Become a Tydee Pro</span>
          </li>
        </ul>
      </div>
    </StyledNavMenu>
  );
};

export default NavMenu;
