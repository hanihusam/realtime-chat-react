import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
  html, body {
    font-family: 'Montserrat', sans-serif;
    background-color: #1b262c;
  }
  * {
    box-sizing: border-box;
  }
  .pl-10 {
  padding-left: 10px;
  }
  .pr-10 {
    padding-right: 10px;
  }
  .justifyStart {
    justify-content: flex-start;
  }
  .justifyEnd {
    justify-content: flex-end;
  }
  .colorWhite {
    color: white;
  }
  .colorDark {
    color: #353535;
  }
  .backgroundBlue {
    background: #0f4c81;
  }
  .backgroundLight {
    background: #F3F3F3;
  }
`;
