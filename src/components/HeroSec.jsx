import { Description, H1 } from "./common/Heading";
import headerpc from "../assets/images/webp/hero-pc.webp";
import NavBar from "./NavBar";
import { Link, useLocation } from "react-router-dom";
import { CloudBottom, CloudTop, RightIcon } from "./common/Icons";

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
          <div className="relative flex justify-center mx-auto">
            <div className="absolute right-[69%] top-[5%]">
              <CloudTop />
              </div>
            <div className="absolute left-[73%] bottom-[10%]"><CloudBottom className="absolute bottom-0"/></div>
            <img className="max-w-[621px] w-full max-h-[469px]" src={headerpc} alt="header-pc" />
          </div>
        </div>}
        {location.pathname !== '/' && <div className="flex items-center gap-4 pb-[30px]">
          <Link to='/' className="text-base font-medium text-white font-poppins">Home</Link>
          <RightIcon />
          <Link to={location.pathname} className="text-base font-medium text-white capitalize font-poppins">{location.pathname.replace(/[\/-]/g, ' ')}</Link>
        </div>}
      </div>
    </div>
  );
};

export default HeroSec;
