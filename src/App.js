import { Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
// import lightTheme from './assets/styles/lightTheme';
import darkTheme from './assets/styles/darkTheme';
import Loader from '@Components/Loader';
import Routing from '@Components/Routing';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={darkTheme}>
        <Routing />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
