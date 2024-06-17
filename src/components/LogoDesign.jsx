import React from 'react'
import { Description, H4 } from './common/Heading'
import designImg from '../assets/images/webp/designImg.webp'
import digitalImg from '../assets/images/webp/digitalImg.webp'

export const DesignIcon = () => {
  return (
    <svg width="63" height="50" viewBox="0 0 63 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.03124 1.37795C6.88421 1.81905 6.73718 3.19137 6.73718 4.36763V6.52413H3.55145C0.708801 6.52413 0.365723 6.62215 0.365723 7.50435C0.365723 8.38655 0.708801 8.48458 3.55145 8.48458H6.73718V25.1484V41.8122H3.55145C0.708801 41.8122 0.365723 41.9102 0.365723 42.7924C0.365723 43.6746 0.708801 43.7726 3.55145 43.7726H6.73718V46.0762C6.73718 48.8208 7.2763 49.899 8.40356 49.5069C8.99169 49.2619 9.18774 48.5267 9.18774 46.4682V43.7726L21.0975 43.6746C31.2428 43.5276 32.9582 43.4296 32.9582 42.7924C32.9582 42.2533 32.223 42.0082 30.2625 41.8122L27.6159 41.5671L29.0373 40.881C29.8705 40.4889 31.0467 40.2438 31.7329 40.2928C32.419 40.3418 33.7914 40.0478 34.7716 39.6557C37.2711 38.5774 37.6142 38.6755 37.6142 40.2928C37.6142 41.5671 37.4182 41.7632 36.0459 41.9102C33.8894 42.1063 33.8404 43.4786 35.9969 43.6746C37.5652 43.8216 37.5652 43.8707 37.7122 46.6153C37.8103 48.7228 38.0553 49.4089 38.5945 49.4089C39.1336 49.4089 39.3786 48.7228 39.4767 46.5663L39.6237 43.7726H43.0055C46.0932 43.7726 46.4362 43.6746 46.4362 42.7924C46.4362 41.9102 46.0932 41.8122 43.0055 41.8122H39.5747V39.8517C39.5747 38.6755 39.8197 37.8913 40.1628 37.8913C40.4569 37.8913 44.3778 34.2645 48.8868 29.8044C56.3365 22.4038 57.1697 21.7176 58.738 21.7176C61.6297 21.7176 62.1198 20.6884 62.904 13.0916C63.1491 10.9351 63.002 10.445 61.8748 9.07271C60.0614 6.91622 57.4638 6.18105 55.0622 7.21029C54.033 7.65139 52.4646 7.99446 51.5824 7.99446C49.622 7.99446 47.7105 10.0529 48.0536 11.7683C48.2006 12.5525 47.2694 13.7778 43.8877 17.1596L39.5747 21.4725V14.9541V8.48458H43.0055C46.0932 8.48458 46.4362 8.38655 46.4362 7.50435C46.4362 6.62215 46.0932 6.52413 43.0055 6.52413H39.6237L39.4767 3.68148C39.3786 1.574 39.1336 0.88784 38.5945 0.88784C38.0553 0.88784 37.8103 1.574 37.7122 3.68148L37.5652 6.52413L26.1946 6.62215C16.4904 6.76918 14.824 6.86721 14.824 7.50435C14.824 7.99446 15.4612 8.33754 16.8335 8.48458L18.8429 8.72963L14.0398 11.5233L9.18774 14.2679V11.4252V8.53358L11.2952 8.38655C14.1379 8.19051 14.1869 6.8182 11.2952 6.62215L9.23675 6.47512L9.08971 3.68148C8.99169 1.574 8.74664 0.838829 8.1585 0.740807C7.7174 0.642784 7.22729 0.936852 7.03124 1.37795ZM37.6142 11.4252V14.3169L32.8601 11.5723C30.2135 10.0529 27.959 8.77864 27.861 8.68062C27.763 8.5826 29.8705 8.48458 32.6151 8.48458H37.6142V11.4252ZM29.9195 12.6995C33.4973 14.758 36.683 16.7675 37.0261 17.2086C37.3202 17.6497 37.6142 19.218 37.6142 20.7374C37.6142 23.286 37.4672 23.629 35.6538 25.3934L33.6933 27.3049V23.286V19.267L31.8309 17.9437C30.8017 17.1596 28.4981 15.8363 26.6847 14.905L23.352 13.2387L19.235 15.3461C13.0106 18.5319 12.8636 18.7769 12.8636 25.1484C12.8636 31.5198 13.0106 31.7649 19.235 34.9506L23.401 37.1071L27.2729 35.0486L31.1448 33.0392L30.3606 35.3917C29.7234 37.5482 29.2823 37.9403 26.4887 39.5577L23.352 41.3711L17.6177 38.0873C14.4809 36.2739 11.2952 34.3625 10.5601 33.8724L9.18774 32.9412V25.1484V17.3066L10.511 16.4734C12.0794 15.4442 23.1069 9.0237 23.303 8.97469C23.401 8.97469 26.3907 10.6411 29.9195 12.6995ZM59.0811 9.75887C60.6005 10.7881 61.2376 12.1604 60.8455 13.6798L60.5025 14.9541L57.9049 12.3565C56.0424 10.543 55.4543 9.66084 55.8954 9.36678C56.8266 8.77864 57.8558 8.92567 59.0811 9.75887ZM55.9444 14.3169C58.591 17.0125 59.7183 18.4338 59.5222 18.973C59.3262 19.4141 59.0321 19.7571 58.8361 19.7571C58.0029 19.7571 50.2591 11.5233 50.5532 10.9841C51.2393 9.9059 52.1215 10.494 55.9444 14.3169ZM50.3571 18.0418C48.7398 19.7571 48.4947 20.6394 49.671 21.0805C50.1121 21.2275 51.0433 20.7864 52.0235 19.8062C53.5429 18.3358 53.6409 18.2868 54.4251 19.169C55.1602 20.0022 54.8662 20.3943 48.6417 26.6187C42.3683 32.8921 41.9762 33.1862 41.192 32.353C40.3589 31.5688 40.5549 31.3238 44.4268 27.4029C47.2694 24.5602 48.4457 23.0409 48.2497 22.5018C47.7105 21.1295 46.7793 21.6686 42.6624 25.7365C38.7905 29.5594 38.5454 29.7554 37.7613 28.9222C36.9281 28.1381 37.2221 27.746 43.4956 21.4725C49.72 15.2481 50.1121 14.9541 50.9453 15.6892C51.8275 16.4734 51.7785 16.5714 50.3571 18.0418ZM27.5669 18.1888L31.4878 20.4923V25.1484V29.8044L27.5669 32.108C25.4104 33.4313 23.499 34.4605 23.352 34.4605C23.2049 34.4605 21.3425 33.4313 19.186 32.108L15.3141 29.8044V25.1484V20.4923L19.235 18.1888C21.3915 16.8655 23.2539 15.8363 23.401 15.8363C23.548 15.8363 25.4104 16.8655 27.5669 18.1888ZM36.1439 32.059C36.3399 33.2842 36.634 33.7253 37.3692 33.7743C37.9083 33.8234 38.6435 33.8724 38.9865 33.9214C40.3589 34.0194 39.4276 35.4407 37.6142 35.9799C35.8008 36.519 35.5558 36.47 34.4775 35.4897C33.3012 34.4115 33.3012 34.3135 34.0364 32.206C34.8696 29.6574 35.8008 29.6084 36.1439 32.059ZM17.7647 40.979C19.186 41.7632 19.088 41.7632 14.2359 41.8122H9.18774V38.8715V35.9799L12.7656 38.0873C14.726 39.2636 16.9805 40.5379 17.7647 40.979Z" fill="#4B17E6"/>
    </svg>
    
  )
}

