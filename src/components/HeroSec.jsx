import { Description, H1 } from "./common/Heading";
import headerpc from "../assets/images/webp/hero-pc.webp";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

const HeroSec = () => {
  const location = useLocation()
  return (
    <div className="bg-blue px-6">
      <NavBar />
      <div className={`max-w-[1140px] container px-0 ${location.pathname === '/' ? "pt-11" : "pt-[76px] pb-[100px]"}`}>
        {location.pathname === '/' && <H1 boldHeadingBefore="FOX" heading={<>Vision <br /> Ihre Design Agentur!</>} className="max-w-[948px] text-center mx-auto" />}
        {location.pathname === '/about' && <H1 boldHeadingBefore="About" heading='Us' className="max-w-[948px] text-center mx-auto" />}
        {location.pathname === '/contact' && <H1 heading='Contact' boldHeadingAfter="Us" className="max-w-[948px] text-center mx-auto" />}
        {location.pathname === '/portfolio' && <H1 heading='Portfolio' className="max-w-[948px] text-center mx-auto" />}
      </div>
      {location.pathname === '/' && <Description className='pt-9 text-center text-white lg:!text-2xl' description='Kreativagentur für Branding, Social Media & digitale Lösungen.' />}
      {location.pathname === '/' && <div className="relative pt-1 pb-[59px]">
        <img className="max-w-[621px] w-full mx-auto max-h-[469px]" src={headerpc} alt="header-pc" />
      </div>}
      {
        location.pathname !== '/' && <div className="flex items-center gap-4 pb-[30px]">
          <p className="text-white font-poppins font-medium text-base">Home</p>
          <p className="text-white font-poppins font-medium text-base capitalize">{location.pathname}</p>
        </div>
      }
    </div>
  );
};

export default HeroSec;
