import React, { useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import {
  StyledPricing,
  StyledContentContainer,
  StyledFlexContainer,
  StyledCard,
  StyledSeeFullDetailsButton,
} from '../components/styles/Pricing.styled';

// *** IMPORTANT ***
// - Each cardId must MUST match associated hashToServicePricing object values in servicePricingCardDetails array, located in How.js component.

// - Each hashToFullDetails property in this object, MUST match the associated cardId property in cardContents object located in detailed-service.js page.
const cardContents = [
  {
    cardId: 'home-cleaning-pricing',
    heading: 'HOME CLEANING',
    hashToFullDetails: '#home-cleaning',
    paragraphs: [
      `Whether you're looking for a general or deep clean, we provide dependable and affordable home cleaning services by professionals in your neighborhood.`,
      `Our home cleaning packages provide personalized service for a thorough and effective clean throughout all common areas of your home.`,
      `Prices Starting From`,
    ],
    pricing: [
      `Up to 700 sqft .................... $135.00`,
      `Up to 1,400 sqft ................. $175.00`,
      `Up to 2,200 sqft ................. $245.00`,
      `Up to 3,000 sqft ................. $325.00`,
    ],
  },
  {
    cardId: 'move-in-out-pricing',
    heading: 'MOVE IN / MOVE OUT',
    hashToFullDetails: '#move-in-out',
    paragraphs: [
      `Whether you're moving in or out of your home, this cleaning package will cover every inch for a deep clean. This service is designed for empty spaces, with added focus around dirt and grime, to ensure your home is looking brand new.`,
      `Our Move-in/Move-out cleaning is also ideal for real estate agents or home owners preparing for a showing or new tenant.`,
      `Prices Starting From`,
    ],
    pricing: [
      `Up to 700 sqft .................... $150.00`,
      `Up to 1,400 sqft ................. $190.00`,
      `Up to 2,200 sqft ................. $250.00`,
      `Up to 3,000 sqft ................. $330.00`,
    ],
  },
  {
    cardId: 'short-term-rental-pricing',
    heading: 'SHORT-TERM RENTALS',
    hashToFullDetails: '#short-term-rental',
    paragraphs: [
      `Save time and hassle out of your day while knowing your guests are taken care of.`,
      `Designed for AirBnB and rental hosts, our short-term rental cleaning service focuses on the overall cleanliness of your space, with hospitality standards in mind for an enhanced cleaning process.`,
      `Prices Starting From`,
    ],
    pricing: [
      `Up to 700 sqft .................... $135.00`,
      `Up to 1,400 sqft ................. $175.00`,
      `Up to 2,200 sqft ................. $245.00`,
      `Up to 3,000 sqft ................. $325.00`,
    ],
  },
  {
    cardId: 'balcony-cleaning-pricing',
    heading: 'BALCONY CLEANING',
    hashToFullDetails: '#balcony-cleaning',
    paragraphs: [
      `Enjoy the outdoors and expand your living space by reviving your balcony or patio with cleaning that abides by condo and building regulations.`,
      `Using specialized equipment for water reclamation, we're able to provide a deep clean while preventing any water spillage off the edge. Services are offered on a seasonal basis.`,
      `Prices Starting From`,
    ],
    pricing: [`Size of Balcony ................... $2.00/sqft`],
  },
];

const Pricing = ({ location }) => {
  // - Smooth scroll to intended pricing info, by clicking on link from How section in home page.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = location.state.hash;
      if (hash) {
        const element = document.querySelector(hash);
        const topOffset = element.offsetTop - 100;
        window.scrollBy({ top: topOffset, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <Layout>
      <section>
        <StyledPricing>
          <div className="innerWrapper">
            <div className="headingContainer">
              <h2>SERVICES & PRICING</h2>
            </div>
            <StyledContentContainer>
              <StyledFlexContainer>
                {cardContents.map((content, index) => (
                  <article id={content.cardId} key={index}>
                    <StyledCard>
                      <h3>{content.heading}</h3>
                      {content.paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                      <ul>
                        {content.pricing.map((price, index) => (
                          <li key={index}>{price}</li>
                        ))}
                      </ul>
                      <Link
                        to={`/detailed-service`}
                        state={{ hash: `${content.hashToFullDetails}` }}
                      >
                        <StyledSeeFullDetailsButton>
                          See Full Details
                        </StyledSeeFullDetailsButton>
                      </Link>
                    </StyledCard>
                  </article>
                ))}
              </StyledFlexContainer>
            </StyledContentContainer>
          </div>
        </StyledPricing>
      </section>
    </Layout>
  );
};

export default Pricing;
