import React,{createContext,useContext, useState} from "react";

const ChatWallpaperContext = createContext();

function ChatWallpaperProvider({children}){
    const [currentWallpaperInd,setWallpaperInd] = useState(null);
    
    const setWallpaper = (id)=>{
        setWallpaperInd(id);
    }

    return (
        <ChatWallpaperContext.Provider value={{currentWallpaperInd,setWallpaper}}>
            {children}
        </ChatWallpaperContext.Provider>
    )
}
const useChatWallpaper = ()=>useContext(ChatWallpaperContext);
export {useChatWallpaper,ChatWallpaperProvider};