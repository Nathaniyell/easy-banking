import React from 'react'


const Card = ({icon, title, text}) => {
  return (
    <div className='card'>
        <img src={icon} alt='icon' />
       <h1>{title}</h1>
       <p>{text}</p>
    </div>
  )
}

export default Card