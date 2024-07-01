import React,{ createContext,useContext,useEffect,useState } from "react";

const ColorContext = createContext();

function ColorProvider({children}){
    const [currentColorTheme,setThemeInd] = useState(0);
    const setnewTheme = (colorInd)=>{
        setThemeInd(colorInd);
    };
    return (
            <ColorContext.Provider value={{currentColorTheme,setnewTheme}}>
                {children}
            </ColorContext.Provider>
    )
}

// custom hook
const useColorTheme = ()=> useContext(ColorContext);

export {useColorTheme,ColorProvider}