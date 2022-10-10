import React from 'react'
import { Box, Typography } from '@mui/material'
import logo from '../../assets/images/pugTransport.svg'

export const Loading = () => (
  <Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <img
        src={logo}
        alt='Rotating compoany logo'
      />
    </Box>
    <Typography
      variant='body1'
      textAlign='center'
    >
      Loading . . .
    </Typography>
  </Box>
)
