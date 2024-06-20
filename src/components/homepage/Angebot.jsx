import Corporate from "./AngebotCardPath";
import angebotLogo from "../../assets/images/svg/angebotLogo.svg";
import { H2, H5 } from "../common/Heading";
import { Arrow } from "../common/Icons";
import { howWeWorkCardlist } from "../common/Helper";

const Angebot = () => {
  return (
    <div className="bg-blue px-3 sm:px-6 pt-10 -mt-[1px] md:pt-16 sm:pt-12 lg:pt-24 xl:pt-[122px] pb-36 md:pb-[170px] lg:pb-[190px] xl:pb-[238px]">
      <div className="container max-w-[1164px] mx-auto">
        <H5
          className="!text-white  text-center mb-2 md:mb-3"
          title="A RESULTS-DRIVEN AGENCY"
        />
        <H2
          className="!text-white  text-center mb-2 sm:mb-5 lg:mb-6 xl:mb-[76px]"
          heading="Angebot"
        />

        <div className="flex flex-row -mx-3 pb-6 md:pb-16 lg:pb-[77px] justify-center flex-wrap ">
          {howWeWorkCardlist.map((obj, index) => (
            <div
              className="lg:w-4/12 md:1/2 pt-4 md:pt-[22px] !px-[11.5px] sm:w-[49%] w-full"
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
          alt="logo_angebot"
        />
      </div>
    </div>
  );
};

export default Angebot;
