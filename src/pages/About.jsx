import React, { useContext } from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
import { themeContext } from '../contexts/ThemeContext';
import { sidebarContext } from '../contexts/SidebarContext';
function About() {
    const {theme} = useContext(themeContext);
    const {clicked} = useContext(sidebarContext);
  return (
    <div className={`${clicked ? '-translate-y-5 opacity-0' : 'translate-y-0 opacity-100' } ${theme ==="light" ? 'text-black' : 'text-white'} h-screen w-ful transition-all duration-300l relative flex md:gap-0 gap-5 md:flex-row flex-col-reverse justify-center items-center`}>
        <div className="about-left relative z-10 md:w-8/12 w-full p-5">
            <div className='max-w-[700px] ml-auto'>
                <span className='text-5xl orbitron transition-all duration-300'>
                    Ab<span className='transition-all duration-300 scale-x-150 inline-block mx-2'>o</span>ut
                </span>
                <hr className='my-5'/>
                    <p className={`${theme ==="light" ? 'text-gray-500' : 'text-white'} transition-all duration-300 text-xl`}>I'm a passionate Front-End Developer focused on building responsive, user-friendly web applications with modern technologies like JavaScript, React.js, and Tailwind CSS. I love turning ideas into interactive experiences and constantly strive to improve my skills. Let’s build something awesome together!</p>
                    <div className='flex mt-4'>
                        <div className={`flex items-center relative group text-xl ${theme ==="light" ? 'text-gray-500' : 'text-white'} group transition-all duration-300 cursor-pointer`}>
                            <FaArrowDownLong/> 
                            <a href="/kuljitsinghFrontendDev.pdf" download>
                                <span>res<span className='group-hover:scale-x-150 transition-all duration-300 inline-block'>u</span>me</span> 
                            </a>
                            <p className={`absolute w-0 group-hover:w-full transition-all duration-300 h-[2px] bottom-0 ${theme === "light" ? 'bg-black' : 'bg-white'}`}></p>
                        </div>
                    </div>
            </div>
        </div>
        <div className='w-full md:w-4/12 flex justify-center'>
            <img src="/dp.jpeg" className='w-auto md:h-[30em] shadow-2xl md:rounded-bl-4xl rounded md:absolute top-0 right-0' alt="" />
        </div>
    </div>
  )
}

export default About