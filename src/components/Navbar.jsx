import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import Badge from '@mui/material/Badge';
import "./Navbar.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className='navv' sx={{ background: "white" }}>
            <IconButton
              size="large"
              edge="start"
              // color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >

            </IconButton>
            {/* <div> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: "flex", marginRight: "50px", fontSize: 14 }}>
              <LocalPhoneIcon /> <span className='nav-top'>1300250296</span>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft: 2, fontSize: 14 }}>
                <MailIcon /> <span className='navLeft nav-top'>sayhello@kowine.com</span>
              </Typography>
            </Typography>
            {/* </div> */}

            <TwitterIcon className='nav-top' />
            < InstagramIcon className='nav-top' />
            < LinkedInIcon className='nav-top' />
            <PinterestIcon className='nav-top' />
          </Toolbar>
        </AppBar>
      </Box>
      <hr />
      <Box className='nav' sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className='navv' sx={{ background: "white" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img className='logo' src='https://wpbingosite.com/wordpress/kowine/wp-content/webp-express/webp-images/uploads/2021/06/logo.png.webp' />
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/"><div className='middle-nav'>Home</div></Link> <Link to="/product"><div className='middle-nav'>Product</div></Link> <Link to="/add"><div className='middle-nav'>Add</div></Link> <Link to="/account"><div className='middle-nav'>Account</div></Link>
            </Typography>
            <Link className='nav-top' to="/login">LOGIN</Link>
            <Link className='nav-top' to="/register">/REGISTER</Link>
            <SearchSharpIcon className='nav-top' />
            <FavoriteBorderIcon className='nav-top' />
            <Badge badgeContent={1} color="error">
              <ShoppingBasketOutlinedIcon className='nav-top' />
            </Badge>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Navbar