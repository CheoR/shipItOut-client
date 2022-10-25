import React from 'react'

import { MdViewAgenda } from 'react-icons/md'
import { Box } from '@mui/material'

import { DataTable } from '../../table/DataTable'


export const ContainerList = () => (
  <Box sx={{ height: '100%'}}>
    <DataTable
      endpoint='containers'
      Icon={MdViewAgenda}
    />
  </Box>
)
