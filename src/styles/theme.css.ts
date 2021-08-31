import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    gray: {
      900: '#212121',
      800: '#424242',
      700: '#616161',
      600: '#757575',
      500: '#9e9e9e',
      400: '#bdbdbd',
      300: '#e0e0e0',
      200: '#eeeeee',
      100: '#f5f5f5',
    },
    white: '#fff',
    pink: {
      900: '#880e4f',
      800: '#ad1457',
      700: '#c2185b',
      600: '#d81b60',
      500: '#e91e63',
      400: '#ec407a',
      300: '#f06292',
      200: '#f48fb1',
      100: '#f8bbd0',
      50: '#fce4ec',
    },
  },
});
