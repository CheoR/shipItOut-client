import React from 'react'
import { Box } from '@mui/system'
import { BiNews } from 'react-icons/bi'

import { PageNotFound } from '../PageNotFound'
import { DataTable } from '../../table/DataTable'

export const BookingList = () => {
  const token = localStorage.getItem('user_token')
  return token ? (
    <Box sx={{ height: '100%' }}>
      <DataTable
        endpoint='bookings'
        Icon={BiNews}
      />
    </Box>
  ) : (
    <PageNotFound />
  )
}
