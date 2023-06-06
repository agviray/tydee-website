import styled from 'styled-components';

export const StyledCarousel = styled.div`
  position: relative;
  overflow: hidden;
  & > div {
    display: relative;
  }
`;

export const StyledCarouselItems = styled.div`
  display: flex;
  transition: transform 0.3s;
  gap: 10px;

  & div.imageContainer {
    display: inline-block;

    img {
      width: 491px;
      height: 368px;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }
`;
