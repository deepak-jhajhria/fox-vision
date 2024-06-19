import captcha from "../../assets/images/svg/captcha.svg";
export const CheckedIcon = () => {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.35238 9.4389L0.109375 5.1949L1.52338 3.7809L4.35238 6.6089L10.0084 0.951904L11.4234 2.3669L4.35238 9.4369V9.4389Z"
        fill="#B3B3B3"
      />
    </svg>
  );
};
const CheckboxLayout = ({ checked, onChange }) => {
  return (
    <div
      htmlFor="box"
      className="flex relative justify-between items-center max-[450px]:w-full w-[250px] lg:w-[302px] py-2 px-3 rounded-md border border-noble bg-alabaster"
    >
      <label className="flex items-center justify-between w-full cursor-pointer">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="hidden"
            checked={checked}
            onChange={onChange}
          />
          <span className="w-[22px] h-[22px] border-[2.5px] border-grey rounded-sm flex-shrink-0 flex justify-center items-center mr-2">
            {checked && <CheckedIcon />}
          </span>
          <span className="select-none text-black cursor-pointer font-poppins opacity-70 text-sm sm:text-base font-normal ">
            {" "}
            I’m not a robot
          </span>
        </div>
        <div className="flex flex-col !justify-end items-center">
          <img className="" src={captcha} alt="Captcha_Image" />
          <p className="text-silver !flex-nowrap font-normal font-poppins leading-[12px] text-[8px]">
            Privacy - Terms
          </p>
        </div>
      </label>{" "}
    </div>
  );
};

export default CheckboxLayout;
