import styled from 'styled-components';

export const StyledPricing = styled.div`
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
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: 760px;
  margin: 0 auto;
`;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  -webkit-box-shadow: 6px 6px 13px 1px rgba(0, 106, 255, 0.7);
  -moz-box-shadow: 6px 6px 13px 1px rgba(0, 106, 255, 0.7);
  box-shadow: 6px 6px 13px 1px rgba(0, 106, 255, 0.7);

  @media screen and (min-width: 900px) {
    align-items: start;
  }

  h3 {
    font-family: 'Montserrat Extra Bold';
    font-size: 18px;
    color: #006aff;
  }

  p,
  ul {
    padding-top: 2rem;
  }

  p {
    text-align: center;
    @media screen and (min-width: 900px) {
      text-align: left;
    }
  }

  ul {
    padding-bottom: 2rem;
  }

  @media screen and (min-width: 700px) {
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 18px;
    }
  }
`;

export const StyledSeeFullDetailsButton = styled.span`
  display: inline-block;
  width: 150px;
  padding: 0.75rem 0;
  background-color: white;
  font-size: 18px;
  text-align: center;
  color: #006aff;
  border: 1px #006aff solid;
  transition: all 0.2s;
  &:hover {
    color: white;
    background-color: #006aff;
    border: 1px white solid;
  }
`;
