import { createGlobalStyle } from "styled-components";
import Fonts from "./fonts";

const GlobalStyle = createGlobalStyle`

  ${Fonts};
 
  body {
    font-family:  "Raleway", "Oswald", sans-serif;
  }

`;

export default GlobalStyle;
