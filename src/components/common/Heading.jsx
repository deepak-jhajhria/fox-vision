export const H1 = ({ boldHeadingBefore, heading, boldHeadingAfter }) => {
    return <h1 className=" font-montserrat font-normal text-custom-8xl text-white leading-107"><span className="font-bold">{boldHeadingBefore}</span> {heading} <span className="font-bold">{boldHeadingAfter}</span></h1>
}
export const H2 = ({ heading, className }) => {
    return <h2 className={`font-montserrat font-semibold text-blackPearl text-custom-6xl leading-normal ${className}`}>{heading}</h2>
}
export const H3 = ({ heading, className }) => {
    return <h3 className={`font-montserrat font-semibold text-blackPearl text-custom-4xl leading-normal ${className}`}>{heading}</h3>
}
export const H4 = ({ heading, className }) => {
    return <h4 className={`font-poppins font-semibold text-blackPearl text-2xl leading-9 ${className}`}>{heading}</h4>
}
export const H5 = ({ title, className }) => {
    return <h5 className={`font-poppins font-bold text-blackPearl text-xl leading-normal ${className}`}>{title}</h5>
}
export const Description = ({ description, className }) => {
    return <p className={`font-poppins font-normal text-blackPearl text-xl leading-normal ${className}`}>{description}</p>
}