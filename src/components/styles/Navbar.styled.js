import styled from 'styled-components';

export const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: inherit;
  -webkit-box-shadow: 0px 4px 13px 1px rgba(0, 0, 0, 0.46);
  -moz-box-shadow: 0px 4px 13px 1px rgba(0, 0, 0, 0.46);
  box-shadow: 0px 4px 13px 1px rgba(0, 0, 0, 0.46);
  transform: ${({ isNavigationShown }) =>
    isNavigationShown ? 'translateY(0)' : 'translateY(-110px)'};
  transition: transform 0.3s ease;
  background-color: white;
  z-index: 2;

  nav {
    height: inherit;
    & > div {
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      height: inherit;

      & > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        &.desktopStyle {
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

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
