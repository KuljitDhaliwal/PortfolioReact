import { createContext, useState } from "react";


export const effectContext = createContext();


export const EffectProvider = ({children}) =>{
    const [effect, setEffect] = useState(false);
    return(
        <effectContext.Provider value={{effect, setEffect}}>
            {children}
        </effectContext.Provider>
    )
}