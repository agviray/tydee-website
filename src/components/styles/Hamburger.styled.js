import styled from 'styled-components';

export const StyledHamburger = styled.div`
  position: relative;
  padding: 1rem;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    border-radius: 50%;
    transform: ${({ isMenuOpen }) => (isMenuOpen ? 'scale(1)' : 'scale(0)')};
    transition: all 0.2s ease;
  }

  div {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      display: inline-block;
      height: 2px;
      width: 25px;
      background-color: ${({ isMenuOpen }) =>
        isMenuOpen ? '#006aff' : '#000000'};
      transition: all 0.2s ease;

      &:nth-of-type(1) {
        transform: ${({ isMenuOpen }) =>
          isMenuOpen
            ? 'translateY(2.5px) rotate(45deg)'
            : 'translateY(-7px) rotate(0)'};
      }

      &:nth-of-type(2) {
        transform: ${({ isMenuOpen }) =>
          isMenuOpen ? 'scale(0)' : 'scale(1)'};
      }

      &:nth-of-type(3) {
        transform: ${({ isMenuOpen }) =>
          isMenuOpen
            ? 'translateY(-1.5px) rotate(-45deg)'
            : 'translateY(7px) rotate(0)'};
      }
    }
  }
`;
