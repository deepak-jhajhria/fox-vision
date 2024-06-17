import React from "react";
import mochtenEllp from "../assets/images/svg/mochtenEllp.svg";
const Mochten = () => {
  return (
    <div>
      <div className="container px-3 mx-auto">
        <div className="bg-turquoise relative rounded-[10px] md:min-h-[253px] py-9">
          <img
            className="absolute right-0 top-0"
            src={mochtenEllp}
            alt="dot_ellp"
          />
          <img
            className="absolute rotate-180 left-0 top-0"
            src={mochtenEllp}
            alt="dot_ellp"
          />
          <h1 className="text-custom-4xl text-center text-white font-semibold font-montserrat leading-120 mb-[29.45px]">
            Möchten Sie ein Projekt starten? <br /> Wir freuen uns.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Mochten;
