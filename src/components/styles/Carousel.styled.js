import styled from 'styled-components';

export const StyledCarouselWrapper = styled.div`
  position: relative;
  max-width: 1200px;
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
  transition: transform 0.5s ease-in-out;

  & div.imageContainer {
    display: inline-block;
    min-width: 100%;
    max-width: 1000px;

    img {
      width: 100%;
      height: 500px;
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
    width: 50px;
    height: 60px;
    background-color: white;
    border-radius: 7px;
    transition: all 0.2s ease;

    span {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-width: 5px 5px 0 0;
      border-style: solid;
      border-color: #006aff;
    }
  }

  &.previous {
    left: 0;
    div {
      -webkit-box-shadow: 3px 0px 10px 1px rgba(51, 51, 51, 0.59);
      -moz-box-shadow: 3px 0px 10px 1px rgba(51, 51, 51, 0.59);
      box-shadow: 3px 0px 10px 1px rgba(51, 51, 51, 0.59);

      &:hover {
        transform: translateX(3px);
      }
      span {
        transform: translateX(7px) rotate(-135deg);
      }
    }
  }

  &.next {
    right: 0;
    div {
      -webkit-box-shadow: -3px 0px 10px 1px rgba(51, 51, 51, 0.59);
      -moz-box-shadow: -3px 0px 10px 1px rgba(51, 51, 51, 0.59);
      box-shadow: -3px 0px 10px 1px rgba(51, 51, 51, 0.59);
      &:hover {
        transform: translateX(-3px);
      }
      span {
        transform: translateX(-6px) rotate(45deg);
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
