import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();
  // const{user,setUser}=useContext(AuthContext);
  // setUser("Ahmet");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick = () => {
    // console.log(email);

    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            navigate("/");
          }
        })
        .catch((error) => {
          alert(error);
        });
    }
  };
  return (
    <Container align="center" sx={{ maxWidth: 600 }}>
      <Typography variant="h4" mt={4} align="center">
        REGISTER
      </Typography>
      <Box align="center" mt={1}>
        <TextField
          id="email"
          label="email"
          placeholder="Enter your email"
          fullWidth
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Box>
      <Box align="center" mt={1}>
        <TextField
          margin="normal"
          id="password"
          label="password"
          placeholder="Enter your password"
          fullWidth
          required
          value={password || ""}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleClick} variant="contained" sx={{ mt: 4 }}>
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Register;
