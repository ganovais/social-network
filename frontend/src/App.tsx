import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';
import { theme_dark } from './styles/theme_dark';
import 'react-tabs/style/react-tabs.css';

function App() {
  const [theme, setTheme] = useState(theme_dark);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
