import React from 'react'
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
  TextareaAutosize,
} from '@mui/material'

import AgentBlock from '../../layout/AgentBlock'
import ButtonPanel from '../../buttons/ButtonPanel'

export const BookingPage2 = ({
  handleCheckBoxChange,
  handleInputChange,
  handleSubmit,
  nextStep,
  prevStep,
  isView,
  action,
  instance,
  formValues,
  data,
}) => {

  const next = (e) => {
    e.preventDefault()
    nextStep()
  }

  const prev = (e) => {
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
        Container
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
            <FormLabel component='legend'>Verify About Container</FormLabel>
            <FormGroup>
              <FormControlLabel
                id='is_container_damaged'
                name='is_container_damaged'
                label='Damaged'
                control={
                  <Checkbox
                    checked={formValues.is_container_damaged}
                    onChange={handleCheckBoxChange}
                    name='is_container_damaged'
                  />
                }
                disabled={isView}
              />

              <FormControlLabel
                id='is_needs_inspection'
                name='is_needs_inspection'
                label='Needs Inspection'
                control={
                  <Checkbox
                    checked={formValues.is_needs_inspection}
                    onChange={handleCheckBoxChange}
                    name='is_needs_inspection'
                  />
                }
                disabled={isView}
              />

              <FormControlLabel
                id='is_overweight'
                name='is_overweight'
                label='Overweight'
                control={
                  <Checkbox
                    checked={formValues.is_overweight}
                    onChange={handleCheckBoxChange}
                    name='is_overweight'
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
              id='container_notes'
              name='container_notes'
              aria-label='empty textarea'
              placeholder='Container Notes'
              value={formValues.container_notes}
              style={{ width: 400 }}
              minRows={10}
              onChange={handleInputChange}
              disabled={isView}
            />
            <FormControl sx={{ width: '100%' }} disabled={isView}>
              <InputLabel id='container_type'>Container Type</InputLabel>
              <Select
                labelId='container_type'
                id='container_type'
                name='container_type'
                value={formValues.container_type || ''}
                onChange={handleInputChange}
              >
                {data.container_types.map((s) => (
                  <MenuItem
                    key={parseInt(s.id)}
                    id={parseInt(s.id)}
                    value={parseInt(s.id)}
                  >
                    {s.container_type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ width: '100%' }} disabled={isView}>
              <InputLabel id='container'>Container</InputLabel>
              <Select
                labelId='container'
                id='container'
                name='container'
                value={formValues.container || ''}
                onChange={handleInputChange}
              >
                {data.containers_available.filter((c) => c.container_type === formValues.container_type).map((s) => (
                  <MenuItem
                    key={parseInt(s.id)}
                    id={parseInt(s.id)}
                    value={parseInt(s.id)}
                  >
                    {s.container}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ width: '100%' }} disabled={isView}>
              <InputLabel id='container_location'>
                Container Location
              </InputLabel>
              <Select
                labelId='container_location'
                id='container_location'
                name='container_location'
                value={formValues.container_location || ""}
                onChange={handleInputChange}
              >
                {data.container_locations.map((c) => (
                  <MenuItem
                    key={parseInt(c.id)}
                    id={parseInt(c.id)}
                    value={parseInt(c.id)}
                  >
                    {c.container_location}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <ButtonPanel prev={prev} next={next} endpoint="bookings" page={2} instance={instance} action={action}/>
      </Grid>
    </Box>
  )
}
