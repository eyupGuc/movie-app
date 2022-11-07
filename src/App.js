
import { ThemeProvider } from 'styled-components';
import './App.css';

import theme from "./components/globalStyles/theme"
import AppRouter from './router/AppRouter';
import { useState } from 'react';
import { AuthContext } from './context/AuthContext';
import { DataContext } from './components/context/DataContext';

function App() {
 
const[dataContext,setDataContext]=useState();

 
  return (
   <DataContext.Provider value={{dataContext,setDataContext}}>
     <ThemeProvider theme={theme}>
      <AppRouter/>
    </ThemeProvider>
   </DataContext.Provider >
  );
}

export default App;
