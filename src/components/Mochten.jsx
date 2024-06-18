import React from "react";
import mochtenEllp from "../assets/images/svg/mochtenEllp.svg";
import Button from "./common/Button";
import { H3 } from "./common/Heading";
import { useLocation } from "react-router-dom";
const Mochten = () => {
  const pathName = useLocation().pathname;
  return (
    <div className={`absolute top-0 left-0 w-full -translate-y-1/2 ${pathName === '/contact-us' && '!hidden'}`}>
      <div className="bg-turquoise relative rounded-[10px] md:min-h-[253px] py-9">
        <img
          className="absolute max-h-[253px] -top-9 sm:top-0 right-0 pointer-events-none"
          src={mochtenEllp}
          alt="dot_ellp"
        />
        <img
          className="absolute max-h-[253px] -top-9 sm:top-0 left-0 rotate-180 pointer-events-none"
          src={mochtenEllp}
          alt="dot_ellp"
        />

        <H3
          className="!text-white  relative z-20 max-w-[713px] mx-auto text-center mb-[29.4px]"
          heading="Möchten Sie ein Projekt starten? Wir freuen uns."
        />
        <Button
          content={"Kontakt"}
          className="relative z-20 flex justify-center mx-auto border-2 border-white"
        />
      </div>
    </div>
  );
};

export default Mochten;
