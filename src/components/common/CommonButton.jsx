const CommonButton = ({ className, name }) => {
  return <button className={`font-poppins font-semibold text-sm sm:text-base text-white bg-turquoise py-3 px-7 sm:py-[14px] hover:shadow-xl duration-300 sm:px-[30px] rounded-full ${className}`}>{name}</button>
};
export default CommonButton;
