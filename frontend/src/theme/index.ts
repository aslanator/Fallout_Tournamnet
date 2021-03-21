import {colors} from './colors';
import styled from 'styled-components';

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
        alert: string,
        };
    }
  }