import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import './Style.css'
function Product (){
    return(
        <div className='product-container'>
                 <Typography variant="body" gutterBottom component="div" sx={{color:'#d77474',paddingTop:'50px'}}>
            POMPEO POTTERY
      </Typography>
      <Typography variant="h4" gutterBottom component="div" sx={{color:'#000',fontWeight:700,paddingTop:'15px'}}>
      Ready to start shopping?
      </Typography>
      <Typography variant="body" gutterBottom component="div" sx={{color:'#6c6c6c',lineHeight:'24px'}}>
      Lorem ipsum dolor sit amet,consectetur adipiscing elit.<br/> Suspendisse varius enim in eros elementum.
      </Typography>
      <Button className='btn' variant="contained" sx={{marginTop:'3%',background:'#ac1313',padding:'20px 40px',borderRadius:0,fontFamily: 'Poppins, sans-serif',borderColor:'#000'}}>NEW COLLECTION</Button>
        </div>
    )
}
export default Product;

