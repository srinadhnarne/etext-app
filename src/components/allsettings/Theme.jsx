import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { themeColors } from '../../assets/themecolors'
import { useColorTheme } from '../../context/colorTheme'
import { useTheme } from '../../context/useTheme'
import { useNavigate } from 'react-router-dom'
import { useCurrentPage } from '../../context/useCurrentPage'

const Theme = () => {
  const {currentColorTheme,setnewTheme} = useColorTheme();
  const {currentTheme} = useTheme();
  const navigate = useNavigate();
  const {setSettings} = useCurrentPage();
  return (
    <div className='Settings dashBoard'>
        <div className='SettingsHeader'>
            <IoIosArrowBack size={30} onClick={()=>{ setSettings(0)}}/>
            <div>Theme</div>
        </div>
        <div>
          Choose Theme
        </div>
        <div className='Themes'>
          {themeColors.map((c,index)=>(
            <div className='ThemeInner'>
              <div style={{
                border:index===currentColorTheme&&`2px solid`,
                borderColor:currentTheme===0?'black':'white',
                padding:'4px',
                borderRadius:'50%'
              }} onClick={()=>{setnewTheme(index)}}>
                <div className='IndvidualTheme' style={{backgroundColor:c}}></div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Theme