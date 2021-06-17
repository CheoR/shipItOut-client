import pug from './assets/images/pugTransport.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pug} className="App-logo" alt="Shipt It Out logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          <h1>ShipItOut</h1>
          <h2>Peggy Pug Transport</h2>
        </a>
      </header>
    </div>
  );
}

export default App;

{/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="msapplication-config" content="/browserconfig.xml" />
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="theme-color" content="#ffffff"></meta> */}