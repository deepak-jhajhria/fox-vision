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
        <div className={`flex flex-col gap-[18px] ${className}`}>
            {data.map((item, index) => (
                <div key={index} className={`p-[21px] border border-black border-opacity-20 rounded-[6px] overflow-hidden duration-300 ${activeIndex !== index && ''}`}>
                    <button className="flex items-start justify-between w-full gap-8" onClick={() => handleToggle(index)}>
                        <H4 className='text-start' heading={item.title} />
                        <DownArrow className={`duration-300 ${activeIndex !== index && "rotate-180"}`} />
                    </button>
                    <Description className={`${activeIndex !== index && '!max-h-0 opacity-0'} max-h-[109px] text-opacity-70 duration-300 mt-2 lg:mt-[15px] overflow-hidden mr-7 lg:mr-[70px]`} description={item.content} />
                </div>
            ))}
        </div>
    )
}

export default Accordion