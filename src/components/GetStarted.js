import React from 'react';
import { Link } from 'gatsby';
import {
  StyledGetStartedWrapper,
  StyledGetStartedImageWrapper,
  StyledGetStarted,
  StyledContentContainer,
  StyledContentInnerContainer,
  StyledBookButton,
} from './styles/GetStarted.styled';
import getStartedWoman from '../images/home-page/get-started-woman.webp';
import useWindowDimensions from './hooks/useWindowDimensions';

const GetStarted = () => {
  const windowWidth = useWindowDimensions().width;

  return (
    <StyledGetStartedWrapper>
      {windowWidth < 1000 ? null : (
        <StyledGetStartedImageWrapper>
          <div>
            <div className="imageContainer">
              <img
                src={getStartedWoman}
                alt={'Woman pointing to "Ready To Get Started?" content'}
              />
            </div>
          </div>
        </StyledGetStartedImageWrapper>
      )}
      <StyledGetStarted>
        <div className="innerWrapper">
          <div className="headingContainer">
            <h2>READY TO GET STARTED?</h2>
          </div>
          <StyledContentContainer>
            <StyledContentInnerContainer>
              <p>
                Ready to join the hundreds of happy customers? Our no commitment
                booking offers free cancellation and rescheduling. Only pay
                after the job has been completed.
              </p>
              <Link to="/book-now">
                <StyledBookButton>Book A Service</StyledBookButton>
              </Link>
            </StyledContentInnerContainer>
          </StyledContentContainer>
        </div>
      </StyledGetStarted>
    </StyledGetStartedWrapper>
  );
};

export default GetStarted;
