import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import CommonButton from "./common/CommonButton";
import { CallIcon, MailIcon, NavLogo } from "./common/Icons";
import { navLinkList } from "./common/Helper";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen === true) {
      document.body.classList.add("max-lg:overflow-hidden")
    } else {
      document.body.classList.remove("max-lg:overflow-hidden")
    }
  }, [isOpen])

  return (
    <nav className="py-3 sm:py-5">
      <div className="container px-6 md:px-8 lg:px-[50px] bg-white max-w-[1240px] py-[9px] lg:py-[11px] rounded-full">
        <div className="flex items-center justify-between w-full gap-10">
          <Link rel="noopener noreferrer" to="/"><NavLogo /></Link>
          <div className={` ${isOpen ? "right-0" : "-right-full"} flex items-center xl:gap-[153px] lg:gap-12 max-lg:gap-8 max-lg:fixed max-lg:top-0 max-lg:bg-white md:bg-full bg-cover max-lg:h-full max-lg:w-full max-lg:z-30 max-lg:duration-300 max-lg:flex-col justify-center`}>
            <ul className={`flex max-lg:flex-col xl:gap-10 md:gap-7 gap-5 items-center justify-center`}>
              {navLinkList.map((item, index) => (
                <li key={index}>
                  <NavLink rel="noopener noreferrer" className={({ isActive }) => `font-normal font-poppins text-blackPearl text-base relative after:absolute after:bg-blue after:h-[3px] after:w-0 after:rounded-full after:-bottom-1 after:left-1/2 after:-translate-x-1/2 duration-300 after:duration-300 ${isActive && "after:!w-[26px] navLinkStroke"}`} to={item.src} onClick={() => setIsOpen(!isOpen)}>{item.title}</NavLink>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 max-lg:flex-col">
              <Link to="tel:+1234567890" rel="noopener noreferrer"  className="flex items-center justify-center duration-300 border rounded-full w-9 h-9 border-blackPearl group hover:border-turquoise"><CallIcon /></Link>
              <Link to="mailto:example@example.com" rel="noopener noreferrer"  className="flex items-center justify-center duration-300 border rounded-full w-9 h-9 border-blackPearl group hover:border-turquoise"><MailIcon /></Link>
              <CommonButton name="Kontakt" className='py-[11px]' />
            </div>
          </div>
          <div onClick={() => setIsOpen(!isOpen)} className='relative z-50 flex flex-col justify-between w-6 h-5 cursor-pointer lg:hidden sm:w-7 sm:h-5'>
            <span className={`${isOpen ? 'rotate-[50deg] translate-y-4' : ""} h-[2px] w-full duration-300 rounded-[3px] bg-blackPearl ease-linear transition-all`}></span>
            <span className={`${isOpen ? 'hidden' : ""} h-[2px] w-full duration-300 rounded-[3px] bg-blackPearl ease-linear transition-all`}></span>
            <span className={`${isOpen ? 'rotate-[-50deg] translate-y-[-50%]' : ""} h-[2px] w-full duration-300 rounded-[3px] bg-blackPearl ease-linear transition-all`}></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

