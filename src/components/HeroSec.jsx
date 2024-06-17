import { H1 } from "./common/Heading";
import headerpc from "../assets/images/webp/hero-pc.webp";
import NavBar from "./NavBar";

const HeroSec = () => {
  return (
    <div className="bg-blue">
      <NavBar />
      <div className="max-w-[1172px] mx-auto px-4 pt-16">
        <H1
          boldHeadingBefore="FOX"
          heading={
            <>
              Vision <br /> Ihre Design Agentur!
            </>
          }
          className="max-w-[948px] text-center mx-auto"
        />
      </div>
      <p className="text-center font-poppins pt-9 text-white font-normal text-2xl !leading-150">
        Kreativagentur für Branding, Social Media & digitale Lösungen.
      </p>
      <img className="max-w-[500px] mx-auto" src={headerpc} alt="header-pc" />
    </div>
  );
};

export default HeroSec;
