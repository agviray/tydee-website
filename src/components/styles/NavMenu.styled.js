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
`;
