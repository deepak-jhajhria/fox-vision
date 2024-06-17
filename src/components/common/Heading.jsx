export const H1 = ({ boldHeadingBefore, heading, boldHeadingAfter }) => {
    return <h1 className=" font-montserrat font-normal text-custom-8xl leading-107"><span className="font-bold">{boldHeadingBefore}</span> {heading} <span className="font-bold">{boldHeadingAfter}</span></h1>
}
export const H2 = ({ heading }) => {
    return <h2>{heading}</h2>
}
export const H3 = ({ heading }) => {
    return <h3>{heading}</h3>
} 