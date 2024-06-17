import React from 'react'

 export const ContactCard = (props) => {
  return (
    <div className={` max-w-[360px] shadow-[0px_4px_27px_0px_#4B17E614] bg-white w-full  ${props.class}`}>
    <div className="flex justify-center mb-[25px] ">
<div className="flex justify-center items-center bg-[#EFEAFD] w-[85.27px] h-[85.27px] rounded-[6.94px] shadow-[0px_11.57px_27px_0px_#4B17E61A]
">
{props.icons}
</div>
    </div>
    <h4 className='font-poppins text-2xl leading-[150%] font-semibold text-[#071838] text-center mb-[15px]'>{props.title}</h4>
    <p className={` 
      font-poppins text-black text-base font-normal text-center max-w-[304px] mx-auto`}>{props.value}</p>
    </div>
  )
}

