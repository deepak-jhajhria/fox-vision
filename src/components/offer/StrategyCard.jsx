import { H5 } from '../common/Heading'

export const StrategyCard = (props) => {
  return (
    <div className={`${props.class} max-w-[850px] xl:max-w-[609px] border border-solid border-transparent hover:border-blue duration-300 lg:max-h-[150px] sm:flex gap-[83px] items-center sm:items-end w-full shadow-contactCard z-[1] after:z-[-1] px-3 py-5 sm:p-[27px_15px_26px_14px] after:h-[166px] after:w-[134px] after:hidden sm:after:block relative after:absolute after:left-[-23px] after:top-0 after:content-[url(./assets/images/svg/strategyCardTag.svg)] mb-6 sm:mb-[50px]`}>
      <p className='text-3xl md:text-4xl lg:text-custom-4xl sm:mb-2 leading-121 text-blackPearl sm:text-white font-montserrat text-center sm:text-start font-semibold mb-[6px]'>{`${props.number}.`}</p>
      <div className='flex flex-col '>
        <H5 title={props.title} className="!font-semibold !font-montserrat !leading-121 lg:!leading-6 mb-2.5 lg:mb-[15px] text-center sm:text-start" />
        <p className='font-poppins text-sm md:text-base !leading-183 text-blackPearl text-opacity-70 text-center sm:text-start'>{props.para}</p>
      </div>
    </div>
  )
}