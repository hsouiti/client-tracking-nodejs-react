import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from 'components/layout/sidebar/navigation/Navigation';
import Header from 'components/layout/header/Header';

function App() {
  return (
    <div className="App">
      <CssBaseline />
     <h1>Clients Management</h1> 
     <Navigation />
     <Header />
    </div>
  );
}

export default App;
