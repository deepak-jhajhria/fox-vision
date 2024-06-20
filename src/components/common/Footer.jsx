import { Link, useLocation } from 'react-router-dom'
import { FacebookIcon, InstaIcon } from './Icons'
import { footerLinkList } from './Helper'
import Mochten from '../Mochten'
import footerLogo from '../../assets/images/svg/footerLogo.svg'
import footerLeftEllipse from '../../assets/images/webp/footerLeftEllipse.webp'
import footerRightEllipse from '../../assets/images/webp/footerRightEllipse.webp'

const Footer = () => {
    const pathName = useLocation().pathname
    return (
        <footer className='bg-blackPearl'>
            <div className='px-3 sm:px-6 relative z-[1] max-w-[1920px] mx-auto'>
                <img src={footerLeftEllipse} alt="ellipse1" className='absolute left-0 top-0 z-[-1] pointer-events-none' />
                <img src={footerRightEllipse} alt="ellipse2" className='absolute right-0 bottom-0 z-[-1] pointer-events-none' />
                <div className={`container max-w-[1140px] pt-32 sm:pt-36 md:pt-40 xl:pt-56 relative z-10 ${pathName === '/contact-us' && "!pt-20"}`}>
                    <div className="flex flex-row flex-wrap mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-24">
                        <div className="w-full mb-6 sm:px-3 sm:mb-10 lg:w-5/12 lg:mb-0">
                            <Link to='/' className='flex justify-center lg:block'><img src={footerLogo} alt="logo" className='mb-4' /></Link>
                            <p className=' font-poppins text-base text-white text-opacity-70 max-w-[311px] mb-6 sm:mb-[30px] text-center lg:text-start mx-auto lg:mx-0'>Libero morbi pharetra sollicitudin enim praesent nulla velit sitonec leodui.</p>
                            <div className="flex justify-center gap-4 lg:justify-start">
                                <Link to="https://www.facebook.com/" target='blank' rel='noopener norefferer'><span className='flex items-center justify-center w-10 h-10 duration-300 border border-white border-solid rounded-full group hover:border-turquoise'><FacebookIcon /></span></Link>
                                <Link to="https://www.instagram.com/" target='blank' rel='noopener norefferer'><span className='flex items-center justify-center w-10 h-10 duration-300 border border-white border-solid rounded-full group hover:border-turquoise'><InstaIcon /></span></Link>
                            </div>
                        </div>
                        <div className="flex justify-center w-full sm:px-3 lg:w-7/12 lg:justify-end">
                            <div className="flex lg:gap-[75px] lg:max-w-[548.21px] gap-6 sm:gap-10 w-full lg:justify-end justify-between max-sm:flex-wrap">
                                {footerLinkList.map((item, index) => (
                                    <ul key={index} className='flex flex-col'>
                                        <li className='font-poppins text-base font-semibold text-white mb-3 sm:mb-[14px]'>{item.title}</li>
                                        {item.links.map((data, i) => (
                                            <li key={i} className='mb-[10px] sm:mb-3'>
                                                <Link to={data.path} className='text-base font-normal text-white font-poppins footerLinkHover text-opacity-70 text-nowrap'>{data.link}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        </div>
                        <Mochten />
                    </div>
                    <p className='pb-3 px-12 text-xs sm:text-sm font-normal text-center text-white font-poppins text-opacity-70 sm:!leading-[21px]'>Copyright©{new Date().getFullYear()} Fox Vision GmbH. All right reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
