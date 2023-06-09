import styled from 'styled-components';

export const StyledGetStartedWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const StyledGetStartedImageWrapper = styled.div`
  flex: 1;
  position: relative;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 15%,
    rgba(155, 197, 255, 1) 100%
  );
  overflow: hidden;
  padding-top: 2rem;

  & > div {
    display: flex;
    justify-content: center;
    align-items: end;
    position: relative;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 100%;

    & > div.imageContainer {
      display: inline-block;
      width: 90%;
      max-width: 375px;

      & > img {
        width: 100%;
      }
    }
  }
`;

export const StyledGetStarted = styled.div`
  flex: 1;
  display: inline-block;
  background: rgb(68, 196, 192);
  background: linear-gradient(
    90deg,
    rgba(68, 196, 192, 1) 60%,
    rgba(0, 175, 192, 1) 100%
  );

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
  color: white;

  @media screen and (min-width: 900px) {
    padding-top: 4rem;
  }
`;

export const StyledContentInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  p {
    text-align: center;
    @media screen and (min-width: 700px) {
      font-size: 18px;
    }
  }
`;

export const StyledBookButton = styled.span`
  display: inline-block;
  width: 150px;
  padding: 0.75rem 0;
  font-size: 15px;
  color: white;
  text-align: center;
  background-color: #006aff;
  border-radius: 40px;
  transition: all 0.4s ease;

  &:hover {
    background-color: black;
  }
`;
