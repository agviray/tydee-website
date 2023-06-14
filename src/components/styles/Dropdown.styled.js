import styled from 'styled-components';

export const StyledLabel = styled.label`
  padding-bottom: 1rem;
`;

export const StyledDropdown = styled.select`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 16px;
  font-family: 'Avenir Light', Arial, Helvetica, sans-serif;
  @media screen and (min-width: 500px) {
    width: 50%;
  }
`;
