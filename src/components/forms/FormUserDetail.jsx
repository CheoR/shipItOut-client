import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"
import { AppBar } from "@material-ui/core"
import { TextField } from "@material-ui/core"
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

export const FormUserDetail = ({ nextStep, handleChange, values }) => {

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  const next = (e) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <ThemeProvider>
      <div>
        {/* <AppBar title="Enter User Details" /> */}
        <h1>Enter user details</h1>

        <TextField
          id="firstName"
          // hintText="First Name"
          // floatingLabelText="First Name Here"
          label="First Name"
          onChange={handleChange}
          defaultValue={values.firstName}
        />
        <br />

        <TextField
          id="lastName"
          label="Last Name"
          // hintText="Last Name"
          // floatingLabelText="Last Name Here"
          onChange={handleChange}
          defaultValue={values.lastName}
        />
        <br />

        <TextField
          id="email"
          label="Email"
          // hintText="Email"
          // floatingLabelText="Email Here"
          onChange={handleChange}
          defaultValue={values.email}
        />
        <br />

        <Button
          variant="contained"
          color="secondary"
          label="continue"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={next}
        >
          continue
        </Button>
      </div>
    </ThemeProvider>
  )
}
