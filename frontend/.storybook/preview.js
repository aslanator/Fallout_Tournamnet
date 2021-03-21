import { addDecorator } from "@storybook/react";
import { ThemeProvider } from 'styled-components';
import {theme} from '../src/theme/index';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(Story => (
  <ThemeProvider theme={theme}>
      <Story/>
  </ThemeProvider>
))