
import { ThemeProvider } from 'styled-components';
import './App.css';

import theme from "./components/globalStyles/theme"
import AppRouter from './router/AppRouter';
import { useState } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {
 


 
  return (
   <>
     <ThemeProvider theme={theme}>
      <AppRouter/>
    </ThemeProvider>
   </>
  );
}

export default App;
