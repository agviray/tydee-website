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
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;

    .headingContainer {
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
      }
    }

    .subtextContainer {
      display: flex;
      font-family: 'Avenir Light';
      font-size: 18px;
      width: 50%;
      padding-top: 2rem;
      p {
        z-index: 1;
      }
    }

    .bookButtonContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 5rem;

      button {
        z-index: 1;
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
      }
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
    }
  }
`;
