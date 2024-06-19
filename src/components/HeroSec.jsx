import { Description, H1 } from "./common/Heading";
import headerpc from "../assets/images/webp/hero-pc.webp";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import { RightIcon } from "./common/Icons";

const HeroSec = () => {
  const location = useLocation()
  return (
    <div className="px-6 bg-blue">
      <NavBar />
      <div className="max-w-[1140px] container">
        <div className={`${location.pathname === '/' ? "pt-11" : "pt-[56px] pb-[100px]"}`}>
          {location.pathname === '/' && <H1 boldHeadingBefore="FOX" heading={<>Vision <br /> Ihre Design Agentur!</>} className="max-w-[948px] text-center mx-auto" />}
          {location.pathname === '/about-us' && <H1 boldHeadingBefore="About" heading='Us' className="max-w-[948px] text-center mx-auto" />}
          {location.pathname === '/contact-us' && <H1 heading='Contact' boldHeadingAfter="Us" className="max-w-[948px] text-center mx-auto" />}
          {location.pathname === '/portfolio' && <H1 heading='Portfolio' className="max-w-[948px] text-center mx-auto" />}
          {location.pathname === '/offer' && <H1 heading='Offer' className="max-w-[948px] text-center mx-auto" />}
        </div>
        {location.pathname === '/' && <Description className='pt-9 text-center text-white lg:!text-2xl' description='Kreativagentur für Branding, Social Media & digitale Lösungen.' />}
        {location.pathname === '/' && <div className="relative pt-1 pb-[59px]">
          <img className="max-w-[621px] w-full mx-auto max-h-[469px]" src={headerpc} alt="header-pc" />
        </div>}
        {location.pathname !== '/' && <div className="flex items-center gap-4 pb-[30px]">
          <p className="text-base font-medium text-white font-poppins">Home</p>
          <RightIcon />
          <p className="text-base font-medium text-white capitalize font-poppins">{location.pathname.replace(/[\/-]/g, ' ')}</p>
        </div>}
      </div>
    </div>
  );
};

export default HeroSec;
