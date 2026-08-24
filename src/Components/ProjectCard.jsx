import { useContext, useState } from "react";
import { Button } from "./UI/Button"
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { themeContext } from "../contexts/ThemeContext";
import Tools from "./Tools";
import Loading from "./UI/Loading";
import { setHeading } from "../utils/HeadingSet";
import { MdOutlineArrowRightAlt } from "react-icons/md";



function ProjectCard({ project, image, fallbackImg }) {
    const { theme } = useContext(themeContext)
    const [imgLoading, setImgLoading] = useState(true)
    return (
        <div className={`${theme === 'dark' ? 'bg-[#535353]' : 'bg-[#f3f2f2]'} shadow-md
         rounded-md grid grid-rows-[auto_1fr] group hover:-translate-y-2 transition-all duration-300`}>
            <div className="header p-4 flex gap-6">
                <div className="flex items-center gap-2">
                    <div className="rounded-full w-3 h-3 bg-red-500"></div>
                    <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
                    <div className="rounded-full w-3 h-3 bg-green-500"></div>
                </div>
                <div className="rounded-2xl bg-white text-gray-400 text-[12px] px-4 py-1 w-60 shrink-0 overflow-hidden">
                    <p className="truncate">{project.homepage}</p>
                </div>
            </div>
            <div className="relative aspect-video w-full overflow-hidden">
                {imgLoading && (
                    <Loading />
                )}
                <img
                    src={image}
                    alt="image"
                    onLoad={() => setImgLoading(false)}
                    onError={(e) => {
                        e.currentTarget.src = fallbackImg;
                    }}
                    className={`absolute inset-0 h-full w-full group-hover:scale-105 ease-in-out transition-all duration-300 object-cover ${imgLoading ? 'invisible' : 'visible'
                        }`}
                />
            </div>
            <div className="p-4 grid gap-4 items-stretch grid-rows-[1fr_auto]">
                <div className="flex justify-between items-start gap-4">
                    <div className="grid gap-4">
                        <h3 className="orbitron">
                            {/* {project.name} */}
                            {setHeading(project.name)}
                        </h3>
                    </div>
                    <div className="flex gap-2">
                        <Button children={<FaGithub />}
                            theme={theme}
                            onClick={() => window.open(project.html_url, '_blank', 'noopener,noreferrer')} />
                    </div>
                </div>
                <p className="text-gray-400 text-md leading-7">{project.description}</p>
                <div className="self-end">
                    <Tools project={project} />
                </div>

                <button className="w-fit hover:text-red-400 group/button" onClick={() => window.open(project.homepage, '_blank', 'noopener,noreferrer')}>
                    <div className='flex items-center w-fit ml-auto mt-5 gap-2 cursor-pointer relative' onClick={() => navigate('/work')}>
                        Visit Site <MdOutlineArrowRightAlt className="text-2xl" />
                        <p className={`absolute w-0 group-hover/button:w-full transition-all duration-300 h-[2px] bottom-0 bg-black group-hover:bg-red-400`}></p>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default ProjectCard