import { createGlobalStyle } from 'styled-components';
// import reset from 'styled-reset';

// import breakpoints from '../patterns/breakpoints';
// import colors from '../patterns/colors';
// import fonts from '../patterns/fonts';

// import NexaRegular from '../../static/fonts/NexaRegular.otf';
// import NexaBold from '../../static/fonts/NexaRegular.otf';
// import NexaXBold from '../../static/fonts/NexaRegular.otf';

export const GlobalStyle = createGlobalStyle`
  /* ${reset}

  @font-face {
    src: ${NexaRegular};
    font-family: 'Nexa';
    font-weight: normal;
  }

  @font-face {
    src: ${NexaBold};
    font-family: 'Nexa';
    font-weight: bold;
  }

  @font-face {
    src: ${NexaXBold};
    font-family: 'Nexa';
    font-weight: 900;
  } */

  body {
    font-family: 'Nexa', sans-serif;
  }

  a {
    text-decoration: none;

    &:focus,
    &:hover {
      text-decoration: none;
    }
  }
`;

export const basicTheme = {
  breakpoints,
  colors,
  fonts,
};
