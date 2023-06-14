import styled from 'styled-components';

export const StyledFormItem = styled.div`
  label,
  input[type='text'],
  textarea {
    display: inline-block;
    width: 100%;
  }

  label {
    font-size: 18px;
    color: #006aff;
  }

  input[type='text'],
  textarea {
    line-height: 1.75;
    font-family: 'Avenir Light', Arial, Helvetica, sans-serif;
    font-size: 16px;
    border: none;
    outline: none;
    background-color: transparent;
    letter-spacing: 0.2px;
  }

  textarea {
    resize: none;
  }
`;
