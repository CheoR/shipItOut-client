import React from 'react'

import { ThemeProvider } from '@mui/material/styles'
import Button from '@mui/material/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'

export const Confirm = ({ nextStep, backStep, handleChange, values }) => {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }))

  const classes = useStyles()

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
        <h1>Confirm</h1>

        <List>
          <ListItem>
            <ListItemText
              primary='First Name'
              secondary={values.firstName}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Last Name'
              secondary={values.lastName}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Email'
              secondary={values.email}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Occupation'
              secondary={values.occupation}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='City'
              secondary={values.city}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary='Bio'
              secondary={values.bio}
            />
          </ListItem>
        </List>

        <Button
          variant='contained'
          color='secondary'
          label='continue'
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={back}
        >
          Back
        </Button>

        <Button
          variant='contained'
          color='secondary'
          label='continue'
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
