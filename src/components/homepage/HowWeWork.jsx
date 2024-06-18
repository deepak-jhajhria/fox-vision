import { WorkCard } from './WorkCard';
import ResultsDriven from './ResultsDriven';
const AppIcon = () => {
  return (
    <svg className='max-md:w-[40px] max-md:h-[40px]'
      width="55"
      height="56"
      viewBox="0 0 55 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.0102 9.87522C17.1182 10.7979 17.0875 12.6126 17.9487 13.4738C18.287 13.8122 18.6869 14.089 18.8714 14.089C19.0252 14.089 19.179 14.8887 19.2405 15.8422L19.3328 17.6261H23.1774H27.0221V16.8572C27.0221 16.0882 26.9914 16.0882 24.0387 15.996L21.0244 15.9037V15.104C21.0244 14.6426 21.332 13.966 21.7011 13.5661C22.6853 12.5204 22.6546 10.5519 21.6703 9.75219C20.6553 8.92173 18.8406 8.98325 18.0102 9.87522ZM20.5015 11.4438C20.7476 12.059 19.8864 12.7664 19.425 12.3051C18.9944 11.8745 19.3328 11.0132 19.9171 11.0132C20.1325 11.0132 20.4093 11.1978 20.5015 11.4438Z"
        fill="#4B17E6"
      />
      <path
        d="M12.0126 13.5356C10.7515 14.5198 10.813 17.0727 12.1356 17.8109C12.6277 18.0569 12.72 18.4568 12.72 20.0254C12.72 21.1327 12.8738 22.1169 13.0891 22.3322C13.3659 22.609 15.6112 22.7013 21.3629 22.7013C27.9757 22.7013 29.329 22.6398 29.6366 22.2399C29.8519 21.9939 29.9442 21.5633 29.8212 21.3172C29.6674 20.9174 28.5601 20.8558 22.101 20.8558H14.5655V19.5948C14.5655 18.6106 14.75 18.1492 15.3344 17.5956C16.3186 16.6728 16.4109 14.7044 15.4882 13.7816C14.7808 13.0742 12.8123 12.9512 12.0126 13.5356ZM14.1964 15.7193C14.2579 16.0884 14.1041 16.2422 13.6735 16.2422C13.2121 16.2422 13.0276 16.0577 13.0276 15.5963C13.0276 14.8274 14.0426 14.9197 14.1964 15.7193Z"
        fill="#4B17E6"
      />
      <path
        d="M29.39 16.7651L29.4823 17.6263L38.4019 17.7186C45.0455 17.7801 47.3524 17.8724 47.5369 18.1799C47.6599 18.3645 47.783 22.1169 47.783 26.4537V34.3891L33.573 34.4506L19.3323 34.5429L19.24 36.4191C19.1478 38.203 19.2093 38.3568 20.1012 39.1258C21.0547 39.9255 21.1162 39.9255 26.3142 39.9255H31.543L31.3585 40.6021C31.2662 41.002 31.1739 41.5556 31.1739 41.8324C31.1739 42.2938 30.8663 42.3861 29.4207 42.3861C28.4365 42.3861 27.483 42.5091 27.3292 42.6321C26.345 43.3395 24.4073 45.9539 24.4073 46.5998V47.3073L34.3419 47.2457C43.969 47.1535 44.2458 47.1227 44.3381 46.5383C44.3689 46.1692 43.8152 45.2465 42.831 44.1392L41.2624 42.3861H39.4784C37.9098 42.3861 37.6945 42.3245 37.51 41.6786C37.0178 39.8639 36.8641 39.9255 42.5849 39.9255H47.8445L48.7364 39.0335L49.6284 38.1415V28.0838C49.6284 17.8416 49.5669 17.1957 48.4289 16.3345C48.0598 16.0577 45.4454 15.9654 38.6172 15.9346H29.2977L29.39 16.7651Z"
        fill="#4B17E6"
      />
      <path
        d="M37.572 19.7793C37.1721 20.6713 36.4032 20.9789 35.2344 20.7021C33.9733 20.4252 33.1736 21.3787 33.4505 22.8243C33.6042 23.6855 33.512 24.0546 33.0198 24.5467C32.6815 24.8851 32.2817 25.1619 32.0971 25.1619C31.9433 25.1619 31.7896 25.5925 31.7896 26.1154C31.7896 26.792 32.0664 27.3457 32.7123 27.9301C33.5427 28.699 33.635 28.9451 33.4505 29.9908C33.2044 31.5287 33.7888 32.0823 35.3267 31.8055C36.2801 31.621 36.557 31.7132 37.2951 32.5129C38.3716 33.6817 39.9403 33.8355 40.2479 32.8205C40.4939 32.0516 41.5397 31.621 42.6469 31.8363C43.785 32.0516 44.7692 31.1904 44.5231 30.2061C44.2463 29.0681 44.6154 28.0839 45.4766 27.684C46.6147 27.1611 46.5224 25.8386 45.2921 24.762C44.4616 24.0239 44.3386 23.7778 44.4924 22.8243C44.7384 21.3172 43.9388 20.5175 42.4316 20.7636C41.4782 20.9174 41.2321 20.7943 40.4939 19.9639C39.4174 18.7336 38.0948 18.6413 37.572 19.7793ZM40.5862 24.8851C41.5397 25.9308 41.1398 27.5302 39.6942 28.2684C38.833 28.7298 37.4489 28.0839 37.0183 26.9766C36.7107 26.2384 36.7107 25.9616 37.1414 25.3157C38.0641 23.9316 39.5404 23.7471 40.5862 24.8851Z"
        fill="#4B17E6"
      />
      <path
        d="M6.72246 23.9928C5.76898 24.5465 5.36914 25.2231 5.33838 26.3304C5.33838 28.6065 8.19882 29.7137 9.82897 28.0836L10.5979 27.3146L18.9639 27.2531L27.33 27.1609L27.4222 26.2997L27.5145 25.4692H19.0562H10.6287L9.70594 24.5465C8.7217 23.593 7.76822 23.4084 6.72246 23.9928ZM8.59867 26.6687C8.32185 27.0993 7.58367 27.0993 7.33761 26.6995C7.21458 26.515 7.30686 26.1459 7.52216 25.8998C7.86049 25.5 7.95276 25.5 8.35261 25.8998C8.59867 26.1459 8.69094 26.4842 8.59867 26.6687Z"
        fill="#4B17E6"
      />
      <path
        d="M13.5515 30.2983C13.4284 30.3906 13.3362 31.098 13.3362 31.8362C13.3362 32.5436 13.2131 33.1588 13.0286 33.1588C12.3827 33.1588 11.4907 34.5429 11.4907 35.5271C11.4907 38.2338 15.0893 39.0642 16.3504 36.6344C16.904 35.6194 16.781 34.8197 15.9506 33.8354C14.3819 31.9592 14.4127 31.9592 22.5019 31.867L29.7914 31.7747V31.0058V30.2368L21.7637 30.1446C17.3654 30.1138 13.6745 30.1753 13.5515 30.2983ZM14.751 35.8962C14.4434 36.3883 13.6437 36.296 13.4284 35.7424C13.1824 35.0657 13.9821 34.6044 14.5357 35.1273C14.751 35.3733 14.8433 35.7117 14.751 35.8962Z"
        fill="#4B17E6"
      />
    </svg>
  );
}
const SoftwareIcon = () => {
  return (
    <svg
      className="max-md:w-[37px] max-md:h-[36px]"
      width="47"
      height="46"
      viewBox="0 0 47 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.56097 3.09201C4.37823 3.17506 4.11244 3.37441 3.96293 3.52392C3.39812 4.12196 3.43965 2.84282 3.43965 19.5463C3.43965 36.2499 3.39812 34.9707 3.96293 35.5688C4.11244 35.7183 4.37823 35.9176 4.56097 36.0007C4.8766 36.1502 5.25037 36.1585 11.9783 36.1585C15.8655 36.1585 19.0551 36.1834 19.0551 36.2166C19.0634 36.2582 18.7145 37.4542 18.2909 38.8746L17.5184 41.4744H16.4636H15.4004V42.1389V42.8033H23.3742H31.3481V42.1389V41.4744H30.2932H29.23L28.4575 38.8746C28.0339 37.4542 27.6851 36.2582 27.6934 36.2166C27.6934 36.1834 30.8829 36.1585 34.7785 36.1585C41.4981 36.1585 41.8718 36.1502 42.1875 36.0007C42.3702 35.9176 42.636 35.7183 42.7855 35.5688C43.3503 34.9707 43.3088 36.2499 43.3088 19.5297C43.3088 4.95256 43.3005 4.37114 43.151 4.05551C42.9599 3.64851 42.5363 3.23321 42.1293 3.06709C41.8552 2.9508 39.8535 2.93419 23.3576 2.93419C5.54939 2.93419 4.8849 2.9425 4.56097 3.09201ZM41.4815 4.35453C42.0131 4.54557 41.9798 3.71496 41.9798 17.9267V30.8426H23.3742H4.76862V17.935C4.76862 8.53248 4.79354 4.96087 4.85999 4.76152C4.92643 4.5871 5.05103 4.4542 5.21715 4.37945C5.43311 4.28808 8.48974 4.27147 23.341 4.26316C36.4646 4.26316 41.2821 4.28808 41.4815 4.35453ZM41.9798 33.1268C41.9798 34.273 41.8802 34.5969 41.4815 34.7381C41.0911 34.871 5.65737 34.871 5.26698 34.7381C4.86829 34.5969 4.76862 34.273 4.76862 33.1268V32.1716H23.3742H41.9798V33.1268ZM26.9292 38.7583C27.3528 40.1786 27.7017 41.3747 27.6934 41.4079C27.6934 41.4495 25.7498 41.4744 23.3742 41.4744C20.9987 41.4744 19.0551 41.4495 19.0551 41.4079C19.0468 41.3747 19.3956 40.1786 19.8192 38.7583L20.5917 36.1585H23.3742H26.1568L26.9292 38.7583Z"
        fill="#05D5FB"
      />
      <path
        d="M16.039 6.02369C15.931 6.26457 15.6653 6.89583 15.441 7.42742L15.034 8.38262L14.3612 8.65672L13.6967 8.92251L12.3511 8.37431C11.6036 8.07529 10.9557 7.83442 10.8976 7.83442C10.773 7.83442 8.33929 10.2432 8.33929 10.3678C8.33929 10.4176 8.58017 11.0655 8.87919 11.813L9.42739 13.1669L9.16159 13.848L8.88749 14.5374L7.51699 15.1188L6.13818 15.7086V17.5525V19.3965L7.50869 19.9862L8.88749 20.5676L9.16159 21.2487L9.4357 21.9215L8.88749 23.2837C8.58848 24.0396 8.33929 24.6874 8.33929 24.7373C8.33929 24.8619 10.773 27.2706 10.8976 27.2706C10.9474 27.2706 11.6119 27.0298 12.3594 26.7307L13.7133 26.1825L14.4443 26.4816C14.8429 26.6477 15.1752 26.7723 15.1835 26.7557C15.2333 26.6809 15.7151 25.4848 15.6985 25.4682C15.6902 25.4516 15.2333 25.2689 14.6934 25.0446L13.705 24.6376L12.5006 25.1194C11.8362 25.3935 11.2547 25.6094 11.2049 25.6094C11.0969 25.6094 10.0005 24.513 10.0005 24.3967C10.0005 24.3552 10.2165 23.7738 10.4906 23.1093L10.9723 21.9049L10.474 20.6922L9.97559 19.4795L8.72137 18.9479L7.46716 18.408V17.5525V16.697L8.72137 16.1571L9.97559 15.6255L10.474 14.4128L10.9723 13.2001L10.4906 11.9958C10.2165 11.3313 10.0005 10.7498 10.0005 10.7C10.0005 10.592 11.0969 9.49563 11.2132 9.49563C11.2547 9.49563 11.8362 9.71159 12.5006 9.98569L13.705 10.4674L14.9177 9.96908L16.1304 9.47071L16.662 8.2165L17.2019 6.96228H18.0574H18.9129L19.4528 8.2165L19.9927 9.47902L21.1971 9.96908L22.4098 10.4674L23.6142 9.98569C24.2787 9.71159 24.8601 9.49563 24.9016 9.49563C24.9514 9.49563 25.2837 9.78634 25.6325 10.1352L26.2804 10.7748L26.7372 10.3262C26.9864 10.0771 27.1941 9.83618 27.1941 9.78634C27.1941 9.67837 25.3501 7.83442 25.2422 7.83442C25.1923 7.83442 24.5444 8.07529 23.7969 8.37431L22.443 8.92251L21.7619 8.65672L21.0891 8.39092L20.4994 7.01212L19.9097 5.63331L18.074 5.60839L16.2301 5.59178L16.039 6.02369Z"
        fill="#05D5FB"
      />
      <path
        d="M14.6439 11.8049C13.1405 12.6853 12.0192 14.1971 11.579 15.9247C11.4627 16.3982 11.4128 16.855 11.4128 17.5527C11.4128 19.5877 12.2185 21.3652 13.7219 22.6443C14.1455 23.0015 14.9678 23.5331 15.1007 23.5331C15.1423 23.5331 15.732 22.4284 15.732 22.337C15.732 22.3204 15.4911 22.146 15.2004 21.9549C14.2203 21.3237 13.4229 20.2854 13.0658 19.1973C12.775 18.3169 12.775 16.7885 13.0658 15.9081C13.4229 14.82 14.2203 13.7818 15.2004 13.1505C15.4911 12.9594 15.732 12.785 15.732 12.7684C15.732 12.6687 15.1423 11.5723 15.0841 11.5723C15.0509 11.5723 14.8516 11.6803 14.6439 11.8049Z"
        fill="#05D5FB"
      />
      <path
        d="M17.8505 11.7301C17.6678 11.8132 17.402 12.0125 17.2525 12.162C16.7043 12.7435 16.7292 12.2866 16.7292 20.5595C16.7292 27.6861 16.7375 28.0765 16.887 28.3921C16.9701 28.5748 17.1694 28.8406 17.3189 28.9901C17.9086 29.5466 17.1362 29.5134 28.6899 29.5134C40.2437 29.5134 39.4712 29.5466 40.0609 28.9901C40.2104 28.8406 40.4098 28.5748 40.4929 28.3921C40.6424 28.0765 40.6507 27.7193 40.6507 21.8884C40.6507 15.0858 40.6756 15.3931 40.1274 14.8283C39.5709 14.2469 39.8699 14.2801 34.5291 14.2302L29.695 14.1887L28.5487 13.0591C27.9175 12.4361 27.2447 11.8464 27.0536 11.7467C26.7131 11.5723 26.6217 11.5723 22.4438 11.5723C18.4735 11.5723 18.1578 11.5889 17.8505 11.7301ZM27.5022 14.0724C28.1334 14.6954 28.8062 15.2851 28.9972 15.3848C29.3378 15.5592 29.4292 15.5592 33.9477 15.5592C37.1704 15.5592 38.6323 15.5841 38.8233 15.6506C39.33 15.8333 39.3217 15.717 39.3217 21.8718C39.3217 28.0266 39.33 27.9103 38.8233 28.0931C38.4329 28.226 18.9469 28.226 18.5565 28.0931C18.0415 27.9103 18.0581 28.1512 18.0581 20.5595C18.0581 15.6423 18.0831 13.599 18.1495 13.3996C18.3239 12.9013 18.3572 12.9013 22.56 12.9262L26.3559 12.9428L27.5022 14.0724Z"
        fill="#05D5FB"
      />
      <path
        d="M22.2527 19.6293L20.3423 21.5397L22.2776 23.4667L24.2046 25.402L24.7196 24.8787L25.2429 24.3637L23.8308 22.9517L22.4188 21.5397L23.8308 20.1276L25.2429 18.7156L24.7445 18.2172C24.4704 17.9431 24.2295 17.7189 24.2046 17.7189C24.1797 17.7189 23.2992 18.5827 22.2527 19.6293Z"
        fill="#05D5FB"
      />
      <path
        d="M32.6348 18.2172L32.1365 18.7156L33.5485 20.1276L34.9605 21.5397L33.5485 22.9517L32.1365 24.3637L32.6598 24.8787L33.1747 25.402L35.1017 23.4667L37.0371 21.5397L35.1267 19.6293C34.0801 18.5827 33.1997 17.7189 33.1747 17.7189C33.1498 17.7189 32.9089 17.9431 32.6348 18.2172Z"
        fill="#05D5FB"
      />
      <path
        d="M28.4407 21.4649C27.552 23.068 26.8127 24.4219 26.7961 24.4883C26.7712 24.5963 27.7264 25.1943 27.9258 25.1943C27.9756 25.1943 28.7564 23.8488 29.67 22.2041C31.3063 19.2555 31.3312 19.2057 31.1568 19.0977C30.7 18.8236 30.1933 18.5495 30.1269 18.5495C30.0936 18.5495 29.3295 19.8618 28.4407 21.4649Z"
        fill="#05D5FB"
      />
    </svg>
  );
}
const TeachIcon = () => {
  return (
    <svg
      className="max-md:w-[40px] max-md:h-[32px]"
      width="51"
      height="43"
      viewBox="0 0 51 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.8187 3.19768C8.37655 3.94201 4.27052 8.60934 4.25832 14.0576C4.25222 17.1508 5.63716 20.238 7.94947 22.2758C10.5973 24.6125 14.136 25.552 17.5282 24.8199C17.8271 24.7589 18.0956 24.704 18.12 24.704C18.1444 24.704 18.1688 26.5099 18.1688 28.7185C18.1688 33.1296 18.1688 33.093 18.5409 33.8007C18.7728 34.2278 19.3097 34.7586 19.7429 34.9782C20.4079 35.3138 20.4628 35.3199 24.2271 35.3199H27.6987L27.6743 35.9422C27.656 36.4669 27.6254 36.6316 27.4851 36.9366C27.2594 37.4186 26.8506 37.8335 26.3808 38.0409C26.0636 38.1874 25.8988 38.2179 25.246 38.2484C24.7579 38.2728 24.4346 38.3155 24.3553 38.3704C23.9709 38.6144 23.9282 39.1574 24.2638 39.493L24.4529 39.6821H32.0792H39.7056L39.9008 39.4808C40.0716 39.31 40.1022 39.2429 40.1022 38.9805C40.1022 38.7182 40.0716 38.651 39.9069 38.4802C39.7056 38.2789 39.7056 38.2789 38.9307 38.2484C38.2535 38.2179 38.101 38.1874 37.7837 38.0409C37.3079 37.8274 36.893 37.4125 36.6795 36.9427C36.5391 36.6316 36.5025 36.4669 36.4842 35.9422L36.4598 35.3199H39.9313C42.811 35.3199 43.4638 35.3016 43.7506 35.2283C44.8061 34.9538 45.6236 34.1424 45.8982 33.093C46.0324 32.5561 46.0385 20.5186 45.8982 19.9879C45.6236 18.9324 44.8122 18.1148 43.7628 17.8403C43.4455 17.761 42.2985 17.7488 34.5014 17.7488C26.0453 17.7488 25.5999 17.7427 25.6426 17.6389C25.7707 17.3034 26.0514 16.0588 26.1307 15.4547C26.5334 12.3737 25.5389 9.18894 23.4279 6.79732C22.0064 5.18663 19.9991 3.96642 17.9186 3.44783C16.6008 3.11837 15.0938 3.02685 13.8187 3.19768ZM12.7327 5.05241C11.6833 6.33974 11.2624 6.96815 10.7194 8.09075L10.3533 8.83508L10.1581 8.76797C9.82861 8.65815 8.76092 8.13956 8.43756 7.93822L8.13251 7.74299L8.61449 7.2854C9.63947 6.30313 10.9024 5.52829 12.1958 5.09512C12.5436 4.97309 12.8425 4.87548 12.8547 4.87548C12.8669 4.87548 12.812 4.95479 12.7327 5.05241ZM18.4128 5.13173C19.6147 5.5527 20.8838 6.33974 21.866 7.2854L22.348 7.74909L22.104 7.90161C21.5915 8.21887 20.1394 8.89609 20.0906 8.82898C20.0845 8.81678 19.9137 8.46291 19.7062 8.03584C19.2731 7.15118 18.602 6.1201 17.9796 5.38187C17.4916 4.80227 17.4733 4.80837 18.4128 5.13173ZM14.5081 7.51115V9.65262L13.9102 9.61602C13.2269 9.56721 11.9457 9.34757 11.8542 9.26215C11.7382 9.14623 12.6351 7.53555 13.3184 6.64479C13.5747 6.30923 14.4349 5.36357 14.4837 5.36357C14.4959 5.36357 14.5081 6.32754 14.5081 7.51115ZM16.9242 6.43126C17.1438 6.6997 17.4733 7.15118 17.6624 7.43183C18.0712 8.04804 18.6752 9.21945 18.6081 9.28046C18.5348 9.35367 17.1987 9.57331 16.5703 9.61602L15.9724 9.65262V7.52335V5.40017L16.253 5.66862C16.4056 5.82115 16.7106 6.16281 16.9242 6.43126ZM7.83355 9.27436C8.39485 9.59771 9.43814 10.0858 9.71268 10.159C9.90182 10.2017 9.90182 10.1773 9.75539 10.8057C9.62727 11.3426 9.45644 12.5079 9.43203 13.0204L9.41373 13.3255L7.60171 13.3438L5.78359 13.356V13.1851C5.78359 12.8008 5.99103 11.8185 6.21067 11.1474C6.47911 10.342 7.13803 8.9632 7.25395 8.9632C7.27225 8.9632 7.5346 9.10353 7.83355 9.27436ZM23.6781 9.75024C24.2332 10.8362 24.6969 12.4103 24.6969 13.179V13.356H22.8666H21.0363V13.0509C21.0363 12.6483 20.8716 11.4951 20.7251 10.8667C20.6641 10.5922 20.6092 10.3237 20.6092 10.281C20.6092 10.2383 20.7129 10.1712 20.841 10.1346C21.1034 10.0553 22.6836 9.28046 22.9581 9.09743C23.0618 9.03031 23.1717 8.9693 23.2144 8.9693C23.251 8.9632 23.4584 9.31706 23.6781 9.75024ZM11.7443 10.7691C12.3117 10.8972 13.6845 11.0986 14.0322 11.0986C14.5325 11.0986 14.5081 11.0376 14.5081 12.2639V13.356H12.7083H10.9085V13.0631C10.9146 12.5567 11.2258 10.6715 11.3051 10.6715C11.3173 10.6715 11.5125 10.7142 11.7443 10.7691ZM19.2731 11.123C19.4012 11.6294 19.572 12.7642 19.572 13.1058V13.356H17.7722H15.9724V12.2639C15.9724 11.0376 15.948 11.0986 16.4483 11.0986C16.7899 11.0986 18.242 10.885 18.7179 10.7691C18.9009 10.7203 19.0778 10.6898 19.1144 10.6959C19.1449 10.702 19.2182 10.8972 19.2731 11.123ZM9.42593 15.0948C9.46254 15.6683 9.58456 16.5468 9.72489 17.1997C9.8042 17.584 9.87131 17.9196 9.87131 17.9379C9.87131 17.9623 9.7981 17.9989 9.71268 18.0172C9.43814 18.0904 8.39485 18.5785 7.83355 18.9019C7.5346 19.0727 7.27225 19.213 7.24785 19.213C7.15023 19.213 6.3998 17.6206 6.19236 16.9861C5.98493 16.3394 5.78359 15.351 5.78359 14.9911V14.8202L7.60171 14.8324L9.41373 14.8507L9.42593 15.0948ZM14.5081 15.9184C14.5081 17.1875 14.6057 17.0471 13.6845 17.1081C13.2147 17.1386 11.8115 17.3705 11.421 17.4803C11.3112 17.5108 11.2868 17.4681 11.1952 17.0654C11.0549 16.4675 10.9085 15.467 10.9085 15.107V14.8202H12.7083H14.5081V15.9184ZM19.5537 15.3571C19.511 15.894 19.3097 17.0837 19.206 17.3461L19.1572 17.4864L18.4616 17.3461C17.8393 17.2241 16.9059 17.102 16.2469 17.0593L16.0029 17.0471L15.9846 15.9306L15.9724 14.8202H17.7783H19.5903L19.5537 15.3571ZM24.6664 15.2595C24.6176 15.7537 24.3492 16.8702 24.1478 17.3949L24.0197 17.7427L22.3297 17.761C21.4023 17.7732 20.6336 17.7793 20.6275 17.7732C20.6153 17.7732 20.6397 17.6755 20.6702 17.5596C20.7922 17.1447 20.9753 15.9977 21.018 15.4181L21.0546 14.8202H22.8849H24.7152L24.6664 15.2595ZM14.4959 21.7633L14.4776 22.8432L13.9102 22.2025C13.593 21.8487 13.1293 21.2447 12.8669 20.8603C12.3422 20.0794 11.781 18.9873 11.8603 18.908C11.9396 18.8286 13.2391 18.609 13.9041 18.5541L14.4776 18.5114L14.4959 19.5974C14.502 20.1953 14.502 21.1715 14.4959 21.7633ZM17.8637 18.7249C18.2481 18.7981 18.5898 18.8775 18.6142 18.9019C18.6447 18.9324 18.5287 19.2252 18.364 19.5547C17.8271 20.6224 17.0096 21.7633 16.2835 22.4771L15.9724 22.776V20.6529V18.5236L16.5703 18.5602C16.8937 18.5846 17.4794 18.6578 17.8637 18.7249ZM43.5127 19.2862C43.8482 19.3838 44.3546 19.8902 44.4522 20.2258C44.5071 20.4149 44.5254 21.7023 44.5254 25.3385V30.195H32.0792H19.633V25.3385C19.633 21.7023 19.6513 20.4149 19.7062 20.2258C19.7978 19.9146 20.3103 19.3899 20.6092 19.2923C20.9326 19.1886 43.171 19.1886 43.5127 19.2862ZM10.7194 20.0794C11.2563 21.202 11.6772 21.8304 12.7327 23.1238L12.873 23.3007L12.5497 23.2031C11.2807 22.8249 10.1093 22.1842 9.03546 21.2752C8.44366 20.7749 8.13251 20.4393 8.20572 20.3722C8.35825 20.2258 10.1642 19.3533 10.3411 19.335C10.3472 19.335 10.518 19.6706 10.7194 20.0794ZM18.1688 22.8981C18.1688 23.1604 18.1688 23.1665 17.9003 23.2336C17.7478 23.2702 17.6075 23.3007 17.5892 23.3007C17.5648 23.3007 17.6807 23.1482 17.8332 22.9652C17.9918 22.7821 18.1322 22.6296 18.1444 22.6296C18.1566 22.6296 18.1688 22.7516 18.1688 22.8981ZM44.5254 32.1229C44.5254 32.3791 44.4949 32.7025 44.4522 32.8428C44.3546 33.1784 43.8482 33.6848 43.5127 33.7824C43.1466 33.8922 21.0119 33.8922 20.6458 33.7824C20.3103 33.6848 19.8039 33.1784 19.7062 32.8428C19.6635 32.7025 19.633 32.3791 19.633 32.1229V31.6592H32.0792H44.5254V32.1229ZM35.0078 35.8873C35.0078 36.6133 35.1786 37.2905 35.4897 37.8335L35.7277 38.2484H32.067H28.4064L28.5406 38.047C28.9433 37.4491 29.1507 36.7109 29.1507 35.8812V35.3199H32.0792H35.0078V35.8873Z"
        fill="#4B17E6"
      />
      <path
        d="M30.8464 23.8378L27.686 26.9921V27.2544C27.686 27.4619 27.7226 27.5534 27.8935 27.7425C28.0826 27.9439 28.1314 27.9683 28.4121 27.9683H28.7232L31.847 24.8384L34.9768 21.7147V21.4035C34.9768 21.1229 34.9524 21.074 34.7511 20.8849C34.5619 20.7141 34.4704 20.6775 34.263 20.6775H34.0007L30.8464 23.8378Z"
        fill="#4B17E6"
      />
      <path
        d="M35.2398 23.8379C34.3003 24.7775 34.2759 24.808 34.2759 25.0581C34.2759 25.2656 34.3186 25.3571 34.4833 25.5462C34.6724 25.7476 34.7213 25.772 35.0019 25.772H35.3131L36.2404 24.8385L37.1739 23.9111V23.6C37.1739 23.3193 37.1495 23.2705 36.9482 23.0814C36.759 22.9167 36.6675 22.874 36.4601 22.874C36.2099 22.874 36.1794 22.8984 35.2398 23.8379Z"
        fill="#4B17E6"
      />
      <path
        d="M32.3111 26.7662C31.3716 27.7057 31.3472 27.7362 31.3472 27.9864C31.3472 28.1938 31.3899 28.2853 31.5546 28.4745C31.7437 28.6758 31.7925 28.7002 32.0732 28.7002H32.3844L33.3117 27.7667L34.2452 26.8394V26.5282C34.2452 26.2476 34.2208 26.1988 34.0194 26.0096C33.8303 25.8449 33.7388 25.8022 33.5314 25.8022C33.2812 25.8022 33.2507 25.8266 32.3111 26.7662Z"
        fill="#4B17E6"
      />
      <path
        d="M28.0466 9.06684C27.6318 9.32308 27.5769 9.85998 27.9246 10.2077L28.1138 10.3969L30.9813 10.4274L33.8488 10.4579L34.044 10.6592L34.2453 10.8545L34.2636 12.2882C34.2758 13.0752 34.2636 13.722 34.2392 13.722C34.2148 13.722 33.9403 13.4718 33.6291 13.1729C33.1044 12.6543 33.0556 12.6238 32.8116 12.6238C32.5919 12.6238 32.5187 12.6604 32.3174 12.8617C32.1161 13.063 32.0795 13.1363 32.0795 13.362C32.0795 13.6243 32.0856 13.6365 33.3912 14.9422L34.7029 16.2539H35.008H35.313L36.6065 14.9544L37.906 13.6609V13.3498C37.906 13.0691 37.8816 13.0203 37.6802 12.8312C37.4972 12.6665 37.3996 12.6238 37.1983 12.6238C36.9603 12.6238 36.9054 12.6604 36.3868 13.1729C36.0757 13.4718 35.8072 13.722 35.7889 13.722C35.7645 13.722 35.7401 13.0264 35.7279 12.1784L35.7096 10.6409L35.5388 10.2749C35.252 9.66474 34.77 9.24377 34.1538 9.06074C33.8732 8.97532 33.4095 8.96312 31.0179 8.96312C28.5286 8.96922 28.187 8.97532 28.0466 9.06684Z"
        fill="#4B17E6"
      />
      <path
        d="M8.31586 26.6259C8.13893 26.7113 7.09564 27.7363 6.16218 28.743C5.76561 29.164 5.7229 29.2372 5.7229 29.4629C5.7229 29.6582 5.76561 29.7558 5.93034 29.9388C6.11947 30.1401 6.16828 30.1645 6.44893 30.1645C6.75398 30.1645 6.76008 30.1584 7.29088 29.6277C7.58983 29.3348 7.85218 29.0969 7.87658 29.0969C7.90099 29.0969 7.91929 29.7375 7.91929 30.5184C7.91929 31.641 7.93759 32.0132 8.01691 32.2694C8.19994 32.8856 8.62091 33.3676 9.23102 33.6544L9.59708 33.8252H12.5683H15.5456L15.7409 33.6239C15.9117 33.453 15.9422 33.3859 15.9422 33.1236C15.9422 32.8612 15.9117 32.7941 15.7409 32.6233L15.5456 32.4219L12.6781 32.3914L9.81062 32.3609L9.61539 32.1596L9.41405 31.9644L9.39575 30.5306C9.38355 29.7436 9.39575 29.0969 9.42625 29.0969C9.45066 29.0969 9.71301 29.3348 10.012 29.6277C10.5367 30.1584 10.5489 30.1645 10.8478 30.1645C11.1102 30.1645 11.1773 30.134 11.3481 29.9632C11.5189 29.7924 11.5494 29.7253 11.5494 29.4629V29.1579L10.2621 27.8705C9.0968 26.7052 8.95647 26.5832 8.73683 26.5588C8.59041 26.5405 8.42568 26.5649 8.31586 26.6259Z"
        fill="#4B17E6"
      />
    </svg>
  );
}
const WorkData = [
  {
    icons: <AppIcon />,
    tittle: "App Platform Intergration",
  },
  {
    icons: <SoftwareIcon />,
    tittle: "Software Tools Development",
  },
  {
    icons: <TeachIcon />,
    tittle: "Teach Website Solution",
  },
];

const HowWeWork = () => {
  return (
    <div className="px-6 pt-12 xl:pt-36 lg:pt-28 md:pt-16">
      <div className="container max-w-[1164px]">
        <ResultsDriven />
        <div className="flex flex-row flex-wrap justify-center py-12 -mx-3 lg:py-28 md:py-16 xl:my-3">
          {WorkData.map((obj, i) => (
            <div
              key={i}
              className="flex justify-center w-full px-2 md:w-1/3 sm:w-1/2"
            >
              <WorkCard icons={obj.icons} tittle={obj.tittle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowWeWork