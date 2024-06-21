import { H5 } from '../common/Heading'

export const PortfolioCardLayout = (props) => {
  return (
    <div className='lg:max-w-[364px] lg:min-h-[417px] max-md:!max-w-[364px] w-full rounded-md border border-solid group border-lightGrey'>
      <div className="lg:pt-[15px] lg:px-[17px] lg:pb-3 p-3 ">
        <div className='lg:max-w-[330px] overflow-hidden max-h-[311px] rounded-md '> <img src={props.img} alt="cardimg" className='lg:max-w-[330px] pointer-events-none group-hover:scale-110 duration-300 rounded-md w-full  max-h-[250px] sm:max-h-[220px] md:max-h-[290px] lg:max-h-[311px]' /></div>
      </div>
      <div className='px-[15px] pb-[15px]'>
        <H5 title={props.head} className="!sm:mb-2.5 mb-1 !xl:text-xl text-lg text-center lg:text-start" />
        <p className='text-sm font-poppins lg:text-base text-center lg:text-start leading-150 text-comet'>{props.discription}</p>
      </div>
    </div>
  )
}
