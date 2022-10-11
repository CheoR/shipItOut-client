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
  FormHelperText,
  Button,
  Box,
  Typography,
  ButtonGroup,
} from '@mui/material'
import { DateTimePicker } from '@mui/x-date-pickers'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom'

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
  statuses,
} from './TestFormData'

export const BkgPage2 = ({
  handleInputChange,
  handleCheckBoxChange,
  handlePickupDateChange,
  handlePortCutDateChange,
  handleRailCutDateChange,
  handleSubmit,
  nextStep,
  prevStep,
  formValues,
}) => {
  const location = useLocation()
  const history = useHistory()

  const next = (e) => {
    e.preventDefault()
    nextStep()
  }

  const back = (e) => {
    e.preventDefault()
    prevStep()
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
        Container
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
            <FormControl
              disabled
              sx={{ width: '100%' }}
            >
              <InputLabel id='serviceSelect'>Service</InputLabel>
              <Select
                labelId='serviceSelect'
                id='service'
                name='service'
                value={formValues.service}
                onChange={handleInputChange}
                fontWeight='fontWeightBold'
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
            <FormControl
              disabled
              sx={{ width: '100%' }}
            >
              <InputLabel id='voyageSelect'>Voyage</InputLabel>
              <Select
                labelId='voyageSelect'
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
            <FormControl
              disabled
              sx={{ width: '100%' }}
            >
              <InputLabel id='vesselSelect'>Vessel</InputLabel>
              <Select
                labelId='vesselSelect'
                id='vessel'
                name='vessel'
                value={formValues.vessel}
                onChange={handleInputChange}
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
            <FormControl
              disabled
              sx={{ width: '100%' }}
            >
              <InputLabel id='carrierSelect'>Carrier</InputLabel>
              <Select
                labelId='carrierSelect'
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
              <InputLabel id='cntrTypeSelect'>Container Type</InputLabel>
              <Select
                labelId='cntrTypeSelect'
                id='cntrType'
                name='equipment_type'
                value={formValues.equipment_type}
                onChange={handleInputChange}
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
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id='containerSelect'>Container</InputLabel>
              <Select
                labelId='containerSelect'
                id='cntr'
                name='cntr'
                value={formValues.cntr}
                onChange={handleInputChange}
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
            <FormControl
              disabled
              sx={{ width: '100%' }}
            >
              <InputLabel id='loadingPortSelect'>Loading Port</InputLabel>
              <Select
                labelId='loadingPortSelect'
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

            <FormControl
              disabled
              sx={{ width: '100%' }}
            >
              <InputLabel id='unloadingPortSelect'>Unloading Port</InputLabel>
              <Select
                labelId='unloadingPortSelect'
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
            <FormControl
              disabled
              sx={{ width: '100%' }}
            >
              <InputLabel id='statusSelect'>Status</InputLabel>
              <Select
                labelId='statusSelect'
                id='status'
                name='status'
                value={formValues.status}
                onChange={handleInputChange}
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
            <FormLabel component='legend'>Verify About Container</FormLabel>
            <FormGroup>
              <FormControlLabel
                id='cntrDamaged'
                name='cntrDamaged'
                label='Damaged'
                control={
                  <Checkbox
                    checked={formValues.cntrDamaged}
                    onChange={handleCheckBoxChange}
                    name='cntrDamaged'
                  />
                }
              />

              <FormControlLabel
                id='inspection'
                name='inspection'
                label='Needs Inspection'
                control={
                  <Checkbox
                    checked={formValues.inspection}
                    onChange={handleCheckBoxChange}
                    name='inspection'
                  />
                }
              />

              <FormControlLabel
                id='overweight'
                name='overweight'
                label='Overweight'
                control={
                  <Checkbox
                    checked={formValues.overweight}
                    onChange={handleCheckBoxChange}
                    name='overweight'
                  />
                }
              />
            </FormGroup>
            <Box
              sx={{ display: 'flex', flexDirection: 'column' }}
              gap={2}
            >
              <DateTimePicker
                style={{ width: '100%' }}
                renderInput={(props) => <TextField {...props} />}
                value={formValues.pickup}
                disablePast
                onChange={handlePickupDateChange}
                label='Pick Up'
                showTodayButton
              />

              <DateTimePicker
                style={{ width: '100%' }}
                renderInput={(props) => <TextField {...props} />}
                value={formValues.port_cut}
                disablePast
                onChange={handlePortCutDateChange}
                label='Port Cut'
                showTodayButton
              />

              <DateTimePicker
                style={{ width: '100%' }}
                renderInput={(props) => <TextField {...props} />}
                value={formValues.rail_cut}
                disablePast
                onChange={handleRailCutDateChange}
                label='Rail Cut'
                showTodayButton
              />
            </Box>
            <TextField
              id='address'
              name='address'
              label='Pickup Address'
              defaultValue={formValues.address}
              style={{ width: '100%' }}
              onChange={handleInputChange}
              disabled
            />
            <TextareaAutosize
              id='cntr_notes'
              name='cntr_notes'
              aria-label='empty textarea'
              placeholder='Container Notes'
              value={formValues.cntr_notes}
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
