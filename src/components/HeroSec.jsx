import { Description, H1 } from "./common/Heading";
import headerpc from "../assets/images/webp/hero-pc.webp";
import NavBar from "./NavBar";
import { Link, useLocation } from "react-router-dom";
import { CloudBottom, CloudTop, RightIcon } from "./common/Icons";

const HeroSec = () => {
  const location = useLocation()
  return (
    <header>
      <div className={`px-3 sm:px-6 bg-blue ${location.pathname === '/' && 'min-h-[570px]'}`}>
        <NavBar />
        <div className="max-w-[1140px] container">
          <div className={`${location.pathname === '/' ? "pt-11" : "pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-[56px] lg:pb-[100px]"}`}>
            {location.pathname === '/' && <H1 boldHeadingBefore="FOX" heading={<>Vision <br /> Ihre Design Agentur!</>} className="max-w-[948px] text-center mx-auto" />}
            {location.pathname === '/about-us' && <H1 boldHeadingBefore="About" heading='Us' className="max-w-[948px] text-center mx-auto" />}
            {location.pathname === '/contact-us' && <H1 heading='Contact' boldHeadingAfter="Us" className="max-w-[948px] text-center mx-auto" />}
            {location.pathname === '/portfolios' && <H1 heading='Portfolio' className="max-w-[948px] text-center mx-auto" />}
            {location.pathname === '/offer' && <H1 heading='Offer' className="max-w-[948px] text-center mx-auto" />}
          </div>
          {location.pathname === '/' && <Description className='pt-3 sm:pt-5 px-5 lg:pt-9 text-center text-white lg:!text-2xl' description='Kreativagentur für Branding, Social Media & digitale Lösungen.' />}
          {location.pathname === '/' && <div className="relative pt-1 pb-10 sm:pb-12 md:pb-16 lg:pb-[59px]">
            <div className="relative flex justify-center mx-auto">
              <div className="absolute right-[69%] top-[5%] max-sm:hidden">
                <CloudTop />
              </div>
              <div className="absolute left-[73%] bottom-[10%] max-sm:hidden"><CloudBottom className="absolute bottom-0" /></div>
              <img className="max-w-[621px] w-full max-h-[469px]" src={headerpc} alt="header-pc" />
            </div>
          </div>}
          {location.pathname !== '/' && <div className="flex items-center gap-2 md:gap-4 pb-4 sm:pb-6 md:pb-[30px]">
            <Link to='/' className="text-sm font-medium text-white sm:text-base font-poppins">Home</Link>
            <RightIcon />
            <Link to={location.pathname} className="text-sm font-medium text-white capitalize sm:text-base font-poppins">{location.pathname.replace(/[\/-]/g, ' ')}</Link>
          </div>}
        </div>
      </div>    </header>
  );
};

export default HeroSec;
