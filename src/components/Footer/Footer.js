import React from 'react'
import logo from '../../Assets/logo.svg'
import FooterPages from './FooterPages'
import Linkelements from './SocialLinks'


const Footer = () => {
  return (
    <div className='footer' data-aos="fade-up"
    data-aos-duration="1000">

        <div className='footer--div1'>
            <div>                
                <img src={logo} alt='' className='footer-logo'/>
            <div className='footer-links'>
            {Linkelements}
            </div>
            </div>
           
            <div className='footer-links2'>
                <FooterPages 
                a={'About Us'}
                b={'Contact'}
                c={'Blog'}
                />
            </div>
            <div className='footer-links3'>
            <FooterPages 
                a={'Careers'}
                b={'Support'}
                c={'Privacy Policy'}
                />
            </div>
        </div>
        <div className='footer-aside'>
        <a href='#' className='hero-link'>Request Invite</a>
        <p>© Easybank. All Rights Reserved</p>
        <pre>Built by Nathan</pre>
        </div>
       
    </div>
  )
}

export default Footer