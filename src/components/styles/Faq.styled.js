import styled from 'styled-components';

export const StyledFaq = styled.div`
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
      p {
        color: #006aff;
        padding: 1.75rem 0;
        text-align: center;
        font-style: italic;
        @media screen and (min-width: 700px) {
          font-size: 18px;
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

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 760px;
  margin: 0 auto;
`;
