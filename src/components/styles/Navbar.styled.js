import styled from 'styled-components';

export const StyledNavbar = styled.div`
  background-color: white;

  nav {
    & > div {
      height: 100px;
      padding: 0 1.5rem;
      display: flex;
      align-items: center;

      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        & > span {
          display: inline-flex;

          &:nth-of-type(1) {
            max-width: 105px;

            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;