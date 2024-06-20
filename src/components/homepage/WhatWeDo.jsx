import { Description, H2, H4, H5 } from "../common/Heading";
import CommonButton from "../common/CommonButton";
import { GraphicIcon, PaintIcon, WhatWeSecLogo, WhatWeSecVector } from "../common/Icons";
import { graphicDesignList, uiUxDesignList } from "../common/Helper";
import cardImage from "../../assets/images/webp/what-we/what-we-card.webp";
import moon from "../../assets/images/webp/what-we/blue-moon.webp";
import skyMoon from "../../assets/images/webp/what-we/sky-moon.webp";
import vectorBottom from "../../assets/images/webp/what-we/vector-bottom.webp";
import vectortop from "../../assets/images/webp/what-we/vector-top.webp";

const WhatWeDo = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:pt-[239px] lg:pb-[258px] px-6 overflow-hidden">
      <div className="container px-0 max-w-[1140px] relative py-1">
        <H5 className="uppercase !leading-150 lg:text-start text-center" title="A RESULTS-DRIVEN AGENCY" />
        <H2 className="text-center md:mt-3 lg:text-start" heading="What we do" />
        <div className="flex items-center mt-3 max-lg:flex-col max-sm:gap-3 max-lg:gap-5 xl:items-end lg:mt-10">
          <img className="w-full max-w-[750px] lg:max-w-[500px] xl:max-w-[590px] lg:h-[378px] h-full mt-2" src={cardImage} alt="cardimage" />
          <div className="flex flex-col lg:items-start items-center lg:ml-10 lg:max-w-[512px] max-w-[650px]">
            <Description className="lg:text-start text-center my-0.5" description={<> We define the intangible assets of your brand and subsequently increase{" "} {<span className="text-electricViolet">{" "}trust and loyalty to your brand</span>}. Uniqueness, value proposition, clearly understandablie core messages and an innovative design result in a brand personality that will be. We then transfer this genetic code to the relevant target groups cross-media via relevant channels. And we will reposition you profitably</>} />
            <CommonButton className="mt-8 md:mt-10" name="Contact" />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col xl:gap-[94px] lg:gap-10 justify-between items-center xl:items-start xl:mt-[185px] md:mt-24 sm:mt-20 mt-12 relative">
          <img className="absolute pointer-events-none lg:max-w-[307px] md:max-w-[280px] max-w-[250px] right-[-10%] sm:bottom-[-7%] bottom-0" src={moon} alt="moon" />
          <div className="flex flex-col lg:items-start items-center lg:max-w-[512px] relative mt-2 sm:mt-3">
            <div className="w-[93px] h-[93px] bg-blueChalk flex justify-center items-center rounded-[7.58px] shadow-painIcon">
              <PaintIcon />
            </div>
            <H4 heading="UI/UX Creative Design" className="pt-10 mx-auto lg:mx-0" />
            <Description className="pt-2 lg:max-w-[386px] max-w-[650px] lg:text-start text-center !leading-150 opacity-70" description="UI/UX creative design is the art of crafting digital experiences that seamlessly blend aesthetics with functionality. It's about understanding users' needs and behaviors and translating that knowledge into intuitive, visually appealing interfaces. " />
          </div>
          <div className="grid sm:grid-cols-3 grid-cols-2 items-center sm:gap-x-[22px] sm:gap-y-[25px] gap-4 lg:mt-0 mt-10 relative">
            <img className="absolute pointer-events-none md:max-w-[123px] max-w-[100px] w-full lg:left-1/2 lg:-translate-x-[30%] lg:top-[-15%] md:top-[-8%] top-0 md:right-[-5%] right-0 z-10" src={vectortop} alt="vector-top" />
            {uiUxDesignList.map((obj, index) => (
              <div key={index}>
                <img className={`lg:max-w-[203px] max-w-[260px] w-full hover:scale-105 hover:shadow-addCards !duration-300 transition-all ease-linear border border-transparent hover:border-blue rounded-[12.52px] ${index === 4 ? "sm:translate-y-[42px]" : ""}`} src={obj.image} alt="add" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse lg:gap-[59px] justify-between items-center xl:mt-[243px] md:mt-24 sm:mt-20 mt-12 relative">
          <img className="absolute pointer-events-none lg:max-w-[307px] md:max-w-[280px] max-w-[250px] left-[-9.1%] lg:top-0 bottom-0 " src={skyMoon} alt="moon" />
          <div className="grid sm:grid-cols-3 grid-cols-1 items-center gap-y-4 sm:gap-x-[22px] sm:gap-y-[25px] lg:mt-0 mt-10 relative">
            <img className="absolute pointer-events-none sm:max-w-[123px] max-w-[100px] w-full lg:left-1/2 sm:-translate-x-1/2 lg:top-[-8%] md:top-[-8%] top-0 md:right-[-5%] right-0 z-10" src={vectorBottom} alt="vector-bottom" />
            {graphicDesignList.map((obj, index) => (
              <div key={index}>
                <div className="sm:gap-y-[25px] gap-x-4 flex sm:flex-col flex-row items-center">
                  {obj.col.map((obj, i) => (
                    <div key={i}>
                      <img className={`lg:max-w-[203px] max-w-[260px] w-full hover:scale-105 hover:shadow-addCards !duration-300 transition-all ease-linear border border-transparent hover:border-blue rounded-[12.52px] ${index === 1 && 4 ? "sm:translate-y-10" : ""}`} src={obj.image} alt="cartoons" />{" "}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:items-start items-center lg:max-w-[512px] relative mt-2 sm:mt-3">
            <div className="w-[93px] h-[93px] bg-bubbles flex justify-center items-center rounded-[7.58px] shadow-graphicIcon">
              <GraphicIcon />
            </div>
            <H4 heading="Visual Graphic Design" className="pt-10 mx-auto lg:mx-0" />
            <Description className="pt-2 lg:max-w-[420px] max-w-[650px] lg:text-start !leading-150 text-center opacity-70" description="Visual graphic design is the art of using visual elements, such as images, typography, color, and layout, to convey a message, tell a story, or evoke emotions." />
          </div>
        </div>
        <span className="absolute max-lg:hidden top-8 left-[37%]"><WhatWeSecVector /></span>
        <span className="absolute right-0 max-lg:hidden top-5 lg:top-10"><WhatWeSecLogo /></span>
        <span className="absolute left-0 max-lg:hidden -bottom-[12%] z-10"><WhatWeSecLogo /></span>
      </div>
    </section>
  );
};

export default WhatWeDo;
