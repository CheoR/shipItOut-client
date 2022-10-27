import React, { useContext, useState, } from 'react'
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { UserContext } from '../../context/UserContext'
import axiosInstance from '../../utils/axios'
import { URL } from '../../constants/routes'


const loginValidationSchema = Yup.object({
  username: Yup
    .string("Please enter username")
    // .min(5, "Username length must be at least 5 characters")
    .required("Username Required"),
  password: Yup
    .string()
    // .min(2, "Pasword not secure")
    .required("Password Required)")
})

const initialLoginFormValues = {
    username: "",
    password: ""
  }


export const Login = () => {
  // error if user manually inputs url since not navigating to /login from another state
  // const { state: { from = "/" } = {} } = useLocation();
  const { state } = useLocation();
  const prevPage = state?.from || undefined

  const { login } = useContext(UserContext)
  const [open, setOpen] = useState(false)
  const navigateTo = useNavigate()

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const formik = useFormik({
    initialValues: initialLoginFormValues,
    validationSchema: loginValidationSchema,
    onSubmit: (values, helpers) => {
      handleLogin(values)
      .catch((err) => {
        helpers.setErrors({
          submit: err.message,
        })
      })
    }
  })

  const handleLogin = async (values) => {
    return await axiosInstance.post(URL.LOGIN, values)
      .then((res) => {
        if (
          'valid' in res.data &&
          res.data.valid &&
          'token' in res.data
        ) {
          login({
            name: values.username,
            token: res.data.token,
          })
          // prevPage if they tried to view a page without logging in first
          // take user back to that page
          navigateTo(prevPage ?? URL.HOME, { replace: true })
        } else {
          handleOpen()
          throw Error("Could not log in")
        }
      })
      .catch((err) => {
        const msg = `Error: could not login.\n`
        if (err.response) {
          // Not in 200 response range
          console.error(`${msg}\n `, err.response.data)
          handleOpen()
          throw Error(`${msg}\n `, err.response.data)
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
        onSubmit={formik.handleSubmit}
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
          <TextField
            fullWidth
            variant='standard'
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            type='text'
            label="Username"
            id="username"
            name="username"
          />

          <TextField
            fullWidth
            variant='standard'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            type='password'
            label="Password"
            id="password"
            name="password"
          />

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
        <RouterLink
          to={URL.REGISTER}
          style={{ textDecoration: 'none' }}
        >
          Register
        </RouterLink>
      </Typography>
    </Box>
  )
}
