import React from 'react'
import Hero from '../Assets/image-mockups.png'


const HeroSection = () => {
  return (
    <section>
      <div className='hero--section'>
        <img src={Hero} alt='' className='hero--img' />
      </div>
      <div className='hero--text'>
        <h1>Next generation digital banking</h1>
        <p>Take your financial life online. Your Easybank account will be a one-stop-shop
          for spending, saving, budgeting, investing, and much more.</p>
        <a href='#' className='hero-link'>Request Invite</a>
      </div>
    </section>

  )
}

export default HeroSection