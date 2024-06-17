import React from "react";
import mochtenEllp from "../assets/images/svg/mochtenEllp.svg";
import Button from "./common/Button";
import { H3 } from "./common/Heading";
const Mochten = () => {
  return (
    <div className=" -translate-y-[48%]">
      <div className="container !max-w-[1140px] px-3 xl:px-0 mx-auto">
        <div className="bg-turquoise relative rounded-[10px] md:min-h-[253px] py-9">
          <img
            className="absolute right-0 top-0 pointer-events-none"
            src={mochtenEllp}
            alt="dot_ellp"
          />
          <img
            className="absolute rotate-180 left-0 top-0 pointer-events-none"
            src={mochtenEllp}
            alt="dot_ellp"
          />

          <H3
            className="!text-white  relative z-20 max-w-[713px] mx-auto text-center mb-[29.4px]"
            heading="Möchten Sie ein Projekt starten? Wir freuen uns."
          />
          <Button
            content={"Kontakt"}
            className="border-2 flex relative z-20 justify-center border-white mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Mochten;
