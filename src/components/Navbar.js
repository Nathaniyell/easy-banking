import React, { useState } from 'react'
import logo from '../Assets/logo.svg'
import hamburger from '../Assets/icon-hamburger.svg'
import close from '../Assets/icon-close.svg'

const Navbar = () => {
  const [responsive, setResponsive] = useState(false)
  function handleNavIcon() {
    setResponsive(!responsive)
  }
  return (
    <nav>
      <header>
        <img src={logo} alt='logo' />
      </header>
      <ul className={responsive ? "mobile-links" : "nav-bar"}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Careers</li>
      </ul>
      <a href='#' className='hero-link nav-a'>Request Invite</a>
      <button className='hambuga' onClick={handleNavIcon}>
        {responsive ? <img  src={close} alt='close' /> : <img  src={hamburger} alt='bars' />}
      </button>

    </nav>
  )
}

export default Navbar