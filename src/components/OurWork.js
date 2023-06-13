import React from 'react';
import {
  StyledOurWork,
  StyledContentContainer,
  StyledImageContainer,
} from './styles/OurWork.styled';
import Carousel from './Carousel';

const OurWork = ({ workHeading, workImages }) => {
  return (
    <StyledOurWork>
      <div className="innerWrapper">
        <div className="headingContainer">
          <h2>{workHeading}</h2>
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
