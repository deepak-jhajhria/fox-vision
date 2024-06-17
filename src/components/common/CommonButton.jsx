const CommonButton = ({ className, name }) => {
  return (
    <button
      className={`font-poppins font-semibold text-white bg-turquoise py-[14px] px-[30px] rounded-full ${className}`}
    >
      {name}
    </button>
  );
};
export default CommonButton;
