import styled from 'styled-components';

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
        font-family: 'Source Sans Pro Black';
        font-size: 26px;
        letter-spacing: 0.5px;
        word-spacing: 5px;

        span {
          display: inline-block;
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
