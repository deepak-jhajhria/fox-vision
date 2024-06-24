import Corporate from "./AngebotCardPath";
import angebotLogo from "../../assets/images/svg/angebotLogo.svg";
import { Arrow } from "../common/Icons";
import { howWeWorkCardlist } from "../common/Helper";

const Angebot = () => {
  return (
    <section>
      <div className="bg-blue px-3 sm:px-6 pt-10 -mt-[1px] md:pt-16 sm:pt-12 lg:pt-24 xl:pt-[122px] pb-36 md:pb-[170px] lg:pb-[190px] xl:pb-[238px]">
        <div className="container max-w-[1164px] mx-auto">
          <h1 className="text-white font-poppins font-bold text-base md:text-lg lg:text-xl lg:leading-[30px] text-center mb-2 lg:mb-3">A RESULTS-DRIVEN AGENCY</h1>
          <p className="text-white font-montserrat font-semibold text-custom-2xl leading-121 sm:text-custom-4xl lg:text-5xl xl:text-custom-6xl xl:leading-[78.2px]  text-center mb-2 sm:mb-5 lg:mb-6 xl:mb-[76px]">Angebot</p>
          <div className="flex flex-row -mx-3 pb-6 md:pb-16 lg:pb-[77px] xl:items-center justify-center flex-wrap ">
            {howWeWorkCardlist.map((obj, index) => (
              <div
                className="lg:w-4/12 md:1/2 pt-4 md:pt-4 xl:pt-7 px-2 sm:w-[49%] w-full flex flex-col items-center justify-center"
                key={index}
              >
                <Corporate
                  svg={obj.svg}
                  title={obj.title}
                  description={obj.description}
                  linkText={obj.link}
                  arrow={<Arrow />}
                  cardBox={index === 1 || index === 3 || index === 5}
                />
              </div>
            ))}
          </div>
          <img
            className="w-[90px] pointer-events-none h-[100px] md:w-[140px] md:h-[171px] mx-auto"
            src={angebotLogo}
            aria-label="angebotLogo"
            alt="logo_angebot"
          />
        </div>
      </div>
    </section>
  );
};

export default Angebot;
