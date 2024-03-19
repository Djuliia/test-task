import { createGlobalStyle } from 'styled-components';
import { theme } from 'theme';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

 html {
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
     
   }

  body {
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    font-size: 16px;
    color: ${theme.colors.mainText};
    background-color: ${theme.colors.bg};
  }

 h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
      }

  button {
    font-family: inherit;
    padding: 0;
    margin: 0;
    cursor: pointer;
    outline: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px #fff inset;
}

  `;
