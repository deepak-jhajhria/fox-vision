import mochtenEllp from "../assets/images/svg/mochtenEllp.svg";
import CommonButton from "./common/CommonButton";
import { H3 } from "./common/Heading";
import { useLocation } from "react-router-dom";
const Mochten = () => {
  const pathName = useLocation().pathname;
  return (
    <div className={`absolute top-0 left-0 w-full -translate-y-[56%] ${pathName === "/contact-us" && "!hidden"}`}>
      <div className="bg-turquoise relative rounded-[10px] lg:min-h-[253px] px-7 sm:px-10 py-7">
        <img className="absolute max-h-[253px] -top-9 sm:top-0 right-0 pointer-events-none" src={mochtenEllp} aria-label="ellipse" alt="dot_ellp" />
        <img className="absolute max-h-[253px] -top-9 sm:top-0 left-0 rotate-180 pointer-events-none" src={mochtenEllp} aria-label="ellipse" alt="dot_ellp" />
        <H3 className="!text-white  relative z-20 max-w-[713px] mx-auto text-center mb-6 lg:mb-[29.4px]" heading="Möchten Sie ein Projekt starten? Wir freuen uns." />
        <CommonButton name="Kontakt" className="relative z-20 flex justify-center !duration-300 hover:bg-blue mx-auto border-2 !bg-transparent !border-white hover:!border-blue md:!py-[12px] md:!px-[28px]" />
      </div>
    </div>
  );
};

export default Mochten;
