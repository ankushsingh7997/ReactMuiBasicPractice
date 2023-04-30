import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'

const NavBar = () => {
  return (
    
    <AppBar position='fixed' color='primary'>
      <Toolbar>
 <Typography variant='h6' flexGrow={2}>flavored bytes</Typography>
 <Button variant='text' color='inherit' startIcon={<LoginIcon />}>login</Button>
 <Button variant='text' color='inherit' endIcon={<LogoutIcon />}>logout</Button>
 </Toolbar>
    </AppBar>
  )
}

export default NavBar