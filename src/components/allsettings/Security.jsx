import React from 'react'
import { IoIosArrowBack, IoIosCloudCircle } from 'react-icons/io'
import { RiLockPasswordLine } from "react-icons/ri";
import { themeColors } from '../../assets/themecolors';
import { useColorTheme } from '../../context/colorTheme';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoCall, IoLocationOutline } from 'react-icons/io5';
import { PiLinkSimpleBreak } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { useCurrentPage } from '../../context/useCurrentPage';


const Security = () => {
  const navigate = useNavigate();
  const {currentColorTheme} = useColorTheme();
  const {setSettings} = useCurrentPage();
  return (
    <div className='Settings dashBoard'>
        <div className='SettingsHeader'>
            <IoIosArrowBack size={30} onClick={()=>{ setSettings(0)}}/>
            <div>Security</div>
        </div>
        <div className='SecurityIcon'>
          <div className='IconBgColour' style={{
            backgroundColor:themeColors[currentColorTheme],
            }} 
          >
            <RiLockPasswordLine size={60}/>
          </div>
        </div>
        <div className='SettingsTypes' >
          <div style={{fontSize:'16px',fontWeight:'500'}}>
            Your Chats and calls are private
          </div>
          <div>
            End-to-end encryption keeps your personal messages & call between you 
            and person you choose to communicate with. Not even talk can read or 
            listen to them. This includes your
          </div>
        </div>
        <div className="SettingsTypes">
          <div className='SecuityItem'>
            <AiOutlineMessage size={25}/>
            <div>Text and voice messages</div>
          </div>
          <div className='linesettings'></div>
          <div className='SecuityItem'>
            <IoCall size={25} />
            <div>Audio & Video Calls</div>
          </div>
          <div className='linesettings'></div>
          <div className="SecuityItem">
            <PiLinkSimpleBreak size={25} />
            <div>Photos, videos & documents</div>
          </div>
          <div className='linesettings'></div>
          <div className="SecuityItem">
            <IoLocationOutline size={25} />
            <div>Location Sharing</div>
          </div>
          <div className='linesettings'></div>
          <div className="SecuityItem">
            <IoIosCloudCircle />
            <div>Status Updates</div>
          </div>
        </div>
    </div>
  )
}

export default Security