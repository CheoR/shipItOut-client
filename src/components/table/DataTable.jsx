import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { DataGrid } from '@mui/x-data-grid';

import { makeStyles } from '@material-ui/core/styles'
import { ButtonGroup, Button, Typography } from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete'
import UpdateIcon from '@material-ui/icons/Update'
import AddIcon from '@material-ui/icons/Add'

import VisibilityIcon from '@material-ui/icons/Visibility'
import logo from '../../assets/images/pugTransport.svg'
import { PageNotFound } from '../helpers/PageNotFound'
import styles from './Table.module.css'
import {
  filterBookingData,
  filterContainerData,
  filterProductData,
} from './FlattenData'

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// ];

export const DataTable = ({ endpoint, Icon }) => {
  const history = useHistory()
  const [data, setData] = useState([])
  const [columns, setColumns] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectionModel, setSelectionModel] = useState([])
  const [isRefreshed, setIsRefreshed] = useState(false)
  const token = localStorage.getItem('user_token')
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    button: {
      margin: theme.spacing(1),
    },
  }))
  const classes = useStyles()

  const deleteSelected = (e) => {
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
      console.log('calling resset')
      setIsRefreshed((prevState) => !prevState)
    })
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}/${endpoint}`, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // TODO: move flattening to backend
        switch (endpoint) {
          case 'bookings':
            res = filterBookingData([...res])
            break
          case 'containers':
            res = filterContainerData(res)
            break
          case 'products':
            res = filterProductData(res)
            break
          default:
            throw 'Data Not Found'
        }

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
  }, [isRefreshed])

  if (isLoading)
    return (
      <div>
        <img
          src={logo}
          className={styles.logo}
          alt='Rotating compoany logo'
        />{' '}
        Loading . .{' '}
      </div>
    )

  return data ? (
    <div style={{ height: '80%', width: '90%', margin: '0 auto' }}>
      <Typography
        variant='h2'
        component='h2'
        gutterBottom
      >
        <Icon /> {endpoint}
      </Typography>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={25}
        checkboxSelection
        disableSelectionOnClick
        onSelectionModelChange={(newSelection) => {
          setSelectionModel(newSelection.selectionModel)
        }}
        selectionModel={selectionModel}
      />

      <div className={classes.root}>
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
              className={classes.button}
              startIcon={<AddIcon />}
              component={Link}
              to={`/${endpoint}/create`}
            >
              New
            </Button>
          )}
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            startIcon={<VisibilityIcon />}
            component={Link}
            to={`/${endpoint}/${selectionModel[0]}`}
          >
            View
          </Button>
          <Button
            variant='contained'
            color='primary'
            className={classes.button}
            startIcon={<UpdateIcon />}
            component={Link}
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
              className={classes.button}
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
                  // history.push(`/${endpoint}`)
                })
              }}
            >
              Delete
            </Button>
          )}
        </ButtonGroup>
        <div>To Delete: {selectionModel[0]} </div>
      </div>
    </div>
  ) : (
    <PageNotFound />
  )
}
