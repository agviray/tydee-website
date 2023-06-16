import styled from 'styled-components';

export const StyledAccordion = styled.div`
  position: relative;
  background-color: #006aff;
  border: 1px solid #006aff;
`;

export const StyledHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  & > p {
    font-family: 'Avenir Heavy';
    color: white;
    font-size: 18px;
    @media screen and (min-width: 700px) {
      font-size: 20px;
    }
  }

  // - Arrow
  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-width: 2px 2px 0 0;
    border-color: white;
    border-style: solid;
    transform: ${({ isOpen }) =>
      isOpen ? `rotate(-45deg)` : `rotate(135deg)`};
  }
`;

export const StyledContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 2rem;
  background-color: white;
  p {
    @media screen and (min-width: 700px) {
      font-size: 18px;
    }
  }
`;
