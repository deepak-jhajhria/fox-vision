import { Description, H2, H5 } from "./common/Heading"
import cardImage from '../assets/images/webp/what-we/what-we-card.webp'
import CommonButton from "./common/CommonButton"
const WhatWeDo = () => {
    return (
        <section className="py-10 sm:py-16 md:py-20 lg:pt-[238px] lg:pb-[218px] px-6">
            <div className="container px-0 max-w-[1140px]">
                <H5 className='uppercase' title='A RESULTS-DRIVEN AGENCY' />
                <H2 className='mt-3' heading='What we do' />
                <div className="flex max-lg:flex-col items-center xl:items-end">
                    <img className="w-full lg:max-w-[500px] xl:max-w-[590px] lg:max-h-[378px] h-full mt-2" src={cardImage} alt="cardimage" />
                    <div className="flex flex-col items-start lg:ml-10 lg:max-w-[512px]">
                        <Description className='' description={<>We define the intangible assets of your brand and subsequently increase {<span className="text-electricViolet"> trust and loyalty to your brand</span>}. Uniqueness, value proposition, clearly understandablie core messages and an innovative design result in a brand personality that will be. We then transfer this genetic code to the relevant target groups cross-media via relevant channels. And we will reposition you profitably</>} />
                        <CommonButton className='mt-10' name='Contact'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo