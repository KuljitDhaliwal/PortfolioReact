import React, { useContext } from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
import { sidebarContext } from '../contexts/SidebarContext';
import { themeContext } from '../contexts/ThemeContext';
function Contact() {
    const {clicked} = useContext(sidebarContext);
    const {theme} = useContext(themeContext);
    return (
        <div className={`min-h-screen w-full flex justify-center items-center transition-all duration-300 ${clicked ? '-translate-y-5 opacity-0' : 'translate-y-0 opacity-100' } ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            <div className='w-full md:max-w-[900px] p-5'>
                <span className='text-5xl orbitron group transition-all duration-300'>
                    C<span className='transition-all duration-300 scale-x-150 inline-block mx-2'>o</span>ntact
                </span>
                <hr className='my-5' />
                <div className='flex md:flex-row justify-between gap-5 flex-col'>
                    <div className="flex w-full md:justify-evenly items-center justify-between">
                        <h2 className='font-bold text-2xl'>Mail</h2>
                        <div className={`flex items-center relative group transition-all duration-300 orbitron cursor-pointer`}>
                            <FaArrowDownLong className='-rotate-135'/> <a href="mailto:kuljitsingh9488@gmail.com"><span className='text-[13px] md:text-[18px]'>kuljitsingh9488 <span className='scale-x-150 transition-all duration-300 inline-block'>@</span> gmail.com</span></a> 
                            <p className={`absolute w-0 group-hover:w-full transition-all duration-300 h-[2px] bottom-0 bg-black ${theme === 'light' ? 'bg-black' : 'bg-white'}`}></p>
                        </div>
                    </div>
                    <div className="flex w-full md:justify-evenly items-start md:mt-8 justify-between">
                        <h2 className='font-bold text-2xl'>Social Media</h2>
                        <div className='flex flex-col'>
                            <div className={`flex items-center relative group orbitron transition-all duration-300 cursor-pointer`}>
                                <FaArrowDownLong className='-rotate-135'/> <a href="https://github.com/KuljitDhaliwal">
                                    <span className='text-[13px] md:text-[18px]'>Gith<span className='scale-x-150 transition-all duration-300 inline-block mx-[3px]'>u</span>b</span> 
                                </a> 
                                <p className={`absolute w-0 group-hover:w-full transition-all duration-300 h-[2px] bottom-0 ${theme === 'light' ? 'bg-black' : 'bg-white'}`}></p>
                            </div>
                            <div className={`flex mt-3 items-center relative group orbitron transition-all duration-300 cursor-pointer`}>
                                <FaArrowDownLong className='-rotate-135'/> 
                                <a href="https://www.linkedin.com/in/kuljit-singh-dhaliwal-391b15210/" target='_blank'>
                                    <span className='text-[13px] md:text-[18px]'>lin<span className='scale-x-150 transition-all duration-300 inline-block mx-[3px]'>k</span>edin</span> 
                                </a>
                                <p className={`absolute w-0 group-hover:w-full transition-all duration-300 h-[2px] bottom-0 ${theme === 'light' ? 'bg-black' : 'bg-white'}`}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact