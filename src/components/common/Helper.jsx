import { AppIcon, Beschriftungen, Design, Druck, EmailIcon, Identity, Marketing, PhoneIcon, Redesign, SoftwareIcon, TeachIcon, VisitIcon } from "./Icons"
import portCard1 from '../../assets/images/webp/portfolio/portCard1.webp'
import portCard2 from '../../assets/images/webp/portfolio/portCard2.webp'
import portCard3 from '../../assets/images/webp/portfolio/portCard3.webp'
import portCard4 from '../../assets/images/webp/portfolio/portCard4.webp'
import portCard5 from '../../assets/images/webp/portfolio/portCard5.webp'
import portCard6 from '../../assets/images/webp/portfolio/portCard6.webp'
import portCard7 from '../../assets/images/webp/portfolio/portCard7.webp'
import portCard8 from '../../assets/images/webp/portfolio/portCard8.webp'
import portCard9 from '../../assets/images/webp/portfolio/portCard9.webp'
import portCard10 from '../../assets/images/webp/portfolio/portCard10.webp'
import portCard11 from '../../assets/images/webp/portfolio/portCard11.webp'
import watch from "../../assets/images/webp/what-we/watch.webp";
import things from "../../assets/images/webp/what-we/things.webp";
import shopping from "../../assets/images/webp/what-we/shopping.webp";
import quality from "../../assets/images/webp/what-we/quality.webp";
import boodie from "../../assets/images/webp/what-we/boodie.webp";
import beauty from "../../assets/images/webp/what-we/beauty.webp";
import cartoons from "../../assets/images/webp/what-we/cartoons.webp";
import dogy from "../../assets/images/webp/what-we/dogy.webp";
import animals from "../../assets/images/webp/what-we/animals.webp";
import women from "../../assets/images/webp/what-we/women.webp";
import frute from "../../assets/images/webp/what-we/frute.webp";
import base from "../../assets/images/webp/what-we/base.webp";
import wireFraming from "../../assets/images/webp/wireFraming.webp";
import webImg from "../../assets/images/webp/webDesigning.webp";
import logoImg from "../../assets/images/webp/logoDesign.webp";
import appImg from "../../assets/images/webp/appDesign.webp";

// accordion list
export const accordionList = [
    { title: "Dolor sit amet consectetur. In sapien donec quisque sodales at.", content: "Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc." },
    { title: "Ipsum dolor sit amet consectetur. Semper vel orci nunc.", content: "Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc." },
    { title: "Venenatis augue id lacus diam sed pellentesque amet senectus nunc.", content: "Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc." },
    { title: "A dictum et sit vitae mauris egestas. ", content: "Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc." },
    { title: "quisque aliquam Mi ullamcorper lectus orci purus felis scelerisque.", content: "Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc." },
    { title: "Iaculis odio vitae morbi magna enim dictum viverra habitasse.", content: "Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc." },
]
// nav data list
export const navLinkList = [
    { title: "Home", src: "/" },
    { title: "Über uns", src: "/about-us" },
    { title: "Angebot", src: "/offer" },
    { title: "Portfolio", src: "/portfolio" },
];
// footer list

export const footerLinkList = [
    {
        title: 'Home',
        links: [
            { link: 'About us', path: '/about-us' },
            { link: 'Offer', path: '/Offer' },
            { link: 'Contact', path: '/contact-us' }
        ],
    },
    {
        title: 'Agency',
        links: [
            { link: 'Fox Vision GmbH ', path: '#fox' },
            { link: (<>Badstrasse 50 <span className="max-lg:hidden">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> <br /> CH-5200 Brugg</>), path: '#address', },
            { link: '+41 79 725 61 00', path: 'tel:+1234567890' },
            { link: 'info@foxvision.ch', path: 'mailto:example@example.com', },
        ]
    },
    {
        title: 'Legal',
        links: [
            { link: 'Imprint', path: '#imprint' },
            { link: 'Data protection', path: '#data', },
            { link: 'Copyright', path: '#copyright' },
        ],
    }
]

// more ways contact card data

export const contactCardData = [
    { icons: <PhoneIcon />, title: 'Call Us', value: '+41 725 61 00', link: "tel:+41 725 61 00" },
    { icons: <EmailIcon />, title: 'Email Us', value: 'info@foxvision.ch', link: "mailto:info@foxvision.ch", },
    { icons: <VisitIcon />, title: 'Visit Us', value: 'Fox Vision GmbH Badstrasse 50 CH-5200 Brugg', link: "https://www.google.com/maps/place/Fox+Vision+GmbH/@47.109919,8.500001,17z/data=!3m1!4b1!4m5!3m4!1s0x4790000000000000:0x00000000000" }
]

