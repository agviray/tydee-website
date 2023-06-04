import styled from 'styled-components';

export const StyledNavMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  z-index: 1;
  background-color: rgba(6, 196, 172, 1);
  opacity: ${({ isMenuOpen }) => (isMenuOpen ? '1' : '0')};
  transform: ${({ isMenuOpen }) =>
    isMenuOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: all 0.2s ease;

  div {
    padding: 120px 0;

    ul {
      opacity: ${({ isMenuOpen }) => (isMenuOpen ? '1' : '0')};
      transition: all 0.5s 0.2s ease-in;

      span {
        display: inline-block;
        width: 100%;
        padding: 1.5rem 3rem;
        color: white;
        font-size: 20px;
      }
    }
  }

  &.desktopStyle {
    position: relative;
    width: auto;
    height: auto;
    background-color: white;
    opacity: 1;
    transform: none;
    transition: none;

    div {
      padding: 0;

      ul {
        display: flex;
        align-items: center;
        gap: 3rem;
        /* padding-left: 100px; */
        opacity: 1;
        transition: none;

        span {
          color: black;
          padding-left: 0;
          padding-right: 0;
        }
      }
    }
  }
`;
