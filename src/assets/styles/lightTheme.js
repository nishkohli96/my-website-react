import { createTheme } from '@mui/material/styles';
import PoppinsFont from '../fonts/Poppins-Regular.ttf';

export default createTheme({
    typography: {
        fontFamily: 'Poppins, Arial',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'Poppins';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Poppins'), local('Poppins-Regular'), url(${PoppinsFont}) format('woff2');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
        },
    },
    palette: {
        primary: {
            main: '#007aba',
            text: '#1c1c1c',
        },
        secondary: {
            main: '#2B2B2B',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 300,
            mob: 600,
            md: 768,
            lg: 1024,
            xl: 1200,
        },
    },
});
