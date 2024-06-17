import { Description, H2, H5 } from "./common/Heading"
import cardImage from '../assets/images/webp/what-we/what-we-card.webp'
const WhatWeDo = () => {
    return (
        <section className="py-10 sm:py-16 md:py-20 lg:pt-[238px] lg:pb-[218px]">
            <div className="container max-w-[1140px]">
                <H5 className='uppercase' title='A RESULTS-DRIVEN AGENCY' />
                <H2 className='mt-3' heading='What we do' />
                <div className="grid grid-cols-2 items-end">
                    <img src={cardImage} alt="cardimage" />
                    <div className="flex flex-col items-start">
                        <Description description={<>We define the intangible assets of your brand and subsequently increase {<span className="text-electricViolet"> trust and loyalty to your brand</span>}. Uniqueness, value proposition, clearly understandablie core messages and an innovative design result in a brand personality that will be. We then transfer this genetic code to the relevant target groups cross-media via relevant channels. And we will reposition you profitably</>} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatWeDo