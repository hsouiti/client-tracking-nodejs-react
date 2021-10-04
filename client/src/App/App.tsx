import React from 'react';
import {CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material'


import Routes from '../routes';


function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <CssBaseline />
      <Routes /> 
    </div>
  );
}

export default App;







