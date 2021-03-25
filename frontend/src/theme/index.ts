import {colors} from './colors';

export const theme = {
    colors
}

declare module 'styled-components' {
    export interface DefaultTheme {  
      colors: {
        primary1: string,
        secondary1: string,
        secondary2: string,
        primary2: string,
        primary3: string,
        background: string,
        background2: string,
        alert: string,
        };
    }
  }