// src/App.tsx
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './themes';
import image from '@/assets/Ts.jpg';
import Logo from '@/assets/logo.svg';
import Button from './components/Button';

// import { capitalize } from '87654321';

// console.log(capitalize(''));

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  // console.log(isEven(4));

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Button
        borderColor="disabled-color"
        borderRadius="extraLarge"
        onClick={toggleTheme}
      >
        {theme}
      </Button>
      <br />
      <img src={image} alt="ts image logo" width={300} height={150} />
      <br />
      <img src={Logo} alt="ts image logo" width={300} height={150} />
      <br />
      {__PLATFORM__ === 'desktop' && <div>ISDESKTOPPLATFORM</div>}
      {__PLATFORM__ === 'mobile' && <div>ISMOBILEPLATFORM</div>}
      {__ENV__ === 'development' && <div>ISDEVELOPMENT</div>}
      <div id="portal-root" />
    </ThemeProvider>
  );
};

export default App;
function addDevtools() {
  throw new Error('Function not implemented.');
}
