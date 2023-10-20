import { Roboto, Sofia_Sans } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const sofiaSans = Sofia_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#008445',
    },
    secondary: {
      main: '#949E99',
    },
    error: {
      main: red.A400,
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: sofiaSans.style.fontFamily,
  },
});

export default theme;
