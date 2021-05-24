import { createGlobalStyle } from 'styled-components';

interface ColorObject {
  main: string;
  danger: string;
  text: string;
  textBold: string;
  white: string;
}

export const colorsVariables: ColorObject = {
  main: '#185adb',
  danger: '#962d2d',
  text: '#3a3939',
  textBold: '#000',
  white: '#fff',
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

h1,h2,h3 {
  font-weight: bold;
}

main {
  width: 2000px;
  max-width: 95%;
  margin: 0 auto;

}


`;
