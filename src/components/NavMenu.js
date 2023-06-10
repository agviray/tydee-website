import React from 'react';
import { Link } from 'gatsby';
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

const NavMenu = ({ isMenuOpen }) => {
  const windowWidth = useWindowDimensions().width;

  const renderedMenuLinks = mainSiteLinks.map(({ name, href }, index) => (
    <li key={index}>
      <Link to={`${href}`}>
        <span>{name}</span>
      </Link>
    </li>
  ));

  return (
    <StyledNavMenu
      isMenuOpen={isMenuOpen}
      className={`${windowWidth >= 900 ? 'desktopStyle' : ''}`}
    >
      <div>
        <ul>
          {renderedMenuLinks}
          <li>
            <Link to="#">
              <StyledBookButton>Book Now</StyledBookButton>
            </Link>
          </li>
        </ul>
      </div>
    </StyledNavMenu>
  );
};

export default NavMenu;
