import React, { useContext, useEffect, useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import '../App.css'
import { themeContext } from '../contexts/ThemeContext';
import { sidebarContext } from '../contexts/SidebarContext';
import { effectContext } from '../contexts/EffectContext';
import { useNavigate } from 'react-router-dom';
import { Effect } from '../Components/Effect';

function Home() {
    const navigate = useNavigate()
    const { theme } = useContext(themeContext);
    const { clicked } = useContext(sidebarContext);
    const { effect, setEffect } = useContext(effectContext);
    const [height, setHeight] = useState()

    useEffect(() => {
        const handleHeight = () => {
            if (window.innerWidth <= 768) {
                setHeight('10')
            } else {
                setHeight('10')
            }
        }
        window.addEventListener('resize', handleHeight)

        return () => window.removeEventListener('resize', handleHeight)
    }, [])
    return (
        <div className={`flex ${clicked ? '-translate-y-5 opacity-0' : 'translate-y-0 opacity-100'} ${theme === 'light' ? 'text-black' : 'text-white'} transition-all w-full h-screen items-center justify-center relative z-10 duration-300`}>
            <div className="my-text text-center relative">
                <Effect/>
                <div className={`absolute transition-all duration-300 -z-1 ${effect ? 'opacity-100 md:-left-[2em] left-1/2 top-1/2 -translate-y-1/2 md:-translate-y-0 -translate-x-1/2 md:-translate-x-0 md:top-10' : 'md:top-10 top-0 left-0  opacity-0'} pointer-events-none  justify-center items-center`}>
                    <img src="/PortfolioReact/glowlogo.png" alt="logo" className='md:h-[100px] h-[200px] object-contain' />
                </div>
                <h2 className='otherFont md:text-5xl text-[22px]'>HEY, I'M <span className='orbitron uppercase'><span onMouseEnter={() => setEffect(true)} onMouseLeave={() => setEffect(false)}>kuljit singh dhaliwal</span></span></h2>
                <h2 className='flex otherFont md:text-5xl text-[22px] md:mt-4 gap-3 items-center justify-center'>but you can call me <span className='orbitron uppercase'>best dev</span> <img
                    src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.gif"
                    alt="Cool Sunglasses Emoji"
                    className='h-10'
                />
                </h2>
                <p className='otherFont md:text-3xl text-2xl md:mt-5 mt-3'>I'm a Front-end React Developer</p>
                <div className="flex items-center justify-center mt-10 gap-10">
                    <div className='flex items-center gap-2 cursor-pointer md:text-xl group relative' onClick={()=>navigate('/PortfolioReact/work')}>
                        <FaArrowRightLong /> <p>see my projects</p>
                        <p className={`absolute w-0 group-hover:w-full transition-all duration-300 h-[2px] bottom-0 ${theme === "light" ? 'bg-black' : 'bg-white'}`}></p>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer md:text-xl relative group' onClick={()=>navigate('/PortfolioReact/about')}>
                        <FaArrowRightLong /> <p>more about me</p>
                        <p className={`absolute w-0 group-hover:w-full transition-all duration-300 h-[2px] bottom-0 ${theme === "light" ? 'bg-black' : 'bg-white'}`}></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home