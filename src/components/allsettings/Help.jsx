import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { PiFingerprint } from 'react-icons/pi'
import { themeColors } from '../../assets/themecolors'
import { useColorTheme } from '../../context/colorTheme'
import { useNavigate } from 'react-router-dom'
import { useCurrentPage } from '../../context/useCurrentPage'

const Help = () => {
  const {currentColorTheme} = useColorTheme();
  const {setSettings} = useCurrentPage();
  const navigate = useNavigate();
  return (
    <div className='Settings dashBoard'>
        <div className='SettingsHeader'>
            <IoIosArrowBack size={30} onClick={()=>{setSettings(0)}}/>
            <div>Help</div>
        </div>
        <div className='SecurityIcon'>
          <div className='IconBgColour' style={{
            backgroundColor:themeColors[currentColorTheme],
            }} 
          >
            <PiFingerprint size={65} />
          </div>
        </div>
        <div className="SettingsTypes">
          <div className='SecuityItem'>
            <div>Help Center</div>
          </div>
          <div className='linesettings'></div>
          <div className='SecuityItem'>
            <div>Contact Us</div>
          </div>
          <div className='linesettings'></div>
          <div className="SecuityItem">
            <div>Licenses</div>
          </div>
          <div className='linesettings'></div>
          <div className="SecuityItem">
            <div>Terms and Privacy Policy</div>
          </div>
        </div>
    </div>
  )
}

export default Help