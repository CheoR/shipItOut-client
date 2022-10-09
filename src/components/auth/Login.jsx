import React from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from '@mui/material'

export const Login = (props) => {
  const username = React.createRef()
  const password = React.createRef()
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleLogin = (e) => {
    e.preventDefault()

    return fetch(`${process.env.REACT_APP_API}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if ('valid' in res && res.valid && 'token' in res) {
          localStorage.setItem('user_token', res.token)
          props.history.push('/bookings')
        } else {
          handleOpen()
        }
      })
  }
  return (
    <Box sx={{ height: '100%' }}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='login-alert-dialog-title'
        aria-describedby='login-alert-dialog-description'
      >
        <DialogTitle id='login-alert-dialog-title'>
          {'Invalid Username and/or Password'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='login-alert-dialog-description'>
            Please verify username and/or password is correct.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Box
        component='form'
        onSubmit={handleLogin}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          height: '50%',
          margin: '0 auto',
        }}
      >
        <Typography
          variant='h2'
          sx={{ textAlign: 'center' }}
        >
          ShipItOut
        </Typography>
        <Typography
          variant='h3'
          sx={{ textAlign: 'center' }}
        >
          Please Login
        </Typography>
        <Box sx={{ flex: 1 }}>{''}</Box>
        <FormControl variant='standard'>
          <InputLabel htmlFor='username'>Username</InputLabel>
          <Input
            id='username'
            inputRef={username}
            type='text'
            required
          />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel htmlFor='inputpassword'>Password</InputLabel>
          <Input
            id='inputpassword'
            inputRef={password}
            type='password'
            required
          />
        </FormControl>
        <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
          <Button
            variant='contained'
            type='submit'
            sx={{ width: 200 }}
          >
            Login
          </Button>
        </Box>
      </Box>
      <Typography
        variant='body1'
        sx={{ textAlign: 'center' }}
      >
        Not a member yet?{' '}
        <Link
          to='/register'
          style={{ textDecoration: 'none' }}
        >
          Register
        </Link>
      </Typography>
    </Box>
  )
}
