import { Description, H4 } from '../common/Heading'
import designCard1 from '../../assets/images/webp/logo-design/designCard1.webp'
import designCard2 from '../../assets/images/webp/logo-design/designCard2.webp'
import designCard3 from '../../assets/images/webp/logo-design/designCard3.webp'
import designCard4 from '../../assets/images/webp/logo-design/designCard4.webp'
import designBoy1 from '../../assets/images/webp/logo-design/designBoy1.webp'
import digitalImg from '../../assets/images/webp/logo-design/digitalImg.webp'
import designWhiteEllipse from '../../assets/images/webp/logo-design/designWhiteEllipse.webp'
import { DesignIcon, StrategyIcon } from '../common/Icons'


const LogoDesign = () => {
  return (
    <div className=' bg-blue pt-[193px] sm:pb-[60px] pb-10  px-6'>
      <div className="container max-w-[1140px]">
        <div className="flex flex-col-reverse flex-wrap mb-10 -mx-3 sm:mb-16 md:mb-24 lg:flex-row">
          <div className="w-full px-3 lg:w-1/2">
            <div className="flex bg-white w-[93.15px] h-[93.15px] mx-auto lg:mx-0 justify-center items-center rounded-[7.59px] mb-[29px]">
              <DesignIcon />
            </div>
            <H4 heading="Logo Design" className="!text-white text-center !leading-150 lg:text-start !mb-2" />
            <Description description="Logo design is a specialized discipline within the realm of graphic design, focused on creating unique and memorable visual symbols that represent a brand, company, or organization." className="!text-white !leading-150 !text-opacity-70 text-center mx-auto lg:mx-0 lg:text-start max-w-[421px]" />
          </div>
          <div className=" flex gap-[22.88px] justify-center lg:justify-normal mb-10 lg:mb-0  w-full px-3 lg:w-1/2 relative z-[1]">
            <img src={designWhiteEllipse} alt="ellipse1" className=' absolute max-[500px]:hidden z-[-1] max-w-[414.46px] w-full bottom-[6%] right-[4%] sm:right-[7%] min-[900px]:right-[16%] lg:right-[2%]' />
            <img src={designBoy1} alt="boy1" className='absolute min-[500px]:top-[-26%] top-[-37%] left-[40%]  min-[500px]:left-[48%] lg:left-[36%] max-w-[194.67px] z-[1]' />
            <div className=' flex flex-col max-[500px]:items-center gap-5 min-[500px]:gap-[26.5px]'>
              <img src={designCard1} alt="designcard1" className='max-w-[203.39px] border border-solid border-transparent hover:border-blue duration-300 w-full rounded-[12.52px] hover:scale-105 shadow-designCard' />
              <img src={designCard2} alt="designCard2" className='max-w-[203.39px] border border-solid border-transparent hover:border-blue duration-300 w-full rounded-[12.52px] hover:scale-105' />
            </div>
            <div className=' flex flex-col max-[500px]:items-center gap-5 min-[500px]:gap-[28.68px] mt-5 min-[500px]:mt-10'>
              <img src={designCard3} alt="designCard3" className='max-w-[203.39px]  border border-solid border-transparent hover:border-blue duration-300 w-full rounded-[12.52px] hover:scale-105' />
              <img src={designCard4} alt="designCard4" className='max-w-[203.39px] border border-solid border-transparent hover:border-blue duration-300 w-full rounded-[12.52px] hover:scale-105 shadow-designCard' />
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-center -mx-3">
          <div className="flex justify-center w-full px-3 mb-10 lg:w-1/2 lg:justify-start lg:mb-0 ">
            <img src={digitalImg} alt="digitalImg" className='w-full max-w-[495px]' />
          </div>
          <div className="w-full px-3 lg:w-1/2 lg:flex lg:justify-end">
            <div>
              <div className="flex bg-white w-[93.15px] mx-auto lg:mx-0 h-[93.15px] justify-center items-center rounded-[7.59px] mb-[29px]">
                <StrategyIcon />
              </div>
              <H4 heading="Strategy & Digital Marketing" className="!text-white !mb-2 text-center !leading-150 lg:text-start" />
              <Description description="Strategy in digital marketing is the foundation upon which successful online campaigns are built. It involves setting clear objectives, identifying target audiences." className="!text-white text-center !leading-150 lg:text-start mx-auto lg:mx-0 max-w-[445px]" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LogoDesign
