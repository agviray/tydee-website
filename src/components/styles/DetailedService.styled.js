import styled from 'styled-components';
import divider from '../../images/detailed-service-page/full-service-details-card-divider.svg';

export const StyledDetailedService = styled.div`
  background-color: white;
  .innerWrapper {
    padding: 5rem 0;
    .headingContainer {
      h2 {
        color: #006aff;
        font-size: 20px;
        font-family: 'Montserrat Extra Bold';
        text-align: center;
        letter-spacing: 1px;
        word-spacing: 3px;

        @media screen and (min-width: 700px) {
          font-size: 25px;
        }
      }
    }

    // - Container of service cards
    & > div {
      &:nth-of-type(2) {
        padding-top: 2rem;
      }
    }
  }
`;

export const StyledCard = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3,
  h4 {
    color: #006aff;
    font-family: 'Montserrat Extra Bold';
  }

  h3 {
    padding-bottom: 1.75rem;
    font-size: 18px;
    text-align: center;
    @media screen and (min-width: 700px) {
      font-size: 20px;
    }
  }
  h4 {
    padding: 1.5rem 0;
    font-size: 16px;
    @media screen and (min-width: 700px) {
      font-size: 18px;
    }
  }

  & > section {
    // Card heading and description paragraph section
    &:nth-of-type(1) {
      p {
        text-align: center;
        @media screen and (min-width: 700px) {
          font-size: 18px;
        }
      }
    }

    // Card "Areas of Focus" section
    &:nth-of-type(2) {
      padding-top: 1.75rem;
    }
  }
`;

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 100%);
  padding-bottom: 2rem;

  & > div {
    &:nth-of-type(2) {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #006aff;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 100%));

    & > div {
      display: flex;
      flex-direction: column;
      // - First column of lists
      &:nth-of-type(1) {
        align-items: end;
        & > div {
          flex: 1;
          padding-right: 3rem;
        }
      }
      // - Second column of lists
      &:nth-of-type(2) {
        &::before {
          width: 1px;
          height: 100%;
        }
        & > div {
          flex: 1;
          padding-left: 3rem;
        }
      }
    }
  }
`;

// Containers for lists under "Areas of Focus"
export const StyledAreaOfFocus = styled.article`
  padding-bottom: 1.5rem;
  ul {
    list-style-type: disc;
    list-style-position: inside;
    padding-left: 0.5rem;
    li {
      &:not(:last-child) {
        padding-bottom: 0.5rem;
      }
    }
  }
`;

export const StyledDivider = styled.div`
  min-width: 100%;
  height: 50px;
  background-image: url(${divider});
  background-repeat: no-repeat;

  @media screen and (min-width: 1200px) {
    background-repeat: repeat-x;
  }
`;

export const StyledBookNowButton = styled.span`
  display: inline-block;
  width: 150px;
  padding: 0.75rem 0;
  font-size: 18px;
  text-align: center;
  color: white;
  background-color: #006aff;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    background-color: black;
  }
`;
