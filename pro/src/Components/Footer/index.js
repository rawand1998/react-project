import React from 'react';
import Typography from '@mui/material/Typography';
import './Style.css'
function Footer() {
    return (
        <div className='container-footer'>
            { <Typography variant="body" gutterBottom component="div" sx={{
             
            }}>
                Pompeo @ copyRight 2022
            </Typography>
            /*
            <Typography variant="body" gutterBottom component="div" sx={{ color: '#6c6c6c', paddingTop: '15px', lineHeight: '24px' }}>
                I have always striven to fix beauty in wood, stone,<br />
                glass or pottery, that has been my creed.
            </Typography>
            <div  className='footer'>
                <div>
                    <img src="https://assets.website-files.com/5ba96977bf120e1b45986c06/5bc61f43b6ba2a3332ee30f4_icons8-secured-letter-80%20(1).png"/><br/><br/>
                    <Typography variant="body" sx={{fontSize:'15px',paddingBottom:'15px'}}>EMAIL</Typography><br /><br/>
                    <Typography variant="body" sx={{color:'#6c6c6c',paddingTop:'25px'}}>pompeopotery@gmail.com</Typography>
                </div>
                <div>
                    <img src="https://assets.website-files.com/5ba96977bf120e1b45986c06/5bc61fa61d93fd9e7976d4af_icons8-marker-80%20(1).png"/><br /><br />
                    <Typography variant="body" sx={{fontSize:'15px'}}>FIND</Typography><br /><br />
                    <Typography variant="body" sx={{color:'#6c6c6c',paddingTop:'25px'}}>Central Park, Manhattan <br />
                        New York, 1101

                    </Typography>
                </div>
                <div>
                    <img src="https://assets.website-files.com/5ba96977bf120e1b45986c06/5bc61f741d93fdca4176d416_icons8-ringer-volume-80.png" /><br /><br />
                    <Typography variant="body" sx={{fontSize:'15px'}}>CALL</Typography><br /><br />
                    <Typography variant="body" sx={{color:'#6c6c6c',paddingTop:'25px'}}>+1 292 345 678</Typography>
                </div>
            </div> */}
        </div>
    )
}
export default Footer;

