import React from 'react'
import logo from '../../Assets/logo.svg'
import FooterPages from './FooterPages'
import Linkelements from './SocialLinks'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer--div1'>
            <div>                
                <img src={logo} alt='' className='footer-logo'/>
            </div>
            <div className='footer-links'>
            {Linkelements}
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
        
        </div>
        <pre>Built by Nathan</pre>
    </div>
  )
}

export default Footer