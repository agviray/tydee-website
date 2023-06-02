import React from 'react';
import { StyledHomePage } from '../components/styles/HomePage.styled';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <StyledHomePage>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, iste
            dolorem architecto possimus dolorum officiis, animi aspernatur
            quisquam labore necessitatibus magnam quos eligendi incidunt ratione
            cupiditate suscipit! Eum, consequatur fugit a assumenda placeat
            soluta dolores rem ex magnam tempore temporibus?
          </p>
        </div>
      </StyledHomePage>
    </Layout>
  );
};

export default Home;
