import React from 'react'
import Card from './Card'
import cardData from './CardData'

const cardElement = cardData.map((card) => {
  return (
    <Card
    key={card.id}
      icon={card.icon}
      title={card.title}
      text={card.text}
    />
  )


  console.log(cardData)
})

const Body = () => {
  return (
    <div className='body--section'>
      <h1 className='header'>Why chose Easybank?</h1>
      <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>

      <div className='grid-cards'>
        {cardElement}
      </div>

      
    </div>
  )
}

export default Body