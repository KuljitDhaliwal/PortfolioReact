import { useContext } from "react"
import { themeContext } from "../../contexts/ThemeContext"

export const Button = ({className, children, onClick}) => {
    const {theme} = useContext(themeContext)
    return(
        <button onClick={onClick} className={`rounded-md shadow ${theme === 'dark' ? 'bg-[#828181]' : 'bg-[#f6f6f6]'} p-2 cursor-pointer ${className}`}>{children}</button>
    )
}