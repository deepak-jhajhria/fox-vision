import { Description, H2, H5 } from "../common/Heading";
import CommonButton from "../common/CommonButton";
import cardImage from "../../assets/images/webp/projectAgency.webp";
import { ProjectArrow, WhatWeSecLogo, WhatWeSecVector } from "../common/Icons";

const ProjectAgency = () => {
  return (
    <section className="py-10 sm:py-16 md:pb-5 md:pt-20 lg:pb-0 lg:pt-[126px] px-6 overflow-hidden">
      <div className="container px-0 max-w-[1140px] relative">
        <H5 className="uppercase max-md:text-center" title="FOX VISION" />
        <H2
          className="md:mt-2 !leading-120 max-md:text-center max-md:mx-auto max-w-[498px]"
          heading="Design Project Agency"
        />
        <div className="flex items-center max-md:flex-col max-sm:gap-3 max-lg:gap-5 xl:items-end ">
          <img
            className="w-full max-w-[380px] md:max-w-[400px] lg:max-w-[524px] mt-4 sm:mt-0 lg:mt-[29px] xl:max-w-[590px] lg:h-[328px] h-full"
            src={cardImage}
            alt="cardimage"
          />
          <div className="flex relative flex-col items-start md:translate-y-[-16%] lg:ml-8 ">
            <Description
              className="max-md:text-center max-sm:mt-28 lg:max-w-[523px]"
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
              className="mt-8 max-md:mx-auto md:mt-10"
              name="Contact"
            />
            <span className="absolute right-[40%] sm:right-4 top-0 sm:-top-24">
              <WhatWeSecLogo />
            </span>
          </div>
        </div>
        <span className="absolute max-sm:hidden top-[49%] md:-top-9 lg:top-0 xl:top-[70px] -left-10 md:left-[42%]">
          <ProjectArrow />
        </span>
      </div>
    </section>
  );
};

export default ProjectAgency;
