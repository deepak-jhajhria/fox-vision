import { Description, H2, H5 } from "../common/Heading";
import CommonButton from "../common/CommonButton";
import cardImage from "../../assets/images/webp/projectAgency.webp";
import { Logo } from "../homepage/WhatWeDo";
export const Vector = () => {
  return (
    <svg
      width="184"
      height="146"
      viewBox="0 0 184 146"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M96.9499 49.7986C98.161 45.5351 97.7926 41.007 95.2378 36.4084C87.3335 22.1791 74.009 18.7138 59.6777 21.0801C38.7506 24.5352 15.6688 40.606 5.12509 52.6898C4.62423 53.2619 4.68548 54.13 5.25668 54.6262C5.82881 55.1271 6.69747 55.0689 7.19679 54.4971C17.4308 42.768 39.8177 27.1451 60.1268 23.7908C73.2862 21.6195 85.5764 24.6752 92.8341 37.7438C94.997 41.6327 95.296 45.4552 94.2803 49.0625C91.9117 48.4353 89.5584 47.8831 87.221 47.4087C80.7704 46.1002 63.6226 45.8432 51.9994 50.0141C43.6626 53.0083 38.1717 58.271 40.2853 66.584C41.4621 71.2032 45.1177 73.9112 50.1896 74.9252C57.1637 76.3257 66.9377 74.4501 75.782 70.3553C83.1474 66.9483 89.8589 62.0173 93.813 56.279C94.6809 55.0172 95.4215 53.7177 96.0094 52.3873C128.683 61.7119 162.553 85.0991 180.878 112.838C181.298 113.467 182.148 113.645 182.784 113.224C183.418 112.807 183.591 111.954 183.174 111.322C164.548 83.1339 130.172 59.3455 96.9499 49.7986ZM93.3138 51.6486C91.0877 51.064 88.874 50.5484 86.6747 50.1031C80.4921 48.8512 64.0661 48.6045 52.9295 52.601C46.0951 55.054 41.2159 59.0944 42.9491 65.9056C43.8605 69.4835 46.804 71.4423 50.73 72.2335C55.0498 73.0971 60.5159 72.5656 66.1186 71.0045C74.6257 68.6331 83.4414 63.877 89.0677 57.7969C90.8524 55.8716 92.31 53.8108 93.3138 51.6486Z"
        fill="#4B17E6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M131.579 98.7909C147.952 97.9258 167.068 104.435 181.202 112.913C181.852 113.304 182.697 113.091 183.087 112.441C183.478 111.79 183.268 110.946 182.618 110.555C168.043 101.812 148.315 95.1559 131.435 96.0464C130.679 96.0864 130.096 96.7341 130.136 97.4918C130.175 98.2483 130.822 98.8308 131.579 98.7909Z"
        fill="#4B17E6"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M182.862 110.32C173.645 100.251 168.722 82.7213 169.143 69.035C169.167 68.277 168.571 67.6392 167.812 67.6192C167.054 67.5943 166.421 68.1903 166.396 68.9485C165.955 83.2869 171.179 101.626 180.836 112.176C181.347 112.737 182.219 112.773 182.779 112.263C183.337 111.749 183.377 110.881 182.862 110.32Z"
        fill="#4B17E6"
      />
    </svg>
  );
};
const ProjectAgency = () => {
  return (
    <section className="py-10 sm:py-16 md:pt-20 lg:pb-0 lg:pt-[126px] px-6 overflow-hidden">
      <div className="container px-0 max-w-[1140px] relative">
        <H5 className="uppercase max-md:text-center" title="FOX VISION" />
        <H2
          className="md:mt-2 !leading-120 mb-2 max-md:text-center max-md:mx-auto max-w-[498px]"
          heading="Design Project Agency"
        />
        <div className="flex items-center max-md:flex-col justify-between max-sm:gap-3 max-lg:gap-5 xl:items-end ">
          <img
            className="w-full max-w-[380px] md:max-w-[450px] lg:max-w-[524px] mt-3 lg:mt-10 xl:max-w-[564px] lg:h-[328px] h-full"
            src={cardImage}
            alt="cardimage"
          />
          <div className="flex relative flex-col items-start md:translate-y-[-16%] lg:ml-8 lg:max-w-[523px]">
            <Description
              className="max-md:text-center max-w-[512px] max-sm:mt-28"
              description={
                <>
                  As a design agency, we create a contemporary and{" "}
                  {<span className="text-skyBlue">distinctive appearance</span>}{" "}
                  for you. Style is more in demand than ever. We help you show
                  your best side to your customers. you{" "}
                  {<span className="text-skyBlue">Strong branding sets</span>}{" "}
                  apart from your competition and creates trust and seriousness.
                </>
              }
            />
            <CommonButton
              className="mt-8 max-md:mx-auto md:mt-10"
              name="Contact"
            />
            <span className="absolute right-[45%] sm:right-2 top-0 sm:-top-28">
              <Logo />
            </span>
          </div>
        </div>
        <span className="absolute max-md:hidden top-[49%] md:-top-9 lg:top-0 xl:top-[70px] -left-10 md:left-[41%]">
          <Vector />
        </span>
      </div>
    </section>
  );
};

export default ProjectAgency;
