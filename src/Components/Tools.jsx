import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";


function Tools({ project }) {
    const techIcons = [
        {
            name: "react",
            icon: FaReact,
            color: "#61DAFB",
        },
        {
            name: "javascript",
            icon: IoLogoJavascript,
            color: "#F7DF1E",
        },
        {
            name: "html5",
            icon: FaHtml5,
            color: "#E34F26",
        },
        {
            name: "css3",
            icon: FaCss3Alt,
            color: "#1572B6",
        },
        {
            name: "tailwind",
            icon: RiTailwindCssFill,
            color: "#06B6D4",
        },
    ];

    const technologies = project.topics.map(item => techIcons.find(tech => tech.name === item)).filter(Boolean)


    return (
        <div className="grid grid-cols-4 gap-4">
            {technologies.map(({ icon: Icon, color }) => (
                <Icon key={Icon} style={{ color }} className={'text-4xl'} />
            ))}
        </div>
    )
}

export default Tools