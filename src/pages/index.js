import React from 'react';
import { StyledHomePage } from '../components/styles/HomePage.styled';
import GlobalFonts from '../components/styles/GlobalFonts';
import GlobalStyles from '../components/styles/GlobalStyles';

const Home = () => {
  return (
    <StyledHomePage>
      <GlobalStyles />
      <GlobalFonts />
      <div>
        <h1>TYDEE</h1>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, iste
          dolorem architecto possimus dolorum officiis, animi aspernatur
          quisquam labore necessitatibus magnam quos eligendi incidunt ratione
          cupiditate suscipit! Eum, consequatur fugit a assumenda placeat soluta
          dolores rem ex magnam tempore temporibus?
        </p>
      </div>
    </StyledHomePage>
  );
};

export default Home;
