import React from 'react';
import { StyledHomePage } from '../components/styles/HomePage.styled';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Why from '../components/Why';

const Home = () => {
  return (
    <Layout>
      <StyledHomePage>
        <section>
          <Hero />
        </section>
        <section>
          <Why />
        </section>
      </StyledHomePage>
    </Layout>
  );
};

export default Home;
