import React from 'react'
import { themes } from '../../assets/themecolors'
import { useColorTheme } from '../../context/colorTheme'
import { useTheme } from '../../context/useTheme';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { IoCall, IoCallOutline } from 'react-icons/io5';

const CallCard = ({userid,username,calltime,callStatus,callby}) => {
    const {currentColorTheme} = useColorTheme();
    const {currentTheme} = useTheme();
  return (
    <div className={`CallCard`} style={{backgroundColor:`${themes[currentTheme]}`}}>
        <div className='CallCardBox1'>
            {/* <div><img src={} alt='profile img'/></div> */}
            <div><Avatar size={52} icon={<UserOutlined />}/></div>
            <div className='CallCardText'>
                <div>{username}</div>
                <div>
                    <div>icon</div>
                    <div>{calltime}</div>
                </div>
            </div>
        </div>
        <div className='CallCardBox2'>
            <div><IoCall size={17} color='rgb(3,192,60)'/></div>
        </div>
    </div>
  )
}

export default CallCard