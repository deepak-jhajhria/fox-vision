import footerLogo from '../../assets/images/svg/footerLogo.svg'
import { Link, useLocation } from 'react-router-dom'
import { FacebookIcon, InstaIcon } from './Icons'
import { footerLinkList } from './Helper'
import Mochten from '../Mochten'
import footerLeftEllipse from '../../assets/images/webp/footerLeftEllipse.webp'
import footerRightEllipse from '../../assets/images/webp/footerRightEllipse.webp'

const Footer = () => {
    const pathName = useLocation().pathname
    return (
        <footer className='px-6 bg-blackPearl relative z-[1]'>
            <img src={footerLeftEllipse} alt="ellipse1" className='absolute left-0 top-0 z-[-1]' />
            <img src={footerRightEllipse} alt="ellipse2" className='absolute right-0 bottom-0 z-[-1]' />
            <div className={`container max-w-[1140px] pt-56 relative z-10 ${pathName === '/contact-us' && "!pt-20"}`}>
                <div className="flex flex-row flex-wrap mb-10 -mx-3 sm:mb-16 md:mb-20 lg:mb-24">
                    <div className="w-full px-3 mb-10 lg:w-5/12 lg:mb-0">
                        <div className='flex justify-center lg:block'><img src={footerLogo} alt="logo" className='mb-4' /></div>
                        <p className=' font-poppins text-base text-white text-opacity-70 max-w-[311px] mb-[30px] text-center lg:text-start mx-auto lg:mx-0'>Libero morbi pharetra sollicitudin enim praesent nulla velit sitonec leodui.</p>
                        <div className="flex justify-center gap-4 lg:justify-start">
                            <Link to="https://www.facebook.com/" target='blank' rel='noopener norefferer'><span className='flex items-center justify-center w-10 h-10 duration-300 border border-white border-solid rounded-full group hover:border-blue'><FacebookIcon /></span></Link>
                            <Link to="https://www.instagram.com/" target='blank' rel='noopener norefferer'><span className='flex items-center justify-center w-10 h-10 duration-300 border border-white border-solid rounded-full group hover:border-blue'><InstaIcon /></span></Link>
                        </div>
                    </div>
                    <div className="flex justify-center w-full px-3 lg:w-7/12 lg:justify-end">
                        <div className="flex lg:gap-[75px] lg:max-w-[548.21px] gap-6 sm:gap-10 w-full lg:justify-end justify-between max-sm:flex-wrap">
                            {footerLinkList.map((item, index) => (
                                <ul key={index} className='flex flex-col'>
                                    <li className='font-poppins text-base font-semibold text-white mb-[14px]'>{item.title}</li>
                                    {item.links.map((data, i) => (
                                        <li key={i} className='mb-3'>
                                            <Link to={data.path} className='text-base font-normal text-white font-poppins footerLinkHover text-opacity-70 text-nowrap'>{data.link}</Link>
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                    <Mochten />
                </div>
                <p className='pb-3 text-sm font-normal text-center text-white font-poppins text-opacity-70'>Copyright©{new Date().getFullYear()} Fox Vision GmbH. All right reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
