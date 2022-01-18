import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import './Style.css'
function Header (){
    return(
        <div className='header-contanier'>
            <div className='title'>
                        
            <Typography variant="body" gutterBottom component="div" sx={{color:'#d77474'}}>
            POMPEO POTTERY
      </Typography>
            <Typography variant="h4" gutterBottom component="div" sx={{fontWeight:700,padding:'10px 0px',fontSize:'50px'}}>
            Unique Porcelain <span className='and'>& </span> <br />Stone Collection
      </Typography>
      <Typography variant="body" gutterBottom component="div" sx={{color:'#6c6c6c',    fontFamily: 'Libre Franklin, sans-serif'}}>
      Unique & modern pottery made by our master in porcelain stones.
      </Typography>
      <Button variant="contained" sx={{marginTop:'3%',background:'#ac1313',padding:'20px 40px',borderRadius:0}}>SHOP COLLECTION</Button>
            </div>
            <div className='image'>
                <img src="https://assets.website-files.com/5ba96977bf120e1b45986c06/5e602d43ad635f0fe2d06a05_Untitled-2d2%20(2).png" />
            </div>
           
        </div>
    )
}
export default Header;

