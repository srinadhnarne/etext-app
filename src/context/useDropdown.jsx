import React,{createContext,useContext, useEffect, useRef, useState} from "react";

const DropDownContext = createContext();

const DropdownProvider = ({children})=>{
    const [dropdown,setDropdown] = useState(false);
    const [chatDropDown,setChatDrop] = useState(false);
    const [reaction,setReact] = useState(false);
    const boxref = useRef();
    const chatRef = useRef();
    const setDropDown = (val)=>{
        setDropdown(val);
        setReact(val);
    }
    
    const setChatDropDown = (val)=>{
        setChatDrop(val);
    }

    

    const handleClickOutside = (event) => {
        if (!boxref?.current?.contains(event.target)) {
            setDropDown(false);
        }
    };
    useEffect(() => {
        onmousedown = (e)=>{handleClickOutside(e)}
    }, [boxref]);
    
    const handleClickOutside2 = (event) => {
        if(!chatRef?.current?.contains(event.target)){
            setChatDrop(false);
        }
    };
    useEffect(() => {
        onmousedown = (e)=>{handleClickOutside2(e)}
    }, [chatRef]);
    
    useEffect(()=>{
        onscroll = ()=>{setDropDown(false);setChatDrop(false)};
    },[]);

    return(
        <DropDownContext.Provider value={{chatRef,boxref,dropdown,chatDropDown,reaction,setDropDown,setChatDropDown,handleClickOutside}}>
            {children}
        </DropDownContext.Provider>
    )
}

const useDropDown = ()=>useContext(DropDownContext);

export {useDropDown,DropdownProvider};