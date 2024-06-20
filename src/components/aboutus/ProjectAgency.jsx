import { Description, H2, H5 } from "../common/Heading";
import CommonButton from "../common/CommonButton";
import cardImage from "../../assets/images/webp/projectAgency.webp";
import { ProjectArrow, WhatWeSecLogo } from "../common/Icons";

const ProjectAgency = () => {
  return (
    <section>
      <div className="py-10 sm:py-12 md:py-16 lg:py-24 xl:pb-0 xl:pt-[126px] px-6 overflow-hidden">
        <div className="container px-0 max-w-[1140px] relative">
          <H5 className="uppercase max-lg:text-center" title="FOX VISION" />
          <H2
            className="mt-1 lg:mt-2 !leading-120 max-lg:text-center max-lg:mx-auto md:max-w-[440px] lg:max-w-[498px]"
            heading="Design Project Agency"
          />
          <div className="flex items-center max-lg:flex-col max-sm:gap-3 max-lg:gap-5 lg:items-end ">
            <img
              className="w-full max-w-[380px] lg:max-w-[500px]  mt-4 sm:mt-0 md:mt-4 lg:mt-[29px] xl:max-w-[590px] lg:h-[328px] h-full"
              src={cardImage}
              alt="cardimage"
            />
            <div className="flex relative flex-col items-start md:translate-y-[-16%] lg:ml-8 ">
              <Description
                className="max-lg:text-center max-sm:mt-28 md:mt-5 xl:max-w-[523px]"
                description={
                  <>
      
                    As a design agency, we create a contemporary and
                    {
                      <span className="text-turquoise"> distinctive appearance </span>
                    }
                    for you. Style is more in demand than ever. We help you show
                    your best side to your customers. you
                    {<span className="text-turquoise"> Strong branding sets </span>}
                    apart from your competition and creates trust and seriousness.
                  </>
                }
              />
              <CommonButton
                className="mt-8 max-lg:mx-auto md:mt-10 lg:mt-6"
                name="Contact"
              />
              <span className="absolute right-[40%] sm:right-4 top-0 sm:-top-24">
                <WhatWeSecLogo />
              </span>
            </div>
          </div>
          <span className="absolute top-[52%] max-lg:hidden sm:top-[44%] md:top-0 lg:left-[39%] md:left-[39%] lg:top-8 xl:top-[81px] -left-1 xl:left-[42%]">
            <ProjectArrow />
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProjectAgency;
