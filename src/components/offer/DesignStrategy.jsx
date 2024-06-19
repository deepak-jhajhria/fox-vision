import React from "react";
import { H2 } from "../common/Heading";
import uiuxImg from "../../assets/images/webp/strategy-design/uiuxImg.webp";
import { StrategyCard } from "./StrategyCard";
export const strategyCardData = [
  {
    num: "1.",
    head: "Understanding Your Vision",
    discription:
      "We start by deeply understanding your goals, brand identity, and the needs of your target audience.",
  },
  {
    num: "2.",
    head: "Research and Analysis",
    discription:
      "Our team conducts thorough research, including market and competitor analysis, to inform our design decisions.",
  },
  {
    num: "3.",
    head: "Wireframing and Prototyping",
    discription:
      "We create wireframes and interactive prototypes to map out the layout and functionality of your project.",
  },
  {
    num: "4.",
    head: "User Testing",
    discription:
      "Real users provide invaluable feedback to refine the design, ensuring it aligns with user expectations.",
  },
];
const DesignStrategy = () => {
  return (
    <div className="pt-10 sm:pt-16 md:pt-20 lg:pt-[150px] px-6">
      <div className="container max-w-[1140px]">
        <div className="xl:flex gap-6 ">
          <div className=" flex flex-col items-center mb-5 xl:mb-0">
            <H2
              heading="UI/UX Design Strategy"
              className="!leading-121 max-w-[459px] text-center xl:text-start mb-5"
            />
            <p className=" text-xl font-poppins leading-183 font-normal text-blackPearl text-center xl:text-start text-opacity-70 mb-[45px] max-w-[484px]">
              Our design process is a{" "}
              <span className=" text-turquoise text-opacity-70">
                well-thought-out journey
              </span>{" "}
              that combines innovation, strategy, and collaboration to produce
              outstanding results.
            </p>
            <img
              src={uiuxImg}
              alt="uiuxImg"
              className="max-w-[451px] w-full max-h-[358px]"
            />
          </div>
          <div className="min-[450px]:pl-[23px] flex flex-col items-center">
            {strategyCardData.map((item, i) => (
              <StrategyCard
                key={i}
                class={` ${i === 3 ? "!mb-0":""}`}
                number={item.num}
                title={item.head}
                para={item.discription}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignStrategy;
