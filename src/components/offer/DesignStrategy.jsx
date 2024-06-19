import { H2 } from "../common/Heading";
import uiuxImg from "../../assets/images/webp/strategy-design/uiuxImg.webp";
import { StrategyCard } from "./StrategyCard";
import { strategyCardData } from "../common/Helper";

const DesignStrategy = () => {
  return (
    <div className="pt-10 sm:pt-16 md:pt-20 lg:pt-[150px] px-6">
      <div className="container max-w-[1140px]">
        <div className="gap-6 xl:flex ">
          <div className="flex flex-col items-center mb-5 xl:mb-0">
            <H2 heading="UI/UX Design Strategy" className="!leading-121 max-w-[459px] text-center xl:text-start mb-5" />
            <p className="text-xl font-poppins leading-183 font-normal text-blackPearl text-center xl:text-start text-opacity-70 mb-[45px] max-w-[484px]">Our design process is a
              <span className=" text-turquoise text-opacity-70"> well-thought-out journey </span>that combines innovation, strategy, and collaboration to produce outstanding results.</p>
            <img src={uiuxImg} alt="uiuxImg" className="max-w-[451px] w-full max-h-[358px]" />
          </div>
          <div className="min-[450px]:pl-[23px] flex flex-col items-center">
            {strategyCardData.map((item, i) => (
              <StrategyCard key={i} class={` ${i === 3 ? "!mb-[17px]" : ""}`} number={i + 1} title={item.head} para={item.discription} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignStrategy;
