import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"
import { AppBar } from "@material-ui/core"
import { TextField } from "@material-ui/core"
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

export const FormPersonalDetails = ({ nextStep, backStep, handleChange, values }) => {

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

  const back = (e) => {
    e.preventDefault()
    backStep()
  }

  return (
    <ThemeProvider>
      <div>
        {/* <AppBar title="Enter User Details" /> */}
        <h1>Enter Personal details</h1>

        <TextField
          id="occupation"
          // hintText="Occupation"
          // floatingLabelText="Occupation Here"
          label="Occupation"
          onChange={handleChange}
          defaultValue={values.occupation}
        />
        <br />

        <TextField
          id="city"
          label="City"
          // hintText="City"
          // floatingLabelText="City Here"
          onChange={handleChange}
          defaultValue={values.city}
        />
        <br />

        <TextField
          id="bio"
          label="Bio"
          // hintText="bio"
          // floatingLabelText="bio Here"
          onChange={handleChange}
          defaultValue={values.bio}
        />
        <br />

        <Button
          variant="contained"
          color="secondary"
          label="continue"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={back}
        >
          Back
        </Button>


        <Button
          variant="contained"
          color="secondary"
          label="continue"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={next}
        >
          Next
        </Button>
      </div>
    </ThemeProvider>
  )
}
