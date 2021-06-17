import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import { ShipItOut } from "./components/ShipItOut"
// import './index.css';
// import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <App /> */}
      <ShipItOut />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
