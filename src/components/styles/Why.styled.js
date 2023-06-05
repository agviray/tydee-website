import styled from 'styled-components';

export const StyledWhy = styled.div`
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

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 100%);
  gap: 60px;

  @media screen and (min-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 100%));
  }
`;

export const StyledGridItem = styled.div`
  position: relative;
  text-align: center;

  @media screen and (min-width: 900px) {
    padding: 2rem 0;
  }

  &:nth-of-type(2),
  &:nth-of-type(3) {
    /* Lines that separate the Why section grid items */
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: black;
    }
    &::before {
      top: -30px;
      left: 0;
    }
    @media screen and (min-width: 900px) {
      &::before {
        width: 1px;
        height: 100%;
        top: 0;
        left: -30px;
      }
    }
  }

  h3 {
    color: #06c4ac;
    font-size: 18px;
  }

  p {
    padding-top: 1rem;
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
