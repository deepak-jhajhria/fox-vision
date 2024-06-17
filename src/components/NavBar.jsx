import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "./common/Button";
import { useState, useEffect } from "react";

const NavBar = () => {
  const navLink = [
    { title: "Home", src: "/home", label: "home" },
    { title: "Über uns", src: "/uber-uns", label: "uber-uns" },
    { title: "Angebot", src: "/angebot", label: "angebot" },
    { title: "Portfolio", src: "/portfolio", label: "portfolio" },
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(navLink[0].src);

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const sidebarHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <div className="bg-blue px-4 pt-5">
      <div>
        <nav className="z-10 flex-grow-0">
          <div className="max-w-[1240px] mx-auto xl:px-[50px] px-6 bg-white rounded-[150px] py-[11px] flex items-center justify-between">
            <Link to="/">
              <Logo className="md:w-[208px] md:h-[29px] sm:w-[180px] sm:h-[26px] w-[150px] h-[24px]" />
            </Link>
            <ul className="hidden lg:flex gap-6">
              {navLink.map((obj, index) => (
                <li key={index}>
                  <NavLink
                    to={obj.src}
                    aria-label={obj.title}
                    className={`text-blackPearl hover:text-blue font-poppins font-normal text-base !leading-150 transition-all ease-in-out duration-300 ${
                      activeLink === obj.src ? "text-red-500" : ""
                    }`}
                  >
                    {obj.title}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex justify-center items-center gap-4">
              <div className="flex justify-center items-center lg:gap-4 gap-2">
                <Call />
                <Mail />
              </div>
              <Button content={"Kontakt"} />
            </div>
            <button
              className="block lg:hidden text-white text-3xl"
              onClick={sidebarHandler}
            >
              <Menu />
            </button>
          </div>
          {/* Sidebar */}
          {isSidebarOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black opacity-50 z-50"
              onClick={sidebarHandler}
            ></div>
          )}
          <div
            className={`lg:hidden fixed inset-y-0 left-0 w-full bg-white z-50 transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition duration-300 ease-in-out`}
          >
            <div className="p-4 min-h-screen flex flex-col justify-center items-center">
              <button
                className="text-white text-sm absolute top-6 right-5"
                onClick={sidebarHandler}
              >
                <Cross />
              </button>
              <ul className="flex flex-col items-center space-y-4 my-5">
                {navLink.map((obj, index) => (
                  <li key={index}>
                    <NavLink
                      aria-label={obj.title}
                      className={`text-light-white hover:text-green font-Inter font-normal sm:text-sm text-xsm transition-all ease-in-out duration-300 ${
                        activeLink === obj.src ? "font-bold" : ""
                      }`}
                      to={obj.src}
                      onClick={() => {
                        setActiveLink(obj.src);
                        sidebarHandler();
                      }}
                    >
                      {obj.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
                <div className="flex justify-center items-center lg:gap-4 gap-2">
                  <Call />
                  <Mail />
                </div>
                <Button content={"Kontakt"} />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

export const Logo = (props) => {
  return (
    <svg
      className={`${props.className}`}
      width="208"
      height="29"
      viewBox="0 0 208 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.7477 14.8189L14.3015 10.7602L11.5651 8.71754L0.109375 0.16748V18.8703L1.70964 20.1515L11.6618 28.0827L23.0232 18.8606V17.2604L19.7477 14.8189ZM3.38243 6.69425L8.82865 10.7602L7.25014 11.9326L5.26552 13.4144L3.38243 14.8189V6.69425ZM11.6448 23.8814L4.42429 18.1258L5.98588 16.963L9.99138 13.9752L11.5651 12.8028L18.7227 18.1354L11.6448 23.8814ZM13.1412 7.54031L15.8776 9.59503L19.7477 6.69425V12.4692L23.0232 14.9131V0.16748L13.1412 7.54031Z"
        fill="url(#paint0_linear_1_391)"
      />
      <path
        d="M47.02 5.57031V8.29222H33.8166V13.5088H45.8766V16.2307H33.8166V23.1757H30.8916V5.57031H47.02Z"
        fill="black"
      />
      <path
        d="M49.2854 14.3716V14.3475C49.266 13.0811 49.4815 11.8222 49.9211 10.6345C50.321 9.56501 50.9506 8.59628 51.7656 7.79654C52.6025 6.98414 53.604 6.36093 54.7026 5.96904C55.9608 5.52678 57.2876 5.31152 58.6211 5.33329H62.4622C63.7996 5.31259 65.1301 5.5278 66.3928 5.96904C67.4954 6.35677 68.5019 6.97667 69.3443 7.78687C70.1553 8.59165 70.7814 9.56335 71.1791 10.6345C71.6175 11.8225 71.8331 13.0812 71.8148 14.3475V14.3716C71.8317 15.6464 71.6162 16.9136 71.1791 18.1112C70.7862 19.1841 70.1595 20.156 69.3443 20.9564C68.4993 21.7604 67.4933 22.3759 66.3928 22.7622C65.1301 23.2034 63.7996 23.4186 62.4622 23.3979H58.6211C57.2876 23.4197 55.9608 23.2044 54.7026 22.7622C53.6069 22.3747 52.6059 21.7592 51.7656 20.9564C50.9448 20.1568 50.3144 19.1827 49.9211 18.1064C49.4834 16.9106 49.2679 15.6449 49.2854 14.3716ZM52.2103 14.3716C52.1979 15.2686 52.3444 16.1607 52.643 17.0065C52.9067 17.7553 53.3317 18.4369 53.888 19.0032C54.4599 19.5629 55.1459 19.9925 55.8992 20.2627C56.7722 20.5748 57.694 20.7279 58.6211 20.7147H62.4622C64.5153 20.7147 66.1011 20.1507 67.2195 19.0226C68.3379 17.8945 68.8979 16.3506 68.8995 14.391V14.3668C68.9116 13.4746 68.7651 12.5874 68.4668 11.7464C68.1995 11.0025 67.7739 10.3254 67.2195 9.76182C66.6443 9.20033 65.9539 8.7706 65.1962 8.50239C64.3181 8.19447 63.3926 8.0439 62.4622 8.05761H58.6211C57.6946 8.04323 56.7729 8.19384 55.8992 8.50239C55.1459 8.77258 54.4599 9.20217 53.888 9.76182C53.3335 10.3249 52.9086 11.0022 52.643 11.7464C52.3436 12.5871 52.197 13.4745 52.2103 14.3668V14.3716Z"
        fill="black"
      />
      <path
        d="M85.561 14.3209L93.3713 23.1756H89.7575L83.3467 15.8487L76.9626 23.1756H73.3535L81.1397 14.3209L73.4502 5.57024H77.0762L83.3733 12.7376L89.6583 5.56299H93.2698L85.561 14.3209Z"
        fill="black"
      />
      <path
        d="M102.86 5.57031H106.167L113.468 19.8325L120.744 5.57031H124.051L114.969 23.1757H111.942L102.86 5.57031Z"
        fill="black"
      />
      <path
        d="M127.053 23.1757V5.57031H130.004V23.1757H127.053Z"
        fill="black"
      />
      <path
        d="M149.362 10.3783C149.001 9.59624 148.399 8.94999 147.645 8.53389C146.891 8.11327 145.92 7.90296 144.732 7.90296H140.536C139.329 7.90296 138.405 8.1028 137.763 8.50246C137.466 8.66552 137.218 8.90689 137.048 9.20045C136.877 9.49402 136.79 9.8286 136.796 10.168C136.796 10.4367 136.852 10.7025 136.962 10.9479C137.071 11.1933 137.232 11.4127 137.432 11.5918C137.856 11.9995 138.619 12.2968 139.721 12.4838L146.819 13.3226C147.618 13.4379 148.395 13.6785 149.12 14.0357C149.686 14.316 150.189 14.7092 150.597 15.1912C150.957 15.6338 151.225 16.1443 151.385 16.6923C151.548 17.2588 151.63 17.8457 151.627 18.4352C151.647 19.1284 151.502 19.8164 151.203 20.4423C150.905 21.0683 150.462 21.6141 149.91 22.0346C148.765 22.9435 147.132 23.3972 145.013 23.3956H140.712C138.796 23.3956 137.215 23.0523 135.97 22.3658C134.764 21.7261 133.835 20.6653 133.361 19.3852L135.88 17.8333C136.286 18.9018 136.896 19.6729 137.71 20.1467C138.646 20.6522 139.7 20.8984 140.763 20.8598H145.064C146.285 20.8598 147.209 20.639 147.836 20.1975C148.133 20.0012 148.376 19.7324 148.54 19.4164C148.704 19.1004 148.785 18.7477 148.774 18.3917C148.788 18.0837 148.736 17.7762 148.619 17.4907C148.503 17.2052 148.325 16.9484 148.1 16.7383C147.65 16.3322 146.925 16.0356 145.924 15.8487L138.571 14.9325C137.825 14.8131 137.102 14.5859 136.422 14.2581C135.887 13.994 135.404 13.6363 134.995 13.2017C134.633 12.8115 134.36 12.3471 134.195 11.8408C134.032 11.3274 133.95 10.7914 133.954 10.2526C133.954 8.72485 134.526 7.52425 135.67 6.65079C136.814 5.77733 138.48 5.34141 140.669 5.34302H144.81C146.47 5.34302 147.856 5.63068 148.968 6.20601C150.016 6.71428 150.866 7.55594 151.385 8.59915L149.362 10.3783Z"
        fill="black"
      />
      <path
        d="M155.137 23.1757V5.57031H158.088V23.1757H155.137Z"
        fill="black"
      />
      <path
        d="M161.676 14.3715V14.3473C161.657 13.081 161.872 11.8221 162.312 10.6343C162.712 9.56488 163.341 8.59615 164.156 7.7964C164.993 6.98401 165.995 6.36079 167.093 5.96891C168.353 5.52966 169.68 5.31767 171.014 5.34282H174.855C176.191 5.3193 177.521 5.53123 178.783 5.96891C179.886 6.35609 180.893 6.97606 181.735 7.78673C182.551 8.59009 183.182 9.5619 183.584 10.6343C184.023 11.8224 184.238 13.0811 184.22 14.3473V14.3715C184.237 15.6463 184.021 16.9135 183.584 18.1111C183.187 19.1853 182.555 20.1573 181.735 20.9563C180.89 21.7608 179.884 22.3764 178.783 22.762C177.521 23.2033 176.19 23.4185 174.853 23.3978H171.014C169.681 23.4196 168.354 23.2043 167.096 22.762C165.999 22.3749 164.997 21.7594 164.156 20.9563C163.336 20.1581 162.706 19.1857 162.312 18.1111C161.873 16.9138 161.658 15.6464 161.676 14.3715ZM164.601 14.3715C164.59 15.2684 164.736 16.1602 165.034 17.0064C165.297 17.7557 165.723 18.4376 166.281 19.0031C166.852 19.5634 167.537 19.9931 168.29 20.2625C169.164 20.575 170.086 20.7281 171.014 20.7146H174.855C176.908 20.7146 178.494 20.1505 179.613 19.0224C180.731 17.8944 181.295 16.3505 181.305 14.3909V14.3667C181.317 13.4745 181.17 12.5872 180.872 11.7463C180.605 11.0023 180.179 10.3252 179.625 9.76169C179.05 9.19965 178.359 8.76984 177.601 8.50226C176.723 8.19434 175.798 8.04376 174.867 8.05747H171.014C170.088 8.0431 169.166 8.19371 168.292 8.50226C167.539 8.77172 166.854 9.20142 166.283 9.76169C165.727 10.324 165.302 11.0015 165.036 11.7463C164.738 12.5872 164.591 13.4745 164.603 14.3667L164.601 14.3715Z"
        fill="black"
      />
      <path
        d="M204.211 5.57031H207.112V23.1757H204.337L190.677 9.94566V23.1757H187.776V5.57031H190.549L204.211 18.8245V5.57031Z"
        fill="black"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_391"
          x1="0.423626"
          y1="20.6567"
          x2="20.9733"
          y2="0.107049"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6734FF" />
          <stop offset="0.39" stop-color="#4B17E6" />
          <stop offset="0.73" stop-color="#00F9E0" />
          <stop offset="1" stop-color="#05D5FB" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export const Menu = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33333 22H22.6667C23.4 22 24 21.25 24 20.3333C24 19.4167 23.4 18.6667 22.6667 18.6667H1.33333C0.6 18.6667 0 19.4167 0 20.3333C0 21.25 0.6 22 1.33333 22ZM1.33333 13.6667H22.6667C23.4 13.6667 24 12.9167 24 12C24 11.0833 23.4 10.3333 22.6667 10.3333H1.33333C0.6 10.3333 0 11.0833 0 12C0 12.9167 0.6 13.6667 1.33333 13.6667ZM0 3.66667C0 4.58333 0.6 5.33333 1.33333 5.33333H22.6667C23.4 5.33333 24 4.58333 24 3.66667C24 2.75 23.4 2 22.6667 2H1.33333C0.6 2 0 2.75 0 3.66667Z"
        fill="black"
      />
    </svg>
  );
};
export const Cross = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.57843 0.589049L12 9.01026L20.3779 0.632682C20.563 0.435716 20.7859 0.27815 21.0334 0.169433C21.2808 0.0607153 21.5476 0.00308562 21.8179 0C22.3965 0 22.9515 0.229853 23.3606 0.638994C23.7698 1.04813 23.9996 1.60305 23.9996 2.18166C24.0047 2.44914 23.9551 2.71483 23.8538 2.96244C23.7525 3.21004 23.6017 3.43434 23.4106 3.62156L14.9235 11.9991L23.4106 20.4858C23.7702 20.8376 23.981 21.3139 23.9996 21.8166C23.9996 22.3952 23.7698 22.9501 23.3606 23.3593C22.9515 23.7684 22.3965 23.9983 21.8179 23.9983C21.5398 24.0098 21.2624 23.9634 21.0033 23.862C20.7441 23.7606 20.5089 23.6064 20.3125 23.4092L12 14.988L3.60025 23.3874C3.4159 23.5778 3.19567 23.7298 2.95227 23.8347C2.70887 23.9395 2.44711 23.9951 2.18211 23.9983C1.60347 23.9983 1.04853 23.7684 0.639376 23.3593C0.230218 22.9501 0.000354986 22.3952 0.000354986 21.8166C-0.00473176 21.5491 0.0448964 21.2834 0.146194 21.0358C0.247492 20.7882 0.398322 20.5639 0.589428 20.3767L9.07645 11.9991L0.589428 3.51247C0.229843 3.1607 0.0189863 2.68434 0.000354986 2.18166C0.000354986 1.60305 0.230218 1.04813 0.639376 0.638994C1.04853 0.229853 1.60347 0 2.18211 0C2.70573 0.00654498 3.20753 0.218166 3.57843 0.589049Z"
        fill="black"
      />
    </svg>
  );
};
export const Call = () => {
  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.609375"
        y="1.125"
        width="35"
        height="35"
        rx="17.5"
        stroke="#071838"
      />
      <path
        d="M19.1548 11.7277C19.175 11.6519 19.2101 11.5808 19.2578 11.5185C19.3056 11.4562 19.3652 11.404 19.4331 11.3647C19.5011 11.3255 19.5761 11.3 19.654 11.2897C19.7318 11.2795 19.8109 11.2847 19.8867 11.305C20.9943 11.594 22.0049 12.1731 22.8144 12.9825C23.6239 13.792 24.2029 14.8026 24.4919 15.9102C24.5122 15.986 24.5174 16.0651 24.5072 16.1429C24.4969 16.2208 24.4714 16.2958 24.4322 16.3638C24.3929 16.4318 24.3407 16.4913 24.2784 16.5391C24.2161 16.5869 24.145 16.6219 24.0692 16.6422C24.0187 16.6554 23.9668 16.6622 23.9146 16.6623C23.783 16.6624 23.6551 16.619 23.5507 16.5389C23.4463 16.4588 23.3713 16.3465 23.3372 16.2194C23.1017 15.3151 22.6291 14.4899 21.9684 13.829C21.3076 13.1681 20.4825 12.6954 19.5782 12.4597C19.5023 12.4395 19.4312 12.4045 19.3688 12.3568C19.3064 12.309 19.2541 12.2495 19.2147 12.1815C19.1754 12.1135 19.1499 12.0385 19.1396 11.9606C19.1293 11.8827 19.1344 11.8036 19.1548 11.7277ZM18.9807 14.8497C20.0107 15.1245 20.6724 15.787 20.9472 16.8169C20.9813 16.944 21.0563 17.0563 21.1607 17.1364C21.2651 17.2165 21.393 17.2599 21.5246 17.2598C21.5768 17.2597 21.6287 17.2529 21.6792 17.2397C21.755 17.2194 21.8261 17.1844 21.8884 17.1366C21.9507 17.0888 22.0029 17.0292 22.0422 16.9613C22.0815 16.8933 22.1069 16.8183 22.1172 16.7404C22.1274 16.6626 22.1222 16.5835 22.1019 16.5077C21.7195 15.0767 20.7202 14.0774 19.2892 13.695C19.2134 13.6747 19.1343 13.6696 19.0565 13.6799C18.9787 13.6902 18.9037 13.7158 18.8358 13.755C18.7679 13.7943 18.7083 13.8466 18.6606 13.9089C18.6129 13.9712 18.5779 14.0423 18.5576 14.1181C18.5374 14.1939 18.5323 14.273 18.5426 14.3508C18.5529 14.4286 18.5784 14.5036 18.6177 14.5715C18.657 14.6394 18.7092 14.699 18.7715 14.7467C18.8338 14.7944 18.9049 14.8294 18.9807 14.8497ZM24.3903 20.7298L20.8718 19.1531L20.8621 19.1487C20.6794 19.0705 20.4802 19.0392 20.2824 19.0574C20.0845 19.0757 19.8944 19.143 19.7291 19.2532C19.7096 19.2661 19.6909 19.28 19.6731 19.295L17.8552 20.8448C16.7035 20.2854 15.5145 19.1053 14.9551 17.9686L16.5071 16.1231C16.522 16.1044 16.5362 16.0857 16.5497 16.0656C16.6575 15.9007 16.723 15.7118 16.7402 15.5156C16.7574 15.3193 16.7258 15.1219 16.6483 14.9408V14.9318L15.0671 11.4073C14.9646 11.1708 14.7883 10.9737 14.5646 10.8456C14.3409 10.7174 14.0817 10.6651 13.8258 10.6963C12.8138 10.8295 11.8848 11.3265 11.2125 12.0945C10.5401 12.8626 10.1703 13.8491 10.1721 14.8698C10.1721 20.8 14.9969 25.6248 20.9271 25.6248C21.9478 25.6266 22.9344 25.2568 23.7024 24.5844C24.4704 23.9121 24.9674 22.9831 25.1006 21.9711C25.1319 21.7153 25.0797 21.4562 24.9517 21.2325C24.8237 21.0088 24.6267 20.8324 24.3903 20.7298Z"
        fill="#071838"
      />
    </svg>
  );
};
export const Mail = () => {
  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.609375"
        y="1.125"
        width="35"
        height="35"
        rx="17.5"
        stroke="#071838"
      />
      <path
        d="M27.1094 14.6064V23.1249C27.1094 23.8136 26.8463 24.4763 26.3738 24.9774C25.9014 25.4784 25.2553 25.78 24.5678 25.8204L24.4094 25.8249H11.8094C11.1207 25.825 10.458 25.5619 9.95694 25.0894C9.45587 24.6169 9.15428 23.9708 9.11388 23.2833L9.10938 23.1249V14.6064L17.6099 20.2737L17.7143 20.3331C17.8373 20.3933 17.9724 20.4245 18.1094 20.4245C18.2463 20.4245 18.3814 20.3933 18.5045 20.3331L18.6089 20.2737L27.1094 14.6064Z"
        fill="#071838"
      />
      <path
        d="M24.41 11.4248C25.382 11.4248 26.2343 11.9378 26.7095 12.7091L18.11 18.4421L9.5105 12.7091C9.73616 12.3426 10.0462 12.0354 10.4147 11.813C10.7833 11.5907 11.1996 11.4598 11.6291 11.4311L11.81 11.4248H24.41Z"
        fill="#071838"
      />
    </svg>
  );
};
