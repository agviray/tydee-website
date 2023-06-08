import React from 'react';
import { StyledHomePage } from '../components/styles/HomePage.styled';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Why from '../components/Why';
import How from '../components/How';
import OurWork from '../components/OurWork';
import OurTeam from '../components/OurTeam';
import CustomerReviews from '../components/CustomerReviews';
import GetStarted from '../components/GetStarted';

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
        <section>
          <How />
        </section>
        <section>
          <OurWork />
        </section>
        <section>
          <OurTeam />
        </section>
        <section>
          <CustomerReviews />
        </section>
        <section>
          <GetStarted />
        </section>
      </StyledHomePage>
    </Layout>
  );
};

export default Home;
