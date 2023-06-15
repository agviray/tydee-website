import styled from 'styled-components';

export const StyledTermsConditions = styled.div`
  background-color: white;
  .innerWrapper {
    padding: 5rem 2rem;

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
  }
`;

export const StyledContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 2rem;
  @media screen and (min-width: 900px) {
    padding-top: 4rem;
  }

  & > div {
    &:not(:last-child) {
      padding-bottom: 3rem;
    }
    h3 {
      font-family: 'Avenir Heavy';
      font-size: 18px;
    }

    p {
      &:first-of-type {
        padding-top: 1rem;
      }
      &:not(:last-child) {
        padding-bottom: 1rem;
      }
    }

    @media screen {
      h3 {
        font-size: 20px;
      }
      p {
        font-size: 18px;
      }
    }
  }
`;
