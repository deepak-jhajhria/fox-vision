import { H4 } from "./common/Heading";

export const WorkCard = (props) => {
  return (
    <div className="lg:p-[26.8px_26.8px_43.91px_26.8px] md:mt-0 mt-4 p-5  duration-300 group hover:bg-bubbles md:max-w-[366px] rounded-md bg-blueChalk">
      <div
        className="h-[85.27px] max-w-[85.27px] bg-transparent group-hover:shadow-[0px_11.57px_23.15px_0px_#05D5FB29] duration-300 rounded-md lg:mb-[27px] mb-3 flex justify-center items-center shadow-[0px_10px_20px_0px_#4B17E62B]"
      >
        {props.icons}
      </div>
      <H4 className="md:max-w-[288px]" heading={props.tittle} />
      <p className="sm:text-base text-sm font-normal leading-6 font-poppins text-blackPearl opacity-70">
        Visual graphic design is the art of using visual elements, such as
        images, typography, color, and layout, to convey a message, tell a
        story, or evoke emotions.
      </p>
    </div>
  );
};

