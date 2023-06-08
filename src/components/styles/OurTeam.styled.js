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
  }
`;

export const StyledItems = styled.div`
  width: 100%;
  display: flex;
  transition: transform 1s ease-in-out;

  & > div.item {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;

    & > div.imageContainer {
      display: inline-block;
      width: 150px;
      height: 150px;
      margin: 1rem;
      border-radius: 50%;
      border: 5px solid white;
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
    }
  }
`;

export const StyledControl = styled.div``;
