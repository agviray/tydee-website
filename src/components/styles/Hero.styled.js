import styled from 'styled-components';

export const StyledHero = styled.div`
  background-color: #006aff;
  color: white;

  .innerWrapper {
    padding: 2rem;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;

    .headingContainer {
      display: relative;
      font-family: 'Source Sans Pro Black';
      font-size: 20px;
      letter-spacing: 0.5px;
      word-spacing: 5px;

      span {
        display: inline-block;
      }
    }

    .subtextContainer {
      display: flex;
      font-family: 'Avenir Light';
      font-size: 18px;
      width: 70%;
      padding-top: 2rem;
    }

    .bookButtonContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 5rem;

      button {
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
  }
`;
