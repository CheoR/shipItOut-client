import React from 'react'

import { GrCubes } from 'react-icons/gr'
import { Box } from '@mui/material'

import { DataTable } from '../../table/DataTable'


export const ProductList = () =>  (
  <Box sx={{height: '100%'}}>
    <DataTable
      endpoint='products'
      Icon={GrCubes}
    />
  </Box>
)
