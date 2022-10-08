import React from 'react'

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
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom'
import Alert from '@material-ui/lab/Alert'

import { agent } from './TestFormData'

export const BkgPage3 = ({
  handleInputChange,
  handleCheckBoxChange,
  handleSubmit,
  nextStep,
  prevStep,
  formValues,
}) => {
  const token = localStorage.getItem('user_token')
  const history = useHistory()
  const location = useLocation()

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

  //  const next = (e) => {
  //   e.preventDefault()
  //   nextStep()
  //  }

  const back = (e) => {
    e.preventDefault()
    prevStep()
  }

  const create = (e) => {
    console.table('all values')
    e.preventDefault()
    console.table(formValues)

    return fetch(`${process.env.REACT_APP_API}/create`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
    // .then(res => alert("Created"))
  } // create

  return (
    <fieldset style={{ margin: '0 auto', width: '60%' }}>
      <h1 style={{ margin: '0 auto', textAlign: 'center' }}>Product</h1>
      <form
        className={classes.root}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
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
            {location.pathname.includes('create') ? (
              <></>
            ) : (
              <>
                <TextField
                  id='name'
                  name='name'
                  label='Agent Name'
                  defaultValue={agent.name}
                  disabled
                  style={{ width: '50%' }}
                />
                <TextField
                  id='email'
                  name='email'
                  label='Agent Email'
                  defaultValue={agent.email}
                  disabled
                  style={{ width: '50%' }}
                />
                <TextField
                  id='phone'
                  name='phone'
                  label='Agent Phone'
                  defaultValue={agent.phone}
                  disabled
                  style={{ width: '50%' }}
                />
              </>
            )}
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
                component={Link}
                to='/bookings'
                className={classes.button}
              >
                Cancel
              </Button>
              <Button
                variant='contained'
                color='secondary'
                label='continue'
                className={classes.button}
                onClick={back}
              >
                Back
              </Button>

              {/* <Button
          variant="contained"
          color="secondary"
          label="continue"
          className={classes.button}
          onClick={create}
         >
          Create
         </Button> */}

              {/* <Link to="/"> */}
              <Button
                variant='contained'
                color='secondary'
                label='continue'
                className={classes.button}
                onClick={(e) => {
                  e.preventDefault()
                  console.table(formValues)

                  return fetch(`${process.env.REACT_APP_API}/create`, {
                    method: 'POST',
                    headers: {
                      Authorization: `Token ${token}`,
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formValues),
                  }).then(() => history.push('/bookings'))
                }}
              >
                Create
              </Button>
              {/* </Link> */}
            </div>
          </Grid>

          <Grid
            item
            xs={4}
          >
            <TextField
              id='commodity'
              name='commodity'
              label='Commodity'
              value={formValues.commodity}
              onChange={handleInputChange}
              style={{ width: '50%' }}
            />
            <TextField
              id='weight'
              name='weight'
              type='number'
              label='Weight (in lbs)'
              value={formValues.weight}
              onChange={handleInputChange}
              style={{ width: '50%' }}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{ min: 0 }}
            />
          </Grid>
          <Grid
            item
            xs={4}
          >
            <FormControl
              component='fieldset'
              className={classes.formControl}
            >
              <FormLabel component='legend'>Verify About Product</FormLabel>
              <FormGroup>
                <FormControlLabel
                  id='fragile'
                  name='fragile'
                  label='Fragile'
                  control={
                    <Checkbox
                      checked={formValues.fragile}
                      onChange={handleCheckBoxChange}
                      name='fragile'
                    />
                  }
                />

                <FormControlLabel
                  id='hazardous'
                  name='hazardous'
                  label='Hazardous'
                  control={
                    <Checkbox
                      checked={formValues.hazardous}
                      onChange={handleCheckBoxChange}
                      name='hazardous'
                    />
                  }
                />

                <FormControlLabel
                  id='reefer'
                  name='reefer'
                  label='Reefer'
                  control={
                    <Checkbox
                      checked={formValues.reefer}
                      onChange={handleCheckBoxChange}
                      name='reefer'
                    />
                  }
                />
                <FormControlLabel
                  id='productDamaged'
                  name='productDamaged'
                  label='Damaged'
                  control={
                    <Checkbox
                      checked={formValues.productDamaged}
                      onChange={handleCheckBoxChange}
                      name='productDamaged'
                    />
                  }
                />
              </FormGroup>

              <FormHelperText>Safety First</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </fieldset>
  )
}
