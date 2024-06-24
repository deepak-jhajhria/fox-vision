const CommonButton = ({ className, name, onclick }) => {
  return <button onClick={onclick} aria-label={name} className={`font-poppins text-sm sm:text-base relative after:absolute overflow-hidden after:top-0 hover:after:right-0 after:bottom-0 after:left-0 after:bg-blue after:z-[-1] z-[1] after:duration-300 after:right-[100%] !leading-normal font-semibold text-white bg-turquoise py-3 md:py-[14px] px-7 md:px-[30px] rounded-full ${className}`}> {name}</button>
};
export default CommonButton;
