import { useState } from "react";
import { Description, H4 } from "../common/Heading";
import { DownArrow } from "../common/Icons";

const Accordion = ({ data, className }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className={`flex flex-col gap-[18px] ${className}`}>
            {data.map((item, index) => (
                <div key={index} className={`p-[21px] border border-black border-opacity-20 rounded-[6px] duration-300 min-h-[197px] ${activeIndex !== index && 'min-h-[70px]'}`}>
                    <button className="flex items-center justify-between w-full gap-8" onClick={() => handleToggle(index)}>
                        <H4 heading={item.title} />
                        <DownArrow className={`duration-300 ${activeIndex !== index && "rotate-180"}`} />
                    </button>
                    <Description className={`${activeIndex !== index && 'hidden opacity-0'} text-opacity-70 duration-300 h-auto overflow-hidden`} description={item.content} />
                </div>
            ))}
        </div>
    )
}

export default Accordion