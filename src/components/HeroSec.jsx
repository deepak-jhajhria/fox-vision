import { Description, H1 } from "./common/Heading";
import headerpc from "../assets/images/webp/hero-pc.webp";
import NavBar from "./NavBar";

const HeroSec = () => {
  return (
    <div className="bg-blue px-6">
      <NavBar />
      <div className="max-w-[1140px] container px-0 pt-11">
        <H1 boldHeadingBefore="FOX" heading={
          <>Vision <br /> Ihre Design Agentur!</>} className="max-w-[948px] text-center mx-auto" />
      </div>
      <Description className='pt-9 text-center text-white lg:!text-2xl' description='Kreativagentur für Branding, Social Media & digitale Lösungen.' />
      <div className="relative pt-1 pb-[59px]">
        <img className="max-w-[621px] w-full mx-auto max-h-[469px]" src={headerpc} alt="header-pc" />
      </div>
    </div>
  );
};

export default HeroSec;
