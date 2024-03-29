import React from 'react';
import { navigate, Link } from 'gatsby';
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
    href: `/commercial-inquiries`,
  },
  {
    name: `Become a Tydee Pro`,
    href: `/become-a-tydee-pro`,
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
      className={`${windowWidth >= 950 ? 'desktopStyle' : ''}`}
    >
      <div>
        <ul>
          {renderedMenuLinks}
          <li>
            <Link to={'/book-now'}>
              <StyledBookButton>Book Now</StyledBookButton>
            </Link>
          </li>
        </ul>
      </div>
    </StyledNavMenu>
  );
};

export default NavMenu;
