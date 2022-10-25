import React, { useContext } from 'react'

import { MdViewAgenda } from 'react-icons/md'
import { Box } from '@mui/material'

import { UserContext } from '../../../context/UserContext'
import { DataTable } from '../../table/DataTable'
import { PageNotFound } from '../PageNotFound'

export const ContainerList = () => {
  const { user: { token }} = useContext(UserContext)
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
