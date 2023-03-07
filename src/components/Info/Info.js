
import React from 'react'
import './Home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DownloadIcon from '@mui/icons-material/Download'

export default function Info() {
  return (
    <div className='Home'>
            <div className='Home-container'>
   
            <div className='dp-div'>
                <div className='profiledp' />
                <div className='smicons'>
              <LinkedInIcon sx={{fontSize:'5rem'}}  className='social' ></LinkedInIcon>
             <FacebookIcon sx={{fontSize:'5rem'}}  className='social' ></FacebookIcon>
            <InstagramIcon sx={{fontSize:'5rem'}}  className='social' ></InstagramIcon>
      </div>
            </div>
            <div className='Home-wrapper'>
            <p className='intropara'>
            Hi, I am Sidra an industrial Engineer by qualification and Virtual Assistant Freelancer by 
            profession. I value honesty and dedication in all aspects of my work.
             I believe that open and transparent communication is key to building strong client relationships! As a self-motivated and detail-oriented can handle a wide range of tasks. As a self-starter, I always enjoy new tackling challenges and learning new skills.
            </p>
    
            <div className='down-div'>
                  <a className='button'><span className='button-text'> Download cv</span>
                  <span className='button-icon'>
                    <DownloadIcon sx={{ fontSize: '3rem' }} />
                  </span>
                </a>
            </div>
        </div>
        </div>
    </div>
  )
}
