import { EmailIcon, PhoneIcon, VisitIcon } from "./Icons"
import portCard1 from '../../assets/images/webp/portfolio/portCard1.webp'
import portCard2 from '../../assets/images/webp/portfolio/portCard2.webp'
import portCard3 from '../../assets/images/webp/portfolio/portCard3.webp'
import portCard4 from '../../assets/images/webp/portfolio/portCard4.webp'
import portCard5 from '../../assets/images/webp/portfolio/portCard5.webp'
import portCard6 from '../../assets/images/webp/portfolio/portCard6.webp'
import portCard7 from '../../assets/images/webp/portfolio/portCard7.webp'
import portCard8 from '../../assets/images/webp/portfolio/portCard8.webp'
import portCard9 from  '../../assets/images/webp/portfolio/portCard9.webp'
import portCard10 from  '../../assets/images/webp/portfolio/portCard10.webp'
import portCard11 from  '../../assets/images/webp/portfolio/portCard11.webp'

// accordion list
export const accordionList = [
    { title: "Dolor sit amet consectetur. In sapien donec quisque sodales at.", content: "Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc." },
    { title: "Ipsum dolor sit amet consectetur. Semper vel orci nunc.", content: "Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc." },
    { title: "Venenatis augue id lacus diam sed pellentesque amet senectus nunc.", content: "Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc." },
    { title: "A dictum et sit vitae mauris egestas. ", content: "Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc." },
    { title: "quisque aliquam Mi ullamcorper lectus orci purus felis scelerisque.", content: "Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc." },
    { title: "Iaculis odio vitae morbi magna enim dictum viverra habitasse.", content: "Scelerisque lacus non ut diam auctor elementum suspendisse. Erat feugiat tincidunt aliquam phasellus nulla diam. Id id eget risus nisi viverra varius non. Venenatis augue id lacus diam sed pellentesque amet senectus nunc." },
]

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
            { link: (<>Badstrasse 50 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <br /> CH-5200 Brugg</>), path: '#address', },
            { link: '+41 79 725 61 00', path: '#phone' },
            { link: 'info@foxvision.ch', path: '#mailto', },
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
    {
        icons: <PhoneIcon />,
        title: 'Call Us',
        value: '+41 725 61 00',
        link: "tel:+41 725 61 00"
    },
    {
        icons: <EmailIcon />,
        title: 'Email Us',
        value: 'info@foxvision.ch',
        link: "mailto:info@foxvision.ch",
    },
    {
        icons: <VisitIcon />,
        title: 'Visit Us',
        value: 'Fox Vision GmbH Badstrasse 50 CH-5200 Brugg',
        link: "https://www.google.com/maps/place/Fox+Vision+GmbH/@47.109919,8.500001,17z/data=!3m1!4b1!4m5!3m4!1s0x4790000000000000:0x00000000000"
    }
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