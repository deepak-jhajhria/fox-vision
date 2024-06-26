import { H2, H4, H5 } from "../common/Heading";
import mhillPolka from "../../assets/images/webp/mhillPolaka.webp";

const DesignMastery = () => {
  return (
    <section>
      <div className="py-0 md:py-0 xl:pt-[150px] lg:pb-1.5 overflow-hidden">
        <div className="container max-lg:px-3 max-w-[1140px] relative">
          <H5
            className="text-center text-blackPearl"
            title="FOX VISION - Friendly and reliable"
          />
          <H2
            className="mb-6 text-center mt-1 sm:mt-2 lg:mt-3 md:mb-10 lg:mb-14 text-blackPearl"
            heading="Design Mastery in Our Genes"
          />
          <div className="flex flex-col lg:flex-row gap-5 justify-between items-center bg-transparent overflow-hidden shadow-designShadow p-5 md:p-6 lg:p-[35px]">
            <div className="flex flex-col">
              <H4
                className="text-blackPearl text-center lg:text-start mb-2 lg:mb-[15px]"
                heading="Mhill Paloka"
              />
                        <h1 className="text-blackPearl leading-normal text-center font-poppins text-base md:text-lg lg:text-xl lg:text-start lg:leading-183 font-normal lg:max-w-[500px] opacity-70">Mhill Paloka deepened his know-how in the areas of purchasing, marketing and controlling in a large international company. He has also been a founding member of a facility management company since 2009. Design has always been extremely important to him and he is happy to help you stay up to date..</h1>

      
            </div>
            <img
              className=" w-full sm:max-w-[80%] md:max-w-[350px] md:max-h-[355px] lg:max-w-[480px] lg:max-h-[385px] xl:max-w-[530px] xl:max-h-[392px] rounded-md"
              src={mhillPolka}
              alt="designer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignMastery;
