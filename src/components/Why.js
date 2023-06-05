import React from 'react';
import {
  StyledWhy,
  StyledContentContainer,
  StyledGridContainer,
  StyledGridItem,
  StyledImageContainer,
} from './styles/Why.styled';
import shield from '../images/home-page/why-shield.svg';
import clock from '../images/home-page/why-clock.svg';
import calendar from '../images/home-page/why-calendar.svg';

const Why = () => {
  return (
    <StyledWhy>
      <div className="innerWrapper">
        <div className="headingContainer">
          <h2>WHY CHOOSE TYDEE?</h2>
        </div>
        <StyledContentContainer>
          <StyledGridContainer>
            <StyledGridItem>
              <StyledImageContainer>
                <div className="shield">
                  <img src={shield} alt="Shield icon" />
                </div>
              </StyledImageContainer>
              <h3>FULL INSURED & BONDED</h3>
              <p>
                Have the peace of mind knowing all your assets are protected at
                all times.
              </p>
            </StyledGridItem>
            <StyledGridItem>
              <StyledImageContainer>
                <div className="clock">
                  <img src={clock} alt="Clock icon" />
                </div>
              </StyledImageContainer>
              <h3>DEPENDABLE & AFFORDABLE</h3>
              <p>
                With our simple and convenient platform, book a cleaning in
                seconds and have our trusted cleaning professionals take care of
                the rest.
              </p>
            </StyledGridItem>
            <StyledGridItem>
              <StyledImageContainer>
                <div className="calendar">
                  <img src={calendar} alt="Calendar icon" />
                </div>
              </StyledImageContainer>
              <h3>AVAILABLE EVENING & WEEKENDS</h3>
              <p>No need to wait for a weekday to book a cleaner.</p>
            </StyledGridItem>
          </StyledGridContainer>
        </StyledContentContainer>
      </div>
    </StyledWhy>
  );
};

export default Why;
