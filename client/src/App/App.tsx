import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material'


import Routes from '../routes';
import {theme} from '../theme/theme'




function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{display: 'flex'}}>
        <CssBaseline />
        <Routes /> 
      </div>
    </ThemeProvider>
  );
}

export default App;







