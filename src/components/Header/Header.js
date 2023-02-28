import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import './Header.css'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles';
export default function Header() {
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


    <div className='skills'>
      <div className='skill-container'>
        <div className='skill-wrapper'>
        <h1 className='Heading1'>
            <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    'Hi, I am Sidra',
    2000,
    'Hi, I am your Virtual Assistant',
     2000,
    // 'We produce food for Guinea Pigs',
    // 1000,
    // 'We produce food for Chinchillas',
    // 1000,
    ]}
    speed={50} // Custom Speed from 1-99 - Default Speed: 40
    style={{ fontSize: '5.5rem', fontWeight: '300'  }}
    wrapper="h1" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />
                {/* <span className='Strong'> Sidra</span> */}
            </h1>
          
        </div>
     
      </div>
      <Buttons sx={{
          padding: '15px 30px',
          // backgroundColor: '#0509fd',
          // color: 'rgb(68, 67, 67)',
         
          fontSize: '1.6rem',
          fontWeight:'500'
      }} variant="contained" className='find-btn'>Find out more</Buttons>
    </div>
  )
}
