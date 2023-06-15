import styled, { keyframes } from 'styled-components';
import twinkle from '../../images/home-page/twinkle.svg';

// - Animation for star twinkle.
const starTwinkle = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }

  60% {
    transform: scale(1.2);
    opacity: 1;
  }

  80% {
    transform: scale(0.9);
    opacity: 0.9;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const StyledHero = styled.div`
  background-color: #006aff;
  overflow: hidden;
  color: white;

  .innerWrapper {
    position: relative;
    padding: 2rem;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 700px) {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }

    @media screen and (min-width: 700px) {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }

    .imageContainer {
      position: absolute;
      bottom: -7px;
      right: -20px;
      width: 200px;

      img {
        width: 100%;
        max-width: 100%;
      }

      @media screen and (min-width: 500px) {
        width: 33%;
        max-width: 190px;
      }

      @media screen and (min-width: 700px) {
        width: 35%;
        max-width: 315px;
      }

      @media screen and (min-width: 850px) {
        width: 40%;
        max-width: 500px;
        bottom: -140px;
      }
    }
  }
`;

export const StyledHeading = styled.div`
  position: relative;
  z-index: 1;

  h1 {
    display: flex;
    flex-direction: column;
    font-family: 'Source Sans Pro Black';
    font-size: 26px;
    letter-spacing: 0.5px;
    word-spacing: 5px;

    span {
      position: relative;
      display: inline-block;

      // - Star twinkle image
      &:nth-of-type(1) {
        &::after {
          content: url(${twinkle});
          position: absolute;
          top: -16px;
          left: -23px;
          display: inline-block;
          width: 50px;
          height: 50px;
          animation-duration: 1.3s;
          animation-name: ${starTwinkle};
          animation-timing-function: ease-in;
        }
      }
    }

    @media screen and (min-width: 500px) {
      font-size: 36px;
      span {
        &:nth-of-type(1) {
          &::after {
            top: -26px;
            left: -38px;
            width: 80px;
            height: 80px;
          }
        }
      }
    }

    @media screen and (min-width: 700px) {
      font-size: 40.5px;
      span {
        &:nth-of-type(1) {
          &::after {
            top: -25px;
            left: -37px;
            width: 80px;
            height: 80px;
          }
        }
      }
    }

    @media screen and (min-width: 850px) {
      font-size: 50px;
      span {
        &:nth-of-type(1) {
          &::after {
            top: -30px;
            left: -45px;
            width: 100px;
            height: 100px;
          }
        }
      }
    }
  }
`;

export const StyledSubtext = styled.div`
  font-family: 'Avenir Heavy';
  font-size: 18px;
  width: 50%;
  padding-top: 2rem;
  p {
    z-index: 1;
  }

  @media screen and (min-width: 500px) {
    width: 70%;
  }

  @media screen and (min-width: 700px) {
    max-width: 500px;
    font-size: 20px;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;

  a {
    display: inline-block;
    z-index: 1;
  }
  span {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    font-family: 'Avenir Heavy';
    font-size: 20px;
    color: #006aff;
    background-color: white;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: rgb(5, 196, 172);
      background-color: rgb(65, 65, 65);
    }
  }
  @media screen and (min-width: 700px) {
    span {
      font-size: 25px;
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }

  @media screen and (min-width: 500px) {
    justify-content: left;
  }
`;
