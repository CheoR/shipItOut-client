import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

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

import { agent } from '../forms/TestFormData'

export const BookingView3 = ({ nextStep, prevStep, formValues }) => {
  const back = (e) => {
    e.preventDefault()
    prevStep()
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
              sx={{ width: '100%' }}
              disabled
            />
            <TextField
              id='email'
              name='email'
              label='Agent Email'
              defaultValue={agent.email}
              sx={{ width: '100%' }}
              disabled
            />
            <TextField
              id='phone'
              name='phone'
              label='Agent Phone'
              defaultValue={agent.phone}
              sx={{ width: '100%' }}
              disabled
            />
          </Grid>
          <Grid
            item
            sx={{ flex: 1 }}
          >
            <FormLabel component='legend'>Verify About Product</FormLabel>
            <FormGroup disabled>
              <FormControlLabel
                id='is_fragile'
                name='is_fragile'
                label='Fragile'
                control={
                  <Checkbox
                    checked={formValues.is_fragile}
                    name='is_fragile'
                  />
                }
                disabled
              />

              <FormControlLabel
                id='is_hazardous'
                name='is_hazardous'
                label='Hazardous'
                control={
                  <Checkbox
                    checked={formValues.is_hazardous}
                    name='is_hazardous'
                  />
                }
                disabled
              />

              <FormControlLabel
                id='is_reefer'
                name='is_reefer'
                label='Reefer'
                control={
                  <Checkbox
                    checked={formValues.is_reefer}
                    name='is_reefer'
                  />
                }
                disabled
              />
              <FormControlLabel
                id='is_product_damaged'
                name='is_product_damaged'
                label='Damaged'
                control={
                  <Checkbox
                    checked={formValues.is_product_damaged}
                    name='is_product_damaged'
                  />
                }
                disabled
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
              disabled
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
                style={{ width: '100%' }}
                disabled
              />
              <TextField
                id='weight'
                name='weight'
                type='number'
                label='Weight (in lbs)'
                defaultValue={formValues.weight}
                value={parseFloat(formValues.weight).toFixed(2)}
                style={{ width: '100%' }}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{ min: 0 }}
                disabled
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
        </ButtonGroup>
      </Grid>
    </Box>
  )
}
