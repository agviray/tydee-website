import styled from 'styled-components';

export const StyledOurWork = styled.div`
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

export const StyledImageContainer = styled.div`
  display: inline-block;
  min-width: 100%;
  max-width: 1000px;

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    object-position: 50% 50%;
  }
`;
