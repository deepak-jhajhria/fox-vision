export const H1 = ({ boldHeadingBefore, heading, boldHeadingAfter, className }) => {
  return <h1 className={`font-montserrat font-normal text-custom-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-custom-8xl text-white !leading-107 ${className}`}><span className="font-bold">{boldHeadingBefore}</span> {heading} <span className="font-bold">{boldHeadingAfter}</span></h1>
}
export const H2 = ({ heading, className }) => {
  return <h2 className={`font-montserrat font-semibold text-blackPearl text-custom-2xl !leading-121 sm:text-custom-4xl lg:text-5xl xl:text-custom-6xl xl:!leading-[78.2px] ${className}`}>{heading}</h2>
}
export const H3 = ({ heading, className }) => {
  return <p className={`font-montserrat font-semibold text-blackPearl text-2xl sm:text-3xl md:text-4xl lg:text-custom-4xl lg:leading-[48px] ${className}`}>{heading}</p>
}
export const H4 = ({ heading, className }) => {
  return <p className={`font-poppins font-semibold text-blackPearl text-lg sm:text-xl lg:text-2xl lg:leading-9 ${className}`}>{heading}</p>
}
export const H5 = ({ title, className }) => {
  return <p className={`font-poppins font-bold text-blackPearl text-base md:text-lg lg:text-xl lg:leading-[30px] ${className}`}>{title}</p>
}
export const Description = ({ description, className }) => {
  return <p className={`font-poppins font-normal text-blackPearl text-base sm:text-lg lg:text-xl lg:leading-[36.6px] ${className}`}>{description}</p>
}