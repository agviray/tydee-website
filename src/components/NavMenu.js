import React from 'react';
import { navigate } from 'gatsby';
import { StyledNavMenu, StyledBookButton } from './styles/NavMenu.styled';
import useWindowDimensions from './hooks/useWindowDimensions';

const mainSiteLinks = [
  {
    name: `Home`,
    href: `/`,
  },
  {
    name: `Services & Pricing`,
    href: `/pricing`,
  },
  {
    name: `Commercial Inquiries`,
    href: `#`,
  },
  {
    name: `Become a Tydee Pro`,
    href: `#`,
  },
];

const NavMenu = ({ isMenuOpen, onIsMenuOpenChange }) => {
  const windowWidth = useWindowDimensions().width;

  const renderedMenuLinks = mainSiteLinks.map(({ name, href }, index) => (
    <li key={index}>
      <span key={index} onClick={() => navigateToPage(href)}>
        {name}
      </span>
    </li>
  ));

  const navigateToPage = (href) => {
    onIsMenuOpenChange(false);
    navigate(`${href}`);
  };

  return (
    <StyledNavMenu
      isMenuOpen={isMenuOpen}
      className={`${windowWidth >= 900 ? 'desktopStyle' : ''}`}
    >
      <div>
        <ul>
          {renderedMenuLinks}
          <li>
            <StyledBookButton>Book Now</StyledBookButton>
          </li>
        </ul>
      </div>
    </StyledNavMenu>
  );
};

export default NavMenu;
