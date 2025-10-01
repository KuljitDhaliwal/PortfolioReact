import { createContext, useState } from "react";

export const sidebarContext = createContext();

export const SidebarProvider = ({children}) =>{
    const [clicked, setClicked] = useState(false);

    const handleClick = () =>{
        setClicked(!clicked);
    }

    return(
        <sidebarContext.Provider value={{clicked, handleClick, setClicked}}>
            {children}
        </sidebarContext.Provider>
    )
}

