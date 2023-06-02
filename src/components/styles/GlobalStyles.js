import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  min-height: 100%;
}

body {
  min-width: 300px;
  font-size: 16px;
  line-height: 1.6;
  font-family: "Avenir Light", Arial, Helvetica, sans-serif;
}

p {
  letter-spacing: 1px;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-indent: 0;
}

a {
  text-decoration: none;
  color: #ffffff;
}
`;

export default GlobalStyles;
