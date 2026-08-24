import { FaHtml5, FaCss3Alt, FaReact, FaFigma, FaBootstrap, FaGithub } from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiRedux, SiReactrouter } from "react-icons/si";
import { BiSolidComponent } from "react-icons/bi";
import { RiStackLine } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { SlSpeedometer } from "react-icons/sl";
import { VscVscode } from "react-icons/vsc";
import { IoLogoVercel } from "react-icons/io5";
import { BsTools } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { MdOutlineMenuBook } from "react-icons/md";
import { TbBinaryTree } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";

import { RiTailwindCssFill } from "react-icons/ri";

import Rest from "../../public/rest.png";
import JWT from "../../public/jwt.webp";
import Responsive from "../../public/responsive.png";

export const skills = [
  {
    id: 1,
    title: "Frontend Development",
    icon: FaCode,
    items: [
      {
        id: 1,
        icon: FaHtml5,
        value: "HTML5",
        color: "#E34F26",
      },
      {
        id: 2,
        icon: FaCss3Alt,
        value: "CSS3",
        color: "#0068BB",
      },
      {
        id: 3,
        icon: AiOutlineJavaScript,
        value: "JavaScript",
        color: "#F0DB4F",
      },
      {
        id: 4,
        icon: FaReact,
        value: "React JS",
        color: "#61DAFB",
      },
      {
        id: 5,
        icon: SiRedux,
        value: "Redux",
        color: "#764ABC",
      },
      {
        id: 6,
        icon: RiTailwindCssFill,
        value: "Tailwind",
        color: "#00BCFF",
      },
      {
        id: 7,
        icon: FaBootstrap,
        value: "Bootstrap",
        color: "#7952B3",
      },
      {
        id: 8,
        icon: SiReactrouter,
        value: "React Router",
        color: "#F44150",
      },
      {
        id: 9,
        icon: FaReact,
        value: "Context API",
        color: "#61DAFB",
      },
    ],
  },

  {
    id: 2,
    title: "Tools & Design",
    icon: BsTools,
    items: [
      {
        id: 1,
        icon: FaFigma,
        value: "Figma",
        color: "#F24E1E",
      },
      {
        id: 2,
        icon: FaGithub,
        value: "GitHub",
        color: "#000000",
      },
      {
        id: 3,
        icon: VscVscode,
        value: "VSCode",
        color: "#20A8EC",
      },
      {
        id: 4,
        icon: IoLogoVercel,
        value: "Vercel",
        color: "#000000",
      },
    ],
  },

  {
    id: 3,
    title: "Core Skills",
    icon: CiStar,
    items: [
      {
        id: 1,
        img: Rest,
        value: "REST APIs",
        color: "#000000",
      },
      {
        id: 2,
        img: JWT,
        value: "JWT Authentication",
        color: "#000000",
      },
      {
        id: 3,
        img: Responsive,
        value: "Responsive Design",
        color: "#000000",
      },
      {
        id: 4,
        icon: BiSolidComponent,
        value: "Reusable Components",
        color: "#B4BD3C",
      },
      {
        id: 5,
        icon: RiStackLine,
        value: "State Management",
        color: "#BD3C69",
      },
      {
        id: 6,
        icon: FaCode,
        value: "Scalable Code",
        color: "#3C7ABD",
      },
      {
        id: 7,
        icon: SlSpeedometer,
        value: "Performance Optimization",
        color: "#BD3CB9",
      },
    ],
  },
    {
    id: 4,
    title: "Currently Learning",
    icon: MdOutlineMenuBook,
    items: [
      {
        id: 1,
        icon: TbBinaryTree,
        value: "DSA",
        color: "#F24E1E",
      },
      {
        id: 2,
        icon: RiNextjsLine,
        value: "nextjs",
        color: "#3CBD5A",
      },
      {
        id: 3,
        icon: FaReact,
        value: "Advanced React",
        color: "#61DAFB",
      },
    ],
  },
];