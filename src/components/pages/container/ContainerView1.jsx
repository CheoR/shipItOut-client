import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { makeStyles } from '@mui/material/styles'
import {
  Grid,
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  Button,
} from '@mui/material'
import DateTimePicker from '@mui/lab/DateTimePicker'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { ThemeProvider } from '@mui/material/styles'

import { URL } from '../../../constants/routes'


export const ContainerView1 = ({ nextStep, formValues }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 80,
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    button: {
      margin: theme.spacing(1),
    },
  }))

  const classes = useStyles()

  const next = (e) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <ThemeProvider>
      <fieldset style={{ margin: '0 auto', width: '60%' }}>
        <h1 style={{ margin: '0 auto', textAlign: 'center' }}>
          {formValues.step} View {formValues.booking}
        </h1>
        <form
          className={classes.root}
          noValidate
          autoComplete='off'
          style={{ border: 'black', width: '100%', margin: '0 auto' }}
        >
          <Grid
            container
            spacing={4}
            style={{ width: '100%', margin: '0 auto ' }}
          >
            <Grid
              item
              xs={4}
              container
              direction='column'
            >
              <TextField
                id='name'
                name='name'
                label='Agent Name'
                defaultValue={formValues.full_name}
                disabled
                style={{ width: '50%' }}
              />
              <TextField
                id='email'
                name='email'
                label='Agent Email'
                defaultValue={formValues.email}
                disabled
                style={{ width: '50%' }}
              />
              <TextField
                id='phone'
                name='phone'
                label='Agent Phone'
                defaultValue={formValues.phone}
                disabled
                style={{ width: '50%' }}
              />
              <div
                style={{
                  width: '100%',
                  marginTop: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Button
                  variant='contained'
                  color='secondary'
                  label='cabcek'
                  component={RouterLink}
                  to={URL.BOOKINGS}
                  className={classes.button}
                >
                  Cancel
                </Button>
                <Button></Button>
                <Button
                  variant='contained'
                  color='secondary'
                  label='continue'
                  className={classes.button}
                  onClick={next}
                >
                  Next
                </Button>
              </div>
            </Grid>

            <Grid
              item
              xs={4}
            >
              <TextField
                id='service'
                name='service'
                label='Service'
                defaultValue={formValues.service}
                disabled
                style={{ width: '50%' }}
              />
              <TextField
                id='voyage'
                name='voyage'
                label='Voyage'
                defaultValue={formValues.voyage}
                disabled
                style={{ width: '50%' }}
              />
              <TextField
                id='carrier'
                name='carrier'
                label='Carrier'
                defaultValue={formValues.carrier}
                disabled
                style={{ width: '50%' }}
              />
              <TextField
                id='size'
                name='size'
                label='Container Type'
                defaultValue={formValues.size}
                disabled
                style={{ width: '50%' }}
              />
              <TextField
                id='container'
                name='container'
                label='Container'
                defaultValue={formValues.container}
                disabled
                style={{ width: '50%' }}
              />
              <TextField
                id='port'
                name='port'
                label='Loading Port'
                defaultValue={formValues.port}
                disabled
                style={{ width: '50%' }}
              />
              <TextField
                id='destination'
                name='destination'
                label='Unloading Port'
                defaultValue={formValues.destination}
                disabled
                style={{ width: '50%' }}
              />
              <TextField
                id='booking_status'
                name='booking_status'
                label='Booking Status'
                defaultValue={formValues.booking_status}
                disabled
                style={{ width: '50%' }}
              />
            </Grid>

            <Grid
              item
              xs={4}
            >
              <FormControl
                component='fieldset'
                className={classes.formControl}
                disabled
              >
                <FormLabel component='legend'>Verify About Booking</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    id='document_submitted'
                    name='document_submitted'
                    label='Documents'
                    control={
                      <Checkbox
                        checked={formValues.document_submitted}
                        name='document_submitted'
                      />
                    }
                  />

                  <FormControlLabel
                    id='money_owed'
                    name='money_owed'
                    label='Dues'
                    control={
                      <Checkbox
                        checked={formValues.money_owed}
                        name='money_owed'
                      />
                    }
                  />

                  <FormControlLabel
                    id='issues'
                    name='issues'
                    label='Issues'
                    control={
                      <Checkbox
                        checked={formValues.issues}
                        name='issues'
                      />
                    }
                  />
                </FormGroup>

                <FormHelperText>Safety First</FormHelperText>
              </FormControl>
              <DateTimePicker
                style={{ width: '100%' }}
                value={formValues.pickup_appt}
                label='Pick Up'
                showTodayButton
                disabled
              />

              <DateTimePicker
                style={{ width: '100%' }}
                value={formValues.port_cutoff}
                label='Port Cut'
                showTodayButton
                disabled
              />

              <DateTimePicker
                style={{ width: '100%' }}
                value={formValues.rail_cutoff}
                disablePast
                label='Rail Cut'
                showTodayButton
                disabled
              />
              <TextField
                id='address'
                name='address'
                label='Pickup Address'
                defaultValue={formValues.address}
                style={{ width: '100%' }}
                disabled
              />
              <TextareaAutosize
                id='booking_notes'
                name='booking_notes'
                aria-label='empty textarea'
                placeholder='Booking Notes'
                value={formValues.booking_notes}
                style={{ width: '100%' }}
                rowsMin={5}
                disabled
              />
            </Grid>
          </Grid>
        </form>
      </fieldset>
    </ThemeProvider>
  )
}
