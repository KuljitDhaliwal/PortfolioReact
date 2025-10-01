import React, {useState, useEffect, useContext} from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/SIdebar';
import { themeContext } from '../contexts/ThemeContext';
import { sidebarContext } from '../contexts/SidebarContext';
import { Effect } from '../Components/Effect';
function Layout() {
    const { theme } = useContext(themeContext);
    const {clicked, handleClick} = useContext(sidebarContext);
    useEffect(()=>{
        if(theme === 'light'){
            document.body.classList.remove('bg-dark');
            document.body.classList.add('bg-light');
        } else{
            document.body.classList.remove('bg-light');
            document.body.classList.add('bg-dark');
        }
    }, [theme])

    useEffect(() => {
        if (clicked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [clicked]);
    return (
        <div>
            <Navbar handleClick={handleClick} clicked={clicked} />
            {clicked && <Sidebar clicked={clicked} handleClick={handleClick} />}
            {/* <Effect/> */}
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout