import React from 'react'
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import  Typography  from "@mui/material/Typography";
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { useState } from 'react';

const Register = () => {
  // const[user,setUser]=useState({email:"",password:" "})
  //! Consuming
  const{user,setUser}=useContext(AuthContext);
  console.log(user)
      return (
    <Container align="center" sx={{maxWidth:600}}>
      <Typography variant="h4" mt={4} align="center">
        REGISTER
      </Typography>
      <Box align="center" mt={1}>
        <TextField
          id="email"
          label="email"
          placeholder="Enter your email"
          fullWidth
          value={user?.email || ""}
          onChange={(e)=>setUser({...user,email:e.target.value})}
        />
      </Box>
      <Box align="center" mt={1}>
        <TextField
          margin="normal"
          id="password"
          label="password"
          placeholder="Enter your password"
          fullWidth
          value={user?.password || ""}
          onChange={(e)=>setUser({...user,password:e.target.value})}
       
        />
        <Button variant="contained" sx={{ mt: 4 }}>
          Register
        </Button>
      </Box>

     
    </Container>
  )
}

export default Register;