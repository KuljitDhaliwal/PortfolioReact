
import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { FaArrowRightLong } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";
import { githubProjects } from "../services/github.service";
import ProjectCard from "../Components/ProjectCard";
import Loading from "../Components/UI/Loading";
import { useNavigate } from "react-router-dom";



function Work() {
  const { clicked } = useContext(SidebarContext)
  const { theme } = useContext(ThemeContext)
  const navigate = useNavigate()

  const { data, isLoading } = useQuery({
    queryKey: ['githubProjects'],
    queryFn: githubProjects
  })


  const filteredData = data?.filter(project => project.topics.includes('portfolio'))


  return (
    <div className={`${clicked ? '-translate-y-5 opacity-0' : 'translate-y-0 opacity-100'} ${theme === "light" ? 'text-black' : 'text-white'} min-h-screen flex 
    md:flex-row flex-col w-full max-w-6xl m-auto justify-center items-start pt-40 pb-10 p-5`}>
      <div className="flex justify-center items-center w-full gap-5">
        <div className="project-text-sec w-full grid gap-6">
          <h2 className="text-5xl flex md:gap-3 gap-1 orbitron">
            W<span className="inline-block md:scale-x-175 scale-x-125">O</span>RK
          </h2>
          <p className="">A collection of projects I've built with passion, clean code and attention to detail.</p>
          <hr />
          {isLoading ? (<Loading height={`min-h-80`}/>)
            :
            (<div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-6 gap-4">
              {data && filteredData.map((pro, i) => {
                const image = `https://raw.githubusercontent.com/${pro.owner.login}/${pro.name}/${pro.default_branch}/public/portfolio/portfolio-preview.webp`;
                const fallbackImg = `https://raw.githubusercontent.com/KuljitDhaliwal/SolimarBus/main/assets/images/portfolio-preview.webp`
                return <ProjectCard project={pro} key={i} image={image} fallbackImg={fallbackImg}/>
              })}</div>
            )}
          <button className="w-fit ml-auto" onClick={()=> window.open('https://github.com/KuljitDhaliwal?tab=repositories', '_blank', 'noopener,noreferrer')}>
            <div className='flex items-center w-fit ml-auto mt-5 gap-2 cursor-pointer md:text-xl group relative' onClick={() => navigate('/work')}>
              <FaArrowRightLong /> <p>see my projects</p>
              <p className={`absolute w-0 group-hover:w-full transition-all duration-300 h-[2px] bottom-0 ${theme === "light" ? 'bg-black' : 'bg-white'}`}></p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}





export default Work



