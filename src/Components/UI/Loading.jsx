import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

function Loading({height}) {
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`w-full h-full bg-gray-200 ${height}
          animate-pulse text-2xl grid place-items-center rounded-md shadow`}>
            <p className={`${theme === 'light' ? '' : 'text-white'}`}>
                Loading...
            </p>
        </div>
    )
}

export default Loading