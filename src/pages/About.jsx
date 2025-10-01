import React, { useContext, useState } from 'react'
import { FaArrowDownLong } from "react-icons/fa6";
import { themeContext } from '../contexts/ThemeContext';
import { sidebarContext } from '../contexts/SidebarContext';
import '../App.css'
import { icons } from '../HardData/SkillIcons';
import { JourneyDataExperience, JourneyDataStudy } from '../HardData/JourneyData';



function About() {
    const { theme } = useContext(themeContext);
    const { clicked } = useContext(sidebarContext);
    const [show, setShow] = useState(false)
    const [showSkills, setShowSkills] = useState(false)
  
    return (
        <div className={`${clicked ? '-translate-y-5 opacity-0' : 'translate-y-0 opacity-100'} ${theme === "light" ? 'text-black' : 'text-white'} min-h-screen w-full overflow-y-auto no-scrollbar transition-all duration-300 relative flex md:gap-0 gap-5 md:flex-row flex-col-reverse justify-center items-center`}>
            <div className="about-left relative z-10 md:w-8/12 w-full p-5">
                <div className={`max-w-[700px] ml-auto md:h-[250px] h-auto`}>
                    <span className='text-5xl orbitron transition-all duration-300'>
                        Ab<span className='transition-all duration-300 scale-x-150 inline-block mx-2'>o</span>ut
                    </span>
                    <hr className='my-5' />
                    <p className={`${theme === "light" ? 'text-gray-500' : 'text-white'} transition-all duration-300 text-xl`}>I'm a passionate Front-End Developer focused on building responsive, user-friendly web applications with modern technologies like JavaScript, React.js, and Tailwind CSS. I love turning ideas into interactive experiences and constantly strive to improve my skills. Let’s build something awesome together!</p>
                    <div className={`${show || showSkills ? 'max-h-[100vh]' : 'max-h-0'} overflow-y-auto relative mt-5 no-scrollbar transition-all duration-300`}>
                        <div className={`w-1 h-full mt-5 absolute left-1/2 ${theme === 'light' ? 'bg-gray-500' : 'bg-white'}`}></div>
                        {show && (
                            <div>
                            <div className='grid grid-cols-2'>
                                <div className='text-end p-2'>
                                    <h2 className='md:text-3xl text-2xl orbitron text-red-400'>My Study</h2>
                                </div>
                                <div>
                                </div>
                            </div>
                            {JourneyDataStudy.map((data, index)=>{                                
                               return <div className='grid grid-cols-2'>
                                    {index % 2 === 0 && (<div></div>)}
                                    <div className={`p-2 ${index % 2 === 0 ? '' : 'ml-auto text-right'}`}>
                                        <p className='md:text-xl'>{data.study}</p>
                                        <p>
                                            <small><b>{data.year}</b></small>
                                        </p>
                                        <p>
                                            <small>{data.school}</small>
                                        </p>
                                    </div>
                                    {!index % 2 === 0 && (<div></div>)}
                                </div>
                            })}
                            <div className='grid grid-cols-2'>
                                <div>
                                </div>
                                <div className='p-2'>
                                    <h2 className='md:text-3xl text-2xl orbitron text-red-400'>My Experience</h2>
                                </div>
                            </div>
                            {JourneyDataExperience.map((data, index)=>{
                                return <div className='grid grid-cols-2'>
                                    {index % 2 !== 0 && (<div></div>)}
                                    <div className={`p-2 ${index % 2 === 0 ? 'ml-auto text-end' : ''}`}>
                                        <p className='md:text-xl'>{data.job}</p>
                                        <p>
                                            <small><b>{data.year}</b></small>
                                        </p>
                                        <p>
                                            <small>{data.company}</small>
                                            {index}
                                        </p>
                                    </div>
                                    {index % 2 === 0 && (<div></div>)}
                                </div>
                            })}
                        </div>
                        )}
                        {showSkills && (
                            <div>
                            <div className='grid grid-cols-2'>
                                <div className='text-end p-2'>
                                    <h2 className='text-3xl orbitron text-red-400'>My Skills</h2>
                                </div>
                                <div>
                                </div>
                            </div>
                            {icons.map((Icon, index)=>{
                                return  <div className='grid grid-cols-2'>
                                    {index % 2 === 0 && (<div></div>)}
                                <div className={`p-2 ${index % 2 === 0 ? '' : 'ml-auto'} w-fit`}>
                                    <Icon.icon className='text-5xl m-auto' style={{color: `${Icon.color}`}}/>
                                    <p>
                                        <small className=''><b>{Icon.value}</b></small>
                                    </p>
                                </div>
                                {!index % 2 === 0 && (<div></div>)}
                            </div>
                            })}
                        </div>
                        )}
                    </div>
                    <div className='flex mt-4 gap-5 pb-10'>
                        <div className={`flex items-center relative group text-xl ${theme === "light" ? 'text-gray-500' : 'text-white'} group transition-all duration-300 cursor-pointer`}>
                            <FaArrowDownLong />
                            <a href="/PortfolioReact/kuljitdev.pdf" download>
                                <span>res<span className='group-hover:scale-x-150 transition-all duration-300 inline-block'>u</span>me</span>
                            </a>
                            <p className={`absolute w-0 group-hover:w-full transition-all duration-300 h-[2px] bottom-0 ${theme === "light" ? 'bg-black' : 'bg-white'}`}></p>
                        </div>
                        <div onClick={() => {setShow(!show); setShowSkills(false)}} className={`flex items-center relative group text-xl ${theme === "light" ? 'text-gray-500' : 'text-white'} group transition-all duration-300 cursor-pointer`}>
                            <FaArrowDownLong className={`${show ? 'rotate-180' : ''} transition-all duration-300`}/>
                            <span>m<span className='group-hover:scale-x-150 transition-all duration-300 inline-block'>y</span> Journey</span>
                            <p className={`absolute w-0 group-hover:w-full transition-all duration-300 h-[2px] bottom-0 ${theme === "light" ? 'bg-black' : 'bg-white'}`}></p>
                        </div>
                        <div onClick={() => {setShowSkills(!showSkills); setShow(false)}} className={`flex items-center relative group text-xl ${theme === "light" ? 'text-gray-500' : 'text-white'} group transition-all duration-300 cursor-pointer`}>
                            <FaArrowDownLong className={`${showSkills ? 'rotate-180' : ''} transition-all duration-300`}/>
                            <span>m<span className='group-hover:scale-x-150 transition-all duration-300 inline-block'>y</span> Skills</span>
                            <p className={`absolute w-0 group-hover:w-full transition-all duration-300 h-[2px] bottom-0 ${theme === "light" ? 'bg-black' : 'bg-white'}`}></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-4/12 flex justify-center bg-amber-300'>
                <img src="/PortfolioReact/dp.jpeg" className='w-auto md:h-[30em] shadow-2xl md:rounded-bl-4xl rounded md:absolute top-0 right-0' alt="" />
            </div>
        </div>
    )
}

export default About