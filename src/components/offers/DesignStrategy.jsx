import React from 'react'
import { H2 } from '../common/Heading'
import uiuxImg from '../../assets/images/webp/uiuxImg.webp'
import { StrategyCard } from './StrategyCard'
const DesignStrategy = () => {
  return (
    <div>
      <div className="container max-w-[1140px]">
<div className="flex gap-6 ">
     <div className="">
     <H2 heading="UI/UX Design Strategy" className="!leading-121 max-w-[459px] mb-5"/>
     <p className=' text-xl font-poppins leading-183 font-normal text-blackPearl text-opacity-70 mb-[45px] max-w-[484px]'>Our design process is a <span className=' text-turquoise text-opacity-70'>well-thought-out journey</span> that combines innovation, strategy, and collaboration to produce outstanding results.</p>
     <img src={uiuxImg} alt="uiuxImg" className='max-w-[451px] w-full max-h-[358px]' />
     </div>
     <div className="pl-[23px]">
     <StrategyCard/>
     </div>
</div>
      </div>
    </div>
  )
}

export default DesignStrategy
