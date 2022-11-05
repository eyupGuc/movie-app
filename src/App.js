
import { ThemeProvider } from 'styled-components';
import './App.css';
import Main from './pages/Main';
import theme from "./components/globalStyles/theme"
import AppRouter from './router/AppRouter';
import { useState } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const[user,setUser]=useState("")
  console.log(user);
  return (
   <AuthContext.Provider value={{user,setUser}}>
     <ThemeProvider theme={theme}>
      <AppRouter/>
    </ThemeProvider>
   </AuthContext.Provider>
  );
}

export default App;
