import { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import navigation from '../StaticData/Navigation';
function Sidebar({ clicked, handleClick }) {
    const { theme } = useContext(ThemeContext);
    const listRef = useRef([]);


    useEffect(()=>{
        const list = listRef.current.map((element, index)=>{
            return setTimeout(()=>{
                element.classList.add('translate-y-0', 'opacity-100')
                element.classList.remove('-translate-y-5', 'opacity-0')
            }, index * 300)
        })

        return ()=>{
            list.forEach(clearTimeout)
        }
    },[clicked])





    return (
        <div className='w-full h-screen flex overflow-hidden items-center justify-center fixed inset-0 z-20'>
            <div>
                <ul className={`grid gap-10 transition-all duration-300 ${theme === "light" ? 'text-black' : 'text-white'}`} onClick={handleClick}>
                    {navigation.map((item, key) => {
                        return <li key={item.id} ref={(el)=> listRef.current[key] = el} className={`-translate-y-5 opacity-0 duration-300 cursor-pointer transition-all`}>
                            <span className='flex items-end gap-2'>
                                <p>0{item.id}</p>
                                <h2 className='orbitron text-3xl md:text-5xl uppercase group'>
                                    <Link to={item.path}>
                                        {item.label.split("").map(char=>(
                                            char.toLowerCase() === 'o' ? (
                                            <span key={item.label} className='inline-block transition-all duration-300 group-hover:scale-x-125'>{char}</span>
                                        ) : char
                                        ))}
                                    </Link>
                                </h2>
                            </span>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar