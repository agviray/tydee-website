import styled from 'styled-components';

export const StyledLayout = styled.div`
  header {
    position: relative;
    // - If changing this height value, always update
    //   navigationHeight value in useNavigationDisplay hook
    //   to match it.
    height: 100px;
  }
`;
