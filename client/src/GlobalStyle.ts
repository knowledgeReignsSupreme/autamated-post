import { createGlobalStyle } from 'styled-components';

interface ColorObject {
  main: string;
  secondary: string;
  secondaryDark: string;
  danger: string;
  text: string;
  grayish: string;
  textBold: string;
  white: string;
  transparent: string;
}

export const colorsVariables: ColorObject = {
  main: '#aa2ee6',
  secondary: '#54C2EF',
  secondaryDark: '#06719b',
  danger: 'darkred',
  text: '#3a3939',
  textBold: '#000',
  white: '#fff',
  grayish: '#e4e4e4',
  transparent: 'transparent',
};

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  :root{
     font-family: 'Roboto', sans-serif;
    }

    html {
      color: ${colorsVariables.text};
    }

button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    cursor: pointer;
}

button:disabled {
  cursor:not-allowed;
}


h1,h2,h3 {
  font-weight: bold;
}

main {
  width: 2000px;
  max-width: 95%;
  margin: 0 auto;
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
  color: inherit;
}

input {
  min-height: 2rem;
  padding-left: .4rem;
}

`;
