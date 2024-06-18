import React from 'react'
import { H5 } from '../common/Heading'
export const StrategyCard = (props) => {
  return (
        <div className='max-w-[609px] min-[450px]:flex gap-[83px] items-center sm:items-end w-full shadow-[0px_4px_27px_0px_#4B17E614] z-[1] after:z-[-1] px-3 py-5 sm:p-[27px_15px_26px_14px] after:h-[166px] after:w-[134px] after:hidden min-[450px]:after:block relative after:absolute after:left-[-23px] after:top-0 after:content-[url(./assets/images/svg/strategyCardTag.svg)] mb-[50px]'>
            <p className=' text-custom-4xl leading-121 text-blackPearl min-[450px]:text-white font-poppins text-center min-[450px]:text-start'>{props.number}</p>
<div className='flex flex-col justify-center sm:justify-end'>
    <H5 title={props.title} className="!font-semibold !leading-121 mb-2.5 lg:mb-[15px] text-center min-[450px]:text-start" />
    <p className=' font-poppins text-base leading-183 text-blackPearl text-opacity-70 text-center min-[450px]:text-start'>{props.para}</p>
</div>
    </div>
  )
}