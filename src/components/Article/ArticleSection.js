import React from 'react'
import articleElements from './ArticleData'

const ArticleSection = () => {
  return (
    <div>
        <h1 className='new-header'>Latest Section</h1>
        <div className='grid-articles'>
        {articleElements}
        </div>
        
    </div>
  )
}

export default ArticleSection