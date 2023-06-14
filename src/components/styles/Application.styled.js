import styled from 'styled-components';

export const StyledApplication = styled.div`
  padding: 0 2rem;
  h3 {
    padding-bottom: 2rem;
  }
  p {
    padding: 1.75rem;
    text-align: center;
  }

  // - Application form container
  & > div.formContainer {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem;
    background-color: white;
    @media screen and (min-width: 500px) {
      padding: 4rem 2rem;
    }
    @media screen and (min-width: 900px) {
      padding: 4rem;
    }
  }
`;

export const StyledForm = styled.form`
  div.flexContainer {
    @media screen and (min-width: 900px) {
      display: flex;
      align-items: center;
      gap: 2rem;

      div.formItemContainer {
        flex: 1;
      }
    }
  }

  div.formItemContainer {
    padding-top: 1rem;
    padding-bottom: 0.5rem;

    &.textItemContainer {
      border-bottom: 1px solid #006aff;
      &:hover,
      &:focus-within {
        border-width: 3px;
      }

      .textFormItem {
        padding: 0.5rem;
        &:focus-within {
          background-color: #eff5ff;
        }
      }
    }

    &.dropdownItemContainer {
      padding-bottom: 1rem;
    }
  }
`;

export const StyledApplicationInputButton = styled.div`
  padding-top: 3rem;
  input.applicationButton {
    border: none;
    display: inline-block;
    width: 175px;
    padding: 0.75rem 0;
    color: white;
    font-family: 'Avenir Light';
    font-size: 18px;
    text-align: center;
    background-color: #006aff;
    transition: all 0.2s;
    &:hover {
      background-color: black;
      border: 1px white solid;
    }
  }
`;
