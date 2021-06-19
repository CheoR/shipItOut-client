import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { ShipItOut } from "./components/ShipItOut"
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ShipItOut />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
