import React, { useContext, useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { DataGrid } from '@mui/x-data-grid'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import UpdateIcon from '@mui/icons-material/Update'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { ButtonGroup, Button, Typography, Box, Grid } from '@mui/material'

import { Loading } from '../helpers/Loading'
import { UserContext } from '../../context/UserContext'

import { TEST_TABLE_DATA } from '../../mock/TestFormData'

export const DataTable = ({ endpoint, Icon }) => {
  const [selectionModel, setSelectionModel] = useState([])
  const [isRefreshed, setIsRefreshed] = useState(false)
  const { user: {token} } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)
  const [columns, setColumns] = useState([])
  const [data, setData] = useState([])

  // const deleteSelected = (e) => {
  //   e.preventDefault()
  //   return fetch(
  //     `${process.env.REACT_APP_API}/${endpoint}/${selectionModel[0]}`,
  //     {
  //       method: 'DELETE',
  //       headers: {
  //         Authorization: `Token ${token}`,
  //         'Content-Type': 'application/json',
  //       },
  //     },
  //   ).then(() => {
  //     console.log('calling resset')
  //     setIsRefreshed((prevState) => !prevState)
  //   })
  // }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/${endpoint}`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.lenght === 0) res = TEST_TABLE_DATA
        setData(res)
        const colHeaders = Object.keys(res[0])

        const headers = colHeaders.map((header) => {
          return {
            field: `${header}`,
            headerName: `${header}`,
            description: `${header}`,
            width: 140,
          }
        })
        setColumns(headers)
        setIsLoading(false)
      })
      .catch((err) => {
        const header = 'Data Not Found'
        setColumns([
          {
            field: `${header}`,
            headerName: `${header}`,
            description: `${header}`,
            flex: 1,
          },
        ])
        setData([
          {
            id: 0,
            header: header,
          },
        ])
        setIsLoading(false)
      })
  }, [endpoint, isRefreshed, token])

  if (isLoading) return <Loading text='table' />

  const sxContainer = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  }

  return (
    <Grid
      container
      sx={sxContainer}
    >
      <Grid item>
        <Typography
          variant='h2'
          component='h2'
        >
          <Icon /> {endpoint.toUpperCase()}
        </Typography>
      </Grid>
      <Grid
        item
        sx={{ flex: 1 }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={25}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(newSelection) => {
            console.log('user selected: ', newSelection)
            console.log('user selected.model: ', newSelection[0])
            setSelectionModel((prevState) => [...prevState, newSelection[0]])
          }}
          // selectionModel={selectionModel}
        />
      </Grid>
      <Grid item>
        <Box>
          <ButtonGroup
            color='primary'
            aria-label='outlined primary button group'
          >
            {endpoint === 'containers' ? (
              <></>
            ) : (
              <Button
                variant='contained'
                color='primary'
                startIcon={<AddIcon />}
                component={RouterLink}
                to={`/${endpoint}/create`}
              >
                New
              </Button>
            )}
            <Button
              variant='contained'
              color='primary'
              startIcon={<VisibilityIcon />}
              component={RouterLink}
              to={`/${endpoint}/view/${selectionModel[0]}`}
            >
              View
            </Button>
            <Button
              variant='contained'
              color='primary'
              startIcon={<UpdateIcon />}
              component={RouterLink}
              to={`/${endpoint}/update/${selectionModel[0]}`}
            >
              Update
            </Button>

            {endpoint === 'containers' ? (
              <></>
            ) : (
              <Button
                variant='contained'
                color='primary'
                startIcon={<DeleteIcon />}
                // onClick={deleteSelected}

                onClick={(e) => {
                  e.preventDefault()
                  return fetch(
                    `${process.env.REACT_APP_API}/${endpoint}/${selectionModel[0]}`,
                    {
                      method: 'DELETE',
                      headers: {
                        Authorization: `Token ${token}`,
                        'Content-Type': 'application/json',
                      },
                    },
                  ).then(() => {
                    setIsRefreshed((prevState) => !prevState)
                    // navigateTo(`/${endpoint}`)
                  })
                }}
              >
                Delete
              </Button>
            )}
          </ButtonGroup>
        </Box>
        <Box>To Delete: {selectionModel} </Box>
      </Grid>
    </Grid>
  )
}
