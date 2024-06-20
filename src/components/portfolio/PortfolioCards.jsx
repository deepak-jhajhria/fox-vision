import { PortfolioCardLayout } from './PortfolioCardLayout'
import CommonButton from '../common/CommonButton'
import { portCardData } from '../common/Helper'

const PortfolioCards = () => {
    return (
        <div className='xl:pt-[123px] lg:pt-24 md:pt-16 sm:pt-12 pt-10 pb-[185px] md:pb-[227px] xl:pb-[293px] sm:px-6 px-3'>
            <div className='container max-w-[1140px]'>
                <div className='flex flex-row flex-wrap -mx-3 mb-4 md:mb-[26px] justify-center  lg:justify-normal'>
                    {portCardData.map((item, i) => (
                        <div className={`lg:w-1/3 sm:w-1/2 w-full px-3 flex justify-center ${1 <= 9 ? "mb-6" : "mb-0"}`}>
                            <PortfolioCardLayout index={i} img={item.img} head={item.head} discription={item.discription} />
                        </div>
                    ))}
                </div>
                <div className='flex justify-center'>
                    <CommonButton name="See More" />
                </div>
            </div>
        </div>
    )
}

export default PortfolioCards
