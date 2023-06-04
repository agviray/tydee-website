import React from 'react';
import { StyledNavMenu } from './styles/NavMenu.styled';
import useWindowDimensions from './hooks/useWindowDimensions';

const NavMenu = ({ isMenuOpen }) => {
  const windowWidth = useWindowDimensions().width;

  return (
    <StyledNavMenu
      isMenuOpen={isMenuOpen}
      className={`${windowWidth >= 900 ? 'desktopStyle' : ''}`}
    >
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
