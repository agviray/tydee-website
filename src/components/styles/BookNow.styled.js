import styled from 'styled-components';

export const StyledBookNow = styled.div`
  min-height: 80vh;
  padding: 5rem 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
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
    position: relative;
    display: flex;
    align-items: center;

    label {
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
    }
    input {
      border: none;
      outline: none;
      font-size: 18px;
      background-color: transparent;
    }
    button {
      display: inline-block;
      span {
        padding: 0 1rem;
        color: white;
        background-color: #006aff;
      }
    }
  }
`;
