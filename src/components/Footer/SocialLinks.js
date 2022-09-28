import React from 'react'
import fb from '../../Assets/icon-facebook.svg'
import youtube from '../../Assets/icon-youtube.svg'
import twitter from '../../Assets/icon-twitter.svg'
import Pinterest from '../../Assets/icon-pinterest.svg'
import Instagram from '../../Assets/icon-instagram.svg'


const Socials = ({ link, title }) => {
    return (
        <div>
            <img src={link} alt={title} title={title} className='footer-sL' />
        </div>
    )
}

const socialLinks = [
    {
        id: 1,
        title: 'Facebook',
        link: fb
    },
    {
        id: 2,
        title: 'Youtube',
        link: youtube
    },
    {
        id: 3,
        title: 'Twitter',
        link: twitter
    },
    {
        id: 4,
        title: 'Pinterest',
        link: Pinterest
    },
    {
        id: 5,
        title: 'Instagram',
        link: Instagram
    }
]

const LinkElements = socialLinks.map((each) => {
    return (
        <Socials
            key={each.id}
            link={each.link}
            title={each.title}
        />
    )
})



export default LinkElements