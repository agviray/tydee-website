import styled from 'styled-components';

export const StyledCommercialInquiries = styled.div`
  background-color: #006aff;
  .innerWrapper {
    padding: 5rem 2rem;
    .headingContainer {
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
    }
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;

  button {
    span {
      display: inline-block;
      padding: 0.5rem 1.5rem;
      font-family: 'Avenir Heavy';
      font-size: 20px;
      color: #006aff;
      background-color: white;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: rgb(5, 196, 172);
        background-color: rgb(65, 65, 65);
      }
    }
    @media screen and (min-width: 700px) {
      span {
        font-size: 25px;
        padding-left: 3rem;
        padding-right: 3rem;
      }
    }
  }
`;

export const StyledInnerContainer = styled.div`
  padding: 2rem 0;
  @media screen and (min-width: 900px) {
    padding-top: 4rem;
  }
  h3,
  h4 {
    font-family: 'Montserrat Extra Bold';
  }

  h3 {
    padding-bottom: 1.75rem;
    font-size: 18px;
    text-align: center;
    @media screen and (min-width: 700px) {
      font-size: 20px;
    }
  }

  h4 {
    padding: 1.5rem 0;
    font-size: 16px;
    @media screen and (min-width: 700px) {
      font-size: 18px;
    }
  }
`;

// - Services We Provide section
export const StyledServicesProvided = styled.div`
  h3,
  h4 {
    color: white;
  }
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 106, 255, 1) 100%
  );

  & > div {
    // - Content container
    & > div {
      display: grid;
      grid-template-columns: minmax(0, 100%);
      gap: 1rem;

      @media screen and (min-width: 500px) {
        padding: 2rem;
        grid-template-columns: repeat(2, minmax(0, 100%));
      }

      @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(4, minmax(0, 350px));
        justify-content: center;
      }
    }
  }
`;

export const StyledImageCard = styled.div`
  position: relative;
  width: 100%;
  display: inline-block;

  // - Image overlay hover effect
  &:hover {
    figure {
      & > div {
        img {
          transform: scale(1.3);
        }
        & > div {
          background-color: rgba(51, 51, 51, 0.3);
        }
      }
    }
  }

  figure {
    height: 300px;
    @media screen and (min-width: 1200px) {
      height: 450px;
    }

    // - Image container
    & > div {
      position: relative;
      display: inline-block;
      width: 100%;
      height: 300px;
      overflow: hidden;

      @media screen and (min-width: 1200px) {
        height: 450px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        transform: scale(1);
        transition: all 0.5s ease-in-out;
      }

      // - Image overlay
      & > div {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 1rem;
        background-color: rgba(51, 51, 51, 0.6);
        transition: all 0.5s ease-in-out;

        span {
          display: inline-block;
          text-align: center;
          color: white;
          font-family: 'Montserrat Extra Bold';

          @media screen and (min-width: 700px) {
            font-size: 18px;
          }
        }
      }
    }
  }
`;
