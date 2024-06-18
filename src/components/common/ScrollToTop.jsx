import { useState, useEffect } from "react";
import { BackToTop } from "./Icons";

const ScrollToTop = () => {
    const [scrollValue, setScrollValue] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrollValue(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    useEffect(() => {
        if (scrollValue > 200) {
            setShowScrollTop(true);
        } else {
            setShowScrollTop(false);
        }
    }, [scrollValue]);

    const scrollTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={`border-0 fixed bottom-4 right-4 transition-all duration-300 ${showScrollTop ? "scale-100 translate-y-0" : "scale-0 translate-y-[40px]"}`}>
            <div onClick={scrollTopHandler} className="flex items-center justify-center overflow-hidden transition-all duration-500 rounded-full cursor-pointer h-9 w-9 sm:h-10 bg-skyBlue sm:w-10 bg-dodgerBlue hover:shadow-lg hover:shadow-sky-300">
                <BackToTop />
            </div>
        </div>
    );
};

export default ScrollToTop;