export const StrategyIcon = () => {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_150)">
    <path d="M5.26641 4.06835C3.60012 4.5127 2.04491 5.85962 1.21176 7.56757L0.753525 8.49792L0.711868 26.9522C0.684096 43.5457 0.697982 45.5036 0.906269 46.184C1.62833 48.6834 3.58623 50.6275 6.03013 51.2662C6.73831 51.4467 8.80729 51.4745 21.5545 51.4745H36.2595L35.7458 52.0438C34.871 53.0297 34.496 53.9878 34.496 55.3625C34.496 56.8344 34.9126 57.8203 35.9402 58.8201C37.2732 60.1115 39.3005 60.5003 41.189 59.8199C41.9944 59.5283 42.0777 59.5283 42.4804 59.7366C43.1886 60.0976 43.2719 60.4864 42.9108 61.6528C42.647 62.4582 42.6054 62.8886 42.647 63.7773C42.7442 65.6241 43.6051 66.9572 45.2298 67.7487C46.0629 68.1652 46.2712 68.2069 47.4098 68.2069C48.5485 68.2069 48.7568 68.1652 49.5899 67.7487C50.6175 67.2488 51.3118 66.5406 51.7839 65.513C52.2004 64.6244 52.5892 64.2494 53.0614 64.2494C53.7001 64.2494 53.9778 64.4716 54.4361 65.3742C54.9915 66.4989 55.8108 67.3599 56.7689 67.8181C57.4493 68.1652 57.6992 68.2069 58.8656 68.2069C60.0182 68.2069 60.282 68.1652 60.9624 67.8181C61.8927 67.3737 62.9342 66.3045 63.3369 65.3881C63.7812 64.4022 63.8229 63.0969 63.4618 61.9166C63.1008 60.7086 63.1008 60.4864 63.4479 60.042C63.8368 59.556 64.295 59.4866 65.0726 59.7921C67.5443 60.7641 70.1131 59.8199 71.3351 57.5148C71.6683 56.89 71.71 56.6678 71.71 55.3625C71.71 54.1267 71.6683 53.8073 71.3906 53.2658C70.9046 52.2521 70.1964 51.5578 69.155 51.0024C67.2527 50.0026 67.2527 49.1972 69.155 48.1974C70.1964 47.642 70.9046 46.9477 71.3906 45.9341C71.6683 45.3925 71.71 45.0731 71.71 43.8373C71.71 42.532 71.6683 42.3099 71.3351 41.685C70.8352 40.7408 69.9326 39.9076 68.9328 39.4494C67.8497 38.9495 66.2668 38.9217 65.142 39.38C64.295 39.7132 63.8506 39.6577 63.4479 39.1578C63.1008 38.7134 63.1008 38.4913 63.4618 37.2832C64.045 35.3808 63.5868 33.5479 62.1982 32.2565C61.379 31.4928 60.5458 31.0762 59.5599 30.9652L58.8656 30.8818V20.0093C58.8656 9.73376 58.8517 9.09501 58.6018 8.30352C57.9492 6.22065 56.2551 4.62378 54.075 4.04058C52.9919 3.74898 6.36339 3.77675 5.26641 4.06835ZM54.2417 6.45671C55.1165 6.91494 55.7136 7.48426 56.1718 8.31741C56.5745 9.03947 56.5745 9.09501 56.6161 11.5111L56.6717 13.9828H29.7054H2.72531L2.80862 11.7194C2.85028 10.1226 2.94748 9.28941 3.10023 8.83118C3.5168 7.70643 4.55824 6.70665 5.80796 6.26231C6.21065 6.10957 10.8624 6.08179 29.9832 6.10957L53.6585 6.13734L54.2417 6.45671ZM56.6439 23.8417V31.465L56.2551 31.6733C55.6719 31.9788 54.9082 32.8814 54.4222 33.8256C53.9778 34.7282 53.7001 34.9504 53.0614 34.9504C52.5892 34.9504 52.2004 34.5755 51.7839 33.6868C51.3118 32.6592 50.6175 31.951 49.5899 31.4512C48.7568 31.0346 48.5485 30.9929 47.4098 30.9929C46.2712 30.9929 46.0629 31.0346 45.2298 31.4512C43.619 32.2427 42.7581 33.5479 42.647 35.4225C42.5915 36.3112 42.647 36.7139 42.897 37.5331C43.2719 38.7134 43.1886 39.1022 42.4804 39.4633C42.0777 39.6716 41.9944 39.6716 41.189 39.4077C39.8837 38.9634 39.1894 38.9217 38.1758 39.1717C36.5928 39.5744 35.4819 40.5047 34.8154 41.9905C34.3433 43.0319 34.3711 44.7399 34.8987 45.8785C35.3847 46.9338 36.329 47.8642 37.3982 48.3363C37.8147 48.5168 38.2174 48.8084 38.3146 48.9612L38.4674 49.2528H22.7903C5.4747 49.2528 6.37728 49.2944 5.05813 48.3641C4.19721 47.7392 3.55846 46.9338 3.15577 45.9479L2.8364 45.1565L2.79474 30.6736L2.75308 16.2045H29.7054H56.6439V23.8417ZM48.8401 33.5896C49.2011 33.8395 49.5344 34.2561 49.8815 34.8948C50.7147 36.5056 51.645 37.1721 53.0475 37.1721C54.6166 37.1721 55.658 36.5056 56.3523 35.0337C57.0049 33.659 57.9631 33.0341 59.2405 33.1869C60.0182 33.2702 60.768 33.8395 61.1984 34.6727C61.5734 35.4364 61.5872 35.9779 61.2262 36.8944C60.9068 37.7275 60.8652 39.0467 61.1429 39.7271C61.4067 40.3659 62.1427 41.1712 62.7537 41.4767C63.6562 41.9349 64.4894 41.9627 65.7252 41.56C66.9749 41.1435 66.9472 41.1573 67.6553 41.3517C68.308 41.5323 69.1272 42.2265 69.3633 42.8236C69.641 43.4763 69.5994 44.4483 69.28 45.087C68.9745 45.6841 68.5024 46.059 67.5859 46.4617C66.4334 46.9477 65.5308 48.3363 65.5308 49.5999C65.5308 50.8635 66.4334 52.2521 67.5859 52.7381C68.5024 53.1408 68.9745 53.5157 69.28 54.1128C69.6132 54.7654 69.641 55.9041 69.3633 56.4595C69.0578 57.0288 68.2524 57.6815 67.6553 57.8481C66.9611 58.0425 66.8916 58.0425 66.0168 57.737C64.8088 57.3065 64.2394 57.2649 63.3785 57.5148C61.3651 58.098 60.407 60.2364 61.2262 62.3054C61.5734 63.1802 61.5734 63.7357 61.2401 64.4577C60.6014 65.8324 59.2544 66.3879 57.9214 65.8463C57.1854 65.5269 56.8105 65.1242 56.3384 64.1522C55.658 62.6942 54.6166 62.0277 53.0475 62.0277C51.645 62.0277 50.7147 62.6942 49.8815 64.305C49.2705 65.4297 48.6318 65.9296 47.6181 66.0268C46.66 66.1101 45.7713 65.6658 45.2437 64.8326C44.7438 64.055 44.716 63.2774 45.1326 62.0971C45.8824 59.9587 44.7715 57.8759 42.647 57.4315C41.9388 57.2926 41.7583 57.3065 40.8141 57.5981C40.2448 57.7787 39.5227 57.9175 39.2172 57.9175C37.1066 57.9175 35.9263 55.3209 37.301 53.6962C37.4954 53.4602 38.0647 53.0575 38.5785 52.7936C40.1198 52.016 40.703 51.1274 40.703 49.5999C40.703 48.1002 40.0781 47.156 38.5924 46.4062C38.0786 46.1423 37.4954 45.7397 37.301 45.5036C36.2457 44.2539 36.6345 42.3376 38.0786 41.5878C38.8423 41.199 39.5505 41.2129 40.8141 41.6017C41.7583 41.8933 41.9388 41.9072 42.647 41.7683C44.7715 41.324 45.8824 39.2411 45.1326 37.1027C44.716 35.9363 44.7438 35.1448 45.2437 34.3811C46.0213 33.1452 47.632 32.7981 48.8401 33.5896Z" fill="#4B17E6"/>
    <path d="M6.41896 6.74823C5.6969 6.92875 4.78044 7.53972 4.39163 8.10904C2.79477 10.4419 4.40552 13.5662 7.21045 13.5662C10.0432 13.5662 11.6678 10.3308 9.98761 8.0535C9.25167 7.05372 7.59926 6.45663 6.41896 6.74823ZM7.69646 9.06716C8.84898 9.60871 8.47406 11.3444 7.21045 11.3444C5.96073 11.3444 5.57193 9.62259 6.69668 9.06716C7.23822 8.80333 7.15491 8.80333 7.69646 9.06716Z" fill="#4B17E6"/>
    <path d="M13.8341 6.77602C13.0982 6.95654 12.6261 7.22037 12.1123 7.76191C11.4874 8.41455 11.2097 9.17827 11.2097 10.1919C11.2236 12.5803 13.5286 14.1633 15.8337 13.3579C16.5835 13.0941 17.4306 12.3026 17.7777 11.5527C18.3609 10.303 17.9443 8.40066 16.9168 7.53974C16.0697 6.81768 14.8617 6.51219 13.8341 6.77602ZM15.1255 9.05329C15.9448 9.48375 16.0697 10.4141 15.3893 10.9834C14.8478 11.4417 14.2507 11.4555 13.8064 10.9973C13.1676 10.3724 13.4314 9.26158 14.2924 8.94221C14.6256 8.81724 14.6951 8.83112 15.1255 9.05329Z" fill="#4B17E6"/>
    <path d="M21.0541 6.81794C18.5269 7.51223 17.7354 10.8726 19.7071 12.6361C20.8458 13.6636 22.3038 13.858 23.6091 13.1776C25.7336 12.0668 26.1224 9.28961 24.4006 7.6372C23.5535 6.81794 22.2205 6.49857 21.0541 6.81794ZM22.8176 9.23407C23.2341 9.62287 23.3313 10.0533 23.1231 10.581C22.762 11.4419 21.8872 11.6085 21.2207 10.942C20.1098 9.83116 21.6512 8.19263 22.8176 9.23407Z" fill="#4B17E6"/>
    <path d="M28.9692 16.9127C28.6776 16.9822 28.2749 17.121 28.0527 17.2321C27.5667 17.4959 26.803 18.343 26.6364 18.829C26.5114 19.19 26.4558 19.2039 22.7344 19.8149C18.527 20.5091 18.3188 20.5925 18.3188 21.4673C18.3188 22.0782 18.7631 22.592 19.3047 22.592C19.624 22.592 25.0256 21.745 25.9976 21.5367L26.3725 21.4534V29.035V36.6167H26.067C25.8865 36.6167 23.1788 36.1862 20.0267 35.6586C15.0695 34.8254 14.2224 34.6588 13.5976 34.3116C12.7228 33.8395 12.1396 33.1869 11.6813 32.1871C11.0565 30.8402 11.0981 26.9938 11.7369 25.7441C12.0701 25.1192 13.0422 24.1195 13.6254 23.8279C13.9031 23.689 14.5418 23.4668 15.0139 23.3557C15.5555 23.2308 15.9859 23.0502 16.1387 22.8558C16.4858 22.4254 16.4442 21.8144 16.0137 21.384C15.6943 21.0646 15.5833 21.0368 14.9584 21.1062C12.6534 21.384 10.5705 22.8836 9.65402 24.9109C9.41796 25.4525 9.33464 25.508 8.66812 25.6469C6.94628 26.0079 5.82153 27.3965 5.82153 29.1739C5.82153 30.007 6.29365 31.0901 6.87685 31.6456C7.39063 32.1177 8.40429 32.5759 8.94584 32.5898C9.32076 32.5898 9.40407 32.687 9.73733 33.4091C10.2094 34.4227 11.2509 35.5752 12.1951 36.1307C12.5839 36.3529 12.9311 36.6722 12.9727 36.825C13.0144 36.9777 13.2643 38.408 13.5282 40.0187C13.9725 42.6709 13.9864 42.9486 13.792 43.0736C12.3895 43.9345 11.8619 45.3647 12.4173 46.7117C12.695 47.3782 12.9866 47.6976 13.6254 48.0169C14.0975 48.253 14.4863 48.2808 18.0133 48.2808H21.8735L22.5123 47.8781C24.3313 46.7256 24.0536 43.9206 22.0263 43.0736C21.7486 42.9625 21.5125 42.782 21.5125 42.6709C21.5125 42.5737 21.4708 42.296 21.4292 42.0738C21.3459 41.685 21.3736 41.6433 21.9707 41.4906C23.1233 41.1573 24.1369 39.977 24.1508 38.9634V38.6024L25.2894 38.7829C25.9282 38.8801 26.4558 39.0328 26.4836 39.1161C26.5114 39.1994 26.7336 39.5605 26.9696 39.9076C28.1638 41.685 30.941 41.81 32.3018 40.1715C32.9127 39.4216 33.0377 38.8245 33.0377 36.5611C33.0377 35.4503 33.0933 34.5338 33.1627 34.5338C33.4126 34.5338 34.6901 33.2702 35.1206 32.5898C36.3842 30.618 36.4259 27.7992 35.2039 25.7302C35.0095 25.397 34.4402 24.7443 33.9403 24.2861L33.0377 23.4668V21.4256C33.0377 19.1622 32.9266 18.6901 32.1629 17.8986C31.3298 17.0238 30.0939 16.6489 28.9692 16.9127ZM30.5105 19.4399L30.816 19.7177V29.0767V38.4357L30.4688 38.769C30.0245 39.2272 29.3857 39.2272 28.9414 38.769L28.5943 38.4357V29.16C28.5943 20.8563 28.622 19.8426 28.8164 19.5649C29.2469 18.9401 29.8995 18.8845 30.5105 19.4399ZM33.6626 27.7437C33.982 28.6462 33.9264 29.896 33.5237 30.743C33.3432 31.1457 33.1488 31.4789 33.1071 31.4789C33.0655 31.4789 33.0377 30.3681 33.0377 29.0211C33.0377 26.7716 33.0516 26.5772 33.246 26.855C33.371 27.0216 33.5515 27.4243 33.6626 27.7437ZM9.01527 29.1183C9.01527 30.3264 9.00138 30.3681 8.75144 30.2292C8.34875 30.0209 8.04326 29.521 8.04326 29.1045C8.04326 28.7295 8.64035 27.8686 8.8903 27.8686C8.95973 27.8686 9.01527 28.4379 9.01527 29.1183ZM16.9441 37.4082L18.416 37.6303L18.8048 39.9354C18.9992 41.199 19.2075 42.3793 19.2491 42.5459C19.3185 42.8653 19.3047 42.8653 17.7772 42.8653C16.9302 42.8653 16.2359 42.8236 16.2359 42.7542C16.2359 42.6987 16.0276 41.4212 15.7638 39.9076C15.5138 38.408 15.3472 37.1721 15.3889 37.1721C15.4305 37.1721 16.1387 37.2693 16.9441 37.4082ZM21.7624 38.2274C22.0402 38.3108 21.9568 38.9495 21.6236 39.1717C21.1376 39.5188 20.9987 39.4355 20.8599 38.7134L20.721 38.0191L21.1515 38.0886C21.3875 38.1302 21.6652 38.1858 21.7624 38.2274ZM21.3736 45.2953C21.5958 45.5591 21.4292 46.0174 21.0543 46.1146C20.5127 46.2534 14.9862 46.2118 14.6946 46.059C14.403 45.8924 14.3474 45.5036 14.5974 45.2537C14.7223 45.1287 15.6666 45.087 17.9855 45.087C20.6238 45.087 21.2348 45.1287 21.3736 45.2953Z" fill="#4B17E6"/>
    <path d="M51.9917 41.1436C49.2284 41.5741 46.7012 43.3931 45.5626 45.7954C44.8544 47.2811 44.6877 48.0171 44.6877 49.6001C44.6877 51.1692 44.8544 51.919 45.5348 53.3492C46.5068 55.3905 48.1592 56.8485 50.3948 57.64C51.4362 58.001 51.7556 58.0565 53.1025 58.0565C54.1718 58.0565 54.8799 57.9871 55.4492 57.8066C56.5046 57.4872 57.7959 56.8485 58.1709 56.4458C58.7818 55.7793 58.3236 54.6684 57.4349 54.6684C57.185 54.6684 56.5601 54.8906 56.0186 55.1544C55.4631 55.446 54.6439 55.7098 54.1162 55.807C51.464 56.2375 48.7007 54.7517 47.4649 52.2384C47.0067 51.2941 46.9928 51.2108 46.9928 49.6001C46.9928 47.9893 47.0067 47.906 47.4649 46.9618C48.3953 45.0733 50.1865 43.7403 52.2694 43.3931C54.5189 43.0182 57.0045 44.1291 58.3097 46.087C59.3789 47.6977 59.6844 49.6278 59.1429 51.3636C58.7818 52.53 58.7957 52.9466 59.2123 53.3492C59.8372 53.988 60.6564 53.7103 61.0591 52.7383C61.4479 51.8218 61.6423 50.7804 61.6423 49.5584C61.6284 45.8926 59.1845 42.56 55.6853 41.463C54.7966 41.1992 52.8109 41.0186 51.9917 41.1436Z" fill="#4B17E6"/>
    <path d="M51.6307 44.8788C49.3812 45.6009 47.8815 48.0309 48.2703 50.3082C48.5758 52.0578 49.5478 53.3769 51.0614 54.0851C51.7418 54.4045 52.0334 54.46 53.172 54.46C54.3245 54.46 54.5884 54.4184 55.2688 54.0712C56.3102 53.5713 57.3516 52.4466 57.7266 51.4329C58.1292 50.3637 58.1431 48.8502 57.7404 47.7949C57.3655 46.7951 56.2963 45.6287 55.3243 45.1427C54.3662 44.6844 52.6305 44.5595 51.6307 44.8788ZM53.8246 47.0034C53.9496 47.0728 53.4497 47.6699 52.2833 48.8224L50.5615 50.5442L50.4782 50.0027C50.2977 48.9335 50.9642 47.6838 51.9501 47.1839C52.5472 46.8923 53.5053 46.7951 53.8246 47.0034ZM55.8103 49.5306C55.8103 49.9055 55.7409 50.3776 55.6576 50.5998C55.3243 51.5024 54.144 52.2939 53.1442 52.3077C52.0334 52.3077 52.075 52.2383 53.8802 50.4193C54.8105 49.475 55.6298 48.7391 55.6992 48.7807C55.7548 48.8224 55.8103 49.1557 55.8103 49.5306Z" fill="#4B17E6"/>
    </g>
    <defs>
    <clipPath id="clip0_1_150">
    <rect width="71.0953" height="71.0953" fill="white" transform="translate(0.684326 0.513519)"/>
    </clipPath>
    </defs>
    </svg>
    
  )
}

