import React, { useContext, useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { ACCOUNT_TYPE } from '../../constants/formFields'
import { UserContext } from '../../context/UserContext'
import axiosInstance from '../../utils/axios'
import { URL } from '../../constants/routes'

const PHONEREGEXP = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const registrationValidationSchema = Yup.object({
  username: Yup
    .string("Please enter username")
    .min(5, "Username length must be at least 5 characters")
    .required("Username Required"),
  firstName: Yup
    .string("Please enter First Name")
    .min(2, 'First Name length must be at least 2 characters')
    .required("First Name Required"),
  lastName: Yup
    .string("Please enter Last Name")
    .min(2, 'Last Name length must be at least 2 characters')
    .required("Last Name Required"),
  email: Yup
    .string('Please enter your email')
    .email('Please enter a valid email')
    .required('Email Required'),
  company: Yup
    .string("Please enter Company Name")
    .min(2, 'Company Name length must be at least 2 characters')
    .required("Company Name Required"),
  role: Yup
    .string("Please enter Company Role")
    .min(2, 'Company Role length must be at least 2 characters')
    .required("Company Role Required"),
  phone: Yup
    .string("Please enter Company Phone Number")
    .matches(PHONEREGEXP, 'Phone Number Invalid')
    .required("Company Phone Required"),
  password: Yup
    .string()
    // .min(2, "Pasword not secure")
    .required("Password Required"),
  verifyPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  accountType: Yup
    .number()
    .test(
      'Is positive?',
      'Please Select Account Type',
      (value) => value > 0
    )
    .required(),
})

const initialRegistrationFormValues = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  role: "",
  phone: "",
  password: "",
  verifyPassword: "",
  accountType:   0,
}


export const Register = () => {
  const { login } = useContext(UserContext)
  const navigateTo = useNavigate()

  const [openPasswordDialog, setOpenPasswordDialog] = useState(false)
  const [openErrorDialog, setOpenErrorDialog] = useState(false)

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

  const formik = useFormik({
    initialValues: initialRegistrationFormValues,
    validationSchema: registrationValidationSchema,
    onSubmit: (values, helpers) => {
      console.log('formik on submit')
      delete values.verifyPassword
      handleRegister(values)
      .catch((err) => {
        helpers.setErrors({
          submit: err.message,
        })
      })
    }
  })

  const handleRegister = async (values) => {
    console.log('in handle register')
    console.log(values)
    const newUser = {
      username: values.username,
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      password: values.password,
      company: values.company,
      role: values.role,
      phone: values.phone,
      account_type: parseInt(values.accountType),
    }

    return await axiosInstance.post(URL.REGISTER, newUser)
      .then((response) => {
        if (response.data.valid) {
          login({
            name: values.username,
            token: response.data.token,
          })
          navigateTo(URL.BOOKINGS)
        } else {
          // TODO: return error reason from server to display in popup
          handleOpen(response.data.reason)
          throw Error("Could not register")
        }
      })
      .catch((err) => {
        const msg = `Error: could not register ${values.username}.\n`
        if(err.response) {
          // Not in 200 response range
          console.error(`${msg}\n `, err.response.data)
          handleOpen()
          throw Error(`${msg}\n `, err.response.data)
        }
      })
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
        onSubmit={formik.handleSubmit}
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
          autoFocus
        />

        <TextField
          fullWidth
          variant='standard'
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          type='text'
          label="First Name"
          id="firstName"
          name="firstName"
          autoFocus
        />

        <TextField
          fullWidth
          variant='standard'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
          type='text'
          label="Last Name"
          id="lastName"
          name="lastName"
          autoFocus
        />

        <TextField
          fullWidth
          variant='standard'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          type='email'
          label="Email"
          id="email"
          name="email"
          autoFocus
        />

        <TextField
          fullWidth
          variant='standard'
          value={formik.values.company}
          onChange={formik.handleChange}
          error={formik.touched.company && Boolean(formik.errors.company)}
          helperText={formik.touched.company && formik.errors.company}
          type='text'
          label="Company"
          id="company"
          name="company"
          autoFocus
        />

        <TextField
          fullWidth
          variant='standard'
          value={formik.values.role}
          onChange={formik.handleChange}
          error={formik.touched.role && Boolean(formik.errors.role)}
          helperText={formik.touched.role && formik.errors.role}
          type='text'
          label="Role"
          id="role"
          name="role"
          autoFocus
        />

        <TextField
          fullWidth
          variant='standard'
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          type='tel'
          label="Phone"
          id="phone"
          name="phone"
          autoFocus
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
          autoFocus
        />

        <TextField
          fullWidth
          variant='standard'
          value={formik.values.verifyPassword}
          onChange={formik.handleChange}
          error={formik.touched.verifyPassword && Boolean(formik.errors.verifyPassword)}
          helperText={formik.touched.verifyPassword && formik.errors.verifyPassword}
          type='password'
          label="Verify Password"
          id="verifyPassword"
          name="verifyPassword"
          autoFocus
        />

        <TextField
          select
          fullWidth
          id="accountType"
          label="Account Type"
          variant='standard'
          name='account_type'
          error={formik.touched.accountType && Boolean(formik.errors.accountType)}
          helperText={formik.touched.accountType && formik.errors.accountType}
          onChange={formik.handleChange("accountType")}
          value={formik.values.accountType || 0}
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
        </TextField>

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
          <RouterLink
            to={URL.LOGIN}
            style={{ textDecoration: 'none' }}
          >
            Login
          </RouterLink>
        </Typography>
      </Box>
    </Box>
  )
}
