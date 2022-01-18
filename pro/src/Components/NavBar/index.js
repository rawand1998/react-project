import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import './Style.css'
function NavBar (){
    return(
        <div className='nav-conatiner'>
            <div>
            <Typography variant="h6" gutterBottom component="div" sx={{fontWeight:700,fontSize:'20px',fontFamily: 'Pacifico,sans-serif'}}>
        Pompeo
      </Typography>
            </div>
            <div className='nav-bar'>
            <Box sx={{ width: '100%' }}>
      <Tabs  aria-label="nav tabs example">
        <Tab label="Home" href="/drafts" />
        <Tab label="About " href="/trash" />
        <Tab label="Shop" href="/spam" />
        <Tab label="Contact" href="/spam" />
        <Tab label="Cart" href="/spam" />
      </Tabs>
    </Box>
            </div>
        </div>
    )
}
export default NavBar;


