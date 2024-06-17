import React from "react";
import { H2 } from "./common/Heading";
import angebotLogo from "../assets/images/svg/angebotLogo.svg";
const Angebot = () => {
  return (
    <div className="bg-blue pt-[123px]">
      <div className="container px-3 mx-auto lg:pb-[238px]">
        <p className="text-xl text-white font-poppins font-bold mb-3 text-center leading-150">
          A RESULTS-DRIVEN AGENCY
        </p>
        <H2 className="!text-white mb-[98px]" heading="Angebot" />
        <img
          className="w-[140px] h-[171px] pt-[77px] mx-auto"
          src={angebotLogo}
          alt="logo_angebot"
        />
      </div>
    </div>
  );
};

export default Angebot;
