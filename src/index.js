import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
// import DateFnsUtils from '@date-io/date-fns'
import { ShipItOut } from './components/ShipItOut'
import './index.css'

import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Router>
        <ShipItOut />
      </Router>
    </LocalizationProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
