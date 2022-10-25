import React, { useContext } from 'react'

import { MdViewAgenda } from 'react-icons/md'
import { GrCubes } from 'react-icons/gr'
import { BiNews } from 'react-icons/bi'
import { Box } from '@mui/material'

import { UserContext } from '../../context/UserContext'
import { PageNotFound } from '../pages/PageNotFound'
import { DataTable } from './DataTable'

const get_icon = {
  "bookings": BiNews,
  "containers": MdViewAgenda,
  "products": GrCubes,
}

const DataTableList = ({endpoint}) => {
  const { user: {token}} = useContext(UserContext)
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
