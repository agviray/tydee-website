import styled from 'styled-components';

export const StyledBookNow = styled.div`
  min-height: 80vh;
  padding: 5rem 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    h2,
    p {
      text-align: center;
    }

    h2 {
      font-size: 28px;
      font-family: 'Montserrat Extra Bold';
    }

    p {
      padding-top: 2rem;
      color: #5d5d5d;
      font-size: 20px;
    }

    @media screen and (min-width: 700px) {
      h2 {
        font-size: 35px;
      }
      p {
        font-size: 25px;
      }
    }
  }
`;

export const StyledFormContainer = styled.div`
  padding-top: 3rem;

  .formContent {
    padding-left: 1rem;
    position: relative;
    display: flex;
    align-items: center;
    max-width: 375px;
    margin: 0 auto;
    height: 65px;
    overflow: hidden;
    border-radius: 8px;
    -webkit-box-shadow: 0px 4px 14px -1px rgba(140, 140, 140, 1);
    -moz-box-shadow: 0px 4px 14px -1px rgba(140, 140, 140, 1);
    box-shadow: 0px 4px 14px -1px rgb(140, 140, 140);

    label {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }

    // Map pin container
    & > span {
      display: inline-flex;
      align-items: center;
      width: 25px;
      height: 100%;

      img {
        max-width: 100%;
      }
    }
    input {
      flex: 1;
      padding: 1rem;
      font-size: 18px;
      letter-spacing: 0.7px;
      background-color: transparent;
      border: none;
      outline: none;
    }
    button {
      display: inline-block;
      width: 50px;
      height: 100%;
      background-color: transparent;
      span {
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 100%;
        background-color: #006aff;
        color: white;

        // Button arrow
        span {
          display: inline-block;
          width: 20px;
          height: 20px;
          border-width: 5px 5px 0 0;
          border-color: white;
          border-style: solid;
          background-color: transparent;
          transform: translateX(-5px) rotate(45deg);
        }
      }
    }
  }
`;

export const StyledMessage = styled.span`
  display: inline-block;
  padding-top: 3rem;
  p {
    font-size: 16px;
    color: #006aff;
    text-align: center;
    @media screen and (min-width: 700px) {
      font-size: 18px;
    }
  }
`;
