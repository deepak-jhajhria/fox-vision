import { Link } from "react-router-dom";

const AngebotCardPath = (props) => {
  return (
    <div
      className={`${props.className} p-[26.83px] xl:w-[366px] xl:min-h-[383px] w-full h-full relative bg-white rounded-[6px]`}
    >
      <div className="mb-[27px] w-[85.27px] h-[85.27px] rounded-[6.94px] shadow-[0px_10px_20px_0px_#4B17E62B] flex justify-center items-center">
        {props.svg}
      </div>
      <h3 className="text-black text-start font-semibold font-poppins text-2xl leading-normal mb-2 ">
        {props.title}
      </h3>
      <p className="text-black text-start opacity-70 pb-11 sm:text-base text-sm font-poppins font-normal leading-normal">
        {props.description}
      </p>
      <div className="flex items-center absolute bottom-5 sm:bottom-6 xl:bottom-10 gap-2.5 ">
        <Link className="text-blue text-start opacity-70 sm:text-base text-sm font-poppins font-normal leading-normal">
          {props.link}
        </Link>
        <span>{props.arrow}</span>
      </div>
    </div>
  );
};

export default AngebotCardPath;
