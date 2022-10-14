import React from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom'

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

import { agent } from './TestFormData'

export const BkgPage3 = ({
  handleCheckBoxChange,
  handleInputChange,
  handleSubmit,
  prevStep,
  formValues,
}) => {
  const token = localStorage.getItem('user_token')
  const history = useHistory()

  const back = (e) => {
    e.preventDefault()
    prevStep()
  }

  const create = (e) => {
    console.table('all values')
    e.preventDefault()
    console.table(formValues)
    console.log('--- token is ', token)

    return fetch(`${process.env.REACT_APP_API}/bookings`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    }).then(() => {
      history.push("/bookings")
    })
      .catch((err) => console.error('POST Error: ', err))
  }

  return (
    <Box
      sx={{
        height: '100%',
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
          </Grid>
          <Grid
            item
            sx={{ flex: 1 }}
          >
            <FormLabel component='legend'>Verify About Product</FormLabel>
            <FormGroup>
              <FormControlLabel
                id='is_fragile'
                name='is_fragile'
                label='Fragile'
                control={
                  <Checkbox
                    checked={formValues.is_fragile}
                    onChange={handleCheckBoxChange}
                    name='is_fragile'
                  />
                }
              />

              <FormControlLabel
                id='is_hazardous'
                name='is_hazardous'
                label='Hazardous'
                control={
                  <Checkbox
                    checked={formValues.is_hazardous}
                    onChange={handleCheckBoxChange}
                    name='is_hazardous'
                  />
                }
              />

              <FormControlLabel
                id='is_reefer'
                name='is_reefer'
                label='Reefer'
                control={
                  <Checkbox
                    checked={formValues.is_reefer}
                    onChange={handleCheckBoxChange}
                    name='is_reefer'
                  />
                }
              />
              <FormControlLabel
                id='is_product_damaged'
                name='is_product_damaged'
                label='Damaged'
                control={
                  <Checkbox
                    checked={formValues.is_product_damaged}
                    onChange={handleCheckBoxChange}
                    name='is_product_damaged'
                  />
                }
              />
            </FormGroup>
          </Grid>
          <Grid
            item
            sx={{ flex: 1 }}
          >
            <TextareaAutosize
              id='product_notes'
              name='product_notes'
              aria-label='empty textarea'
              placeholder='Product Notes'
              value={formValues.product_notes}
              style={{ width: 400 }}
              minRows={10}
              onChange={handleInputChange}
            />
            <Box
              sx={{ display: 'flex', flexDirection: 'column' }}
              gap={2}
            >
              <TextField
                id='product'
                name='product'
                label='Product'
                defaultValue={formValues.product}
                value={formValues.product}
                onChange={handleInputChange}
                style={{ width: '100%' }}
              />
              <TextField
                id='weight'
                name='weight'
                type='number'
                label='Weight (in lbs)'
                defaultValue={formValues.weight}
                value={parseFloat(formValues.weight).toFixed(2)}
                onChange={handleInputChange}
                style={{ width: '100%' }}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{ min: 0 }}
              />
            </Box>
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
    </Box>
  )
}
