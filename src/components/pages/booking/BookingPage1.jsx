import React from 'react'
import { DateTimePicker } from '@mui/x-date-pickers'
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
  Box,
  TextareaAutosize,
  Typography,
} from '@mui/material'

import ButtonPanel from '../../buttons/ButtonPanel'
import AgentBlock from '../../layout/AgentBlock'

export const BookingPage1 = ({
  handleDatePickerChange,
  handleCheckBoxChange,
  handleInputChange,
  handleSubmit,
  nextStep,
  isView,
  action,
  instance,
  formValues,
  data
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
            <TextField
              id='pickup_address'
              name='pickup_address'
              label='Pickup Address'
              value={formValues.pickup_address}
              onChange={handleInputChange}
              sx={{ width: '100%' }}
              disabled={isView}
            />
            <TextField
              id='loading_origin_address'
              name='loading_origin_address'
              label='Loading Address'
              value={formValues.loading_origin_address}
              onChange={handleInputChange}
              sx={{ width: '100%' }}
              disabled={isView}
            />
            <TextField
              id='unloading_destination_address'
              name='unloading_destination_address'
              label='Unloading Address'
              value={formValues.unloading_destination_address}
              onChange={handleInputChange}
              sx={{ width: '100%' }}
              disabled={isView}
            />
            <TextField
              id='delivery_address'
              name='delivery_address'
              label='Delivery Address'
              value={formValues.delivery_address}
              onChange={handleInputChange}
              sx={{ width: '100%' }}
              disabled={isView}
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
                disabled={isView}
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
                disabled={isView}
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
                disabled={isView}
              />
            </FormGroup>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              value={formValues.pickup_appt}
              disablePast
              onChange={(e) => handleDatePickerChange(e, 'pickup_appt')}
              label='Pickup Appt'
              showTodayButton
              disabled={isView}
            />
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              value={formValues.port_cutoff}
              disablePast
              onChange={(e) => handleDatePickerChange(e, 'port_cutoff')}
              label='Port Cutoff'
              showTodayButton
              disabled={isView}
            />
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              value={formValues.rail_cutoff}
              disablePast
              onChange={(e) => handleDatePickerChange(e, 'rail_cutoff')}
              label='Rail Cutoff'
              showTodayButton
              disabled={isView}
            />
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              value={formValues.delivery_appt}
              disablePast
              onChange={(e) => handleDatePickerChange(e, 'delivery_appt')}
              label='Delivery Appt'
              showTodayButton
              disabled={isView}
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
              disabled={isView}
            />
            <FormControl sx={{ width: '100%' }} disabled={isView}>
              <InputLabel id='booking_status'>Booking Status</InputLabel>
              <Select
                labelId='booking_status'
                id='booking_status'
                name='booking_status'
                value={formValues.booking_status || ""}
                onChange={handleInputChange}
              >
                {data.booking_statuses.map((c) => (
                  <MenuItem
                    key={parseInt(c.id)}
                    id={parseInt(c.id)}
                    value={parseInt(c.id)}
                  >
                    {c.booking_status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: '100%' }} disabled={isView}>
              <InputLabel id='carrier'>Carrier</InputLabel>
              <Select
                labelId='carrier'
                id='carrier'
                name='carrier'
                value={formValues.carrier || ""}
                onChange={handleInputChange}
              >
                {data.carriers.map((c) => (
                  <MenuItem
                    key={c.id}
                    id={c.id}
                    value={c.id}
                  >
                    {c.company}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: '100%' }} disabled={isView}>
              <InputLabel id='voyage'>Voyage</InputLabel>
              <Select
                labelId='voyage'
                id='voyage'
                name='voyage'
                value={formValues.voyage || ""}
                onChange={handleInputChange}
              >
                {data.voyages.map((v) => (
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
            <FormControl sx={{ width: '100%' }} disabled={isView}>
              <InputLabel id='loading_port'>Loading Port</InputLabel>
              <Select
                labelId='loading_port'
                id='loading_port'
                name='loading_port'
                value={formValues.loading_port || ""}
                onChange={handleInputChange}
              >
                {data.ports.map((p) => (
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

            <FormControl sx={{ width: '100%' }} disabled={isView}>
              <InputLabel id='unloading_port'>Unloading Port</InputLabel>
              <Select
                labelId='unloading_port'
                id='unloading_port'
                name='unloading_port'
                value={formValues.unloading_port || ""}
                onChange={handleInputChange}
              >
                {data.ports.map((p) => (
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
        <ButtonPanel next={next} endpoint="bookings" page={1} instance={instance} action={action} />
      </Grid>
    </Box>
  )
}
