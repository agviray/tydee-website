import styled from 'styled-components';

export const StyledCarouselWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (min-width: 900px) {
    padding: 0 80px;
  }
`;

export const StyledCarousel = styled.div`
  position: relative;
  overflow: hidden;

  & > div {
    position: relative;
  }
`;

export const StyledCarouselItems = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

// - Carousel arrow buttons
export const StyledControl = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  @media screen and (min-width: 900px) {
    padding: 0 1rem;
  }

  &.disabled {
    visibility: hidden;

    &:hover {
      cursor: default;
    }
  }

  & > div {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 50%;
    transition: all 0.2s ease;

    span {
      display: inline-block;
      width: 25px;
      height: 25px;
      border-width: 2px 2px 0 0;
      border-style: solid;
      border-color: #006aff;
    }
  }

  &.previous {
    left: -20px;
    @media screen and (min-width: 900px) {
      left: -10px;
    }

    div {
      -webkit-box-shadow: 3px 0px 10px 1px rgba(51, 51, 51, 0.59);
      -moz-box-shadow: 3px 0px 10px 1px rgba(51, 51, 51, 0.59);
      box-shadow: 3px 0px 10px 1px rgba(51, 51, 51, 0.59);

      &:hover {
        transform: translateX(3px);
      }
      span {
        transform: translateX(6px) rotate(-135deg);
      }
    }
  }

  &.next {
    right: -20px;
    @media screen and (min-width: 900px) {
      right: -10px;
    }

    div {
      -webkit-box-shadow: -3px 0px 10px 1px rgba(51, 51, 51, 0.59);
      -moz-box-shadow: -3px 0px 10px 1px rgba(51, 51, 51, 0.59);
      box-shadow: -3px 0px 10px 1px rgba(51, 51, 51, 0.59);

      &:hover {
        transform: translateX(-3px);
      }

      span {
        transform: translateX(-5px) rotate(45deg);
      }
    }
  }

  & > div {
    &:hover {
      cursor: pointer;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      background-color: #006aff;

      span {
        border-color: white;
      }
    }
  }
`;

// - Carousel circles/dots
export const StyledIndicators = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    span {
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: #006aff;
      border-style: solid;
      border-color: transparent;
      border-width: 2px;
      border-radius: 50%;

      &:hover {
        cursor: pointer;
      }

      &.currentImage {
        width: 12px;
        height: 12px;
        background-color: white;
        border-color: #006aff;
      }
    }
  }
`;
