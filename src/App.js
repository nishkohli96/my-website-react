import { ThemeProvider } from '@mui/material/styles';
import darkTheme from './assets/styles/darkTheme';
import lightTheme from './assets/styles/lightTheme';
import Routing from '@Components/Routing';

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Routing />
        </ThemeProvider>
    );
}

export default App;
