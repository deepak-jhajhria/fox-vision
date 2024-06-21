import captcha from "../../assets/images/svg/captcha.svg";
import { CheckedIcon } from "../common/Icons";

const CheckboxLayout = ({ checked, onChange }) => {
  return (
    <div htmlFor="box" className="flex relative justify-between items-center max-[450px]:w-full w-[250px] lg:w-[302px] py-2 px-3 rounded-md border border-noble bg-alabaster">
      <label className="flex items-center justify-between w-full cursor-pointer">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="hidden"
            checked={checked}
            onChange={onChange}
          />
          <span className="w-[22px] h-[22px] border-[2.5px] border-noble rounded-sm flex-shrink-0 flex justify-center items-center mr-2">
            {checked && <CheckedIcon />}
          </span>
          <span className="text-sm font-normal text-black cursor-pointer select-none font-poppins opacity-70 sm:text-base ">
          
            I’m not a robot
          </span>
        </div>
        <div className="flex flex-col !justify-end items-center">
          <img src={captcha} alt="Captcha_Image" />
          <p className="text-silver !flex-nowrap font-normal font-poppins leading-[12px] text-[8px]">
            Privacy - Terms
          </p>
        </div>
      </label>
    </div>
  );
};

export default CheckboxLayout;
