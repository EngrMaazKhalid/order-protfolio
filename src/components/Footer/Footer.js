import React from 'react'
import './Footer.css'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import InstagramIcon from '@mui/icons-material/Instagram';
export default function Footer() {
  const Buttons = styled(Button)(({ theme }) => ({
    backgroundColor:'#0509fd',
    fontFamily: 'Poppins',
    fontWeight:'500',
    marginTop: '2rem',
      '&:hover, &.Mui-focusVisible': {
        backgroundColor: '#0003b1'
      },
     
    
  }));


  return (
    <div className='Footer'>
<div className='main-part'>
  <h1 className='Footer-heading'>Get in Touch</h1>
  <div className='line' />
  <div className='social-icons'>
  <a href='https://www.linkedin.com/in/sidra-irfan/'>  <LinkedInIcon sx={{fontSize:'5rem', marginRight:'1rem', color:'#888', cursor:'pointer'}} className='linked' /></a>
    <a href='https://www.instagram.com/virtualassistant.sid/'>  <InstagramIcon sx={{fontSize:'5rem', marginRight:'1rem', color:'#888', cursor:'pointer'}} className='insta'/> </a>
  </div>
  <Buttons sx={{
          padding: '10px 25px',
          fontSize: '1.4rem',
          fontWeight:'500'
      }} variant="contained" className='find-btn' href='mailto:sidrakld56@gmail.com'>Contact Me</Buttons>
</div>
    </div>
  )
}
