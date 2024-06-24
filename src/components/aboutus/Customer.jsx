import pcMember from "../../assets/images/webp/pcMembers.webp";
import angebotLogo from "../../assets/images/svg/angebotLogo.svg";
import Avtar from "../../assets/images/svg/customerAvtar.svg";

const Customer = () => {
  return (
    <section>
      <div className="bg-blue pt-10 md:pt-16 lg:pt-24 xl:pt-[77px] md:pb-[190px] pb-40 lg:pb-[200px] xl:pb-[240px]">
        <div className="container max-w-[1140px] px-6 xl:px-3 mx-auto">
          <div className="flex flex-wrap justify-center items-center flex-row -mx-3 pb-2 md:pb-12 lg:pb-10 xl:pb-[78px]">
            <div className="w-full px-3 md:w-1/2">
         
              <p className="text-white text-center leading-150 font-bold md:text-start mb-1 sm:mb-3 font-poppins text-base sm:text-lg lg:text-xl ">FOX philosophy</p>
      <p className="text-white font-montserrat font-semibold text-custom-2xl leading-121 sm:text-custom-4xl lg:text-5xl xl:text-custom-6xl xl:leading-[78.2px] mb-3 md:mb-5 text-center md:text-start">Customer Focus</p>

      <p className="text-white text-center leading-150 font-normal md:text-start mb-1 sm:mb-3 font-poppins text-base sm:text-lg lg:text-xl ">The customer is our focus. We do everything we can to provide our customers with individual, needs-based advice.</p>

            </div>
            <div className="w-full px-3 md:w-1/2">
              <div className="relative">
                <img
                  className="mx-auto md:mx-0 md:max-w-[556px] pointer-events-none md:max-h-[371px] w-[90%] sm:w-[70%] md:w-full"
                  src={pcMember}
                  alt="pcMembers"
                />
                <img
                  className="w-12 h-12 sm:h-20 sm:w-20 pointer-events-none lg:w-[98px] lg:h-[98px] absolute right-[42%] sm:top-12 lg:right-[43%] top-5 md:right-[36%] md:top-11 lg:top-20"
                  src={Avtar}
                  alt="avtar"
                />
              </div>
            </div>
          </div>
          <img
            className="w-[60px] pointer-events-none h-[60px] sm:w-[90px] sm:h-[100px] md:w-[140px] md:h-[171px] mx-auto"
            src={angebotLogo}
            alt="logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Customer;
