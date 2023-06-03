import styled from 'styled-components';

export const StyledLayout = styled.div`
  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    -webkit-box-shadow: 0px 4px 13px 1px rgba(0, 0, 0, 0.46);
    -moz-box-shadow: 0px 4px 13px 1px rgba(0, 0, 0, 0.46);
    box-shadow: 0px 4px 13px 1px rgba(0, 0, 0, 0.46);

    transform: ${({ isNavigationShown }) =>
      isNavigationShown ? 'translateY(0)' : 'translateY(-110px)'};
    transition: transform 0.3s ease;
  }
`;
