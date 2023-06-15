import styled from 'styled-components';

export const StyledNavMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
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

      li {
        &:not(:last-child) {
          span {
            display: inline-block;
            width: 100%;
            padding: 1.5rem 3rem;
            color: white;
            font-size: 20px;

            &:hover {
              cursor: pointer;
            }
          }
        }

        // - <li> container of Book Now button
        &:last-child {
          padding-left: 1.5rem;
        }
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
        gap: 1.5rem;
        opacity: 1;
        transition: none;

        @media screen and (min-width: 1200px) {
          gap: 3rem;
        }

        li {
          &:not(:last-child) {
            span {
              color: black;
              padding-left: 0;
              padding-right: 0;
              font-size: 18px;
              transition: color 0.4s ease;
            }

            &:hover {
              span {
                color: rgb(6, 196, 172);
              }
            }
          }

          // - <li> container of Book Now button
          &:last-child {
            padding-left: 0;
          }
        }
      }
    }
  }
`;

export const StyledBookButton = styled.span`
  display: inline-block;
  width: 150px;
  padding: 0.75rem 0;
  font-size: 18px;
  color: white;
  text-align: center;
  background-color: #006aff;
  border-radius: 40px;
  transition: all 0.4s ease;

  &:hover {
    background-color: black;
  }
`;
