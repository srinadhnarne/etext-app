import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { themeColors } from '../../assets/themecolors';
import { useColorTheme } from '../../context/colorTheme';
import { useTheme } from '../../context/useTheme';

const Options = ({PageName,description,currentOption,updateOption,setPrivacy}) => {
  const {currentColorTheme} = useColorTheme();
  const {currentTheme} = useTheme();
  const [PrivacyOption,setPrivacyOption] = useState(currentOption);
  return (
    <>
        <div className='SettingsHeader'>
            <IoIosArrowBack size={30} onClick={()=>{ setPrivacy(0)}}/>
            <div>{PageName}</div>
        </div>
        <div className='Description'>
          {description}
        </div>
        <div className='SettingsTypes'>
          <div className='PrivacyOptions' onClick={()=>{setPrivacyOption(0);updateOption(0)}}>
              <div className='OptionOuterCircle'
                style={{borderColor:currentTheme?'white':'black'}}
              >
                <div className='Dot' 
                style={{
                  backgroundColor: PrivacyOption===0&&themeColors[currentColorTheme]
                }}></div>
              </div>
              <div className='NotificationsText'>
                <div style={{fontSize:'22px',fontWeight:'500'}}>Everyone</div>
              </div>
          </div>
          <div className='linesettings'></div>
          <div className='PrivacyOptions' onClick={()=>{setPrivacyOption(1);updateOption(1)}} >
              <div className='OptionOuterCircle'
                style={{borderColor:currentTheme?'white':'black'}}
              >
                <div className='Dot' 
                style={{
                  backgroundColor: PrivacyOption===1&&themeColors[currentColorTheme]
                }}></div>
              </div>
              <div className='NotificationsText'>
                <div style={{fontSize:'22px',fontWeight:'500'}}>Contacts</div>
              </div>
          </div>
          <div className='linesettings'></div>
          <div className='PrivacyOptions' onClick={()=>{setPrivacyOption(2);updateOption(2)}}>
              <div className='OptionOuterCircle'
                style={{borderColor:currentTheme?'white':'black'}}
              >
                <div className='Dot' 
                style={{
                  backgroundColor: PrivacyOption===2&&themeColors[currentColorTheme]
                }}></div>
              </div>
              <div className='NotificationsText'>
                <div style={{fontSize:'22px',fontWeight:'500'}}>Nobody</div>
              </div>
          </div>
        </div>
    </>      
  )
}

export default Options