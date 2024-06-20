import identity from "../../assets/images/webp/corporateIdentity.webp";
import CommonButton from "../common/CommonButton";
import { Description, H2, H5 } from "../common/Heading";
import { corporateCardList } from "../common/Helper";
import { CorporateArrow, CorporateIcon } from "../common/Icons";

const CorporateIdentity = () => {
  return (
    <section>
      <div className="px-3 pt-10 xl:pt-32 lg:pt-24 md:pt-16 sm:pt-12">
        <div className="container max-w-[1140px]">
          <div className="relative flex flex-row flex-wrap items-center mb-10 -mx-3 xl:mb-32 lg:mb-24 md:mb-16 sm:mb-12">
            <div className="absolute top-[2%] lg:block hidden left-[34%]">
              <CorporateArrow />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <H2
                className="!leading-121 md:!text-start !text-center md:!max-w-[388px] !mb-[17px]"
                heading={<>Corporate identity</>}
              />
              <img
                src={identity}
                alt="identity"
                className="xl:max-w-[465px] max-md:max-w-[300px] max-md:mx-auto"
              />
            </div>
            <div className="w-full px-3 md:w-1/2 max-md:mt-3">
              <div className="w-[93px] h-[93px] max-md:mx-auto bg-bubbles shadow-[0px_10px_20px_0px_#05D5FB29] rounded-md flex justify-center items-center">
                <CorporateIcon />
              </div>
              <Description
                className="lg:max-w-[552px] mt-4 max-md:mt-2 max-md:!text-center md:text-xl sm:text-lg text-base !text-opacity-70 lg:!leading-183"
                description={
                  <>
                    Many people primarily associate logo and colors with it.
                    Corporate identity is much more. Corporate identity, together
                    with{" "}
                    {
                      <span className="text-opacity-100 text-violet">
                        rcorporate design,
                      </span>
                    }{" "}
                    forms the character of your company. Give your company a face
                    and awaken emotions and trust in your customers.{" "}
                    {
                      <span className="text-opacity-100 text-violet">
                        FOX VISION
                      </span>
                    }{" "}
                    would be happy to develop your corporate identity.
                  </>
                }
              />
              <div className="flex justify-center md:justify-start">
                <CommonButton
                  className="lg:!mt-[35px] md:!mt-7 !mt-3 "
                  name="Contact"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-[2px] flex-wrap -mx-3">
            {corporateCardList.map((obj, i) => (
              <div key={i} className="md:w-1/4 sm:w-1/2 w-full px-[11px]">
                <div className="p-[22px_10px] md:max-w-[268px] max-sm:max-w-[400px] max-sm:mx-auto group rounded-md max-md:mt-4 md:max-h-[262px] shadow-[0px_4px_27px_0px_#4B17E614] bg-white">
                  <div className="overflow-hidden">
                    <img
                      src={obj.img}
                      alt="wireframe"
                      className="group-hover:scale-110 duration-300"
                    />
                  </div>
                  <H5
                    className="text-center pt-3 lg:!leading-120"
                    title={obj.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateIdentity;
