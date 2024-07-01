import React, { useState } from 'react'
import { IoIosArrowBack, IoIosCheckbox, IoMdSquareOutline } from 'react-icons/io'
import { themeColors } from '../../assets/themecolors';
import { useColorTheme } from '../../context/colorTheme';
import { useNavigate } from 'react-router-dom';
import { useCurrentPage } from '../../context/useCurrentPage';

const Notifications = () => {
  const [Notification,setNotification] = useState(false);
  const [Preview,SetPreview] = useState(false);
  const [Reaction,SetReaction] = useState(false);
  const [IncomingRintone,setIncomingRingtone] = useState(false);
  const [Sounds,setSounds] = useState(false);
  const {currentColorTheme} = useColorTheme();
  const navigate = useNavigate();
  const {setSettings} = useCurrentPage();

  return (
    <div className='Settings dashBoard'>
        <div className='SettingsHeader'>
            <IoIosArrowBack size={30} onClick={()=>{ setSettings(0)}}/>
            <div>Notifications</div>
        </div>
        <div className='SettingsTypes'>
          <div className='NotificationsInner' >
              <div className='NotificationsText'>
                <div style={{fontWeight:'600'}}>Notifications</div>
                <div>Show notifications for new messages</div>
              </div>
              <div className='NotificationsCheckbox'>
                {!Notification&& 
                <IoMdSquareOutline size={30} style={{color:themeColors[currentColorTheme]}} onClick={()=>setNotification(true)}/>}
                {Notification&& 
                <IoIosCheckbox style={{color:themeColors[currentColorTheme]}} size={30} onClick={()=>setNotification(false)}/>}
              </div>
          </div>
          <div className='linesettings'></div>
          <div className='NotificationsInner' >
              <div className='NotificationsText'>
                <div style={{fontWeight:'600'}}>Show Previews</div>
              </div>
              <div className='NotificationsCheckbox'>
                {!Preview&& 
                <IoMdSquareOutline size={30} style={{color:themeColors[currentColorTheme]}} onClick={()=>SetPreview(true)}/>}
                {Preview&& 
                <IoIosCheckbox style={{color:themeColors[currentColorTheme]}} size={30} onClick={()=>SetPreview(false)}/>}
              </div>
          </div>
          <div className='linesettings'></div>
          <div className='NotificationsInner' >
              <div className='NotificationsText'>
                <div style={{fontWeight:'600'}}>Show Reaction Notifications</div>
              </div>
              <div className='NotificationsCheckbox'>
                {!Reaction&& 
                <IoMdSquareOutline size={30} style={{color:themeColors[currentColorTheme]}} onClick={()=>SetReaction(true)}/>}
                {Reaction&& 
                <IoIosCheckbox style={{color:themeColors[currentColorTheme]}} size={30} onClick={()=>SetReaction(false)}/>}
              </div>
          </div>
          <div className='linesettings'></div>
          <div className='NotificationsInner' >
              <div className='NotificationsText'>
                <div style={{fontWeight:'600'}}>Incoming Call Ringtone</div>
              </div>
              <div className='NotificationsCheckbox'>
                {!IncomingRintone&& 
                <IoMdSquareOutline size={30} style={{color:themeColors[currentColorTheme]}} onClick={()=>setIncomingRingtone(true)}/>}
                {IncomingRintone&& 
                <IoIosCheckbox style={{color:themeColors[currentColorTheme]}} size={30} onClick={()=>setIncomingRingtone(false)}/>}
              </div>
          </div>
          <div className='linesettings'></div>
          <div className='NotificationsInner' >
              <div className='NotificationsText'>
                <div style={{fontWeight:'600'}}>Sounds</div>
                <div>Play sounds for incoming messages</div>
              </div>
              <div className='NotificationsCheckbox'>
                {!Sounds&& 
                <IoMdSquareOutline size={30} style={{color:themeColors[currentColorTheme]}} onClick={()=>setSounds(true)}/>}
                {Sounds&& 
                <IoIosCheckbox style={{color:themeColors[currentColorTheme]}} size={30} onClick={()=>setSounds(false)}/>}
              </div>
          </div>
        </div>
    </div>
  )
}

export default Notifications