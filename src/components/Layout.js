import React from 'react';
import GlobalFonts from '../components/styles/GlobalFonts';
import GlobalStyles from '../components/styles/GlobalStyles';
import { StyledLayout } from './styles/Layout.styled';
import Navbar from './Navbar';
import useNavigationDisplay from './hooks/useNavigationDisplay';

const Layout = ({ children }) => {
  const isNavigationShown = useNavigationDisplay();
  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <StyledLayout isNavigationShown={isNavigationShown}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <h2>Footer Content</h2>
        </footer>
      </StyledLayout>
    </>
  );
};

export default Layout;
