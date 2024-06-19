import { EmailIcon, PhoneIcon, VisitIcon } from "./Icons"
import watch from "../../assets/images/png/watch.png";
import things from "../../assets/images/png/things.png";
import shopping from "../../assets/images/png/shopping.png";
import quality from "../../assets/images/png/quality.png";
import boodie from "../../assets/images/png/boodie.png";
import beauty from "../../assets/images/png/beauty.png";
import cartoons from "../../assets/images/png/cartoons.png";
import dogy from "../../assets/images/png/dogy.png";
import animals from "../../assets/images/png/animals.png";
import women from "../../assets/images/png/women.png";
import frute from "../../assets/images/png/frute.png";
import base from "../../assets/images/png/base.png";

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
    { col: [{ image: cartoons }, { image: women }],},
    { col: [{ image: dogy }, { image: frute }],},
    { col: [{ image: animals }, { image: base }],},
];