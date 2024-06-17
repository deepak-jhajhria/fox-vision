import React from 'react'
import footerLogo from '../../assets/images/svg/footerLogo.svg'

export const FooterLinkData ={
    data1 :[
        {
            link:'About us',
            path:'#'
        },
        {
              link:'Offer',
            path:'#'
        },
        {
            link:'Contact',
          path:'#'
      }
    ],
    data2:[
        {
            link:'Fox Vision GmbH ',
            path:'#'
        },
        {
            link:'Badstrasse 50 CH-5200 Brugg',
            path:'#',
        },{
            link:'+41 79 725 61 00',
            path:'#'
        },
        {
        link:'info@foxvision.ch',
        path:'#'
        }
    ],
    data3:[
        {
link:'Imprint',
path:'#'
        },
        {
            link:'Data protection',
            path:'#'
        },
        {
            link:'Copyright',
            path:'#'
        }
    ]
}
export const FacebookIcon = () => {
  return (
    <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.18027 21.7288H7.64507V12.788H11.6678L12.1099 8.34555H7.64507V6.10199C7.64507 5.80595 7.76266 5.52205 7.97199 5.31272C8.18132 5.10339 8.46523 4.98579 8.76126 4.98579H12.1099V0.520996H8.76126C7.28109 0.520996 5.86155 1.10899 4.81491 2.15563C3.76827 3.20227 3.18027 4.62182 3.18027 6.10199V8.34555H0.947874L0.505859 12.788H3.18027V21.7288Z" fill="white" className='group-hover:fill-blue duration-300'/>
    </svg>
    
  )
}

export const InstaIcon = () => {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.90938 0.625H14.3094C17.5094 0.625 20.1094 3.225 20.1094 6.425V14.825C20.1094 16.3633 19.4983 17.8385 18.4106 18.9262C17.3229 20.0139 15.8476 20.625 14.3094 20.625H5.90938C2.70938 20.625 0.109375 18.025 0.109375 14.825V6.425C0.109375 4.88674 0.720445 3.41149 1.80816 2.32378C2.89587 1.23607 4.37112 0.625 5.90938 0.625ZM5.70937 2.625C4.7546 2.625 3.83892 3.00428 3.16379 3.67942C2.48866 4.35455 2.10938 5.27022 2.10938 6.225V15.025C2.10938 17.015 3.71937 18.625 5.70937 18.625H14.5094C15.4642 18.625 16.3798 18.2457 17.055 17.5706C17.7301 16.8955 18.1094 15.9798 18.1094 15.025V6.225C18.1094 4.235 16.4994 2.625 14.5094 2.625H5.70937ZM15.3594 4.125C15.6909 4.125 16.0088 4.2567 16.2433 4.49112C16.4777 4.72554 16.6094 5.04348 16.6094 5.375C16.6094 5.70652 16.4777 6.02446 16.2433 6.25888C16.0088 6.4933 15.6909 6.625 15.3594 6.625C15.0279 6.625 14.7099 6.4933 14.4755 6.25888C14.2411 6.02446 14.1094 5.70652 14.1094 5.375C14.1094 5.04348 14.2411 4.72554 14.4755 4.49112C14.7099 4.2567 15.0279 4.125 15.3594 4.125ZM10.1094 5.625C11.4355 5.625 12.7072 6.15178 13.6449 7.08947C14.5826 8.02715 15.1094 9.29892 15.1094 10.625C15.1094 11.9511 14.5826 13.2229 13.6449 14.1605C12.7072 15.0982 11.4355 15.625 10.1094 15.625C8.78329 15.625 7.51152 15.0982 6.57384 14.1605C5.63616 13.2229 5.10938 11.9511 5.10938 10.625C5.10938 9.29892 5.63616 8.02715 6.57384 7.08947C7.51152 6.15178 8.78329 5.625 10.1094 5.625ZM10.1094 7.625C9.31373 7.625 8.55066 7.94107 7.98805 8.50368C7.42545 9.06629 7.10938 9.82935 7.10938 10.625C7.10938 11.4206 7.42545 12.1837 7.98805 12.7463C8.55066 13.3089 9.31373 13.625 10.1094 13.625C10.905 13.625 11.6681 13.3089 12.2307 12.7463C12.7933 12.1837 13.1094 11.4206 13.1094 10.625C13.1094 9.82935 12.7933 9.06629 12.2307 8.50368C11.6681 7.94107 10.905 7.625 10.1094 7.625Z" fill="white" className='group-hover:fill-blue duration-300'/>
    </svg>
  )
}

