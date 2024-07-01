import React,{ createContext,useContext,useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider({children}){
    const [currentTheme,setTheme] = useState(0);
    const toggleDarkMode = ()=>{
        setTheme(1-currentTheme);
    };
    return (
            <DarkModeContext.Provider value={{currentTheme,toggleDarkMode}}>
                {children}
            </DarkModeContext.Provider>
    )
}

// custom hook
const useTheme = ()=> useContext(DarkModeContext);

export {useTheme,DarkModeProvider}