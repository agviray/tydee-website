import styled from 'styled-components';
import divider from '../../images/detailed-service-page/full-service-details-card-divider.svg';

export const StyledBecomeATydeePro = styled.div`
  background-color: #006aff;
  .innerWrapper {
    padding: 5rem 2rem;
    .headingContainer {
      h2 {
        color: white;
        font-size: 20px;
        font-family: 'Montserrat Extra Bold';
        text-align: center;
        letter-spacing: 1px;
        word-spacing: 3px;

        @media screen and (min-width: 700px) {
          font-size: 25px;
        }
      }
      p {
        color: white;
        padding: 1.75rem 0;
        text-align: center;
        @media screen and (min-width: 700px) {
          font-size: 18px;
        }
      }
    }
  }
`;

export const StyledApplyNowButtonContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`;

export const StyledApplyNowButton = styled.span`
  display: inline-block;
  width: 155px;
  padding: 0.5rem 0;
  text-align: center;
  font-family: 'Avenir Heavy';
  font-size: 20px;
  color: #006aff;
  background-color: white;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: rgb(5, 196, 172);
    background-color: rgb(65, 65, 65);
  }

  @media screen and (min-width: 700px) {
    width: 170px;
    font-size: 25px;
  }
`;

export const StyledInnerContainer = styled.div`
  padding-top: 2rem;
  background-color: #fafafa;
  @media screen and (min-width: 900px) {
    padding-top: 4rem;
  }
  h3 {
    color: #006aff;
    font-family: 'Montserrat Extra Bold';
  }

  h3 {
    font-size: 20px;
    text-align: center;
    @media screen and (min-width: 700px) {
      font-size: 25px;
    }
  }
`;

export const StyledWhyGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 100%);
  gap: 1rem;
  padding-top: 2rem;
  @media screen and (min-width: 500px) {
    padding: 4rem 2rem;
    grid-template-columns: repeat(2, minmax(0, 100%));
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, minmax(0, 350px));
    justify-content: center;
  }
`;

export const StyledWhoGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 100%);
  gap: 1rem;
  padding-top: 2rem;
  @media screen and (min-width: 500px) {
    padding: 4rem 2rem;
  }

  @media screen and (min-width: 750px) {
    grid-template-columns: repeat(3, minmax(0, 100%));
  }

  @media screen and (min-width: 1200px) {
    justify-content: center;
    grid-template-columns: repeat(3, minmax(0, 350px));
  }
`;

export const StyledCard = styled.article`
  padding: 3rem 2rem;
  background-color: #e8eefa;
  h4 {
    text-align: center;
    color: #06c4ac;
    font-family: 'Montserrat Extra Bold';
    padding-bottom: 1.5rem;
    font-size: 16px;
    @media screen and (min-width: 700px) {
      font-size: 18px;
    }
  }

  ul {
    list-style-type: disc;
    padding: 1rem 0;
    overflow-wrap: break-word;
    li {
      margin-left: 1rem;
      &:not(:last-child) {
        padding-bottom: 0.5rem;
      }
    }
  }
`;

export const StyledDivider = styled.div`
  min-width: 100%;
  height: 50px;
  background-image: url(${divider});
  background-repeat: no-repeat;
  transform: rotateX(180deg);

  @media screen and (min-width: 1200px) {
    background-repeat: repeat-x;
  }
`;

export const StyledApplicationSection = styled.div`
  padding: 0 2rem;
  h3 {
    padding-bottom: 2rem;
  }
  p {
    padding: 1.75rem;
    text-align: center;
  }

  // - Application form container
  & > div.formContainer {
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem;
    background-color: white;
    @media screen and (min-width: 500px) {
      padding: 4rem 2rem;
    }
  }
`;

export const StyledForm = styled.form`
  & div.formItemContainer {
    padding-top: 1rem;
    padding-bottom: 0.5rem;

    &.textItemContainer {
      border-bottom: 1px solid #006aff;
      &:hover,
      &:focus-within {
        border-width: 3px;
        border-color: black;
      }

      .textFormItem {
        padding: 0.5rem;
        &:focus-within {
          background-color: #eff5ff;
        }
      }
    }

    &.dropdownItemContainer {
      padding-bottom: 1rem;
    }
  }
`;
