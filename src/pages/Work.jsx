import { useContext, useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { sidebarContext } from "../contexts/SidebarContext";
import { themeContext } from "../contexts/ThemeContext";
import { projects } from "../HardData/Projects";
import { FaArrowRightLong } from "react-icons/fa6";

export const Work = () => {
  const { clicked } = useContext(sidebarContext)
  const { theme } = useContext(themeContext)
  const [mouseOpacity, setMouseOpacity] = useState([]);
  const [windowTop, setWindowTop] = useState(0)
  const refs = useRef([])
  const [imageHeight, setImageHeight] = useState({})

  const handleWindowHeight = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    setMouseOpacity(projects.map(() => 0));
  }, []);


  useEffect(() => {
    refs.current.forEach((el, index) => {
      if (!el) return
      const handleScrollOrHover = () => {
        setMouseOpacity((prev) => {
          const newOpacities = [...prev];
          newOpacities[index] = el.scrollTop > 20 ? 0 : 100;
          return newOpacities;
        });
      };
      const mouseLeave = () => {
        let scrollTop = el.scrollTop
        if (scrollTop > 50) {
          el.scrollBy(0, -scrollTop)
        }
      }

      el.addEventListener('scroll', handleScrollOrHover)
      el.addEventListener('mouseover', handleScrollOrHover)
      el.addEventListener('mouseleave', mouseLeave);


      return () => {
        el.removeEventListener('scroll', handleScrollOrHover)
        el.removeEventListener('mouseover', handleScrollOrHover)
        el.removeEventListener('mouseleave', mouseLeave);
      }
    });

  }, [projects.length])


  return (
    <div className={`${clicked ? '-translate-y-5 opacity-0' : 'translate-y-0 opacity-100'} ${theme === "light" ? 'text-black' : 'text-white'} min-h-screen flex md:flex-row flex-col w-full justify-center items-center px-5`}>
      <div className="flex justify-center items-center w-full gap-5">
        <div className="project-text-sec md:w-1/2 w-full">
          <h2 className="text-5xl flex md:gap-3 gap-1 orbitron mb-5">
            W<span className="inline-block md:scale-x-175 scale-x-125">O</span>RK
          </h2>
          <hr />
          {projects.map((pro, i) => {
            return <div key={i}><div onMouseOver={handleWindowHeight} className={`flex justify-between ref group py-10 
            cursor-pointer h-28 hover:h-[25rem] duration-500 transition-all overflow-hidden`} id="project1">
              <div className="w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center justify-between gap-2">
                    <FaArrowRight className="group-hover:w-10 w-0 transition-all duration-500 text-2xl" />
                    <h3 className="orbitron md:text-2xl text-xl">{pro.projectName}</h3>
                  </div>
                  <p>{pro.projectDetails}</p>
                </div>
                <a href={pro.projectLink} target="_blank">
                  <div ref={(em) => refs.current[i] = em}
                    className={`justify-self-center w-100 h-[15rem] scroll-smooth mt-10 
                  overflow-scroll border-6 relative group/image border-gray-400 rounded 
                  hover:shadow-2xl hover:scale-102 duration-300 transition-all`}>
                    <img src={pro.projectImagePath} alt="Prject Image"
                      className="max-w-full h-auto" onLoad={(e) => {
                        setImageHeight(prev => ({ ...prev, [i]: e.target.naturalHeight }))
                      }}
                    />
                    {console.log('Check Height', imageHeight[i])}
                    {imageHeight[i] > 1900 && (
                      <div className={`absolute z-50 w-28 flex justify-center bg-green-500 items-center h-28 opacity-${mouseOpacity[i]} bg-orange-300/40 transition-all duration-300  top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2`}>
                        <span className="bg-transparent border-2 border-black h-18 w-10 rounded-2xl relative flex justify-center p-5">
                          <span className="absolute w-8 h-10 top-1/2 left-1/2 flex overflow-hidden justify-center -translate-x-1/2 -translate-y-1/2">
                            <span className="w-1 h-[20px] bg-black mouse-animation"></span>
                          </span>
                        </span>
                      </div>
                    )}
                  </div>
                </a>
              </div>
            </div>
              <hr />
            </div>
          })}
          <a href="https://github.com/KuljitDhaliwal?tab=repositories" target="_blank">
            <div className='flex items-center w-fit ml-auto mt-5 gap-2 cursor-pointer md:text-xl group relative' onClick={() => navigate('/PortfolioReact/work')}>
              <FaArrowRightLong /> <p>see my projects</p>
              <p className={`absolute w-0 group-hover:w-full transition-all duration-300 h-[2px] bottom-0 ${theme === "light" ? 'bg-black' : 'bg-white'}`}></p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}