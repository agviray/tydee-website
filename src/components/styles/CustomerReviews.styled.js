import styled from 'styled-components';

export const StyledCustomerReviews = styled.div`
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
  margin: 0 auto;
  padding-top: 2rem;
  @media screen and (min-width: 900px) {
    padding-top: 4rem;
  }
`;

export const StyledReviewsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  max-width: 1400px;
  margin: 0 auto;
  padding-top: 2rem;

  @media screen and (min-width: 900px) {
    padding-top: 4rem;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const StyledReviewCard = styled.div`
  display: inline-block;
  min-width: 100%;
  max-width: 500px;
  padding: 4rem;
  background-color: #e8eefa;

  @media screen and (min-width: 1200px) {
    min-width: auto;
    width: 500px;
  }

  & > div.starRating {
    display: inline-block;

    span {
      display: inline-flex;
      align-items: center;
      width: 120px;

      img {
        width: 100%;
      }
    }
  }

  @media screen and (min-width: 700px) {
    p {
      font-size: 18px;
    }
  }

  & > div.review {
    p {
      padding-top: 2rem;
    }
  }

  & > span.reviewer {
    display: inline-block;
    padding-top: 3rem;

    p {
      color: #06c4ac;
    }
  }
`;