const Footer = () => {
  return (
    <div className='pt-56 bg-blackPearl '>
      <div className="container max-w-[1164px]">
<div className=" flex flex-row flex-wrap -mx-3 mb-[111px]">
<div className="lg:w-5/12 w-full px-3 mb-10 lg:mb-0">
<div className=' flex justify-center lg:block'><img src={footerLogo} alt="logo" className='mb-4' /></div>
<p className=' font-poppins text-base text-white text-opacity-70 max-w-[311px] mb-[30px] text-center lg:text-start mx-auto lg:mx-0'>Libero morbi pharetra sollicitudin enim praesent nulla velit sitonec leodui.</p>
<div className="flex gap-4 justify-center lg:justify-start">
    <a href="https://www.facebook.com/"  target='blank' rel='noopener norefferer'> 
        <div className='w-10 h-10 border border-solid border-white group hover:border-blue duration-300 rounded-full flex justify-center items-center'>
            <FacebookIcon/>
        </div>
    </a>
    <a href="https://www.instagram.com/" target='blank' rel='noopener norefferer'> 
        <div className='w-10 h-10 border border-solid border-white rounded-full  group hover:border-blue duration-300 flex justify-center items-center'>
          <InstaIcon/>
        </div>
    </a>
</div>
</div>
<div className="lg:w-7/12 w-full px-3 flex lg:justify-end justify-center">
<div className="flex lg:gap-[75px] lg:max-w-[548.21px] w-full lg:justify-end min-[500px]:justify-between flex-row max-[500px]:flex-wrap ">
    <div className='lg:max-w-[71px] w-full max-[500px]:w-1/2 '>
        <ul>
            <li className='font-poppins text-base  font-semibold text-white mb-[14px]'>
            Home
            </li>
            {
                FooterLinkData.data1.map((data,i)=> (  <li key={i} className='mb-3 ' >
                        <a href={data.path} className='font-poppins footerLinkHover  text-base font-normal text-white text-opacity-70'>
                            {data.link}
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
    <div className='lg:max-w-[201.21px] w-full  max-[500px]:w-1/2 flex min-[500px]:justify-center'>
        <ul>
            <li className='font-poppins text-base  font-semibold text-white mb-[14px]'>
            Agency
            </li>
            {
                FooterLinkData.data2.map((data,i)=> (  <li key={i} className={`mb-3  ${i === 1 ? "max-w-[130px]": ""}`}>
                        <a href={data.path} className={`font-poppins footerLinkHover text-base font-normal text-white text-opacity-70 `}>
                            {data.link}
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>
<div className='lg:max-w-[126px] w-full flex min-[500px]:justify-end'>
    <ul >
        <li className='font-poppins  text-base font-semibold text-white mb-[14px]'>
        Legal
        </li>
        {
            FooterLinkData.data3.map((data,i)=> (  <li key={i} className='mb-3 '>
                    <a href={data.path} className='font-poppins footerLinkHover text-base font-normal text-white text-opacity-70'>
                        {data.link}
                    </a>
                </li>
            ))
        }
    </ul>
</div>
</div>
</div>
</div>
<p className='font-poppins text-sm text-center text-white text-opacity-70 font-normal pb-3'>Copyright©{new Date().getFullYear()} Fox Vision GmbH. All right reserved.</p>
      </div>
    </div>
  )
}

export default Footer
