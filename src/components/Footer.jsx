import React from 'react'
import "./Footer.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <div >
            <div className='footer'>
            <div>
                <h1>Contact Us</h1>
                <ul>
                    <li>Head Office:26 Wyle Cop, Shrewsbury,
                    Shropshire, SY1 1XD</li>
                    <li>Tel: 01743 234500</li>
                    <li>Email: support&kowine.com</li>
                </ul>
                <ul className='footer-icons'>
                    <li className='icons'><TwitterIcon/></li>
                    <li className='icons'><InstagramIcon/></li>
                    <li className='icons'><LinkedInIcon /></li>
                    <li className='icons'><PinterestIcon/></li>
                </ul>
            </div>
            <div className='footer-list'>
                <h1>Customer Services</h1>
                <ul>
                    <li>Contact & FAQ</li>
                    <li>Track Your Order</li>
                    <li>Returns & Refunds</li>
                    <li>Shipping & Delivery</li>
                    <li>Interest Free Finance</li>
                    <li>Cipmoney</li>
                </ul>
            </div>
            <div className='footer-list'>
                <h1>About Us</h1>
                <ul>
                    <li>Our story</li>
                    <li>The team</li>
                    <li>Press</li>
                    <li>Jobs</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='footer-list'>
                <h1>Discover More</h1>
                <ul>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Pinterest</li>
                    <li>Jobs</li>
                    <li>Contact</li>
                </ul>
            </div>
            </div>
            <hr/>
            <div className='footer-bottom'>
            <div className='footer-bottom_leftside'>
                <span>Copyright © 2021 Kowines Ltd.</span>
            </div>
            <div className='footer-bottom_rightside'>
              <img src="https://wpbingosite.com/wordpress/kowine/wp-content/uploads/2020/06/payment.png"/>
            </div>
            </div>
        </div>
    )
}

export default Footer