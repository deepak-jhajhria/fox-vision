import { Description, H2 } from "../common/Heading";
import pcmember from "../../assets/images/webp/pcMembers.webp";
import angebotLogo from "../../assets/images/svg/angebotLogo.svg";
import Avtar from "../../assets/images/svg/customerAvtar.svg";

const Customer = () => {
  return (
    <section>
      <div className="bg-blue pt-10 md:pt-16 lg:pt-24 xl:pt-[77px] md:pb-[190px] pb-40 lg:pb-[240px]">
        <div className="container max-w-[1140px] px-3 mx-auto">
          <div className="flex flex-wrap justify-center items-center flex-row -mx-3 pb-2 md:pb-12 lg:pb-[78px]">
            <div className="w-full px-3 md:w-1/2">
              <Description
                className="!text-white text-center !leading-150 !font-bold md:text-start mb-1 sm:mb-3"
                description="FOX philosophy"
              />
              <H2
                className="!text-white mb-3 md:mb-5 text-center md:text-start"
                heading="Customer Focus"
              />
              <Description
                className="!text-white max-w-[481px] text-center md:text-start mx-auto md:mx-0 !leading-150 !font-normal mb-3"
                description="The customer is our focus. We do everything we can to provide our customers with individual, needs-based advice."
              />
            </div>
            <div className="w-full px-3 md:w-1/2">
              <div className="relative">
                <img
                  className="mx-auto md:mx-0 md:!max-w-[556px] pointer-events-none md:!max-h-[371px] w-[90%] sm:w-[70%] md:w-full"
                  src={pcmember}
                  alt="Pc_persons"
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
            alt="logo_angebot"
          />
        </div>
      </div>
    </section>
  );
};

export default Customer;
