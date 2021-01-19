import spacing from 'assets/tokens/styledComponent/_spacing';
import { createGlobalStyle } from 'styled-components';
import color from './assets/tokens/styledComponent/_colorsStyled';
import fontSizes from './assets/tokens/styledComponent/_fontSize';

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#root {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  height: 100%;
  margin: ${spacing.spacingXs};
}

body {
  background: ${color.appDarken} ;
  font: 500 ${fontSizes.bodyMd} poppins;
}

// material ui

.MuiMenu-paper {
  margin-top: ${spacing.spacingTiny}
}

`;

export default GlobalStyle;
