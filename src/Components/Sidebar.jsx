import React, { useContext, useEffect, useRef } from 'react'
import { themeContext } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

function Sidebar({clicked, handleClick}) {
    const {theme} = useContext(themeContext);
    const listRef = useRef();
    useEffect(() => {
        const list = listRef.current.querySelectorAll("li");
        list.forEach((element, i) => {
          setTimeout(() => {
              element.classList.add("translate-y-0", "opacity-100");
              element.classList.remove("-translate-y-5", "opacity-0");
          }, i * 300);
        });
      }, [clicked]);


      
  return (
    <div className='w-full h-screen flex overflow-hidden items-center justify-center absolute inset-0 z-20'>
        <div>
            <ul className={`grid gap-10 transition-all duration-300 ${theme ==="light" ? 'text-black' : 'text-white'}`} ref={listRef} onClick={handleClick}>
                <li className='opacity-0 -translate-y-5 duration-300 cursor-pointer transition-all'>
                    <span className='flex items-end gap-2'>
                        <p>01</p>
                        <h2 className='orbitron text-3xl md:text-5xl uppercase group'>
                            <Link to='/PortfolioReact'>
                                H<span className='inline-block transition-all duration-300 group-hover:scale-x-125'>o</span>me
                            </Link>
                        </h2>
                    </span>
                </li>
                <li className='opacity-0 -translate-y-5 duration-300 cursor-pointer transition-all'>
                    <span className='flex items-end gap-2'>
                        <p>02</p>
                        <h2 className='orbitron text-3xl md:text-5xl uppercase group'>
                            <Link to='/PortfolioReact/work'>
                                W<span className='inline-block transition-all duration-300 group-hover:scale-x-125'>o</span>rk
                            </Link>
                        </h2>
                    </span>
                </li>
                <li className='opacity-0 -translate-y-5 duration-300 cursor-pointer transition-all'>
                    <span className='flex items-end gap-2'>
                        <p>03</p>
                        <h2 className='orbitron text-3xl md:text-5xl uppercase group'>
                            <Link to={'/PortfolioReact/about'}>
                                Ab<span className='inline-block transition-all duration-300 group-hover:scale-x-125'>o</span>ut
                            </Link>
                        </h2>
                    </span>
                </li>
                <li className='opacity-0 -translate-y-5 duration-300 cursor-pointer transition-all'>
                    <span className='flex items-end gap-2'>
                        <p>04</p>
                        <Link to="/PortfolioReact/contact">
                            <h2 className='orbitron text-3xl md:text-5xl uppercase group'>C<span className='inline-block transition-all duration-300 group-hover:scale-x-125'>o</span>ntact</h2>
                        </Link>
                    </span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar