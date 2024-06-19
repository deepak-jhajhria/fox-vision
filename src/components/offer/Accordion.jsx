import { useState } from "react";
import { Description, H4 } from "../common/Heading";
import { DownArrow } from "../common/Icons";

const Accordion = ({ data, className }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleToggle = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };
    return (
        <div className={`flex flex-col gap-3 sm:gap-[18px] ${className}`}>
            {data.map((item, index) => (
                <div key={index} className={`p-3 sm:px-[21px] sm:py-[18px] border border-black border-opacity-20 rounded-[6px] overflow-hidden duration-300 ${activeIndex !== index && ''}`}>
                    <button className="flex justify-between w-full gap-3 md:items-center sm:gap-8" onClick={() => handleToggle(index)}>
                        <H4 className='max-sm:!text-base text-start lg:!leading-[29px]' heading={item.title} />
                        <span><DownArrow className={`duration-300 max-sm:w-7 max-sm:h-7 my-[3px] ${activeIndex !== index && "rotate-180 !my-0"}`} /></span>
                    </button>
                    <Description className={`${activeIndex !== index && '!max-h-0 opacity-0 !mt-0'} text-sm max-h-[150px] sm:max-h-[109px] text-opacity-70 duration-300 mt-[9px] overflow-hidden sm:mr-7 lg:mr-[70px]`} description={item.content} />
                </div>
            ))}
        </div>
    )
}

export default Accordion