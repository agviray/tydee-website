import styled from 'styled-components';

export const StyledFooterContent = styled.div`
  // - Grid container
  // - Has 4 grid items total
  & > div {
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    display: grid;
    grid-template:
      'logo'
      'siteLinksOne'
      'siteLinksTwo'
      'other';
    @media screen and (min-width: 400px) {
      grid-template-areas:
        'logo logo'
        'siteLinksOne siteLinksTwo'
        'other other';
    }
    @media screen and (min-width: 800px) {
      grid-template-areas:
        'logo logo logo'
        'siteLinksOne siteLinksTwo other';
      justify-content: space-evenly;
    }
    @media screen and (min-width: 1080px) {
      grid-template-areas: 'logo siteLinksOne siteLinksTwo other';
    }

    h3 {
      padding-bottom: 1rem;
      color: #06c4ac;
      font-family: 'Montserrat Extra Bold';
      font-size: 18px;
      @media screen and (min-width: 700px) {
        font-size: 20px;
      }
    }

    // - Grid items 2 and 3
    & > div {
      &.siteLinksOne {
        grid-area: siteLinksOne;
      }
      &.siteLinksTwo {
        grid-area: siteLinksTwo;
      }
    }
  }
`;

// - Grid item 1
export const StyledLogoContainer = styled.div`
  grid-area: logo;
  display: flex;
  padding-top: 2rem;
  @media screen and (min-width: 400px) {
    justify-content: center;
  }
  span {
    display: inline-block;
    width: 105px;
    img {
      width: 100%;
    }
  }
`;

export const StyledLinksContainer = styled.div`
  padding-top: 2rem;
  ul {
    li {
      padding: 0.75px 0;
      color: white;
      font-family: 'Avenir Light';
      font-size: 16px;
      @media screen and (min-width: 700px) {
        font-size: 18px;
      }
    }
  }
`;

// - Grid item 4
export const StyledSocialLinks = styled.div`
  grid-area: other;
  padding-top: 2rem;
  & > div {
    padding-bottom: 2rem;
  }

  ul {
    display: flex;
    gap: 1.5rem;

    li {
      span {
        display: inline-flex;
        align-items: center;
        width: 35px;
        height: 100%;

        img {
          width: 35px;
        }
      }
    }
  }
  p {
    color: white;
    @media screen and (min-width: 700px) {
      font-size: 18px;
    }
  }
`;

export const StyledCopyrightContainer = styled.div`
  padding: 1rem 0;
  background-color: black;
  p {
    max-width: 1100px;
    margin: 0 auto;
    color: #006aff;
    text-align: center;
  }
`;
