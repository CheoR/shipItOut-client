import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { ShipItOut } from './components/ShipItOut'
import { DataTableProvider } from './components/table/DataTableProvider'

import './index.css'
import { CssBaseline } from '@mui/material'

ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DataTableProvider>
        <Router>
          <CssBaseline />
          <ShipItOut />
        </Router>
      </DataTableProvider>
    </LocalizationProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
