import React from 'react'
import { ContactCard } from './ContactCard'
import { H2, H5 } from '../common/Heading'
import { contactCardData } from '../common/Helper'




const MoreWays = () => {
  return (
    <div className='lg:pt-[118px] py-10 sm:py-16 md:py-20 lg:pb-[165px] px-6'>
        <div className='container max-w-[1140px] '>
          <H5 title="FOX VISION - Friendly and reliable" className="text-center !leading-150 mb-3"/>
          <H2 heading="More Ways to Reach Out" className="text-center !leading-121 mb-[30px] sm:mb-10 md:mb-[50px] lg:mb-[88px]" />
            <div className='flex flex-row flex-wrap -mx-3 justify-center'>
                    {
                       contactCardData.map((item, i) => (
                          <div key={i} className={`lg:w-1/3 sm:w-1/2 w-full px-3 max-sm:flex justify-center mb-6 lg:mb-0 ${i === 2 ? "!mb-0": ""}`}>
                       <a href={item.link} target='blank' rel='norefferer noopener' className=' w-full max-sm:flex justify-center'>
                         <ContactCard index={i} icons={item.icons} title={item.title} value={item.value} class={`${
                          i === 2 ? "!py-7 !mb-0":"py-10"
                         }`}/>
                       </a>
                     </div>
                        ))
                    }
                </div>
            </div>
    </div>
  )
}

export default MoreWays
