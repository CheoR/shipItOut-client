import React from 'react'
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
  MenuItem,
  Select,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'

const ACCOUNT_TYPE = [
  {
    type: 'default',
    key: 0,
  },
  {
    type: 'shipper',
    key: 1,
  },
  {
    type: 'broker',
    key: 2,
  },
  {
    type: 'warehouse',
    key: 3,
  },
  {
    type: 'carrier',
    key: 4,
  },
  {
    type: 'portops',
    key: 5,
  },
]
export const Register = (props) => {
  const username = React.createRef()
  const firstName = React.createRef()
  const lastName = React.createRef()
  const email = React.createRef()
  const password = React.createRef()
  const verifyPassword = React.createRef()
  const company = React.createRef()
  const role = React.createRef()
  const phone = React.createRef()
  const accountType = React.createRef()

  const [openPasswordDialog, setOpenPasswordDialog] = React.useState(false)
  const [openErrorDialog, setOpenErrorDialog] = React.useState(false)

  const handleOpen = (type) => {
    if (type === 'password') {
      setOpenPasswordDialog(true)
    } else {
      setOpenErrorDialog(true)
    }
  }

  const handleClose = (type) => {
    if (type === 'password') {
      setOpenPasswordDialog(false)
    } else {
      setOpenErrorDialog(false)
    }
  }

  const handleRegister = (e) => {
    e.preventDefault()

    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        username: username.current.value,
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
        company: company.current.value,
        role: role.current.value,
        phone: phone.current.value,
        account_type: parseInt(accountType.current.value),
      }

      return fetch(`${process.env.REACT_APP_API}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.valid) {
            localStorage.setItem('user_token', res.token)
            props.history.push('/bookings')
          } else {
            // TODO: return error reason from server to display in popup
            handleOpen(res.reason)
          }
        })
        .catch((err) => {
          console.error(err)
        })
    } else {
      handleOpen('password')
    }
  }

  //   <dialog
  //     className='dialog dialog--auth'
  //     ref={invalidDialog}
  //   >
  //     <div>Could Not Register</div>
  //     <button
  //       className='button--close'
  //       onClick={(e) => invalidDialog.current.close()}
  //     >
  //       Close
  //     </button>
  //   </dialog>

  return (
    <Box sx={{ height: '100%' }}>
      <Dialog
        open={openPasswordDialog}
        onClose={() => handleClose('password')}
        aria-labelledby='password-alert-dialog-title'
        aria-describedby='password-alert-dialog-description'
      >
        <DialogTitle>{'Passwords do not match.'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {'Please verify passwords match.'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleClose('password')}
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openErrorDialog}
        onClose={() => handleClose('error')}
        aria-labelledby='error-alert-dialog-title'
        aria-describedby='error-alert-dialog-description'
      >
        <DialogTitle>{"Something's Wrong"}</DialogTitle>
        <DialogContent>
          {/* TODO: pass validation error to popup */}
          <DialogContentText>{'Could not create user.'}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleClose('error')}
            autoFocus
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Box
        component='form'
        onSubmit={handleRegister}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '50%',
          height: '100%',
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
          Register account
        </Typography>
        <FormControl variant='standard'>
          <InputLabel htmlFor='username'>Username</InputLabel>
          <Input
            id='username'
            inputRef={username}
            type='text'
            required
            autoFocus
          />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel htmlFor='firstName'>First Name</InputLabel>
          <Input
            id='firstName'
            inputRef={firstName}
            type='text'
            required
            autoFocus
          />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel htmlFor='lastName'>Last Name</InputLabel>
          <Input
            id='lastName'
            inputRef={lastName}
            type='text'
            required
            autoFocus
          />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Input
            id='email'
            inputRef={email}
            type='email'
            required
            autoFocus
          />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel htmlFor='company'>Company</InputLabel>
          <Input
            id='company'
            inputRef={company}
            type='text'
            required
            autoFocus
          />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel htmlFor='role'>Role</InputLabel>
          <Input
            id='role'
            inputRef={role}
            type='text'
            required
            autoFocus
          />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel htmlFor='phone'>Phone</InputLabel>
          <Input
            id='phone'
            inputRef={phone}
            type='phone'
            required
            autoFocus
          />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel htmlFor='password'>Password</InputLabel>
          <Input
            id='password'
            inputRef={password}
            type='password'
            required
            autoFocus
          />
        </FormControl>
        <FormControl variant='standard'>
          <InputLabel htmlFor='verifyPassword'>Verify Password</InputLabel>
          <Input
            id='verifyPassword'
            inputRef={verifyPassword}
            type='password'
            required
            autoFocus
          />
        </FormControl>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id='accountType'>Account Type</InputLabel>
          <Select
            labelId='accountType'
            id='accountType'
            name='account_type'
            // defaultValue={ACCOUNT_TYPE[0]}
            value={accountType.value}
            inputRef={accountType}
          >
            {ACCOUNT_TYPE.map((role) => (
              <MenuItem
                key={role.key}
                id={role.key}
                value={role.key}
              >
                {role.type.toUpperCase()}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ mt: 5, display: 'flex', justifyContent: 'center' }}>
          <Button
            variant='contained'
            type='submit'
            sx={{ width: 200 }}
          >
            Register
          </Button>
        </Box>
        <Typography
          variant='body1'
          sx={{ textAlign: 'center' }}
        >
          Already registered?{' '}
          <Link
            to='/login'
            style={{ textDecoration: 'none' }}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}
