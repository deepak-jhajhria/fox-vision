import { Description, H2, H5 } from "../common/Heading";
import cardImage from "../../assets/images/webp/how-we/workImg.webp";
import CommonButton from "../common/CommonButton";
const Arrow = () => {
  return (
    <svg className="xl:w-[184px] xl:h-[147px] md:w-[114px] lg:w-[134px] md:h-[117px]" width="184" height="147" viewBox="0 0 184 147" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M97.0798 50.3299C98.2909 46.0664 97.9225 41.5383 95.3677 36.9397C87.4634 22.7103 74.1389 19.245 59.8076 21.6113C38.8805 25.0665 15.7986 41.1372 5.25498 53.221C4.75411 53.7932 4.81536 54.6612 5.38656 55.1575C5.9587 55.6583 6.82735 55.6002 7.32668 55.0283C17.5607 43.2993 39.9476 27.6763 60.2567 24.322C73.4161 22.1507 85.7063 25.2065 92.964 38.275C95.1269 42.164 95.4259 45.9865 94.4102 49.5938C92.0416 48.9666 89.6883 48.4143 87.3509 47.94C80.9003 46.6314 63.7525 46.3745 52.1292 50.5453C43.7925 53.5396 38.3016 58.8022 40.4152 67.1152C41.592 71.7344 45.2475 74.4424 50.3194 75.4564C57.2936 76.857 67.0676 74.9813 75.9118 70.8866C83.2773 67.4795 89.9888 62.5485 93.9429 56.8103C94.8107 55.5485 95.5514 54.2489 96.1393 52.9186C128.813 62.2432 162.683 85.6303 181.008 113.369C181.428 113.998 182.278 114.176 182.913 113.755C183.548 113.339 183.721 112.485 183.303 111.854C164.678 83.6652 130.302 59.8767 97.0798 50.3299ZM93.4437 52.1799C91.2175 51.5952 89.0039 51.0796 86.8046 50.6344C80.622 49.3825 64.196 49.1357 53.0594 53.1323C46.225 55.5852 41.3457 59.6257 43.079 66.4368C43.9904 70.0148 46.9338 71.9735 50.8599 72.7648C55.1797 73.6284 60.6458 73.0968 66.2485 71.5358C74.7556 69.1644 83.5713 64.4083 89.1976 58.3282C90.9823 56.4028 92.4399 54.3421 93.4437 52.1799Z" fill="#05D5FB" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M131.708 99.3221C148.082 98.457 167.198 104.966 181.332 113.444C181.982 113.835 182.827 113.622 183.217 112.973C183.607 112.321 183.398 111.477 182.748 111.086C168.173 102.343 148.444 95.6872 131.565 96.5777C130.808 96.6176 130.226 97.2654 130.266 98.0231C130.305 98.7795 130.952 99.3621 131.708 99.3221Z" fill="#05D5FB" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M182.992 110.852C173.775 100.782 168.851 83.2526 169.273 69.5662C169.296 68.8083 168.701 68.1705 167.942 68.1504C167.184 68.1255 166.551 68.7215 166.526 69.4798C166.085 83.8182 171.309 102.158 180.966 112.707C181.477 113.268 182.349 113.305 182.908 112.794C183.467 112.28 183.506 111.412 182.992 110.852Z" fill="#05D5FB" />
    </svg>

  )
}
const ResultsDriven = ({imgClassName}) => {
  return (
    <div className="relative flex flex-row flex-wrap justify-between -mx-3">
      <div className="absolute xl:top-[14%] lg:top-[18%] lg:block hidden xl:right-[44%] right-[48%]">
        <Arrow />
      </div>
      <div className="w-full px-3 md:w-1/2">
        <H5
          className="text-center uppercase md:text-start xl:mb-1"
          title="A RESULTS-DRIVEN AGENCY"
        />
        <H2
          className="md:mt-3 xl:mb-[2px] mt-1 md:text-start text-center"
          heading="How we work"
        />
        <div className="flex items-center max-lg:flex-col xl:items-end">
          <img
            className={`w-full lg:max-w-[378px] lg:max-h-[294px] h-full lg:mt-6 mt-3 ${imgClassName}`}
            src={cardImage}
            alt="cardimage"
          />
        </div>
      </div>
      <div className="flex items-end justify-end w-full px-3 pt-3 md:w-1/2 md:mb-3 md:pt-0">
        <div className="lg:mb-11">
          <Description
            className="lg:max-w-[481px] max-md:text-center md:text-xl sm:text-lg text-base !text-opacity-70 !leading-150"
            description={
              <>
                We see our customers as partners and identify passionately with
                their companies. Regardless of what the goal is, whether to
                increase sales, increase brand awareness or attract new
                employees. We always look for the{" "}
                {
                  <span className="text-opacity-100 text-skyBlue">
                    right solution for your company
                  </span>
                }{" "}
                and advise you individually
              </>
            }
          />
          <div className="flex justify-center mb-0 md:justify-start">
            <CommonButton
              className="mt-3 lg:mt-10 md:mt-8 sm:mt-6"
              name="Contact"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDriven;
