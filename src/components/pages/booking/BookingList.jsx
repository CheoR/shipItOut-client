import React from 'react'
import { Box } from '@mui/system'
import { BiNews } from 'react-icons/bi'

import { DataTable } from '../../table/DataTable'

export const BookingList = () => (
  <Box sx={{ height: '100%' }}>
    <DataTable
      endpoint='bookings'
      Icon={BiNews}
    />
  </Box>
)
