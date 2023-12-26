import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import { Box, FormControl } from '@mui/material';
import { Grid } from '@mui/material';
// import axios from 'axios';
// import './LoginForm.css';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email, password);
    // TODO: Implement login
    // const url = 'http://localhost:3000/token/generate';
    // const data = {
    //   email: email,
    //   password: password,
    // };
    // return axios.post(url, data);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <FormControl onClick={() => {}} className="login-form">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          height="20vh"
          width="30vw"
        >
          <Grid item xs={12}>
            <Input
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleLogin} label="Login" variant="contained" />
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
};

export default LoginForm;
