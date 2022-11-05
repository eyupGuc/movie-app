import React from 'react'
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import  Typography  from "@mui/material/Typography";

const Register = () => {
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
        />
      </Box>
      <Box align="center" mt={1}>
        <TextField
          margin="normal"
          id="password"
          label="password"
          placeholder="Enter your password"
          fullWidth
        />
        <Button variant="contained" sx={{ mt: 4 }}>
          Register
        </Button>
      </Box>

     
    </Container>
  )
}

export default Register;