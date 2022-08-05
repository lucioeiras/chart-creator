import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    font-family: 'IBM Plex Sans', sans-serif !important;
  }
`;

