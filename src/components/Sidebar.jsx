import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { useColorTheme } from '../context/colorTheme'
import { AiOutlineMessage } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";
import { IoCallOutline,IoSettingsOutline } from "react-icons/io5";
import { Switch } from 'antd';
import { useTheme } from '../context/useTheme';
import { IoMdMore } from 'react-icons/io';
// import { modalCardThemes, themeColors } from '../assets/themecolors';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useCurrentPage } from '../context/useCurrentPage';
import { useDropDown } from '../context/useDropdown';
import { themeColors } from '../assets/themecolors';

const Sidebar = () => {
  const {currentColorTheme} = useColorTheme();
  const {currentTheme,toggleDarkMode} = useTheme();
  const {dashboard,setDashBoard,ChatId,setChatId} = useCurrentPage();
  const {boxref,dropdown,setDropDown,handleClickOutside} = useDropDown();
  const icons = [<AiOutlineMessage size={24}/>,<MdPeopleOutline size={24}/>,<IoCallOutline size={24} />];
  const navAddress = ['/','/groups','/calls','/settings']

  const navigate = useNavigate();

  const [x, setX] = useState();
  const [y, setY] = useState();
  const [width,setWidth] = useState();

  const getPosition = () => {
    const x = boxref?.current?.offsetLeft;
    setX(x);
    const y = boxref?.current?.offsetTop;
    setY(y);
    const width = boxref?.current?.offsetWidth;
    setWidth(width);
  };

  const handleClick = (ind)=>{
    setDashBoard(ind);
    setChatId(null);
    navigate(navAddress[ind]);
  }

  useEffect(() => {
    getPosition(); // Get initial position
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getPosition); // Update position on window resize
  }, []);

  const DropDownMenu = 
  <div
    className='DropDownMenu' 
    style={{width:'max-content',
            top:`${y+25}px`,
            left:`${x-width-96}px`,
            backgroundColor:currentTheme===0?'#ffffff':'#284E79',
            borderRadius: '8px',
            zIndex:1,
            
          }}
  >
    <div className='DropDownMenuItem' onClick={()=>{setDropDown(false);setDashBoard(3);navigate(navAddress[3])}}>Settings</div>
    <div className='DropDownMenuItem' onClick={()=>{setDropDown(false);toggleDarkMode()}}>Change Theme</div>
  </div>

  return (
    <>
      {
      <div className={`sidebar `} onClick={(e)=>{handleClickOutside(e)}}>
        <div className='sidebar-innertop'>
          <div className='sidebar-innertop1'>
            <div className={`sidebar-logo logo-bg`}>
              <img src={logo} alt='app logo'/>
            </div>
            <div className='MoreIco lg-hide' ref={boxref}>
              <IoMdMore size={25} onClick={()=>{setDropDown(!dropdown);}} />
              {dropdown&&DropDownMenu}
            </div>
          </div>
          <div className='sidebar-innertop2'>
            <div className='sidebar-options'>
              {icons.map((item,ind)=>(
                <div 
                  style={{
                    backgroundColor:ind===dashboard&&themeColors[currentColorTheme]
                  }}
                  onClick={()=>{handleClick(ind);}}>
                  {item}
                </div>
              ))}
            </div>
            <div className='line'></div>
            <div className={`gearIco`}
                  onClick={()=>{handleClick(3)}}
                  style={{
                    backgroundColor:3===dashboard&&themeColors[currentColorTheme]
                  }}
            >
              <IoSettingsOutline size={24} />
            </div>
          </div>
        </div>
        <div className='sidebar-innerbottom'>
          <div>
            {currentTheme===1&&<Switch defaultChecked onChange={()=>{toggleDarkMode();}} />}
            {currentTheme===0&&<Switch onChange={()=>{toggleDarkMode();}} />}
          </div>
          <div className='sidebar-profilepic' onClick={()=>navigate('/profile')}>
            <img src={logo} alt='app logo'/>
          </div>
        </div>
      </div>}
    </>
  )
}

export default Sidebar;