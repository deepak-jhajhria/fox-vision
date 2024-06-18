import { PortfolioCardLayout } from './PortfolioCardLayout'
import portCard1 from '../../assets/images/webp/portCard1.webp'
import portCard2 from '../../assets/images/webp/portCard2.webp'
import portCard3 from '../../assets/images/webp/portCard3.webp'
import portCard4 from '../../assets/images/webp/portCard4.webp'
import portCard5 from '../../assets/images/webp/portCard5.webp'
import portCard6 from '../../assets/images/webp/portCard6.webp'
import portCard7 from '../../assets/images/webp/portCard7.webp'
import portCard8 from '../../assets/images/webp/portCard8.webp'
import portCard9 from '../../assets/images/webp/portCard9.webp'
import portCard10 from '../../assets/images/webp/portCard10.webp'
import portCard11 from '../../assets/images/webp/portCard11.webp'
import CommonButton from '../common/CommonButton'
const PortCardData = [
    {
        img: portCard1,
        head: 'Anton Paloka',
        discription: 'Facility Management'
    },
    {
        img: portCard2,
        head: 'Gut versichert ins leben.',
        discription: "Wir helfen ihnen dabei"
    },
    {
        img: portCard3,
        head: 'Anton Paloka',
        discription: "Geschäftsführer"
    },
    {
        img: portCard4,
        head: 'Mhill Paloka',
        discription: 'Leiter Administration',
    },
    {
        img: portCard5,
        head: 'Id nisi elementum',
        discription: 'Lorem ipsum dolor  consectetur.',
    },
    {
        img: portCard6,
        head: 'Augue tincidunt ipsum',
        discription: 'Ipsum dolor sit amet.',
    },
    {
        img: portCard7,
        head: 'Amet consectetur Consequat',
        discription: 'Lorem sit amet consectetur.',
    },
    {
        img: portCard8,
        head: 'Lorem sit amet consectetur.',
        discription: 'dolor sit amet consectetur.',
    },
    {
        img: portCard9,
        head: "Egestas faucs aliquam libero",
        discription: 'Lorem ipsum dolor ',
    },
    {
        img: portCard10,
        head: 'Amet consectetur Consequat',
        discription: 'Lorem ipsum.'
    },
    {
        img: portCard11,
        head: 'Nunc tellus sed auctor  nulla',
        discription: 'Lorem ipsum consectetur.'
    }
]

const PortfolioCards = () => {
    return (
        <div className='pt-[123px] pb-[293px] px-6'>
            <div className=' container max-w-[1140px]'>
                <div className=' flex flex-row flex-wrap -mx-3 mb-[26px] justify-center  lg:justify-normal'>
                    {
                        PortCardData.map((item, i) => (
                            <div className={`lg:w-1/3 md:w-1/2 w-full px-3 flex justify-center ${1 <= 9 ? "mb-6" : "mb-0"
                                }`}>
                                <PortfolioCardLayout index={i} img={item.img} head={item.head} discription={item.discription} />
                            </div>
                        ))
                    }
                </div>
                <div className='flex justify-center'>
                    <CommonButton name="See More" />
                </div>
            </div>
        </div>
    )
}

export default PortfolioCards
