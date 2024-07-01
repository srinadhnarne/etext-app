import React, { useEffect, useState } from 'react'
import { IoCallSharp, IoClose } from 'react-icons/io5'
import { useTheme } from '../context/useTheme';
import { useColorTheme } from '../context/colorTheme';
import { modalCardThemes, themeColors, themes } from '../assets/themecolors';
import { Avatar, Button, Switch } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import { VscDeviceCameraVideo } from 'react-icons/vsc';
import { IoIosArrowForward } from 'react-icons/io';
import { TiStarFullOutline } from "react-icons/ti";
import { MdOutlineNotifications, MdOutlineNotificationsOff } from 'react-icons/md';
import { TbFlag3 } from "react-icons/tb";
import { RiDeleteBinLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useCurrentPage } from '../context/useCurrentPage';
import { chats } from '../assets/dummydata';


const ContactInfo = () => {
    const {currentTheme} = useTheme();
    const {currentColorTheme} = useColorTheme();
    const [notifications,setNotifications] = useState(true);
    const navigate = useNavigate();

    const {ChatId,setRightPanel} = useCurrentPage();
    const [user,setUser] = useState();

    useEffect(()=>{
        const temp = chats.find((c)=>(c.userid===ChatId))
        setUser(temp);
        // console.log(temp);
    },[ChatId]);


  return (
        <div className='RightSidePanel'>
            <div className='RightSidePanelHeader' style={{backgroundColor:`${themes[currentTheme]}`}}>
                <div className='RightSidePanelHeaderInner'>
                    <IoClose size={25} onClick={()=>{setRightPanel(0);navigate(-1)}}/>
                    <div>Contact Info</div>
                </div>
            </div>
            <div className='RightSidePanelContactInfo'>
                <div className='RightSidePanelContactInfoDetails'>
                    <Avatar size={80} icon={<UserOutlined />}/>
                    <div>
                        <div style={{fontWeight:'600'}}>{user?.username}</div>
                        <div>{user?.userid}</div>
                    </div>
                </div>
                <div className='RightSidePanelContactInfoCallIcons'>
                    <VscDeviceCameraVideo size={35} color={`${currentTheme===0?'gray':'white'}`}/>
                    <IoCallSharp size={25} color={`${currentTheme===0?'gray':'white'}`} />
                </div>
            </div>
            <div className='lineSidePanel'></div>
            <div className='AboutSidePanel'>
                <div style={{fontWeight:'bold'}}>About</div>
                <div>Hey there! I am using eText</div>
            </div>
            <div className='lineSidePanel'></div>
            <div className='MediaLinksSidePanel'>
                <div className='MediaLinksSidePanelHeader'>
                    <div style={{fontFamily:'Manrope',fontWeight:'bold'}}>Media,Links,Docs</div>
                    <div className='MediaLinksSidePanelHeaderBox2'onClick={()=>{setRightPanel(2)}}>
                        <div>Count</div>
                        <IoIosArrowForward size={18} />
                    </div>
                </div>
                <div>
                    Media images
                </div>
            </div>
            <div className='lineSidePanel'></div>
            <div className='StarredMessagesSidePanel'>
                <div className='StarredMessagesSidePanelLeft'>
                    <TiStarFullOutline size={18} />
                    <div>Starred Messages</div>
                </div>
                <div>
                    <IoIosArrowForward size={18} onClick={()=>{setRightPanel(3)}}/>
                </div>
            </div>
            <div className='lineSidePanel'></div>
            <div className='StarredMessagesSidePanel'>
                <div className='StarredMessagesSidePanelLeft'>
                    {notifications&&<MdOutlineNotifications size={18} />}
                    {!notifications&&<MdOutlineNotificationsOff size={18} />}
                    <div>Mute Notifications</div>
                </div>
                <div>
                    <Switch onChange={()=>{setNotifications(!notifications);}} />
                </div>
            </div>
            <div className='lineSidePanel'></div>
            <div className='CommonGroupsSidePanel'>
                <div >
                    x groups in common
                </div>
                <div>
                    CommonGroupsCard
                </div>
            </div>
            <div className='SidePanelFooter'>
                <Button 
                    className='SidePanelButton' 
                    style={{border:`1px ${themeColors[currentColorTheme]} solid`, 
                            color:`${themeColors[currentColorTheme]}`,
                            backgroundColor:`${modalCardThemes[currentTheme]}`
                        }}
                >
                    <TbFlag3 /> Block
                </Button>
                <Button 
                    className='SidePanelButton' 
                    style={{border:`1px ${themeColors[currentColorTheme]} solid`, 
                            color:`${themeColors[currentColorTheme]}`,
                            backgroundColor:`${modalCardThemes[currentTheme]}`
                        }}
                >
                    <RiDeleteBinLine /> Delete
                </Button>
            </div>
        </div>
  )
}

export default ContactInfo