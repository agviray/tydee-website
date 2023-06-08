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

export const StyledReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
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
  padding: 4rem;
  background-color: #e8eefa;
  width: 100%;

  @media screen and (min-width: 1000px) {
    flex: 1;
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
