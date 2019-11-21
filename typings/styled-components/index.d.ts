import 'styled-components';
import { Theme } from '@material-ui/core/styles';

import breakpoints from './patterns/breakpoints';

declare module 'styled-components' {
  export interface DefaultTheme {
    muiTheme: Theme;
    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    colors: {
			black: string;
			white: string;
    };
  }
}
