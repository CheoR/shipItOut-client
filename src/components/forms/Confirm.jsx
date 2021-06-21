import React from "react"

import { ThemeProvider } from "@material-ui/core/styles"
import { AppBar } from "@material-ui/core"
import { TextField } from "@material-ui/core"
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';


export const Confirm = ({ nextStep, backStep, handleChange, values }) => {

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  const next = (e) => {
    e.preventDefault()
    // this is where you would send
    // data to backend
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
        <h1>Confirm</h1>

        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={values.firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={values.lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={values.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={values.occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={values.city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" secondary={values.bio} />
          </ListItem>
        </List>

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
          Confirm & Continue
        </Button>
      </div>
    </ThemeProvider>
  )
}
