import React from 'react';
import {
  StyledGetStarted,
  StyledContentContainer,
  StyledContentInnerContainer,
  StyledBookButton,
} from './styles/GetStarted.styled';

const GetStarted = () => {
  return (
    <StyledGetStarted>
      <div className="innerWrapper">
        <div className="headingContainer">
          <h2>READY TO GET STARTED?</h2>
        </div>
        <StyledContentContainer>
          <StyledContentInnerContainer>
            <p>
              Ready to join the hundreds of happy customers? Our no commitment
              booking offers free cancellation and rescheduling. Only pay after
              the job has been completed.
            </p>
            <StyledBookButton>Book A Service</StyledBookButton>
          </StyledContentInnerContainer>
        </StyledContentContainer>
      </div>
    </StyledGetStarted>
  );
};

export default GetStarted;
