import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter} from 'react-router-dom'


import Routes from '../routes';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <CssBaseline />
      <h1>Clients Management</h1> 
      <Routes /> 
    </div>
    </BrowserRouter>
  );
}

export default App;
