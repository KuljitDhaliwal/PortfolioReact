import { useState } from 'react';
import { SidebarContext } from './SidebarContext'
export const SidebarProvider = ({children}) =>{
    const [clicked, setClicked] = useState(false);

    const handleClick = () =>{
        setClicked(!clicked);
    }

    return(
        <SidebarContext.Provider value={{clicked, handleClick, setClicked}}>
            {children}
        </SidebarContext.Provider>
    )
}