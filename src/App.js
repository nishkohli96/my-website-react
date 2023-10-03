import { ThemeProvider } from '@mui/material/styles';
// import lightTheme from './assets/styles/lightTheme';
import darkTheme from './assets/styles/darkTheme';
import Routing from '@Components/Routing';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
