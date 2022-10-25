import React from 'react'

import { BiNews } from 'react-icons/bi'
import { Box } from '@mui/system'

import { DataTable } from '../../table/DataTable'


export const BookingList = () => (
  <Box sx={{ height: '100%' }}>
    <DataTable
      endpoint='bookings'
      Icon={BiNews}
    />
  </Box>
)
