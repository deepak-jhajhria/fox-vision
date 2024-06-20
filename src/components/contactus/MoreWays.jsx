import React from 'react'
import { ContactCard } from './ContactCard'
import { H2, H5 } from '../common/Heading'
import { contactCardData } from '../common/Helper'




const MoreWays = () => {
  return (
    <div className='xl:pt-[118px] py-10 md:py-16 lg:py-24 xl:pb-[165px] px-6'>
      <div className='container max-w-[1140px] '>
        <H5 title="FOX VISION - Friendly and reliable" className="text-center !leading-150 mb-3" />
        <H2 heading="More Ways to Reach Out" className="text-center !leading-121 mb-6 sm:mb-10 lg:mb-[50px] xl:mb-[88px]" />
        <div className='flex flex-row flex-wrap justify-center -mx-3'>
          {
            contactCardData.map((item, i) => (
              <div key={i} className={`lg:w-1/3 sm:w-1/2 w-full px-3 max-sm:flex justify-center mb-6 lg:mb-0 ${i === 2 ? "!mb-0" : ""}`}>
                <a href={item.link} target='blank' rel='norefferer noopener' className='justify-center w-full max-sm:flex'>
                  <ContactCard index={i} icons={item.icons} title={item.title} value={item.value} class={`${i === 2 ? "!py-7 !mb-0" : "py-10"
                    }`} />
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
