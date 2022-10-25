import React, { useContext, useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { ButtonGroup, Button, Typography, Box, Grid } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import UpdateIcon from '@mui/icons-material/Update'
import AddIcon from '@mui/icons-material/Add'
import { DataGrid } from '@mui/x-data-grid'

import { MdViewAgenda } from 'react-icons/md'
import { GrCubes } from 'react-icons/gr'
import { BiNews } from 'react-icons/bi'

import { TEST_TABLE_DATA } from '../../constants/formFields'
import { UserContext } from '../../context/UserContext'
import axiosInstance from '../../utils/axios'
import { Loading } from '../helpers/Loading'

const get_icon = {
  "bookings": BiNews,
  "containers": MdViewAgenda,
  "products": GrCubes,
}

export const DataTable = ({ endpoint }) => {
  const [selectionModel, setSelectionModel] = useState([])
  const [isRefreshed, setIsRefreshed] = useState(false)
  const { user: {token} } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)
  const [columns, setColumns] = useState([])
  const [data, setData] = useState([])
  const Icon = get_icon[endpoint]

  const deleteSelected = (e) => {
    e.preventDefault()
    return axiosInstance.delete(`/${endpoint}/${selectionModel[0]}`)
      .then(() => {
        setIsRefreshed((prevState) => !prevState)
        setSelectionModel([])
      })
      .catch((err) => {
        const msg = `Error: could not delete ${endpoint}/${selectionModel[0]}.\n`
        if(err.response) {
          // Not in 200 response range
          console.error(`${msg}\n `, err.response.data)
        }
      })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`/${endpoint}`)

        let colHeaders
        // even if response is in 200 range, may be empty
          if(response && !!response.data.length) {
            colHeaders = Object.keys(response.data[0])       
            setData(response.data)
          } else {
            colHeaders = Object.keys(TEST_TABLE_DATA[0])
            setData(TEST_TABLE_DATA)
        }

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

      } catch (err) {
        const msg = `Error: Could not fetch data for ${endpoint}.\n `
        if(err.response) {
          // Not in 200 response range
          console.error(`${msg}\n `, err.response.data)
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
        } else {
          console.error(`${msg}: ${err.message}`)
        }
      }
    }
    fetchData()
  }, [endpoint, isRefreshed, token])

  if (isLoading) return <Loading text='table' />

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
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
                onClick={deleteSelected}
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
