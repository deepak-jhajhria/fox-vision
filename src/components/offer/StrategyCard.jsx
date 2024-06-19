import { H5 } from '../common/Heading'
export const StrategyCard = (props) => {
  return (
    <div className={`${props.class} max-w-[609px] min-[450px]:flex gap-[83px] items-center sm:items-end w-full shadow-contactCard z-[1] after:z-[-1] px-3 py-5 sm:p-[27px_15px_26px_14px] after:h-[166px] after:w-[134px] after:hidden min-[450px]:after:block relative after:absolute after:left-[-23px] after:top-0 after:content-[url(./assets/images/svg/strategyCardTag.svg)] mb-6 min-[450px]:mb-[50px]`}>
      <p className=' text-2xl sm:text-3xl md:text-4xl lg:text-custom-4xl max-[450px]:mb-2 leading-121 text-blackPearl min-[450px]:text-white font-montserrat text-center min-[450px]:text-start font-semibold mb-2'>{`${props.number}.`}</p>
      <div className='flex flex-col '>
        <H5 title={props.title} className="!font-semibold !font-montserrat !leading-121 lg:!leading-[24px] mb-2.5 lg:mb-[15px] text-center min-[450px]:text-start" />
        <p className='font-poppins text-base !leading-183 text-blackPearl text-opacity-70 text-center min-[450px]:text-start'>{props.para}</p>
      </div>
    </div>
  )
}