const LogoDesign = () => {
  return (
    <div className=' bg-blue pt-20 pb-[60px]'>
      <div className="container max-w-[1164px]">
<div className="flex flex-row flex-wrap -mx-3 items-center mb-[96px]">
    <div className="w-1/2 px-3">
    <div className="flex bg-white w-[93.15px] h-[93.15px] justify-center items-center rounded-[7.59px] mb-[29px]">
         <DesignIcon/>
    </div>
    <H4 heading="Logo Design"  className="!text-white !mb-2"/>
<Description  description="Logo design is a specialized discipline within the realm of graphic design, focused on creating unique and memorable visual symbols that represent a brand, company, or organization." className="!text-[#C9B9F7] max-w-[421px]"/>
    </div>
    <div className="w-1/2 px-3  ">
    <img src={designImg} alt="designImg" />
    </div>
</div>
<div className="flex flex-row flex-wrap -mx-3 items-center">
<div className="w-1/2 px-3 flex justify-start ">
    <img src={digitalImg} alt="digitalImg" />
    </div>
    <div className="w-1/2 px-3 flex justify-end">
    <div>
        <div className="flex bg-white w-[93.15px] h-[93.15px] justify-center items-center rounded-[7.59px] mb-[29px]">
        <StrategyIcon/>
        </div>
        <H4 heading="Strategy & Digital Marketing"  className="!text-white !mb-2"/>
        <Description  description="Strategy in digital marketing is the foundation upon which successful online campaigns are built. It involves setting clear objectives, identifying target audiences." className="!text-[#C9B9F7] max-w-[445px]"/>
    </div>
    </div>
   
</div>
      </div>
    </div>
  )
}

export default LogoDesign
