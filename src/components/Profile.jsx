import { Button, Input } from 'antd'
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { inputThemes, modalCardThemes, themeColors, themes, titleThemes } from '../assets/themecolors'
import { useTheme } from '../context/useTheme'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea'
import { useColorTheme } from '../context/colorTheme'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const {currentTheme} = useTheme();
    const {currentColorTheme} = useColorTheme();
    const navigate = useNavigate();
  return (
    <div className='Profile dashBoard'>
        <div className='ProfileBox1'>
            <IoIosArrowBack size={35} 
                style={{background:'transparent',color:themes[1-currentTheme]}}
                onClick={()=>{navigate(-1)}}
            />
            <div className='Profile-title'>
                Profile
            </div>
        </div>
        <div className='ProfileInfoBox'>
            <div><Avatar size={100} icon={<UserOutlined />}/></div>
            <div className='ProfileName'>
                <div style={{fontFamily:'Manrope',fontSize:'16px'}}>Name</div>
                <Input style={{height:'36px',backgroundColor:inputThemes[currentTheme],color:currentTheme===0?'black':'white'}}/>
                <div style={{color:titleThemes[currentTheme]}}>This name is visible to your contacts</div>
            </div>
            <div className='AboutProfile' >
                <div style={{fontFamily:'Manrope',fontSize:'16px'}}>About</div>
                <TextArea style={{height:'100px',backgroundColor:inputThemes[currentTheme],color:currentTheme===0?'black':'white'}}/>
            </div>
        </div>
        <div style={{display:'flex',justifyContent:'flex-end',width:'100%'}}>
            <Button 
                style={{backgroundColor:modalCardThemes[currentTheme],
                color:themeColors[currentColorTheme],
                padding:'18px', 
                fontFamily: 'Public Sans',
                fontSize: '15px',
                fontWeight: '700',
                lineHeight: '26px'
                }}
            >
                Save
            </Button>
        </div>
    </div>
  )
}

export default Profile