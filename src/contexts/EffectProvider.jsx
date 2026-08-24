import { useState } from "react";
import { EffectContext } from "./EffectContext";

export const EffectProvider = ({children}) =>{
    const [effect, setEffect] = useState(false);
    return(
        <EffectContext.Provider value={{effect, setEffect}}>
            {children}
        </EffectContext.Provider>
    )
}