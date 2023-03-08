import { Box} from '@mui/material'
import React from 'react'
import classes from './About.module.css'
export default function Toolkit() {
  return (
    <div id='Toolkit' className={classes['about']}>
    <section className={classes['main-section']}>
    <div className={classes['content']}>
<div className={classes['row']}>
          <div className={classes['col-12']} data-aos="fade-up">
            <h3 className={classes['skill-title']} >My Toolkit </h3>
          </div>
          <div className={classes['col-5']} data-aos="zoom-in">


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
             <Box
                sx={{
                
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >      
              <div> <img src={require('./amazon (1).png')} alt='amazon' />
              </div>
              </Box>
        
    
             </Box>
            <h6 className={classes['skill-name']}>Amazon</h6>
          </div>
          <div className={classes['col-5']} data-aos="zoom-in">


<Box sx={{ position: 'relative', display: 'inline-flex' }}>
<Box
    sx={{
  
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
     <img src={require('./helium.png')} alt='helium' />
  </Box> 

</Box>
<h6 className={classes['skill-name']}>Helium 10</h6>
</div>
          <div className={classes['col-5']} data-aos="zoom-in">


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <Box
                sx={{
               
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                   <img src={require('./asana (3).png')} alt='asana' />
              </Box> 
          
            </Box>
            
            <h6 className={classes['skill-name']}>Asana</h6>
          </div>
          <div className={classes['col-5']} data-aos="zoom-in">

          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <Box
                sx={{
                
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >       <img src={require('./clockify.png')} alt='clockify' />
              </Box>
       
            </Box>
            <h6 className={classes['skill-name']}>Clockify</h6>
          </div>
          <div className={classes['col-5']} data-aos="zoom-in">


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <Box
                sx={{
               
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
              <img src={require('./excel.png')} alt='excel'/>
              </Box> 
            </Box>
            <h6 className={classes['skill-name']}>Microsoft Excel</h6>
          </div>
          <div className={classes['col-5']} data-aos="zoom-in">


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
           <Box
                sx={{
             
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
              <img src={require('./team.png')} alt='ms teams'/>
              </Box> 
            </Box>
            <h6 className={classes['skill-name']}>Microsoft Team</h6>
          </div>
          <div className={classes['col-5']} data-aos="zoom-in">


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <Box
                sx={{
                 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
          <img src={require('./canva.png')} alt='canva'/>
              </Box> 
                   
            </Box>
            <h6 className={classes['skill-name']}>Canva</h6>
          </div>
          <div className={classes['col-5']} data-aos="zoom-in">


<Box sx={{ position: 'relative', display: 'inline-flex' }}>
<Box
    sx={{
  
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <img src={require('./methods.png')} alt='method' />
</Box> 

</Box>
<h6 className={classes['skill-name']}>Methods</h6>
</div>
          <div className={classes['col-5']} data-aos="zoom-in">


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
          <img src={require('./wave.png')} alt='wave' />
              </Box> 
          
            </Box>
            <h6 className={classes['skill-name']}>Wave</h6>
          </div>
         

          <div className={classes['col-5']} data-aos="zoom-in">


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <Box
                sx={{
              
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
        <img src={require('./actres.png')} alt='Active Campaign' />
              </Box> 
  
            </Box>
            <h6 className={classes['skill-name']}>Active Campaign</h6>
          </div>
     

          <div className={classes['col-5']} data-aos="zoom-in">
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <Box
                sx={{
              
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src={require('./Gsuite-logo.png')} alt='google suite'/>
         </Box> 
  
            </Box>
            <h6 className={classes['skill-name']}>Google Suite</h6>
          </div>
          <div className={classes['col-5']} data-aos="zoom-in">
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <Box
                sx={{
              
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src={require('./zoom.png')} alt='zoom' />
         </Box> 
  
            </Box>
            <h6 className={classes['skill-name']}>Zoom</h6>
          </div>



        </div>
      
</div>
        </section>    
        </div>
  )
}
