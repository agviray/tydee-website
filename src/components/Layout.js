import React from 'react';
import GlobalFonts from '../components/styles/GlobalFonts';
import GlobalStyles from '../components/styles/GlobalStyles';
import { StyledLayout } from './styles/Layout.styled';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <StyledLayout>
        <header>
          <h1>TYDEE</h1>
          <h2>Header Content</h2>
        </header>
        <br />
        <br />
        <main>{children}</main>
        <br />
        <br />
        <footer>
          <h2>Footer Content</h2>
        </footer>
      </StyledLayout>
    </>
  );
};

export default Layout;
