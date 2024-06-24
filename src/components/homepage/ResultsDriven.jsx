import { Description, H2, H5 } from "../common/Heading";
import cardImage from "../../assets/images/webp/how-we/workImg.webp";
import CommonButton from "../common/CommonButton";
import { ArrowResultDriven } from "../common/Icons";

const ResultsDriven = ({ imgClassName, margin, arrowPosition }) => {
  return (
    <div className="relative flex flex-row z-[1] flex-wrap justify-between -mx-3">
      <div
        className={`absolute xl:top-[14%] lg:top-[21%] z-[-1] lg:block hidden xl:right-[44%] right-[50%] ${arrowPosition}`}
      >
        <ArrowResultDriven />
      </div>
      <div className="w-full px-3 lg:w-1/2">
        <H5
          className="text-center uppercase lg:text-start xl:mb-1"
          title="A RESULTS-DRIVEN AGENCY"
        />
        <H2
          className="md:mt-3 xl:!leading-[78.2px] !leading-8 xl:mb-[2px] mt-1 lg:text-start text-center"
          heading="How we work"
        />
        <div className="flex items-center max-lg:flex-col xl:items-end">
          <img
            className={`w-full xl:max-w-[378px] max-w-[300px] xl:max-h-[294px] h-full lg:mt-6 mt-3 ${imgClassName}`}
            src={cardImage}
            alt="cardimage"
          />
        </div>
      </div>
      <div className="flex items-end justify-end w-full px-3 pt-3 lg:w-1/2 md:mb-3 md:pt-0">
        <div className={`mb-0 ${margin}`}>
          <Description
            className="lg:max-w-[481px] max-lg:text-center md:text-xl sm:text-lg text-base !text-opacity-70 !leading-150"
            description={
              <>
                We see our customers as partners and identify passionately with
                their companies. Regardless of what the goal is, whether to
                increase sales, increase brand awareness or attract new
                employees. We always look for the
                {
                  <span className="text-opacity-100 text-skyBlue">
                    right solution for your company
                  </span>
                }
                and advise you individually
              </>
            }
          />
          <div className="flex justify-center mb-0 lg:justify-start">
            <CommonButton
              className="mt-3 lg:mt-10 md:mt-8 sm:mt-6"
              name="Contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDriven;
