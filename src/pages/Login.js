import React, { useContext ,useState} from "react";
// import  getAuth  from "../auth/firebase"
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import  Typography  from "@mui/material/Typography";
import { AuthContext } from "../context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../auth/firebase"
import { Password } from "@mui/icons-material";


const Login = () => {
  const[email,setEmail]=useState();
  const[password,setPassword]=useState();
    const handleClick=()=>{
      if(email && Password){
        signInWithEmailAndPassword(auth,email,Password)
      }
    }

  return (
    <Container align="center" sx={{maxWidth:600}}>
      <Typography variant="h4" mt={4} align="center">
        LOGİN
      </Typography>
      <Box align="center" mt={1}>
        <TextField
          id="email"
          label="email"
          placeholder="Enter your email"
          fullWidth
          onChange={(e)=>setEmail(e.target.value)}
        />
      </Box>
      <Box align="center" mt={1}>
        <TextField
          margin="normal"
          id="password"
          label="password"
          placeholder="Enter your password"
          fullWidth
          onChange={(e)=>setPassword(e.target.value)}
        />
        <Button variant="contained" sx={{ mt: 4 }}>
          Login
        </Button>
      </Box>

      <Box>
        <Button variant="text">Forgat Password?</Button>
      </Box>
      <Box>
        <Button onClick={handleClick}variant="contained">Continue with Google</Button>
      </Box>
    </Container>
  );
};

export default Login;
