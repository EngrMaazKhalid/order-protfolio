
import React from 'react'
import './Home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import DownloadIcon from '@mui/icons-material/Download'
import SendIcon from '@mui/icons-material/Send';

export default function Info() {
  return (
    <div className='Home' id='Home'>
            <div className='Home-container'>
   
            <div className='dp-div'>
                <div className='profiledp' data-aos="fade-up" />
                <div className='smicons'>
            <a href='https://www.linkedin.com/in/sidra-irfan/'>  <LinkedInIcon sx={{fontSize:'5rem'}}   className='social' data-aos="zoom-in-left" ></LinkedInIcon></a>
             {/* <FacebookIcon sx={{fontSize:'5rem'}}  className='social' ></FacebookIcon> */}
       <a href='https://www.instagram.com/virtualassistant.sid/'><InstagramIcon sx={{fontSize:'5rem'}}  className='social' color='secondary' data-aos="zoom-in-left"></InstagramIcon></a> 
      </div>
            </div>
            <div className='Home-wrapper' data-aos="fade-up" >
            <p className='intropara' >
            Hi, I am Sidra an industrial Engineer by qualification and Virtual Assistant Freelancer by 
            profession. I value honesty and dedication in all aspects of my work.
             I believe that open and transparent communication is key to building strong client relationships! As a self-motivated and detail-oriented can handle a wide range of tasks. As a self-starter, I always enjoy new tackling challenges and learning new skills.
            </p>
    
            <div className='down-div'>
                  
                  
                <a className='button' href='mailto:sidrakld56@gmail.com'><span className='button-text'> Contact Me</span>
                  <span className='button-icon'>
                  <SendIcon sx={{ fontSize: '3rem' }} />
                  </span>
                </a>
                {/* <a className='button1' href='mailto:sidrakld56@gmail.com'><span className='button-text1'>Contact Me</span>
                  <span className='button-icon1'>
                    <SendIcon sx={{ fontSize: '3rem' }} />
                  </span>
                </a> */}
            </div>
        </div>
        </div>
    </div>
  )
}
