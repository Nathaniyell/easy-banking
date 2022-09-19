import image1 from '../../Assets/image-currency.jpg'
import image2 from '../../Assets/image-restaurant.jpg'
import image3 from '../../Assets/image-plane.jpg'
import image4 from '../../Assets/image-confetti.jpg'
import Articles from './Articles'

const articleData = [
    {
        id: 11,
        image: image1,
        small: 'By Claire Robinson',
        header: 'Receive money in any currency with no fees',
        paragraph: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
    },
    {
        id: 13,
        image: image2,
        small: 'By Wilson Hutton',
        header: 'Treat yourself without worrying about money',
        paragraph: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
    },
    {
        id: 15,
        image: image3,
        small: 'By Wilson Hutton',
        header: 'Take your Easybank card wherever you go',
        paragraph: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
    },
    {
        id: 17,
        image: image4,
        small: 'By Claire Robinson',
        header: 'Our invite-only Beta accounts are now live!',
        paragraph: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
    },
]

const ArticleElements = articleData.map((elem)=>{
    return (
        <Articles
        key={elem.id}
        image={elem.image}
        header={elem.header}
        small={elem.small}
        paragraph={elem.paragraph}
        />
    
    )
  
})
export default ArticleElements