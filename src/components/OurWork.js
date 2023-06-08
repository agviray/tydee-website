import React from 'react';
import {
  StyledOurWork,
  StyledContentContainer,
  StyledImageContainer,
} from './styles/OurWork.styled';
import balcony01 from '../images/home-page/work-photos/balcony-01.webp';
import balcony02 from '../images/home-page/work-photos/balcony-02.webp';
import bathroom01 from '../images/home-page/work-photos/bathroom-01.webp';
import bathroomSink01 from '../images/home-page/work-photos/br-sink-01.webp';
import kitchen01 from '../images/home-page/work-photos/kitchen-01.webp';
import shower01 from '../images/home-page/work-photos/shower-01.webp';
import shower02 from '../images/home-page/work-photos/shower-02.webp';
import Carousel from './Carousel';

const workImages = [
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

const OurWork = () => {
  return (
    <StyledOurWork>
      <div className="innerWrapper">
        <div className="headingContainer">
          <h2>OUR WORK</h2>
        </div>
        <StyledContentContainer>
          <Carousel items={workImages}>
            {workImages.map((image, index) => (
              <StyledImageContainer key={index}>
                <figure>
                  <img src={image.imgSrc} alt={image.imgAlt} />
                </figure>
              </StyledImageContainer>
            ))}
          </Carousel>
        </StyledContentContainer>
      </div>
    </StyledOurWork>
  );
};

export default OurWork;
