import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export const PageNotFound = () => (
  <Box>
    <Typography variant="h1" textAlign="center">
      Page Not Found
    </Typography>
    <Box sx={{display: "flex", justifyContent: "center"}}>
      <Link
        component={RouterLink}
        to={'/'}
        underline="none"
      >
        <Typography variant="button" textAlign="center">
          Home
        </Typography>
      </Link>
    </Box>
  </Box>
)
