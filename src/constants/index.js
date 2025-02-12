import {
  asmak,
  gearxpert,
  gogroove,
  tekisky,
  tekiskyMart,
  
} from "../assets/images";
import svg1 from '../assets/images/company/svg1.svg'
import { GiNestedHexagons } from "react-icons/gi";
import { AiOutlineSlack } from "react-icons/ai";
import { ImInfinite } from "react-icons/im";
import { IoLogoTableau } from "react-icons/io5";
export const navLinks = [
  {
    id: 0,
    title: "What we do",
    route: "",
  },
  {
    id: 1,
    title: "company",
    route: "company",
  },
  {
    id: 2,
    title: "projects",
    route: "projects",
  },
  {
    id: 3,
    title: "let's talk",
    route: "let's-talk",
  },
];

export let projects = [
  {
    id: 0,
    image: gearxpert,
    name: "GearXpert - All auto parts in one Place",
    country: "Uk",
  },
  {
    id: 1,
    image: tekiskyMart,
    name: "TekiskyMart- web app for Ecommerce Business ",
    country: "India",
  },
  {
    id: 2,
    image: asmak,
    name: "Asmak - Asmak International LLC",
    country: "Oman",
  },
  {
    id: 3,
    image: tekisky,
    name: "Tekisky - Official Website Of Tekisky Mart",
    country: "India",
  },
  {
    id: 4,
    image: gogroove,
    name: "GoGroove-Web App for Ecommerce Business",
    country: "India",
  },
];

export let strategies = [
  {
    step: "/01",
    title: "Research & Strategy",
    desc: "Understanding your vision and creating a strategy that aligns with your goals.",
  },
  {
    step: "/02",
    title: "Design & Prototyping",
    desc: "Crafting beautiful interfaces with a focus on user experience and interaction.",
  },
  {
    step: "/03",
    title: "Development & Testing",
    desc: "Bringing designs to life with high-performance and scalable development.",
  },
  {
    step: "/04",
    title: "Launch & Growth",
    desc: "Deploying and optimizing your product for long-term success and scalability.",
  },
];

export let services = [
  {
    title: "Web Development",
    desc: "Modern, scalable, and high-performance websites built with latest technologies.",
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful, intuitive, and user-friendly interfaces designed for the best experience.",
  },
  {
    title: "Digital Marketing",
    desc: "Strategic campaigns that enhance your brand visibility and engagement.",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform, fast, and user-centric mobile applications for all devices.",
  },
  {
    title: "Brand Identity",
    desc: "Complete brand positioning, including logos, colors, and visual identity.",
  },
  {
    title: "SEO Optimization",
    desc: "Advanced SEO strategies to boost your online presence and organic traffic.",
  },
];

export let FooterActions = [
  { id: 0, name: "Facebook", action: "#" },
  { id: 1, name: "Twitter", action: "#" },
  { id: 2, name: "Instagram", action: "https://www.instagram.com/dev_xora/" },
  { id: 3, name: "LinkedIn", action: "#" },
];


export let Benefits = [
  {
    svg: GiNestedHexagons,
    h3: " Time zones ain’t no thing",
    paragraph:
      "Wherever you are, it’ll feel like we’re right next door. With years of expertise, we deliver seamless solutions that transcend time zones and boundaries.",
  },
  {
    svg: AiOutlineSlack,
    h3: " Impossible? We’re on it",
    paragraph:
      "At our agency, 'impossible' isn’t an option. We bring your vision to life exactly as imagined—no shortcuts, no compromises, just pure innovation.",
  },
  {
    svg: ImInfinite,
    h3: " Flexible work terms",
    paragraph:
      "We operate within a flexible Time and Materials framework, ensuring every project stays on track and aligned with your specific goals and budget.",
  },
  {
    svg: IoLogoTableau,
    h3: "Full spectrum of services",
    paragraph:
      "From logo creation and UI/UX design to full-scale development, technical support, and marketing—we deliver end-to-end solutions tailored to your business needs.",
  },
];

export const footerLinks = [
  { text: `© ${new Date().getFullYear()} DevXora. All Rights Reserved.`, className: "text-[15px] border-1" },
  { text: "Privacy Policy", className: "text-[15px] border-1", route: "privacy-policy" },
  { text: "contact@devxora.com", className: "text-[15px] border-1", isEmail: true },
];
