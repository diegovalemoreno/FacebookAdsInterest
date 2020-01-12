import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0%;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%
  }

  body {
    background: #7159c1;
    -webkit-font-smoothig: antialiased !important;
  }

  body, input, button {
    font-size: 14px;
    color: #222;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
