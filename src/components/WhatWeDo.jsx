import { Description, H2, H5 } from "./common/Heading"
import cardImage from '../assets/images/webp/what-we/what-we-card.webp'
import CommonButton from "./common/CommonButton"

export const Vector = () => {
    return (
        <svg width="184" height="146" viewBox="0 0 184 146" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M96.9499 49.7986C98.161 45.5351 97.7926 41.007 95.2378 36.4084C87.3335 22.1791 74.009 18.7138 59.6777 21.0801C38.7506 24.5352 15.6688 40.606 5.12509 52.6898C4.62423 53.2619 4.68548 54.13 5.25668 54.6262C5.82881 55.1271 6.69747 55.0689 7.19679 54.4971C17.4308 42.768 39.8177 27.1451 60.1268 23.7908C73.2862 21.6195 85.5764 24.6752 92.8341 37.7438C94.997 41.6327 95.296 45.4552 94.2803 49.0625C91.9117 48.4353 89.5584 47.8831 87.221 47.4087C80.7704 46.1002 63.6226 45.8432 51.9994 50.0141C43.6626 53.0083 38.1717 58.271 40.2853 66.584C41.4621 71.2032 45.1177 73.9112 50.1896 74.9252C57.1637 76.3257 66.9377 74.4501 75.782 70.3553C83.1474 66.9483 89.8589 62.0173 93.813 56.279C94.6809 55.0172 95.4215 53.7177 96.0094 52.3873C128.683 61.7119 162.553 85.0991 180.878 112.838C181.298 113.467 182.148 113.645 182.784 113.224C183.418 112.807 183.591 111.954 183.174 111.322C164.548 83.1339 130.172 59.3455 96.9499 49.7986ZM93.3138 51.6486C91.0877 51.064 88.874 50.5484 86.6747 50.1031C80.4921 48.8512 64.0661 48.6045 52.9295 52.601C46.0951 55.054 41.2159 59.0944 42.9491 65.9056C43.8605 69.4835 46.804 71.4423 50.73 72.2335C55.0498 73.0971 60.5159 72.5656 66.1186 71.0045C74.6257 68.6331 83.4414 63.877 89.0677 57.7969C90.8524 55.8716 92.31 53.8108 93.3138 51.6486Z" fill="#4B17E6" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M131.579 98.7909C147.952 97.9258 167.068 104.435 181.202 112.913C181.852 113.304 182.697 113.091 183.087 112.441C183.478 111.79 183.268 110.946 182.618 110.555C168.043 101.812 148.315 95.1559 131.435 96.0464C130.679 96.0864 130.096 96.7341 130.136 97.4918C130.175 98.2483 130.822 98.8308 131.579 98.7909Z" fill="#4B17E6" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M182.862 110.32C173.645 100.251 168.722 82.7213 169.143 69.035C169.167 68.277 168.571 67.6392 167.812 67.6192C167.054 67.5943 166.421 68.1903 166.396 68.9485C165.955 83.2869 171.179 101.626 180.836 112.176C181.347 112.737 182.219 112.773 182.779 112.263C183.337 111.749 183.377 110.881 182.862 110.32Z" fill="#4B17E6" />
        </svg>
    )
}
export const Logo = () => {
    return (
        <svg width="71" height="86" viewBox="0 0 71 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M60.9803 44.8175L44.3207 32.4023L35.9503 26.154L0.908203 0V57.2105L5.8033 61.1295L36.2461 85.3906L70.9997 57.1809V52.2858L60.9803 44.8175ZM10.9202 19.9649L27.5798 32.4023L22.7513 35.9886L16.6805 40.5213L10.9202 44.8175V19.9649ZM36.1943 72.5391L14.1072 54.933L18.884 51.3763L31.1365 42.2368L35.9503 38.6505L57.8451 54.9626L36.1943 72.5391ZM40.7714 22.5529L49.1419 28.8382L60.9803 19.9649V37.6301L70.9997 45.1059V0L40.7714 22.5529Z" fill="url(#paint0_linear_1_67)" />
            <defs>
                <linearGradient id="paint0_linear_1_67" x1="1.86947" y1="62.675" x2="64.7293" y2="-0.184861" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6734FF" />
                    <stop offset="0.39" stop-color="#4B17E6" />
                    <stop offset="0.73" stop-color="#00F9E0" />
                    <stop offset="1" stop-color="#05D5FB" />
                </linearGradient>
            </defs>
        </svg>
    )
}

const WhatWeDo = () => {
    return (
        <section className="py-10 sm:py-16 md:py-20 lg:pt-[238px] lg:pb-[218px] px-6">
            <div className="container px-0 max-w-[1140px] relative">
                <H5 className='uppercase' title='A RESULTS-DRIVEN AGENCY' />
                <H2 className='md:mt-3' heading='What we do' />
                <div className="flex max-lg:flex-col max-sm:gap-3 max-lg:gap-5 items-center xl:items-end mt-3 lg:mt-10">
                    <img className="w-full lg:max-w-[500px] xl:max-w-[590px] lg:h-[378px] h-full mt-2" src={cardImage} alt="cardimage" />
                    <div className="flex flex-col items-start lg:ml-10 lg:max-w-[512px]">
                        <Description className='' description={<>We define the intangible assets of your brand and subsequently increase {<span className="text-electricViolet"> trust and loyalty to your brand</span>}. Uniqueness, value proposition, clearly understandablie core messages and an innovative design result in a brand personality that will be. We then transfer this genetic code to the relevant target groups cross-media via relevant channels. And we will reposition you profitably</>} />
                        <CommonButton className='mt-8 md:mt-10' name='Contact' />
                    </div>
                </div>
                <span className="absolute max-lg:hidden top-8 left-[37%]"><Vector /></span>
                <span className="absolute  max-lg:hidden top-5 lg:top-10 right-0"><Logo /></span>
            </div>
        </section>
    )
}

export default WhatWeDo