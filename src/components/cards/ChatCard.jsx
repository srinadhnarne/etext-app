import React, { useState } from 'react'
import { useTheme } from '../../context/useTheme';
import { Avatar, Badge } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useColorTheme } from '../../context/colorTheme';
import { themes, themeColors, titleThemes } from '../../assets/themecolors';
import { useCurrentPage } from '../../context/useCurrentPage';
import { useNavigate } from 'react-router-dom';

const ChatCard = ({userid,username,lastmessage,time,unreadCount}) => {
    const {currentTheme} = useTheme();
    const {currentColorTheme} = useColorTheme();
    const {ChatId,setChatId} = useCurrentPage();
    const navigate = useNavigate();
    const formatTime = ()=>{
        const splitted = time.split('.')[0].split('T');
        const formattedDate = splitted[0]?.split('-');
        const formattedTime = splitted[1]?.split(':');
        const currentDate = new Date();
        // console.log(currentDate.getFullYear()==formattedDate[0]);
        // eslint-disable-next-line eqeqeq
        if( currentDate.getDate()==formattedDate[2]
            // eslint-disable-next-line eqeqeq
            &&currentDate.getMonth()+1==formattedDate[1]
            // eslint-disable-next-line eqeqeq
            &&currentDate.getFullYear()==formattedDate[0]
        ) return `${formattedTime[0]}:${formattedTime[1]}`;
        // eslint-disable-next-line eqeqeq
        else if(currentDate.getFullYear()==formattedDate[0]) return `${formattedDate[2]}/${formattedDate[1]}`;
        else return `${formattedDate[1]}/${formattedDate[0]}`;
    }
    const neededtime = formatTime();
  return (
    <div className={`ChatCard`} style={{backgroundColor:`${ChatId===userid?themeColors[currentColorTheme]:themes[currentTheme]}`}} onClick={()=>{setChatId(userid);navigate('/chat')}}>
        <div className='ChatCardBox1'>
            {/* <div><img src={} alt='profile img'/></div> */}
            <div><Avatar size={52} icon={<UserOutlined />}/></div>
            <div className='ChatCardText'>
                <div className='ChatCardUsername'>{username}</div>
                <div>{lastmessage.substring(0,25)}{lastmessage.length>25&&'..'}</div>
            </div>
        </div>
        <div className='ChatCardBox2'>
            <div>{neededtime}</div>
            {unreadCount>0&&<Badge style={{boxShadow:'none'}} count={unreadCount} color={'orange'}></Badge>}
        </div>
    </div>
  )
}

export default ChatCard;