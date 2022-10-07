import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { ShipItOut } from './components/ShipItOut'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Router>
        <ShipItOut />
      </Router>
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
