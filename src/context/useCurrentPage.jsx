import React,{ createContext,useContext,useEffect,useState } from "react";
import { useLocation } from "react-router-dom";

const CurrentPageContext = createContext();

function CurrentPageProvider({children}){
    const [dashboard,setMain] = useState(0);
    const [ChatId,setChat] = useState(null);
    const [RightPanel,setRight] = useState(0);
    const [Setting,setSetingsPage] = useState(0);
    const location = useLocation();
    const navAddress = ['/','/groups','/calls','/settings']

    useEffect(()=>{
        if(location.pathname!=='/chat'){
        navAddress.map((p,ind)=>{if(location.pathname.includes(p)) setDashBoard(ind);});setRightPanel(0);}
    },[location]);

    const setDashBoard = (val)=>{
        setMain(val);
    }

    const setChatId = (val)=>{
        setChat(val);
    }

    const setRightPanel = (val)=>{
        setRight(val)
    }
    
    const setSettings = (val)=>{
        setSetingsPage(val)
    }

    return (
            <CurrentPageContext.Provider 
                value={{
                    dashboard,setDashBoard,
                    ChatId,setChatId,
                    RightPanel,setRightPanel,
                    Setting,setSettings
                }}
            >
                {children}
            </CurrentPageContext.Provider>
    )
}

// custom hook
const useCurrentPage = ()=> useContext(CurrentPageContext);

export {useCurrentPage,CurrentPageProvider}