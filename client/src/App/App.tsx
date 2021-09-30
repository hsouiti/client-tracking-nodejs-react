import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter} from 'react-router-dom'


import Routes from '../routes';
import Navigation from '../components/layout/sidebar/navigation/Navigation';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <CssBaseline />
      <h1>Clients Management</h1> 
      <Navigation />
      <Routes /> 
    </div>
    </BrowserRouter>
  );
}

export default App;
