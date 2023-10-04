import { createTheme } from '@mui/material/styles';

export default createTheme({
    palette: {
        primary: {
            main: '#1F1F1F',
            text: '#F7F6F3',
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
