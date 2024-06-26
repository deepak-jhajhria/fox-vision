import { Link } from "react-router-dom";
import { H4 } from "../common/Heading";

const AngebotCardPath = (props) => {
  return (
    <div
      className={`${props.className} p-4 md:p-[26.83px] xl:w-[366px] xl:min-h-[383px] w-full h-full group relative duration-300 bg-white rounded-[6px]`}
    >
      <div className="max-sm:px-0">
        <div
          className={`sm:mb-[27px] mb-5 lg:w-[85.27px] lg:h-[85.27px] w-[60px] h-[60px] rounded-[6.94px] shadow-angebot flex justify-center items-center ${
            props.cardBox
              ? "shadow-blueCard bg-bubbles"
              : " bg-blueChalk"
          }`}
        >
          {props.svg}
        </div>
        <H4 heading={props.title} />
        <p className="pb-6 text-sm font-normal leading-normal text-black text-start md:mt-2 opacity-70 md:pb-11 xl:max-w-[324px] sm:text-base font-poppins">
          {props.description}
        </p>
      </div>
      <div className="flex items-center cursor-pointer absolute bottom-3 sm:bottom-6 xl:bottom-14 gap-2.5 ">
        <Link
          to={props.link}
          rel="noopener noreferrer"
          title="cardData"
          className="text-sm font-normal leading-normal text-blue group-hover:opacity-100 duration-300 text-start opacity-70 sm:text-base font-poppins"
        >
          {props.linkText}
        </Link>
        <span className="group-hover:translate-x-2 duration-300">
          {props.arrow}
        </span>
      </div>
    </div>
  );
};

export default AngebotCardPath;
