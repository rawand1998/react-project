import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Style.css'
function Contact (){
    return(
        <div className='contact-container'>
            <div className='container-img'></div>
            <Typography variant="body" gutterBottom component="div" sx={{color:'#d77474',paddingTop:'0px'}}>
            LATEST NEWS
      </Typography>
      <Typography variant="h4" gutterBottom component="div" sx={{color:'#000',paddingTop:'10px',fontWeight:550}}>
      Latest news & New updates
      </Typography>
      <div className='input-contact'>
      <TextField id="filled-basic" label="E-mail" variant="filled" sx={{padding:'0px 40px'}} />
      <Button className='btn' variant="contained" sx={{background:'#000',padding:'10.2px 40px',borderRadius:0,fontFamily: 'Poppins, sans-serif',borderColor:'#000',marginLeft:'-5%'}}>NEW COLLECTION</Button>
      </div>
        </div>
    )
}
export default Contact;

