import { H4 } from "../common/Heading";

export const ContactCard = (props) => {
  return (
    <div className={`max-w-[360px] group lg:hover:-translate-y-[38px] duration-300 shadow-contactCard bg-white w-full ${props.class}`}>
      <div className="flex justify-center mb-4 md:mb-[25px] ">
        <div className="flex justify-center group-hover:bg-blue duration-300 items-center bg-selago w-16 h-16 md:w-[85.27px] md:h-[85.27px] rounded-[6.94px] shadow-contactbox">
          {props.icons}
        </div>
      </div>
      <H4 heading={props.title} className="!leading-150 text-center mb-2 md:mb-[15px]" />
      <p className={`font-poppins text-black text-sm lg:text-base font-normal text-center max-w-[304px] mx-auto`}>
        {props.value}
      </p>
    </div>
  );
};
