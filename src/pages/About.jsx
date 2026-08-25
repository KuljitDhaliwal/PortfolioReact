import { useContext, useState } from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
import { ThemeContext } from '../contexts/ThemeContext';
import { SidebarContext } from '../contexts/SidebarContext';
import '../App.css'
import Journey from '../Components/Journey';
import Skills from '../Components/Skills';



function About() {
    const { theme } = useContext(ThemeContext);
    const { clicked } = useContext(SidebarContext);
    const [show, setShow] = useState(false)
    const [showSkills, setShowSkills] = useState(false)

    return (
        <div className={
            `${clicked ? '-translate-y-5 opacity-0' : 'translate-y-0 opacity-100'} 
            ${theme === "light" ? 'text-black' : 'text-white'} 
            w-full transition-all duration-300 relative grid`}>
            <div className="about-left md:order-1 order-2 relative z-10 max-w-6xl mx-auto w-full pb-10 p-5 md:pt-60">
                <div className={`max-w-[800px] h-auto grid gap-6`}>
                    <div className='text-5xl orbitron transition-all duration-300'>
                        Ab<span className='transition-all duration-300 scale-x-150 inline-block mx-2'>o</span>ut
                    </div>
                    <hr />
                    <p className={`${theme === "light" ? 'text-gray-500' : 'text-white'} transition-all duration-300 text-xl`}>
                        I'm a Frontend Developer who enjoys turning ideas into clean, responsive, and user-friendly web applications. I work mainly with JavaScript, React.js, and modern frontend technologies, and I love building interfaces that are both functional and enjoyable to use. After transitioning into frontend development from a technology operations background, I've worked on real-world projects involving authentication, protected routes, reusable components, API integration, and responsive UI design. I've also built projects like a Restaurant Booking App, where I focused on creating a smooth and practical user experience. I'm continuously learning and improving my skills in React.js, JavaScript, Data Structures & Algorithms, and frontend architecture, while looking for opportunities to build useful products and grow as a developer.
                    </p>
                    {show && (
                        <Journey theme={theme} />
                    )}
                    {showSkills && (
                        <Skills theme={theme} />
                    )}
                    <div className='flex gap-5 mt-6'>
                        <div className={`flex items-center relative group text-xl ${theme === "light" ? 'text-gray-500' : 'text-white'} group transition-all duration-300 cursor-pointer`}>
                            <FaArrowDownLong />
                            <a href="/cvkuljit.pdf" download>
                                <span>res<span className='group-hover:scale-x-150 transition-all duration-300 inline-block'>u</span>me</span>
                            </a>
                            <p className={`absolute w-0 group-hover:w-full transition-all duration-300 h-[2px] bottom-0 ${theme === "light" ? 'bg-black' : 'bg-white'}`}></p>
                        </div>
                        <div onClick={() => { setShow(!show); setShowSkills(false) }} className={`flex items-center relative group text-xl ${theme === "light" ? 'text-gray-500' : 'text-white'} group transition-all duration-300 cursor-pointer`}>
                            <FaArrowDownLong className={`${show ? 'rotate-180' : ''} transition-all duration-300`} />
                            <span>m<span className='group-hover:scale-x-150 transition-all duration-300 inline-block'>y</span> Journey</span>
                            <p className={`absolute w-0 group-hover:w-full transition-all duration-300 h-[2px] bottom-0 ${theme === "light" ? 'bg-black' : 'bg-white'}`}></p>
                        </div>
                        <div onClick={() => { setShowSkills(!showSkills); setShow(false) }} className={`flex items-center relative group text-xl ${theme === "light" ? 'text-gray-500' : 'text-white'} group transition-all duration-300 cursor-pointer`}>
                            <FaArrowDownLong className={`${showSkills ? 'rotate-180' : ''} transition-all duration-300`} />
                            <span>m<span className='group-hover:scale-x-150 transition-all duration-300 inline-block'>y</span> Skills</span>
                            <p className={`absolute w-0 group-hover:w-full transition-all duration-300 h-[2px] bottom-0 ${theme === "light" ? 'bg-black' : 'bg-white'}`}></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-4/12 flex justify-center bg-amber-300'>
                <img src="/dp.jpeg" className='w-auto md:h-[30em] shadow-2xl md:rounded-bl-4xl rounded md:absolute top-0 right-0' alt="profile-pic" />
            </div>
        </div>
    )
}

export default About