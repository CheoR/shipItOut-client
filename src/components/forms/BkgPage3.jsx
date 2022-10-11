import React from 'react'

import {
  Grid,
  TextField,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  Typography,
  ButtonGroup,
  TextareaAutosize,
} from '@mui/material'
import { Link as RouterLink, useHistory} from 'react-router-dom'

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
    .then(() => history.push('/bookings'))
  } // create

  return (
    <Box
      sx={{
        height: '100%',
        width: '60%',
        margin: '0 auto',
      }}
    >
      <Typography
        variant='h2'
        textAlign='center'
      >
        Product
      </Typography>
      <Grid
        component='form'
        container
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <Grid
          container
          sx={{ display: 'flex' }}
          gap={2}
        >
          <Grid
            item
            sx={{ flex: 1 }}
          >
            column1
          </Grid>
          <Grid
            item
            sx={{ flex: 1 }}
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
            <Box
              sx={{ display: 'flex', flexDirection: 'column' }}
              gap={2}
            >
              <TextField
                id='commodity'
                name='commodity'
                label='Commodity'
                defaultValue={formValues.commodity}
                value={formValues.commodity}
                onChange={handleInputChange}
                style={{ width: '100%' }}
              />
              <TextField
                id='weight'
                name='weight'
                type='number'
                label='Weight (in lbs)'
                defaultValue={formValues.weight}
                value={formValues.weight}
                onChange={handleInputChange}
                style={{ width: '100%' }}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{ min: 0 }}
              />
            </Box>
            <TextareaAutosize
              id='product_notes'
              name='product_notes'
              aria-label='empty textarea'
              placeholder='Product Notes'
              value={formValues.product_notes}
              style={{ width: 350 }}
              minRows={7}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <ButtonGroup sx={{ margin: '0 auto', my: 1, gap: 2 }}>
          <Button
            variant='contained'
            color='primary'
            label='cancel'
            component={RouterLink}
            to='/bookings'
          >
            Cancel
          </Button>
          <Button
            variant='contained'
            color='primary'
            label='continue'
            onClick={back}
          >
            Back
          </Button>
          <Button
            variant='contained'
            color='primary'
            label='continue'
            onClick={create}
          >
            Create
          </Button>
        </ButtonGroup>
      </Grid>
      <Box
        sx={{ display: 'flex', flexDirection: 'column' }}
        gap={2}
      >
        <TextField
          id='name'
          name='name'
          label='Agent Name'
          defaultValue={agent.name}
          disabled
          sx={{ width: '100%' }}
        />
        <TextField
          id='email'
          name='email'
          label='Agent Email'
          defaultValue={agent.email}
          disabled
          sx={{ width: '100%' }}
        />
        <TextField
          id='phone'
          name='phone'
          label='Agent Phone'
          defaultValue={agent.phone}
          disabled
          sx={{ width: '100%' }}
        />
      </Box>
    </Box>
  )
}
