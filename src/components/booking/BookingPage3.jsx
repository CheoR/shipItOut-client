import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Grid,
  TextField,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  TextareaAutosize,
} from '@mui/material'

import AgentBlock from '../layout/AgentBlock'
import ButtonPanel from '../buttons/ButtonPanel'

export const BookingPage3 = ({
  handleCheckBoxChange,
  handleInputChange,
  handleSubmit,
  prevStep,
  isView,
  instance,
  action,
  formValues,
}) => {
  const token = localStorage.getItem('user_token')
  const history = useHistory()

  const prev = (e) => {
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
    })
      .then(() => {
        history.push('/bookings')
      })
      .catch((err) => {
        console.error('POST Error: ', err)
        history.push('/bookings')
      })
  }

  const update = (e) => {
    console.table('all values')
    e.preventDefault()
    console.table(formValues)
    console.log('--- token is ', token)

    return fetch(`${process.env.REACT_APP_API}/bookings/${formValues.instance}`, {
      method: 'PUT',
      headers: {
        Authorization: `Token ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
      .then(() => {
        history.push('/bookings')
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
        sx={{ display: "flex", height: "90%"}}
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
            <AgentBlock agent={{
              company: formValues.agent_company,
              name: `${formValues.agent_first_name} ${formValues.agent_last_name}`,
              email: formValues.agent_email,
              phone: formValues.agent_phone
            }} />
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
                disabled={isView}
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
                disabled={isView}
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
                disabled={isView}
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
                disabled={isView}
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
              disabled={isView}
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
                disabled={isView}
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
                disabled={isView}
              />
            </Box>
          </Grid>
        </Grid>
        <ButtonPanel prev={prev} create={create} update={update} endpoint="bookings" page={3} instance={instance} action={action}/>
      </Grid>
    </Box>
  )
}
