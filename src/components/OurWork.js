import React from 'react';
import { StyledOurWork, StyledContentContainer } from './styles/OurWork.styled';
import balcony01 from '../images/home-page/work-photos/balcony-01.webp';
import balcony02 from '../images/home-page/work-photos/balcony-02.webp';
import bathroom01 from '../images/home-page/work-photos/bathroom-01.webp';
import bathroomSink01 from '../images/home-page/work-photos/br-sink-01.webp';
import kitchen01 from '../images/home-page/work-photos/kitchen-01.webp';
import shower01 from '../images/home-page/work-photos/shower-01.webp';
import shower02 from '../images/home-page/work-photos/shower-02.webp';

const workImages = [
  {
    content: () => (
      <figure>
        <img src={balcony01} alt="Clean condo balcony with blue chair" />
      </figure>
    ),
  },
  {
    content: () => (
      <figure>
        <img src={balcony02} alt="Clean condo balcony with woven chair" />
      </figure>
    ),
  },
  {
    content: () => (
      <figure>
        <img
          src={bathroom01}
          alt="Clean bathroom with jacuzzi and stand up shower"
        />
      </figure>
    ),
  },
  {
    content: () => (
      <figure>
        <img src={bathroomSink01} alt="Clean granite bathroom sink" />
      </figure>
    ),
  },
  {
    content: () => (
      <figure>
        <img src={kitchen01} alt="Clean home kitchen area with dark cabinets" />
      </figure>
    ),
  },
  {
    content: () => (
      <figure>
        <img src={shower01} alt="Clean bathroom stand up shower" />
      </figure>
    ),
  },
  {
    content: () => (
      <figure>
        <img src={shower02} alt="Clean bathroom tub/shower" />
      </figure>
    ),
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
          <div>
            <h3>Carousel of Photos</h3>
          </div>
        </StyledContentContainer>
      </div>
    </StyledOurWork>
  );
};

export default OurWork;
