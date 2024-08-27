// src/App.tsx
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import { darkTheme, lightTheme } from './themes';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Button borderColor="disabled-color" borderRadius='extraLarge' onClick={toggleTheme}>
        {theme}
      </Button>
      <div id="portal-root" />
    </ThemeProvider>
  );
};

export default App;
