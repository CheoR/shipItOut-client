import React from 'react'
import { DateTimePicker } from '@mui/x-date-pickers'
import { Link as RouterLink } from 'react-router-dom'
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Box,
  TextareaAutosize,
  Typography,
  ButtonGroup,
} from '@mui/material'

import {
  agent,
  voyage,
  carrier,
  loadingPort,
  unloadingPort,
} from './TestFormData'

export const BkgPage1 = ({
  handleDatePickerChange,
  handleCheckBoxChange,
  handleInputChange,
  handleSubmit,
  nextStep,
  formValues,
}) => {
  const next = (e) => {
    e.preventDefault()
    nextStep()
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
        Booking
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
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
            <TextField
              id='pickup_address'
              name='pickup_address'
              label='Pickup Address'
              defaultValue={formValues.pickup_address}
              sx={{ width: '100%' }}
              onChange={handleInputChange}
            />
            <TextField
              id='loading_origin_address'
              name='loading_origin_address'
              label='Loading Address'
              defaultValue={formValues.loading_origin_address}
              sx={{ width: '100%' }}
              onChange={handleInputChange}
            />
            <TextField
              id='unloading_destination_address'
              name='unloading_destination_address'
              label='Unloading Address'
              defaultValue={formValues.unloading_destination_address}
              sx={{ width: '100%' }}
              onChange={handleInputChange}
            />
            <TextField
              id='delivery_address'
              name='delivery_address'
              label='Delivery Address'
              defaultValue={formValues.delivery_address}
              sx={{ width: '100%' }}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid
            item
            sx={{ flex: 1 }}
          >
            <FormLabel component='legend'>Verify About Booking</FormLabel>
            <FormGroup>
              <FormControlLabel
                id='are_documents_ready'
                name='are_documents_ready'
                label='Documents'
                control={
                  <Checkbox
                    checked={formValues.are_documents_ready}
                    onChange={handleCheckBoxChange}
                    name='are_documents_ready'
                  />
                }
              />

              <FormControlLabel
                id='are_dues_paid'
                name='are_dues_paid'
                label='Dues'
                control={
                  <Checkbox
                    checked={formValues.are_dues_paid}
                    onChange={handleCheckBoxChange}
                    name='are_dues_paid'
                  />
                }
              />

              <FormControlLabel
                id='has_issue'
                name='has_issue'
                label='Issues'
                control={
                  <Checkbox
                    checked={formValues.has_issue}
                    onChange={handleCheckBoxChange}
                    name='has_issue'
                  />
                }
              />
            </FormGroup>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              value={formValues.pickup_appt}
              disablePast
              onChange={(e) => handleDatePickerChange(e, 'pickup_appt')}
              label='Pickup Appt'
              showTodayButton
            />
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              value={formValues.port_cutoff}
              disablePast
              onChange={(e) => handleDatePickerChange(e, 'port_cutoff')}
              label='Port Cutoff'
              showTodayButton
            />
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              value={formValues.rail_cutoff}
              disablePast
              onChange={(e) => handleDatePickerChange(e, 'rail_cutoff')}
              label='Rail Cutoff'
              showTodayButton
            />
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              value={formValues.delivery_appt}
              disablePast
              onChange={(e) => handleDatePickerChange(e, 'delivery_appt')}
              label='Delivery Appt'
              showTodayButton
            />
          </Grid>
          <Grid
            item
            sx={{ flex: 1 }}
          >
            <TextareaAutosize
              id='booking_notes'
              name='booking_notes'
              aria-label='empty textarea'
              placeholder='Booking Notes'
              value={formValues.booking_notes}
              style={{ width: 400 }}
              minRows={10}
              onChange={handleInputChange}
            />
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id='carrier'>Carrier</InputLabel>
              <Select
                labelId='carrier'
                id='carrier'
                name='carrier'
                value={formValues.carrier}
                onChange={handleInputChange}
              >
                {carrier.map((c) => (
                  <MenuItem
                    key={c.id}
                    id={c.id}
                    value={c.id}
                  >
                    {c.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id='voyage'>Voyage</InputLabel>
              <Select
                labelId='voyage'
                id='voyage'
                name='voyage'
                value={formValues.voyage}
                onChange={handleInputChange}
              >
                {voyage.map((v) => (
                  <MenuItem
                    key={v.id}
                    id={v.id}
                    value={v.id}
                  >
                    {v.voyage}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id='loading_port'>Loading Port</InputLabel>
              <Select
                labelId='loading_port'
                id='loading_port'
                name='loading_port'
                value={formValues.loading_port}
                onChange={handleInputChange}
              >
                {loadingPort.map((p) => (
                  <MenuItem
                    key={p.id}
                    id={p.id}
                    value={p.id}
                  >
                    {p.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ width: '100%' }}>
              <InputLabel id='unloading_port'>Unloading Port</InputLabel>
              <Select
                labelId='unloading_port'
                id='unloading_port'
                name='unloading_port'
                value={formValues.unloading_port}
                onChange={handleInputChange}
              >
                {unloadingPort.map((p) => (
                  <MenuItem
                    key={p.id}
                    id={p.id}
                    value={p.id}
                  >
                    {p.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
            onClick={next}
          >
            Next
          </Button>
        </ButtonGroup>
      </Grid>
    </Box>
  )
}
