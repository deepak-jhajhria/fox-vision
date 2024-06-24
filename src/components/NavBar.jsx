import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import CommonButton from "./common/CommonButton";
import { CallIcon, MailIcon, NavLogo } from "./common/Icons";
import { navLinkList } from "./common/Helper";
import { Spin as Hamburger } from 'hamburger-react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(!isOpen);
    }
  }
  useEffect(() => {
    if (isOpen === true) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isOpen])
  const handleNavigate = (path) => {
    window.location.href = path;
  }
  return (
    <nav>
      <div className="py-3 sm:py-5">
        <div className="container px-6 md:px-8 lg:px-[50px] bg-white max-w-[1240px] py-2 lg:py-[11px] rounded-full">
          <div className="flex items-center justify-between w-full gap-10">
            <Link rel="noopener noreferrer" to="/"><NavLogo /></Link>
            <div className={` ${isOpen ? "right-0" : "-right-full"} flex items-center xl:gap-[153px] lg:gap-12 max-lg:gap-4 max-lg:fixed max-lg:top-0 max-lg:bg-white md:bg-full bg-cover max-lg:h-full max-lg:w-full max-lg:z-30 max-lg:duration-300 max-lg:flex-col justify-center`}>
              <ul className={`flex max-lg:flex-col xl:gap-10 md:gap-7 gap-5 items-center justify-center`}>
                {navLinkList.map((item, index) => (
                  <li key={index}>
                    <NavLink rel="noopener noreferrer" className={({ isActive }) => `font-normal font-poppins text-blackPearl text-base relative after:absolute after:bg-blue after:h-[3px] after:w-0 after:rounded-full after:-bottom-1 after:left-1/2 after:-translate-x-1/2 duration-300 after:duration-300 ${isActive && "after:!w-[26px] navLinkStroke"} hover:after:!w-[26px] navLinkStrokeOnHover`} to={item.src} onClick={() => handleOpen()}>{item.title}</NavLink>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-7 max-lg:flex-col">
                <div className="flex items-center gap-4">
                  <Link to="tel:+1234567890" rel="noopener noreferrer" className="flex items-center justify-center duration-300 border rounded-full w-9 h-9 border-blackPearl group hover:border-turquoise"><CallIcon /></Link>
                  <Link to="mailto:example@example.com" rel="noopener noreferrer" className="flex items-center justify-center duration-300 border rounded-full w-9 h-9 border-blackPearl group hover:border-turquoise"><MailIcon /></Link>
                </div>
                <div onClick={() => handleOpen()}>
                  <CommonButton onClick={() => handleNavigate('/contact-us')} name="Kontakt" className='py-[11px]' />
                </div>
              </div>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className='relative z-50 flex flex-col justify-between cursor-pointer lg:hidden'>
              <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} rounded distance="sm" direction='right' duration={0.5} color='#000' />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

