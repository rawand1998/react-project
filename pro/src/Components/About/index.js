import React from 'react';
import Typography from '@mui/material/Typography';
import './Style.css'
function About (){
    return(
        <div className='about-container'>
            <div>
            <Typography variant="body" gutterBottom component="div" sx={{color:'#d77474'}}>
            PRODUCT CATEGORIES
      </Typography>
      <Typography variant="h5" gutterBottom component="div" sx={{color:'#000',fontSize:'45px',paddingTop:'15px'}}>
      Porcelain & Pottery
      </Typography>
            </div>
            <div className='category'>
                <div className='vaes'>
                    <img src="https://assets.website-files.com/5bb39a4bdeee4e1e1f49f800/5bb7874064724534dc9870d0_icons8-pottery-64.png"/>
                   
                </div>
                <div className='mugs'>
                <img src="https://assets.website-files.com/5bb39a4bdeee4e1e1f49f800/5bb7874064724534dc9870d0_icons8-pottery-64.png"/>
                 
                </div>
                <div className='paltes'>
                <img src="https://assets.website-files.com/5bb39a4bdeee4e1e1f49f800/5bb7874064724534dc9870d0_icons8-pottery-64.png"/>
                   
                </div>
            </div>
            <div className='about-para'>
                <div className='para-1'>
                <Typography variant="h4" gutterBottom component="div" sx={{color:'#000'}}>
                Hand Grafted<br/>
Pottery since 1990
      </Typography>
      <Typography variant="body" gutterBottom component="div" sx={{color:'#6c6c6c'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
      </Typography>
                </div>
                <div className='para-2'>
                <Typography variant="h4" gutterBottom component="div" sx={{color:'#000'}}>
                We Provide Premium<br/>
Pottery Produts
      </Typography>
      <Typography variant="body" gutterBottom component="div" sx={{color:'#6c6c6c'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
      </Typography>
                </div>
            </div>
        </div>
    )
}
export default About;

