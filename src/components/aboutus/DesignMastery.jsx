import { H2, H4, H5} from "../common/Heading";
import mhillPolka from "../../assets/images/webp/mhillPolaka.webp";

const DesignMastery = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 lg:pt-[126px] lg:pb-[150px] overflow-hidden">
      <div className="container px-0 max-w-[1140px] relative">
        <H5
          className="text-center text-blackPearl"
          title="FOX VISION - Friendly and reliable"
        />
        <H2
          className="mb-6 text-center md:mt-3 md:mb-10 lg:mb-14 text-blackPearl"
          heading="Design Mastery in Our Genes"
        />

        <div className="bg-white flex flex-col md:flex-row gap-5 justify-between items-center p-5 md:p-[35px]">
          <div>
            <H4 className="text-blackPearl mb-[15px]" heading="Mhill Paloka" />
            <H5
              className="text-blackPearl !leading-183 !font-normal max-w-[500px] opacity-70"
              title="Mhill Paloka deepened his know-how in the areas of purchasing, marketing and controlling in a large international company. He has also been a founding member of a facility management company since 2009. Design has always been extremely important to him and he is happy to help you stay up to date."
            />
          </div>
          <img
            className="md:max-w-[350px] md:max-h-[355px] lg:max-w-[480px] lg:max-h-[385px] xl:max-w-[530px] xl:max-h-[392px] rounded-md"
            src={mhillPolka}
            alt="designer"
          />
        </div>
      </div>
    </section>
  );
};

export default DesignMastery;