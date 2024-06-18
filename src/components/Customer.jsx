import React from "react";
import { Description, H2 } from "./common/Heading";
import pcmember from "../assets/images/webp/pcMembers.webp";
import angebotLogo from "../assets/images/svg/angebotLogo.svg";
import Avtar from "../assets/images/svg/customerAvtar.svg";

const Customer = () => {
  return (
    <div className="bg-blue pt-[77px] pb-40 md:pb-[190px] lg:pb-[240px]">
      <div className="container  px-3 mx-auto">
        <div className="flex flex-wrap justify-center items-center flex-row -mx-3 pb-6 md:pb-[78px]">
          <div className="md:w-1/2 w-full px-3">
            <Description
              className="!text-white text-center md:text-start mb-3"
              description="FOX philosophy"
            />
            <H2
              className="!text-white mb-5 text-center md:text-start"
              heading="Customer Focus"
            />
            <Description
              className="!text-white max-w-[481px] text-center md:text-start mx-auto md:mx-0 leading-150 !font-normal mb-3"
              description="The customer is our focus. We do everything we can to provide our customers with individual, needs-based advice."
            />
          </div>
          <div className="md:w-1/2 w-full px-3">
            <div className="relative">
              <img
                className="mx-auto md:mx-0 max-w-[556px] max-h-[371px] w-[70%] md:w-full"
                src={pcmember}
                alt="Pc_persons"
              />
              <img
                className="w-12 h-12 sm:h-20 sm:w-20 lg:w-[98px] lg:h-[98px] absolute right-[42%] sm:top-12 lg:right-[45%] top-5 md:right-[36%] md:top-11 lg:top-18"
                src={Avtar}
                alt="avtar"
              />
            </div>
          </div>
        </div>{" "}
        <img
          className="w-[90px] h-[100px] md:w-[140px] md:h-[171px] mx-auto"
          src={angebotLogo}
          alt="logo_angebot"
        />
      </div>
    </div>
  );
};

export default Customer;
