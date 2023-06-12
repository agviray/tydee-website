import styled from 'styled-components';

export const StyledHow = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 106, 255, 1) 100%
  );
  .innerWrapper {
    padding: 5rem 2rem;

    .headingContainer {
      h2 {
        color: white;
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
  }
`;

export const StyledContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 2rem;
  @media screen and (min-width: 900px) {
    padding-top: 4rem;
  }
`;

export const StyledList = styled.ul`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  li {
    & > div {
      display: flex;
      gap: 3rem;
      span {
        display: inline;
        font-family: 'Montserrat Extra Bold';
        color: #006aff;
        font-size: 20px;
      }
      @media screen and (min-width: 700px) {
        span {
          font-size: 25px;
        }
        p {
          font-size: 18px;
        }
      }
    }
  }
`;

export const StyledServicePricingCardContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding-top: 2rem;
  @media screen and (min-width: 900px) {
    padding-top: 4rem;
  }
  & > div {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;

      li {
        width: 45%;
        background-color: white;
        border-radius: 10px;
        font-family: 'Avenir Heavy';
        -webkit-box-shadow: 6px 0px 17px 4px rgba(0, 106, 255, 0.71);
        -moz-box-shadow: 6px 0px 17px 4px rgba(0, 106, 255, 0.71);
        box-shadow: 6px 0px 17px 4px rgba(0, 106, 255, 0.71);

        div.text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1.5rem 0;
          color: #06c4ac;

          @media screen and (min-width: 700px) {
            font-size: 18px;
          }

          span {
            display: inline-block;
          }
        }
      }
    }
  }
`;
