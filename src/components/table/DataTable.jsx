import * as React from 'react';

import { DataGrid, gridCheckboxSelectionColDef, GridToolbar } from '@material-ui/data-grid';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { useEffect, useState } from 'react';

import { PageNotFound } from '../helpers/PageNotFound';


// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
// ];


export const DataTable = ({ endpoint, Icon }) => {
    const [data, setData] = useState([])
    const [ columns, setColumns ] = useState([])
    // const [ rows, setRows ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
      const [selectionModel, setSelectionModel] = useState([])
    const token = localStorage.getItem("user_token")
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
    }));
    const classes = useStyles()

    useEffect(() => {
      fetch(`http://127.0.0.1:8000/${endpoint}`, {
        headers: {
          Authorization: `Token ${token}`
        }
      })
      .then(res => res.json())
      .then(res => {
        console.log("res is ")
        console.table(res)
        setData(res)
        const colHeaders = Object.keys(res[0])

        const headers = colHeaders.map((header) => {
          return {
            field: `${header}`, 
            headerName: `${header}`,
            description:`${header}`,
            width: 140
          }
        })
        setColumns(headers)
        setIsLoading(false)
      })
      .catch(err => {
        {console.log(`some error: ${err}`)}
        const header = 'Data Not Found'
        setColumns([
          {
            field: `${header}`, 
            headerName: `${header}`,
            description:`${header}`,
            flex: 1
          }
        ])
        setData([
          {
            id: 0,
            header : header
          }
        ])
        setIsLoading(false)
      })

  }, [])
  
  if(isLoading) return <>Loading . . . </>


  return (
    data
    ?
    <div style={{ height: '80%', width: '90%' , margin: '0 auto'}}>
      <Typography variant="h2" component="h2" gutterBottom>
        <Icon /> {endpoint}
      </Typography>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={25}
        checkboxSelection
        disableSelectionOnClick
         onSelectionModelChange={(newSelection) => {
          setSelectionModel(newSelection.selectionModel);
        }}
        selectionModel={selectionModel}
      />

      <div className={classes.root}>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          {
            endpoint === "containers"
            ? <></>
            :
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                startIcon={<AddIcon />}
              >New</Button>
          }
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<VisibilityIcon />}
          >View</Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<UpdateIcon />}
          >Update</Button>

          {
            endpoint === "containers"
            ?
              <></>
            :
              <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              >Delete</Button>
          }
        </ButtonGroup>
      </div>
    </div>
    : <PageNotFound />
  )
}