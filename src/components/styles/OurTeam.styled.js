import styled from 'styled-components';

export const StyledOurTeam = styled.div`
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

export const StyledTeamCarousel = styled.div`
  display: flex;
  justify-content: center;

  & > div {
    position: relative;
    overflow: hidden;
    display: inline-flex;
    max-width: 580px;
    margin: 0 auto;
  }
`;

export const StyledItems = styled.div`
  width: 100%;
  display: flex;
  transition: transform 0.7s ease-out;

  & > div.item {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;

    & > div.imageContainer {
      display: inline-block;
      width: 157px;
      height: 157px;
      margin: 1rem;
      border-radius: 50%;
      border: 7px solid white;
      -webkit-box-shadow: 0px 0px 10px 1px rgba(51, 51, 51, 0.59);
      -moz-box-shadow: 0px 0px 10px 1px rgba(51, 51, 51, 0.59);
      box-shadow: 0px 0px 10px 1px rgba(51, 51, 51, 0.59);

      & > figure {
        width: 100%;
        height: 100%;
      }

      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
      }
    }

    & > span.memberName {
      padding: 1rem 0;
      display: inline-block;
      color: #06c4ac;

      @media screen and (min-width: 700px) {
        font-size: 18px;
      }
    }
  }
`;

export const StyledControl = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div {
    display: inline-flex;
    align-items: center;
    width: 50px;
    height: 50px;

    & > span {
      display: inline-block;
      width: 25px;
      height: 25px;
      border-width: 2px 2px 0 0;
      border-style: solid;
      border-color: #06c4ac;

      &:hover {
        cursor: pointer;
      }
    }
  }

  &.previous {
    left: 0;

    & > div {
      span {
        transform: translateX(4px) rotate(-135deg);
      }
    }
  }

  &.next {
    right: 0;

    & > div {
      justify-content: end;
      span {
        align-self: right;
        transform: translateX(-4px) rotate(45deg);
      }
    }
  }
`;

export const StyledIndicators = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    span {
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: #414141;
      border-style: solid;
      border-color: transparent;
      border-width: 2px;
      border-radius: 50%;

      &:hover {
        cursor: pointer;
      }

      &.activeImage {
        width: 12px;
        height: 12px;
        background-color: white;
        border-color: #414141;
      }
    }
  }
`;
