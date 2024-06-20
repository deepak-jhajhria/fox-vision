import { H5 } from '../common/Heading'

export const PortfolioCardLayout = (props) => {
  return (
    <div className='lg:max-w-[364px] max-md:max-w-[364px] w-full rounded-md border border-solid group border-lightGrey'>
      <div className="pt-[15px] px-[17px] pb-3 ">
        <div className='lg:max-w-[330px] overflow-hidden max-h-[311px] rounded-md '> <img src={props.img} alt="cardimg" className='lg:max-w-[330px] group-hover:scale-110 duration-300 rounded-md w-full object-cover max-h-[311px]' /></div>
      </div>
      <div className='px-[15px] pb-[15px]'>
        <H5 title={props.head} className="!leading-150 !mb-2.5" />
        <p className='text-sm font-poppins lg:text-base leading-150 text-comet'>{props.discription}</p>
      </div>
    </div>
  )
}
