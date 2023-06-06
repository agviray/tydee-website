import styled from 'styled-components';

export const StyledCarouselWrapper = styled.div`
  position: relative;
  max-width: 3000px;
  margin: 0 auto;
  padding: 0 100px;
`;

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

export const StyledControl = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  border-radius: 7px;
  background-color: white;
  transition: all 0.2s ease;

  span {
    display: inline-block;
    width: 35px;
    height: 35px;
    border-width: 5px 5px 0 0;
    border-style: solid;
    border-color: #006aff;
  }

  &.previous {
    left: 0;
    -webkit-box-shadow: 3px 0px 10px 1px rgba(51, 51, 51, 0.59);
    -moz-box-shadow: 3px 0px 10px 1px rgba(51, 51, 51, 0.59);
    box-shadow: 3px 0px 10px 1px rgba(51, 51, 51, 0.59);
    span {
      transform: translateX(9px) rotate(-135deg);
    }
  }

  &.next {
    right: 0;
    -webkit-box-shadow: -3px 0px 10px 1px rgba(51, 51, 51, 0.59);
    -moz-box-shadow: -3px 0px 10px 1px rgba(51, 51, 51, 0.59);
    box-shadow: -3px 0px 10px 1px rgba(51, 51, 51, 0.59);
    span {
      transform: translateX(-8px) rotate(45deg);
    }
  }

  &:hover {
    cursor: pointer;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    background-color: #006aff;

    span {
      border-color: white;
    }

    &.previous {
      left: 3px;
    }

    &.next {
      right: 3px;
    }
  }
`;
