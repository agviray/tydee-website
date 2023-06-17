import styled from 'styled-components';

export const StyledAccordion = styled.div`
  position: relative;
  background-color: #006aff;
  border: 1px solid #006aff;
`;

export const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;

  @media screen and (min-width: 700px) {
    padding: 2rem;
  }
  & > p {
    font-family: 'Avenir Heavy';
    color: white;
    font-size: 16px;
    @media screen and (min-width: 700px) {
      font-size: 20px;
    }
  }

  // Arrow container
  & > div {
    display: flex;
    flex-direction: column;
    padding: 0 0.5rem;
    // - Arrow
    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-width: 2px 2px 0 0;
      border-color: white;
      border-style: solid;
      transform: ${({ isOpen }) =>
        isOpen ? `rotate(-45deg)` : `rotate(135deg)`};

      @media screen and (min-width: 700px) {
        width: 15px;
        height: 15px;
      }
    }
  }
`;

export const StyledContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 1rem;
  background-color: white;
  @media screen and (min-width: 700px) {
    padding: 2rem;
    font-size: 18px;
  }

  ul {
    padding-top: 1rem;
    padding-left: 1rem;
    li:not(:last-child) {
      padding-bottom: 0.5rem;
    }
  }
`;
