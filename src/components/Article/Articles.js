import React from 'react'


const Articles = ({image, header, small, paragraph}) => {
    return (
        <div className='article'>
            <div className='article-card'>
                <img src={image} alt='article-image' />
                <div className='article-card-text'>
                <small>{small}</small>
                <h1>{header}</h1>
                <p>{paragraph}</p>
                </div>

            </div>
        </div>
    )
}

export default Articles