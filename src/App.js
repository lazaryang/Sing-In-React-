import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <p/>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <p/>
      <Button variant="contained" color="primary" disableElevation>
      Sing in
    </Button>
      </header>
    </div>
  );
}

export default App;
