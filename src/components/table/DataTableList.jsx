import React from 'react'
import { Box } from '@mui/material'
import { BiNews } from 'react-icons/bi'
import { MdViewAgenda } from 'react-icons/md'
import { GrCubes } from 'react-icons/gr'

import { PageNotFound } from '../helpers/PageNotFound'
import { DataTable } from './DataTable'

const get_icon = {
  "bookings": <BiNews />,
  "containers": <MdViewAgenda />,
  "products": <GrCubes />,
}

const DataTableList = ({endpoint}) => {
  const token = localStorage.getItem('user_token')
  return token
  ? (
    <Box sx={{ height: '100%' }}>
      <DataTable
        endpoint={endpoint}
        Icon={get_icon[endpoint]}
      />
    </Box>
  )
  : (
    <PageNotFound />
  )
}

export default DataTableList
