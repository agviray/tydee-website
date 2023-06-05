import styled from 'styled-components';

export const StyledWhy = styled.div`
  background-color: white;

  .innerWrapper {
    padding: 4rem 2rem;

    h2 {
      color: #006aff;
      font-size: 20px;
      font-family: 'Montserrat Extra Bold';
      text-align: center;
      letter-spacing: 1px;
      word-spacing: 3px;
    }
  }
`;

export const StyledGridContainer = styled.div`
  padding-top: 2rem;
  display: grid;
  /* gap: 3rem; */
`;

export const StyledGridItem = styled.div`
  text-align: center;
  h3 {
    color: #06c4ac;
    font-size: 18px;
  }

  p {
    padding-top: 1rem;
  }
`;

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  & > div {
    &.shield {
      width: 50px;
      height: 62px;
    }
    &.clock,
    &.calendar {
      width: 60px;
      height: 60px;
    }
    img {
      width: 100%;
      height: 100%;
      max-width: 100%;
    }
  }
`;

export const StyledLine = styled.div`
  display: inline-block;
  height: 1px;
  width: 100%;
  margin: 3rem 0;
  background-color: black;
`;
