import React from 'react';
import {
  StyledHow,
  StyledContentContainer,
  StyledList,
  StyledServicePricingCardContainer,
} from './styles/How.styled';

const How = () => {
  return (
    <StyledHow>
      <div className="innerWrapper">
        <div className="headingContainer">
          <h2>HOW IT WORKS</h2>
        </div>
        <StyledContentContainer>
          <StyledList>
            <li>
              <div>
                <span>1</span>
                <p>
                  Choose from one our service categories below that best
                  describe your cleaning requirements.
                </p>
              </div>
            </li>
            <li>
              <div>
                <span>2</span>
                <p>Select the preferred date and time for your service.</p>
              </div>
            </li>
            <li>
              <div>
                <span>3</span>
                <p>
                  Confirm your booking and we'll send a confirmation of service
                  with a link to manage your appointment directly online!
                </p>
              </div>
            </li>
          </StyledList>
          <StyledServicePricingCardContainer>
            <div>
              <ul>
                <li>
                  <div>
                    <span>HOME</span>
                    <span>CLEANING</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>MOVE-IN</span>
                    <span>MOVE-OUT</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>SHORT-TERM</span>
                    <span>RENTAL</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>BALCONY</span>
                    <span>CLEANING</span>
                  </div>
                </li>
              </ul>
            </div>
          </StyledServicePricingCardContainer>
        </StyledContentContainer>
      </div>
    </StyledHow>
  );
};

export default How;
