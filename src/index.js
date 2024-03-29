import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { CssBaseline } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import { ShipItOut } from './components/ShipItOut'
import { UserContextProvider } from './context/UserContext'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <UserContextProvider>
        <Router>
          <CssBaseline />
          <ShipItOut />
        </Router>
      </UserContextProvider>
    </LocalizationProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
