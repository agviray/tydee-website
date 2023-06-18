import styled from 'styled-components';

export const StyledSupplies = styled.div`
  background-color: #006aff;
  .innerWrapper {
    padding: 5rem 2rem 500px 2rem;
  }
`;

export const StyledContentContainer = styled.div`
  display: grid;
  grid-template-areas:
    'blockOne'
    'blockTwo';
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;

  @media screen and (min-width: 1000px) {
    grid-template-areas: 'blockOne blockTwo';
    gap: 0;
  }
`;

export const StyledContentBlockOne = styled.div`
  grid-area: blockOne;
  max-width: 450px;
  margin: 0 auto;

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
  p {
    color: white;
    padding: 1.75rem 0;
    text-align: center;
    @media screen and (min-width: 700px) {
      font-size: 18px;
    }
  }
`;

export const StyledSampleList = styled.div`
  /* max-width: 450px;
  margin: 0 auto; */
  padding: 1rem 0.5rem;
  background-color: white;
  border: 6px solid #7a8494;
  -webkit-box-shadow: 0px 4px 11px 4px rgba(0, 63, 145, 1);
  -moz-box-shadow: 0px 4px 11px 4px rgba(0, 63, 145, 1);
  box-shadow: 0px 4px 11px 4px rgba(0, 63, 145, 1);
  h3 {
    padding-bottom: 2rem;
    font-family: 'Avenir Heavy';
    color: #006aff;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    @media screen and (min-width: 700px) {
      font-size: 20px;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0.5rem;

    @media screen and (min-width: 375px) {
      flex-direction: row;
      gap: 1rem;
    }
  }
`;

export const StyledContentBlockTwo = styled.div`
  grid-area: blockTwo;

  & > section {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    & > article {
      border-bottom: 1px solid white;
    }
  }
`;

export const StyledList = styled.ul`
  list-style-type: disc;
  li {
    margin-left: 1rem;
    &:not(:last-child) {
      padding-bottom: 0.5rem;
    }
  }
`;
