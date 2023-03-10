import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import './Navbar.css'

const pages = [
  {
    key:"01",
  name:'About Me',
  id:'#Home'}, 
  {
    key:"02",
    name:'Services',
    id:'#Skills'},
    {
      key:"03",
      name:'My Toolkit',
    id:'#Toolkit'},
    {
      key:"04",
      name: 'Reviews',
    id:'#Reviews'
  }
];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
// 
  return (
    <AppBar position="static" sx={{backgroundColor:'white', color:'white', backgroundRepeat:'fixed'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:'flex', justifyContent:'space-between', marginLeft:'1rem', marginRight:'1rem'}}>
           <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} > 
          <img src={require('./logo.png')} alt='sk virtual Assistant' />
          </Box>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
 <Box sx={{ display: { xs: 'flex', md: 'none' }, marginRight:'auto' }} > 
          <img src={require('./logo.png')} alt='sk virtual Assistant'  />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none', color:'black' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
              sx={{marginLeft:'auto'}}
            >
              <MenuIcon sx={{fontSize:'3.5rem'}}/>
            </IconButton>
            <Menu
            
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                marginLeft:'auto',
                color:'black'
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.key}  onClick={handleCloseNavMenu}>
                  <Typography   textAlign="center" sx={{fontSize:"1.6rem"}}><a className='NavName' href={page.id}>{page.name}</a></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
         
          <Box sx={{ display: { xs: 'none', sm: 'block', color:'black' } }}>
        {pages.map((item) => (
          <Button href={item.id} key={item.key} sx={{ color: 'rgb(83, 83, 83)', fontSize:'1.6rem', fontFamily:'Poppins' }}>
            {item.name}
          </Button>
        ))}
      </Box>
        
               {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> 
            </Tooltip> */} 
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
               {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
     
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;