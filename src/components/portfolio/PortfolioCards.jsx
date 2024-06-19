import { PortfolioCardLayout } from './PortfolioCardLayout'
import CommonButton from '../common/CommonButton'
import { portCardData } from '../common/Helper'

const PortfolioCards = () => {
    return (
        <div className='pt-[123px] pb-[293px] px-6'>
            <div className='container max-w-[1140px]'>
                <div className='flex flex-row flex-wrap -mx-3 mb-[26px] justify-center  lg:justify-normal'>
                    {
                portCardData.map((item, i) => (
                            <div className={`lg:w-1/3 md:w-1/2 w-full px-3 flex justify-center ${1 <= 9 ? "mb-6":"mb-0"
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
