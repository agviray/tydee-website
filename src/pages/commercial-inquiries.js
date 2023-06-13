import React from 'react';
import { Link } from 'gatsby';
import {
  StyledCommercialInquiries,
  StyledButtonContainer,
  StyledInnerContainer,
  StyledServicesProvided,
  StyledImageCard,
} from '../components/styles/CommercialInquiries.styled';
import bar01 from '../images/commercial-inquiries-page/work-photos/bar-01.webp';
import bar02 from '../images/commercial-inquiries-page/work-photos/bar-02.webp';
import bar03 from '../images/commercial-inquiries-page/work-photos/bar-03.webp';
import bar04 from '../images/commercial-inquiries-page/work-photos/bar-04.webp';
import bar05 from '../images/commercial-inquiries-page/work-photos/bar-05.webp';
import windowCleaning from '../images/commercial-inquiries-page/provided-services/window-cleaning.webp';
import janitorialServices from '../images/commercial-inquiries-page/provided-services/janitorial-services.webp';
import carpetUpholsteryCleaning from '../images/commercial-inquiries-page/provided-services/carpet-upholstery-cleaning.webp';
import pressureWashing from '../images/commercial-inquiries-page/provided-services/pressure-washing.webp';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';

const workImages = [
  {
    imgSrc: bar01,
    imgAlt: `Clean front patio of downtown bar`,
  },
  {
    imgSrc: bar02,
    imgAlt: `Clean ceiling, light fixtures, and ventilation of downtown bar`,
  },
  {
    imgSrc: bar03,
    imgAlt: `Close up of clean ceiling, light fixtures, and ventilation of downtown bar`,
  },
  {
    imgSrc: bar04,
    imgAlt: `Clean attic of downtown bar`,
  },
  {
    imgSrc: bar05,
    imgAlt: `Different angle of clean attic of downtown bar`,
  },
];

const providedServicesImages = [
  {
    imgSrc: windowCleaning,
    imgAlt: `Cleaning person wiping a window`,
    textGroup: ['WINDOW', 'CLEANING'],
  },
  {
    imgSrc: janitorialServices,
    imgAlt: `Person using shop vacuum to clean debris on floor`,
    textGroup: ['JANITORIAL', 'SERVICES'],
  },
  {
    imgSrc: carpetUpholsteryCleaning,
    imgAlt: `Person using commercial vacuum to clean carpet`,
    textGroup: ['CARPET AND', 'UPHOLSTERY', 'CLEANING'],
  },
  {
    imgSrc: pressureWashing,
    imgAlt: `Person pressure washing outdoor stairs`,
    textGroup: ['PRESSURE', 'WASHING'],
  },
];

const CommercialInquiries = () => {
  const renderedImageCards = providedServicesImages.map(
    ({ imgSrc, imgAlt, textGroup }, index) => (
      <Link to="/">
        <StyledImageCard key={index}>
          <figure>
            <div>
              <img src={imgSrc} alt={imgAlt} />
              <div>
                {textGroup.map((text, index) => (
                  <span key={index}>{text}</span>
                ))}
              </div>
            </div>
          </figure>
        </StyledImageCard>
      </Link>
    )
  );
  return (
    <Layout>
      <section>
        <StyledCommercialInquiries>
          <div className="innerWrapper">
            <div className="headingContainer">
              <h2>WE ALSO SERVICE BUSINESSES</h2>
              <p>
                Tydee is proud to provide businesses across Canada with
                professional cleaning services
              </p>
              <StyledButtonContainer>
                <button>
                  <span>Contact Us</span>
                </button>
              </StyledButtonContainer>
            </div>
          </div>
          <section>
            <StyledServicesProvided>
              <StyledInnerContainer>
                <h3>SERVICES WE PROVIDE</h3>
                <div>{renderedImageCards}</div>
              </StyledInnerContainer>
            </StyledServicesProvided>
          </section>
        </StyledCommercialInquiries>
      </section>
    </Layout>
  );
};

export default CommercialInquiries;
