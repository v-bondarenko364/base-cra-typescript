import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

import muiTheme from './muiTheme';
import breakpoints from '../patterns/breakpoints';
import colors from '../patterns/colors';


// TODO: add basic loading for custom font when finish adding custom paths
// import NexaRegular from '../../static/fonts/NexaRegular.otf';
// import NexaBold from '../../static/fonts/NexaRegular.otf';
// import NexaXBold from '../../static/fonts/NexaRegular.otf';

/*
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
export const GlobalStyle = createGlobalStyle`
	${reset}

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


export const theme: DefaultTheme = {
  breakpoints,
	colors,
	muiTheme,
};
