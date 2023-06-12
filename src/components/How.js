import React from 'react';
import { Link } from 'gatsby';
import {
  StyledHow,
  StyledContentContainer,
  StyledList,
  StyledServicePricingCardContainer,
} from './styles/How.styled';

// *** IMPORTANT ***
// - Values in this array MUST match associated cardId in cardContents object, located in pricing.js page.
const servicePricingCardDetails = [
  {
    hashToServicePricing: '#home-cleaning-pricing',
    textOne: 'HOME',
    textTwo: 'CLEANING',
  },
  {
    hashToServicePricing: '#move-in-out-pricing',
    textOne: 'MOVE-IN',
    textTwo: 'MOVE-OUT',
  },
  {
    hashToServicePricing: '#short-term-rental-pricing',
    textOne: 'SHORT-TERM',
    textTwo: 'RENTAL',
  },
  {
    hashToServicePricing: '#balcony-cleaning-pricing',
    textOne: 'BALCONY',
    textTwo: 'CLEANING',
  },
];

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
                {servicePricingCardDetails.map(
                  ({ hashToServicePricing, textOne, textTwo }, index) => (
                    <li key={index}>
                      <Link
                        to={`/pricing`}
                        state={{ hash: hashToServicePricing }}
                      >
                        <div className="text">
                          <span>{textOne}</span>
                          <span>{textTwo}</span>
                        </div>
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </StyledServicePricingCardContainer>
        </StyledContentContainer>
      </div>
    </StyledHow>
  );
};

export default How;
