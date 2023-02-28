import { Box, CircularProgress } from '@mui/material'
import React from 'react'
import classes from './About.module.css'
export default function Toolkit() {
  return (
    <div className={classes['about']}>
    <section className={classes['main-section']}>
    <div className={classes['content']}>
<div className={classes['row']}>
          <div className={classes['col-12']}>
            <h3 className={classes['skill-title']}>My Toolkit </h3>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
             <Box
                sx={{
                
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >      
              <div> <img src={require('./amazon (1).png')} />
              </div>
              </Box>
        
    
             </Box>
            <h6 className={classes['skill-name']}>Amazon</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <Box
                sx={{
               
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                   <img src={require('./asana (3).png')} />
              </Box> 
          
            </Box>
            
            <h6 className={classes['skill-name']}>Asana</h6>
          </div>
          <div className={classes['col-5']}>

          <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <Box
                sx={{
                
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >       <img src={require('./clockify.png')} />
              </Box>
       
            </Box>
            <h6 className={classes['skill-name']}>Clockify</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <Box
                sx={{
               
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
              <img src={require('./excel.png')} />
              </Box> 
            </Box>
            <h6 className={classes['skill-name']}>Microsoft Excel</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
           <Box
                sx={{
             
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
              <img src={require('./team.png')} />
              </Box> 
            </Box>
            <h6 className={classes['skill-name']}>Microsoft Team</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <Box
                sx={{
                 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
          <img src={require('./canva.png')} />
              </Box> 
                   
            </Box>
            <h6 className={classes['skill-name']}>Canva</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
          <img src={require('./wave.png')} />
              </Box> 
          
            </Box>
            <h6 className={classes['skill-name']}>Wave</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <Box
                sx={{
              
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                 <img src={require('./helium.png')} />
              </Box> 
  
            </Box>
            <h6 className={classes['skill-name']}>Helium 10</h6>
          </div>

          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <Box
                sx={{
              
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
        <img src={require('./actres.png')} />
              </Box> 
  
            </Box>
            <h6 className={classes['skill-name']}>Active Campaign</h6>
          </div>
          <div className={classes['col-5']}>


            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <Box
                sx={{
              
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src={require('./methods.png')} />
         </Box> 
  
            </Box>
            <h6 className={classes['skill-name']}>Methods</h6>
          </div>

          <div className={classes['col-5']}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <Box
                sx={{
              
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src={require('./Gsuite-logo.png')} />
         </Box> 
  
            </Box>
            <h6 className={classes['skill-name']}>Google Suite</h6>
          </div>
          <div className={classes['col-5']}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <Box
                sx={{
              
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src={require('./zoom.png')} />
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
