import React from 'react'
import { useTheme } from '../../context/useTheme';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useColorTheme } from '../../context/colorTheme';
import { modalCardThemes, themes } from '../../assets/themecolors';

const ProfileCard = ({username,userid,selectProfile}) => {
    const {currentTheme} = useTheme();
    const {currentColorTheme} = useColorTheme();
  return (
    <div 
      className={`ProfileCard`} 
      style={{backgroundColor:`${modalCardThemes[currentTheme]}`,color:themes[1-currentTheme]}}
      onClick={()=>selectProfile(username)}
    >
        {/* <div><img src={} alt='profile img'/></div> */}
        <div><Avatar size={52} icon={<UserOutlined />}/></div>
        <div className='ChatCardText'>
            <div>{username}</div>
        </div>
    </div>
  )
}

export default ProfileCard