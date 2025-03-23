import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
   
body {
    margin: 0;
    font-family: "Nunito", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    //background-color: ${theme.colors.primaryBg};
    line-height: 150%;
    
    
 
}

a {
    text-decoration: none;

}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
}

section {
    padding-top: 140px;

    @media ${theme.media.mobile} {
        padding-top: 80px;
    
    
  }
}

.project:nth-of-type(odd) {
    flex-direction: row-reverse;

    @media ${theme.media.tablet} {
        flex-direction: column;
    }
}


` 