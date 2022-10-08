import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
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
} from '@material-ui/core'
import DateTimePicker from '@mui/lab/DateTimePicker'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { Link, useHistory, useLocation } from 'react-router-dom'

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

  const back = (e) => {
    e.preventDefault()
    prevStep()
  }

  return (
    <fieldset style={{ margin: '0 auto', width: '60%' }}>
      <h1 style={{ margin: '0 auto', textAlign: 'center' }}>Container</h1>
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
            <FormControl
              className={classes.formControl}
              style={{ width: '60%' }}
              disabled
            >
              <InputLabel id='serviceSelect'>Service</InputLabel>
              <Select
                labelId='serviceSelect'
                id='service'
                name='service'
                value={formValues.service}
                onChange={handleInputChange}
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
              className={classes.formControl}
              style={{ width: '60%' }}
              disabled
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
              className={classes.formControl}
              style={{ width: '60%' }}
              disabled
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
                    value={v.vessel}
                  >
                    {v.vessel}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              className={classes.formControl}
              style={{ width: '60%' }}
              disabled
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
                    value={c.id}
                  >
                    {c.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              className={classes.formControl}
              style={{ width: '60%' }}
            >
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
                    value={c.equipment_type}
                  >
                    {c.equipment_type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              className={classes.formControl}
              style={{ width: '60%' }}
            >
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
                    value={s.container}
                  >
                    {s.container}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              className={classes.formControl}
              style={{ width: '60%' }}
              disabled
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
                    value={p.id}
                  >
                    {p.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              className={classes.formControl}
              style={{ width: '60%' }}
              disabled
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
                    value={p.id}
                  >
                    {p.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              className={classes.formControl}
              style={{ width: '60%' }}
              disabled
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
            xs={4}
          >
            <FormControl
              component='fieldset'
              className={classes.formControl}
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

              <FormHelperText>Safety First</FormHelperText>
            </FormControl>
            <DateTimePicker
              style={{ width: '100%' }}
              value={formValues.pickup}
              disablePast
              onChange={handlePickupDateChange}
              label='Pick Up'
              showTodayButton
            />

            <DateTimePicker
              style={{ width: '100%' }}
              value={formValues.port_cut}
              disablePast
              onChange={handlePortCutDateChange}
              label='Port Cut'
              showTodayButton
            />

            <DateTimePicker
              style={{ width: '100%' }}
              value={formValues.rail_cut}
              disablePast
              onChange={handleRailCutDateChange}
              label='Rail Cut'
              showTodayButton
            />
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
              style={{ width: '100%' }}
              rowsMin={5}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </form>
    </fieldset>
  )
}