// design strategy card data 
export const strategyCardData = [
    { head: "Understanding Your Vision", discription: "We start by deeply understanding your goals, brand identity, and the needs of your target audience.", },
    { head: "Research and Analysis", discription: "Our team conducts thorough research, including market and competitor analysis, to inform our design decisions.", },
    { head: "Wireframing and Prototyping", discription: "We create wireframes and interactive prototypes to map out the layout and functionality of your project.", },
    { head: "User Testing", discription: "Real users provide invaluable feedback to refine the design, ensuring it aligns with user expectations.", },
];
// portfolio card data
export const portCardData = [
    {
        img: portCard1,
        head: 'Anton Paloka',
        discription: 'Facility Management'
    },
    {
        img: portCard2,
        head: 'Gut versichert ins leben.',
        discription: "Wir helfen ihnen dabei"
    },
    {
        img: portCard3,
        head: 'Anton Paloka',
        discription: "Geschäftsführer"
    },
    {
        img: portCard4,
        head: 'Mhill Paloka',
        discription: 'Leiter Administration',
    },
    {
        img: portCard5,
        head: 'Id nisi elementum',
        discription: 'Lorem ipsum dolor  consectetur.',
    },
    {
        img: portCard6,
        head: 'Augue tincidunt ipsum',
        discription: 'Ipsum dolor sit amet.',
    },
    {
        img: portCard7,
        head: 'Amet consectetur Consequat',
        discription: 'Lorem sit amet consectetur.',
    },
    {
        img: portCard8,
        head: 'Lorem sit amet consectetur.',
        discription: 'dolor sit amet consectetur.',
    },
    {
        img: portCard9,
        head: "Egestas faucs aliquam libero",
        discription: 'Lorem ipsum dolor ',
    },
    {
        img: portCard10,
        head: 'Amet consectetur Consequat',
        discription: 'Lorem ipsum.'
    },
    {
        img: portCard11,
        head: 'Nunc tellus sed auctor  nulla',
        discription: 'Lorem ipsum consectetur.'
    }
]

// homepage what we do data

export const uiUxDesignList = [
    { image: watch },
    { image: things },
    { image: shopping },
    { image: quality },
    { image: boodie },
    { image: beauty },
];
export const graphicDesignList = [
    { col: [{ image: cartoons }, { image: women }], },
    { col: [{ image: dogy }, { image: frute }], },
    { col: [{ image: animals }, { image: base }], },
];

// homepage how we work data

export const howWeWorkCardlist = [
    {
        svg: <Identity />,
        title: "Corporate Identity",
        description: "Viele verbinden damit in erster Linie Logo und Farben. Corporate Identity ist weitaus mehr...",
        link: "Mehr",
    },
    {
        svg: <Redesign />,
        title: "Redesign",
        description: "Sie haben durch Ihren Service und Ihre Dienstleistungen bereits einen hohen Bekanntheitsgrad erreicht und möchten...",
        link: "Mehr",
    },
    {
        svg: <Design />,
        title: "Web design",
        description: "Zeitgemässe und schönes Design macht Kunden neugierig und weckt bereits innert kurzer Zeit mehr Vertrauen....",
        link: "Mehr",
    },
    {
        svg: <Marketing />,
        title: "Digital Marketing",
        description: "Digitales Auftreten war für Unternehmen noch nie wichtiger als jetzt. Kunden, Partner und Lieferanten setzen von Tag zu Tag auf digitale Lösungen...",
        link: "Mehr",
    },
    {
        svg: <Druck />,
        title: "Arbeitsbekleidungen - Druck & Stick",
        description: "Visual graphic design is the art of using visual elements, such as images, typography, color, and layout.",
        link: "Mehr",
    },
    {
        svg: <Beschriftungen />,
        title: "Beschriftungen",
        description: "Lorem ipsum dolor sit amet consectetur. Urna feugiat et morbi risus nibh in sed. Felis nisl bibendum ut velit amet pharetra.",
        link: "Mehr",
    },
];
export const howWeWorkList = [
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

// offer section data
export const corporateCardList = [
    {
        img: wireFraming,
        title: "Wireframing",
    },
    {
        img: webImg,
        title: "Web Design",
    },
    {
        img: logoImg,
        title: "Logo Design",
    },
    {
        img: appImg,
        title: "App Design",
    },
];