import React from 'react'
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
import { DateTimePicker } from '@mui/x-date-pickers'
import { Link as RouterLink } from 'react-router-dom'
import {
   agent,
  service,
  voyage,
  vessel,
  carrier,
  containerType,
  container,
  loadingPort,
  unloadingPort,
  statuses,} from '../forms/TestFormData'


export const BookingView1 = ({ nextStep, formValues }) => {
  const next = (e) => {
    e.preventDefault()
    nextStep()
  }

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
        View {formValues.booking.toUpperCase()}
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
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id='serviceSelect'>Service</InputLabel>
              <Select
                labelId='serviceSelect'
                id='service'
                name='service'
                defaultValue={formValues.voyage_reference.vessel.service.id}
                value={formValues.voyage_reference.vessel.service.name}
                fontWeight='fontWeightBold'
                disabled
              >
                {service.map((s) => (
                  <MenuItem
                    key={s.id}
                    id={s.id}
                    value={s.id}
                  >
                    {s.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id='voyageSelect'>Voyage</InputLabel>
              <Select
                labelId='voyageSelect'
                id='voyage'
                name='voyage'
                defaultValue={formValues.voyage_reference.voyage}
                value={formValues.voyage_reference.voyage}
                disabled
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
              <InputLabel id='vesselSelect'>Vessel</InputLabel>
              <Select
                labelId='vesselSelect'
                id='vessel'
                name='vessel'
                defaultValue={formValues.voyage_reference.vessel.id}
                value={formValues.voyage_reference.vessel.name}
                disabled
              >
                {vessel.map((v) => (
                  <MenuItem
                    key={v.id}
                    id={v.id}
                    value={v.id}
                  >
                    {v.vessel}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id='carrierSelect'>Carrier</InputLabel>
              <Select
                labelId='carrierSelect'
                id='carrier'
                name='carrier'
                defaultValue={formValues.carrier}
                value={formValues.carrier}
                disabled
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
            <FormControl
              sx={{ width: '100%' }}
              disabled
            >
              <InputLabel id='cntrTypeSelect'>Equipment Type</InputLabel>
              <Select
                labelId='cntrTypeSelect'
                id='cntrType'
                name='equipment_type'
                defaultValue={formValues.container.id}
                value={formValues.container.container}
                disabled
              >
                {containerType.map((c) => (
                  <MenuItem
                    key={c.id}
                    id={c.id}
                    value={c.id}
                  >
                    {c.equipment_type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl
              sx={{ width: '100%' }}
              disabled
            >
              <InputLabel id='containerSelect'>Container</InputLabel>
              <Select
                labelId='containerSelect'
                id='cntr'
                name='cntr'
                defaultValue={formValues.container.id}
                value={formValues.container.container}
                disabled
              >
                {container.map((s) => (
                  <MenuItem
                    key={s.id}
                    id={s.id}
                    value={s.id}
                  >
                    {s.container}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id='loadingPortSelect'>Loading Port</InputLabel>
              <Select
                labelId='loadingPortSelect'
                id='loading_port'
                name='loading_port'
                defaultValue={formValues.port.id}
                value={formValues.port.location}
                disabled
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
              <InputLabel id='unloadingPortSelect'>Unloading Port</InputLabel>
              <Select
                labelId='unloadingPortSelect'
                id='unloading_port'
                name='unloading_port'
                defaultValue={formValues.unloading_destination}
                value={formValues.unloading_destination}
                disabled
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

            <FormControl sx={{ width: '100%' }}>
              <InputLabel id='statusSelect'>Booking Status</InputLabel>
              <Select
                labelId='statusSelect'
                id='status'
                name='status'
                defaultValue={formValues.booking_status.id}
                value={formValues.booking_status.status}
                disabled
              >
                {statuses.map((s) => (
                  <MenuItem
                    key={s.id}
                    id={s.id}
                    value={s.id}
                  >
                    {s.status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid
            item
            sx={{ flex: 1 }}
          >
            <FormLabel component='legend'>Verify About Booking</FormLabel>
            <FormGroup>
              <FormControlLabel
                id='document_submitted'
                name='document_submitted'
                label='Documents'
                control={
                  <Checkbox
                    checked={formValues.document.are_docs_ready}
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
                    checked={formValues.due.are_dues_paid}
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
                    checked={formValues.has_issue}
                    name='issues'
                  />
                }
              />
            </FormGroup>
            <Box
              sx={{ display: 'flex', flexDirection: 'column' }}
              gap={2}
            >
              <DateTimePicker
                sx={{ width: '100%' }}
                value={formValues.pickup_appt}
                renderInput={(props) => <TextField {...props} />}
                label='Pick Up'
                showTodayButton
                disabled
              />

              <DateTimePicker
                sx={{ width: '100%' }}
                renderInput={(props) => <TextField {...props} />}
                value={formValues.port_cutoff}
                label='Port Cut'
                showTodayButton
                disabled
              />

              <DateTimePicker
                sx={{ width: '100%' }}
                renderInput={(props) => <TextField {...props} />}
                value={formValues.rail_cutoff}
                disablePast
                label='Rail Cut'
                showTodayButton
                disabled
              />
            </Box>
            <TextField
              id='address'
              name='address'
              label='Pickup Address'
              defaultValue={formValues.address}
              sx={{ width: '100%' }}
              disabled
            />
            <TextareaAutosize
              id='bkg_notes'
              name='bkg_notes'
              aria-label='empty textarea'
              placeholder='Booking Notes'
              value={formValues.notes}
              style={{ width: 350 }}
              minRows={7}
              disabled
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
            onClick={next}
          >
            Next
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
