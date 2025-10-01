import { useContext, useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { sidebarContext } from "../contexts/SidebarContext";
import { themeContext } from "../contexts/ThemeContext";

export const Work = () =>{
    const projectRef = useRef()
    const projectImageRef = useRef()
    const {clicked} = useContext(sidebarContext)
    const {theme} = useContext(themeContext)
    useEffect(() => {
        const projectClass = projectRef.current.querySelectorAll(".ref");
        const projectImage = projectImageRef.current.querySelectorAll(".img");
    
        const handleMouseEnter = (element) => {
          projectImage.forEach((img) => {
            img.classList.remove("opacity-100");
            if (element.id === img.id) {
              img.classList.add("opacity-100");
            }
          });
        };
        
        const handleMouseLeave = () => {
          projectImage.forEach((img) => img.classList.remove("opacity-100"));
        };
    
        projectClass.forEach((element) => {
          element.addEventListener("mouseenter", () => handleMouseEnter(element));
          element.addEventListener("mouseleave", handleMouseLeave);
        });
    
        return () => {
          projectClass.forEach((element) => {
            element.removeEventListener("mouseenter", () =>
              handleMouseEnter(element)
            );
            element.removeEventListener("mouseleave", handleMouseLeave);
          });
        };
      }, []);
    
    return(
        <div className={`${clicked ? '-translate-y-5 opacity-0' : 'translate-y-0 opacity-100' } ${theme ==="light" ? 'text-black' : 'text-white'} min-h-screen flex md:flex-row flex-col w-full justify-center items-center px-5`}>
            <div className="flex justify-center items-center w-full gap-5">
                <div ref={projectImageRef} className="project-image-sec md:flex hidden w-1/2 relative max-h-[300px] h-[300px]">
                    <img src="/PortfolioReact/project1.png" alt="" className="opacity-0 absolute img transition-all duration-300 shadow rounded cursor-pointer" id="project1"/>
                    <img src="/PortfolioReact/project2.png" alt="" className="opacity-0 absolute img transition-all duration-300 shadow rounded cursor-pointer" id="project2"/>
                </div>
                <div className="project-text-sec md:w-1/2 w-full" ref={projectRef}>
                    <h2 className="text-5xl flex md:gap-3 gap-1 orbitron mb-5">
                        W<span className="inline-block md:scale-x-175 scale-x-125">O</span>RK
                    </h2>
                    <hr />
                    <a href="https://wizzcabs.com.au/">
                        <div className="flex justify-between items-center ref group py-10 cursor-pointer" id="project1">
                            <div className="flex items-center gap-2">
                                <FaArrowRight className="group-hover:w-10 w-0 transition-all duration-300 text-2xl"/>
                                <h3 className="orbitron md:text-2xl text-xl">Wizzcabs</h3>
                            </div>
                            <p>Taxi Booking</p>
                        </div>
                    </a>
                    <hr />
                    <a href="https://github.com/KuljitDhaliwal/Todo-using-Redux">
                        <div className="flex justify-between items-center ref py-10 cursor-pointer group" id="project2">
                            <div className="flex items-center gap-2">
                                <FaArrowRight className="group-hover:w-10 w-0 transition-all duration-300 text-2xl"/>
                                <h3 className="orbitron md:text-2xl text-xl">Todo</h3>
                            </div>
                            <p>Todo using Redux</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}