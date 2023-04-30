import React from 'react';
// import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import NavBar from './components/NavBar';





function App() {
  

  return (
    <>
     {/* <Typography variant="h1" gutterBottom>
       hii there
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
       hii there
      </Typography>
      <Typography backgroundColor="brown" variant="caption" display="block" gutterBottom>
      hii there
      </Typography>
      <Typography backgroundColor="green" mt={1} variant='overline' display='block' gutterBottom>hii there</Typography>
      <Button  variant='outlined'>click me</Button>
      <Button  variant='outlined'>click me</Button> */}
   
      <NavBar />
     
    </>
  )
}

export default App
