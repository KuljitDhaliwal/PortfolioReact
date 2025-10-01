import React, { useContext } from 'react';
import { IoMoonOutline } from "react-icons/io5";
import { CiSun } from "react-icons/ci";
import { themeContext } from '../contexts/ThemeContext';
import { useNavigate } from 'react-router-dom';
import { sidebarContext } from '../contexts/SidebarContext';


function Navbar() {
    const { theme, toggleTheme } = useContext(themeContext);
    const {handleClick, clicked, setClicked} = useContext(sidebarContext);
    const navigate = useNavigate(); 

    return (
        <div className='w-full mx-auto md:px-30 px-5 fixed top-10 z-30'>
            <div className="flex items-center justify-between">
                <div className="brand flex items-center md:gap-10 gap-5">
                    <img src={theme === "light" ? '/PortfolioReact/portfoliologo.png' : '/PortfolioReact/llogo.png'} alt="Website Logo" className='h-15 transition-all cursor-pointer' onClick={()=> {
                        navigate('/PortfolioReact');
                        setClicked(false);
                        }}/>
                    <h2 className={`otherFont md:text-2xl font-bold -translate-y-3 ${theme === "light" ? 'text-black' : 'text-white'} transition-all duration-300 opacity-0 ${clicked ? 'opacity-100 translate-y-0' : 'opacity-0'}`}>Kuljit Singh Dhaliwal</h2>
                </div>
                <div className="flex gap-5 items-center">
                    <div className='relative w-5 h-5 z-10'>
                        <IoMoonOutline onClick={toggleTheme} className={`text-xl cursor-pointer absolute transition-all ${theme === "light" ? "opacity-100" : "opacity-0"}`} />
                        <CiSun onClick={toggleTheme} className={`text-xl absolute cursor-pointer text-white transition-all ${theme === "light" ? "opacity-0" : "opacity-100"}`} />
                    </div>
                    <div className='flex items-center h-9 w-9 justify-center group'>
                        <div className={`relative w-full h-full transition-all duration-300 cursor-pointer`} onClick={handleClick}>
                            <svg width="40" className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group ${clicked ? 'opacity-0' : 'opacity-100'}`} height="30" viewBox="0 0 83 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10.5" cy="10.5" r="9.5" stroke={theme === "light" ? "black" : "white"} strokeWidth="2"/>
                                <circle cx="41.5" fill='red' className={`group-hover:-translate-y-10 duration-300 transition-all`} cy="10.5" r="9.5" stroke={theme === "light" ? "black" : "white"} strokeWidth="2"/>
                                <circle cx="72.5" cy="10.5" r="9.5" stroke={theme === "light" ? "black" : "white"} strokeWidth="2"/>
                                <circle cx="10.5" fill='red' className={`group-hover:-translate-x-10 duration-300 transition-all`} cy="39.5" r="9.5" stroke={theme === "light" ? "black" : "white"} strokeWidth="2"/>
                                <circle cx="41.5" fill='red'  cy="39.5" r="9.5" stroke={theme === "light" ? "black" : "white"} strokeWidth="2"/>
                                <circle cx="72.5" fill='red' className={`group-hover:translate-x-10 duration-300 transition-all`} cy="39.5" r="9.5" stroke={theme === "light" ? "black" : "white"} strokeWidth="2"/>
                                <circle cx="10.5"  cy="68.5" r="9.5" stroke={theme === "light" ? "black" : "white"} strokeWidth="2"/>
                                <circle cx="41.5" fill='red' className={`group-hover:translate-y-10 duration-300 transition-all`} cy="68.5" r="9.5" stroke={theme === "light" ? "black" : "white"} strokeWidth="2"/>
                                <circle cx="72.5" cy="68.5" r="9.5" stroke={theme === "light" ? "black" : "white"} strokeWidth="2"/>
                            </svg>
                            <img
                                src={theme === "light" ? '/PortfolioReact/cross.png' : '/PortfolioReact/lcross.png'}
                                alt="Cross"
                                className={`
                                transition-all duration-300 transform absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                                ${clicked ? 'h-9 rotate-45' : 'h-0 hover:rotate-0'}
                                ${!clicked && 'group-hover:h-9'}
                            `}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Navbar