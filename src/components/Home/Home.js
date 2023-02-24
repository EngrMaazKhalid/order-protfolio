import React from 'react'
import './Home.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Home() {
  return (
    <div className='Home'>
       <div className='Home-container'>
        <div className='Home-wrapper'>
            <h1 className='Heading'>
                Hi, I am  
                <span className='Strong'> Sidra</span>
            </h1>
            <p className='intropara'>
        I am a virtual assistant with expertise in sales and marketing, Amazon listing and Amazon Ads, project/task management, and administrative tasks. I have a strong background in developing and executing marketing strategies, conducting market research, and creating engaging content. 
            </p>
            <p className='intropara second'>
          
          I am skilled in optimizing Amazon listings, conducting keyword research, and managing Amazon Ads campaigns. I excel in project and task management, utilizing various tools to keep tasks on track and ensuring timely completion.    </p>
         
         </div>
         <div className='dp-div'>
             <img src={require('./image.png')} className='profiledp' />
             <div className='smicons'>
             <LinkedInIcon sx={{fontSize:'5rem'}}  className='social' />
             <FacebookIcon sx={{fontSize:'5rem'}}  className='social' />
            <InstagramIcon sx={{fontSize:'5rem'}}  className='social' />
             </div>
             
        </div>
        <div className='flex'>
        <button className='mainbtn'>
                Find out more
             
             </button>
             </div>
       </div>
        </div>
  )
}
