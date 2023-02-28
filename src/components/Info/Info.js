
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
                <img src={require('./image.png')} className='profiledp'></img>
                <div className='smicons'>
              <LinkedInIcon sx={{fontSize:'5rem'}}  className='social' ></LinkedInIcon>
             <FacebookIcon sx={{fontSize:'5rem'}}  className='social' ></FacebookIcon>
            <InstagramIcon sx={{fontSize:'5rem'}}  className='social' ></InstagramIcon>
      </div>
            </div>
            <div className='Home-wrapper'>
            <p className='intropara'>
            I am a virtual assistant with expertise in sales and marketing, Amazon listing and Amazon Ads, project/task management, and administrative tasks. I have a strong background in developing and executing marketing strategies, conducting market research, and creating engaging content. 
        I am skilled in optimizing Amazon listings, conducting keyword research, and managing Amazon Ads campaigns. I excel in project and task management, utilizing various tools to keep tasks on track and ensuring timely completion.  
        
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
