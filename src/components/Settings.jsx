import { Avatar } from 'antd';
import {UserOutlined} from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { GrNotification } from "react-icons/gr";
import { MdOutlinePhotoSizeSelectActual, MdOutlinePrivacyTip } from 'react-icons/md';
import { GoKey } from "react-icons/go";
import { PiPencilCircle } from "react-icons/pi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import {useLocation, useNavigate} from 'react-router-dom'
import { useCurrentPage } from '../context/useCurrentPage';
import { CiLogout } from 'react-icons/ci';

const Settings = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {dashboard,setDashBoard,setSettings} = useCurrentPage();
    useEffect(()=>{setDashBoard(3);setSettings(0)},[location]);
    return (
    <div className='Settings dashBoard'>
        <div className='SettingsHeader'>
            <div className='lg-hide' onClick={()=>{setDashBoard(0);navigate(-1)}}><IoIosArrowBack size={30}/></div>
            <div>Settings</div>
        </div>
        <div className='SettingsContactInfo'>
            <Avatar size={100} icon={<UserOutlined />}/>
            <div className='SettingsContactDetails'>
                <div style={{fontWeight:'600'}}>Username</div>
                <div>Mobile Number</div>
            </div>
        </div>
        <div className='SettingsTypes'>
            <div className='SettingsTypesInner' onClick={()=>{setSettings(1);}}>
                <GrNotification size={25} />
                <div>Notifications</div>
            </div>
            <div className='linesettings'></div>
            <div className='SettingsTypesInner' onClick={()=>{setSettings(2);}}>
                <MdOutlinePrivacyTip size={25} />
                <div>Privacy</div>
            </div>
            <div className='linesettings'></div>
            <div className="SettingsTypesInner" onClick={()=>{setSettings(3);}}>
                <GoKey />
                <div>Security</div>
            </div>
            <div className='linesettings'></div>
            <div className="SettingsTypesInner" onClick={()=>{setSettings(4);}}>
                <PiPencilCircle/>
                <div>Theme</div>
            </div>
            <div className='linesettings'></div>
            <div className="SettingsTypesInner" onClick={()=>{setSettings(5);}}>
                <MdOutlinePhotoSizeSelectActual />
                <div>Chat Wallpaper</div>
            </div>
            <div className='linesettings'></div>
            <div className="SettingsTypesInner" onClick={()=>{setSettings(6);}}>
                <AiOutlineExclamationCircle />
                <div>Help</div>
            </div>
            <div className='linesettings'></div>
            <div className="SettingsTypesInner" onClick={()=>{setSettings(6);}}>
                <CiLogout />
                <div>Logout</div>
            </div>
        </div>
    </div>
  )
}

export default Settings