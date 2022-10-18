import { Box } from '@mui/material'
import React from 'react'
import { MdViewAgenda } from 'react-icons/md'

import { PageNotFound } from '../helpers/PageNotFound'
import { DataTable } from '../table/DataTable'

export const ContainerList = () => {
  const token = localStorage.getItem('user_token')
  return token ? (
    <Box sx={{ height: '100%'}}>
      <DataTable
        endpoint='containers'
        Icon={MdViewAgenda}
      />
    </Box>
  ) : (
    <PageNotFound />
  )
}
