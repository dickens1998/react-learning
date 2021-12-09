import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Axios from 'axios';
import Alert from '@material-ui/core/Alert';
import { useHistory } from 'react-router-dom';
import AlertTitle from '@material-ui/core/AlertTitle'

function Copyright (props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    </Typography>
  );
}
const theme = createTheme();
// eslint-disable-next-line react-hooks/rules-of-hooks
// const history = useHistory();

export default function SignIn () {
  let history = useHistory();
  const [isLogin, setIsLogin] = useState(false);
  const [isShowMessage, setIsShowMessage] = useState(false);
  const [messge, setMesagee] = useState('');

  const handleSubmit = (event) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // console.log(useHistory());
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('username'),
      password: data.get('password'),
    });


    // eslint-disable-next-line no-console
    let loginData = `grant_type=password&username=${data.get('username')}&password=${data.get('password')}`;

    Axios({
      headers: {
        Authorization: 'Basic NDUwYzZjMDNmYzQ0YzQzYjo3OWQ5MDJkYmZlM2Q3ODFm'
      },
      method: 'post',
      url: 'http://xxxxxxxxx/Token',
      data: loginData
    }).then(response => {

      console.log(response);
      if (response.status === 200) {
        setIsLogin(true);
        setMesagee('success.')
        history.push('/detail')
      } else {
        setIsShowMessage(true);
        console.log(response)
      }
    }).catch(error => {
      setIsShowMessage(true);
      console.log(error)
    });
    setMesagee('error')
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* <Alert severity="error">
              <AlertTitle >Error</AlertTitle>The user name or password is incorrect.
            </Alert> */}
            <div style={{ display: isShowMessage ? 'block' : 'none' }}>
              <Alert severity={isLogin ? "success" : "error"}>
                <AlertTitle ></AlertTitle>{messge}
              </Alert>
            </div>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
