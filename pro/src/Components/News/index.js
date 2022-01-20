import React from 'react';
import Typography from '@mui/material/Typography';
import './Style.css'
function News() {
    return (
        <div className='new-container'>
            <div className='section-1'>
                <div className='image-new'><img src="https://assets.website-files.com/5ba96977bf120e1b45986c06/5bb9668024337c19082edcaf_orientovase.png" /></div>
                <div className='para-new'>
                    <Typography variant="h4" gutterBottom component="div" sx={{ color: '#000',fontSize:'24px',fontWeight:500 }}>
                        Gold & Black Pottery

                    </Typography>
                    <Typography variant="body" gutterBottom component="div" sx={{ color: '#6c6c6c',    lineHeight: '24px',fontFamily: 'Libre Franklin, sans-serif'  }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
                    </Typography>
                </div>
            </div>



            <div className='section-1'>
               
                <div className='para-news'>
                    <Typography variant="h4" gutterBottom component="div" sx={{ color: '#000',fontSize:'24px',fontWeight:500 }}>
                    Orange Ceramic

                    </Typography>
                    <Typography variant="body" gutterBottom component="div" sx={{ color: '#6c6c6c',    lineHeight: '24px',    fontFamily: 'Libre Franklin, sans-serif' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.
                    </Typography>
                </div>
                <div className='image-news'><img src="https://assets.website-files.com/5ba96977bf120e1b45986c06/5bb381e8f20c2e1db6f8800c_blouse.png" /></div>
            </div>
        </div>
    )
}
export default News;

