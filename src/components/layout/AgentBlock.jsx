import React from 'react'
import { Box, TextField } from '@mui/material'

const AgentBlock = ({ agent }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <TextField
        id='company'
        name='company'
        label='Agent company'
        defaultValue={agent.company}
        sx={{ width: '100%' }}
        disabled
      />
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
    </Box>
  )
}

export default AgentBlock