import React from 'react'
import { H5 } from '../common/Heading'
export const PortfolioCardLayout = (props) => {
  return (
    <div className=' lg:max-w-[364px] max-md:max-w-[364px] w-full rounded-md border border-solid border-[#0000001A]'>
      <div className="pt-[15px] px-[17px] pb-3">
        <img src={props.img} alt="cardimg" className='lg:max-w-[330px]  rounded-md w-full object-cover max-h-[311px]' />
      </div>
      <div className=' px-[15px] pb-[15px]'>
        <H5 title={props.head} className="!leading-150 !mb-2.5" />
        <p className=' font-poppins text-sm lg:text-base leading-150 text-[#525E74]'>{props.discription}</p>
      </div>
    </div>
  )
}
