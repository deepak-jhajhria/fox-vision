import { Description, H2, H5 } from "../common/Heading";
import cardImage from "../../assets/images/webp/how-we/workImg.webp";
import CommonButton from "../common/CommonButton";
import { ArrowResultDriven } from "../common/Icons";

const ResultsDriven = ({ imgClassName, margin }) => {
  return (
    <div className="relative flex flex-row flex-wrap justify-between -mx-3">
      <div className="absolute xl:top-[14%] lg:top-[18%] lg:block hidden xl:right-[44%] right-[48%]">
        <ArrowResultDriven />
      </div>
      <div className="w-full px-3 md:w-1/2">
        <H5 className="text-center uppercase md:text-start xl:mb-1" title="A RESULTS-DRIVEN AGENCY" />
        <H2 className="md:mt-3 xl:mb-[2px] mt-1 md:text-start text-center" heading="How we work" />
        <div className="flex items-center max-lg:flex-col xl:items-end">
          <img className={`w-full lg:max-w-[378px] lg:max-h-[294px] h-full lg:mt-6 mt-3 ${imgClassName}`} src={cardImage} alt="cardimage" />
        </div>
      </div>
      <div className="flex items-end justify-end w-full px-3 pt-3 md:w-1/2 md:mb-3 md:pt-0">
        <div className={`mb-0 ${margin}`}>
          <Description className="lg:max-w-[481px] max-md:text-center md:text-xl sm:text-lg text-base !text-opacity-70 !leading-150" description={
            <>
              We see our customers as partners and identify passionately with
              their companies. Regardless of what the goal is, whether to
              increase sales, increase brand awareness or attract new
              employees. We always look for the{" "}
              {<span className="text-opacity-100 text-skyBlue">
                right solution for your company
              </span>
              }{" "}
              and advise you individually
            </>} />
          <div className="flex justify-center mb-0 md:justify-start">
            <CommonButton className="mt-3 lg:mt-10 md:mt-8 sm:mt-6" name="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDriven;
