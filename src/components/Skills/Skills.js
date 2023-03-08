import { Card, CardActionArea, CardContent, Typography } from '@mui/material'
import React from 'react'
// import classes from '../Toolkit/About.module.css'
import classes from './About.module.css'
import './Skills.css'
export default function Skills() {
  return (
    <div id='Skills' className='Skills'>
        <div className={classes['about']}>
    <section className={classes['main-section']}>
    <div className={classes['content']}>
<div className={classes['row']}>
          <div className={classes['col-12']} data-aos="fade-up">
            <h3 className='skill-head'>My skills </h3>
          </div>
          <div className={classes['col-5']}>


          <Card sx={{ maxWidth: '35.5rem', minWidth: '25.5rem',display:'flex', alignItem:'center', justifyContent:'center', borderRadius: '20px 60px 0', boxShadow: '0 1.5rem 4rem rgb(0 0 0 / 15%)', padding:'1rem' }} className='Service_card' data-aos="fade-right" >
      <CardActionArea>
      <div className='area_icon'>
      <svg className='commerce-icon'></svg> 
      </div>
      <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{display:'flex', alignItem:'center', justifyContent:'center', fontSize:'2.2rem', fontWeight:'700' }}>
          Ecommerce Marketing
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{display:'flex', alignItem:'center', justifyContent:'center',flexWrap:'wrap',   fontSize:'1.6rem', marginLeft:'2rem', textAlign:'left' }}>
          <ul>
            <li>Amazon account management</li>
            <li>Listing creation.</li>
            <li>Amazon Flat/bulk filet</li>
            <li>Amazon keyword research</li>
            <li>Amazon Ad campaigns</li>
           </ul>
          </Typography>
        </CardContent>
      
      </CardActionArea>
    </Card>
          </div>
          <div className={classes['col-5']}>


          <Card sx={{ maxWidth: '35.5rem', minWidth: '25.5rem' , boxShadow: '0 1.5rem 4rem rgb(0 0 0 / 15%)', padding:'1rem', borderRadius: '20px 60px 0' }} className='Service_card' data-aos="flip-left">
      <CardActionArea>
      <div className='area_icon'>
      <svg className='customer-icon'></svg> 
       </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{display:'flex', alignItem:'center', justifyContent:'center', fontSize:'2.2rem', fontWeight:'700' }}>
           Sales/Customer Services
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{display:'flex', alignItem:'center', justifyContent:'center', fontSize:'1.6rem', margin:'1rem', textAlign:'left' }}>
          <ul>
            <li>Sales Calls</li>
            <li>Customer Service</li>
            <li>Report Creation.</li>
            <li>Email Management </li>
            <li>Email Scheduling </li>
           </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div className={classes['col-5']}>


          <Card sx={{maxWidth: '35.5rem', minWidth: '25.5rem' , boxShadow: '0 1.5rem 4rem rgb(0 0 0 / 15%)', padding:'1rem', display:'flex', alignItems:'center', justifyContent:'center',flexWrap:'wrap', borderRadius: '20px 60px 0' }} className='Service_card' data-aos="flip-right" >
      <CardActionArea>
      <div className='area_icon'>
      <svg className='virtual-icon'></svg> 
   </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{display:'flex', alignItem:'center', justifyContent:'center', fontSize:'2.2rem', fontWeight:'700' }}>
          Virtual Assisstant
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{display:'flex', alignItem:'center', justifyContent:'center', fontSize:'1.6rem', textAlign:'left',margin:'1rem' }}>
          <ul>
            <li>Competitor Analysis</li>
            <li>Amazon A+ content</li>
            <li>Project Management</li>
            <li>Task Management </li>
           </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div className={classes['col-5']}>


          <Card sx={{ maxWidth: '35.5rem', minWidth: '25.5rem' , boxShadow: '0 1.5rem 4rem rgb(0 0 0 / 15%)', padding:'1rem' , borderRadius: '20px 60px 0'}} className='Service_card' data-aos="fade-left" >
      <CardActionArea>
      <div className='area_icon'>
      <svg className='social-icon'></svg> 
       </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{display:'flex', alignItem:'center', justifyContent:'center', fontSize:'2.2rem', fontWeight:'700' }}>
            Social Media Marketing
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{display:'flex', alignItem:'center', justifyContent:'center', fontSize:'1.6rem' , textAlign:'left',margin:'1rem', fontFamily:'Poppins'}}>
          <ul>
            <li>Social Media Marketing</li>
            <li>Instagram reels</li>
            <li>Content writing</li>
            <li>Measurement & Analytics</li>
            <li>Promotion & Advertising</li>
           </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
       
          




        </div>
      
</div>
        </section>    
        </div>
        </div>

  )
}
