import { useEffect, useContext } from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import { ThemeContext } from '../contexts/ThemeContext'
import { SidebarContext } from '../contexts/SidebarContext'
function Layout() {
    const { theme } = useContext(ThemeContext);
    const { clicked, handleClick } = useContext(SidebarContext);
    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.remove('bg-dark');
            document.body.classList.add('bg-light');
        } else {
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
                <div className='back'></div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout