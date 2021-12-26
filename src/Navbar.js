import React from 'react'
import {AppBar,Box,Toolbar,Typography,IconButton} from '@mui/material';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';


function Navbar() {
	return (
		
	<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#2E3B55' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <PermContactCalendarIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gendre LookUp
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
		
	)
}

export default Navbar