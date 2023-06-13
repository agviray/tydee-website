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
import balcony01 from '../images/home-page/work-photos/balcony-01.webp';
import balcony02 from '../images/home-page/work-photos/balcony-02.webp';
import bathroom01 from '../images/home-page/work-photos/bathroom-01.webp';
import bathroomSink01 from '../images/home-page/work-photos/br-sink-01.webp';
import kitchen01 from '../images/home-page/work-photos/kitchen-01.webp';
import shower01 from '../images/home-page/work-photos/shower-01.webp';
import shower02 from '../images/home-page/work-photos/shower-02.webp';

const homePageWorkImages = [
  {
    imgSrc: balcony01,
    imgAlt: `Clean condo balcony with blue chair`,
  },
  {
    imgSrc: balcony02,
    imgAlt: `Clean condo balcony with woven chair`,
  },
  {
    imgSrc: bathroom01,
    imgAlt: `Clean bathroom with jacuzzi and stand up shower`,
  },
  {
    imgSrc: bathroomSink01,
    imgAlt: `Clean granite bathroom sink`,
  },
  {
    imgSrc: kitchen01,
    imgAlt: `Clean home kitchen area with dark cabinets`,
  },
  {
    imgSrc: shower01,
    imgAlt: `Clean bathroom tub/shower`,
  },
  {
    imgSrc: shower02,
    imgAlt: `Clean bathroom tub and shower`,
  },
];

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
          <OurWork workHeading={'OUR WORK'} workImages={homePageWorkImages} />
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
