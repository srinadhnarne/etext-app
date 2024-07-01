import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward, IoIosCheckbox, IoMdSquareOutline } from 'react-icons/io'
import { themeColors } from '../../assets/themecolors'
import { useColorTheme } from '../../context/colorTheme';
import Options from '../../containers/allprivacy/Options';
import BlockedContacts from '../../containers/allprivacy/BlockedContacts';
import { useNavigate } from 'react-router-dom';
import { useCurrentPage } from '../../context/useCurrentPage';


const Privacy = () => {
  const [LastSeen,setLastSeen] = useState(0);
  const [ProfilePhoto,setProfilePhoto] = useState(0);
  const [About,setAbout] = useState(0);
  const [Groups,setGroups] = useState(0);
  const [readReciepts,setReadReceipts] = useState();
  const [CurrentPrivacy,setPrivacy] = useState(0);
  const {currentColorTheme} = useColorTheme();

  const navigate = useNavigate();
  const {setSettings} = useCurrentPage();

  const setNewPrivacy = (newPrivacy)=>{
    setPrivacy(newPrivacy);
  }

  const setLast = (val)=>{
    setLastSeen(val);
  }

  const setProfile = (val)=>{
    setProfilePhoto(val);
  }

  const setAboutState = (val)=>{
    setAbout(val);
  }

  const setGroupsState = (val)=>{
    setGroups(val);
  }

  const description = 
  [
    '',
    "If you don't share your Last Seen, you won't be able to see other people's Last Seen",
    "Who can see my profile photo",
    "Who can see my about",
    "Who can add me to groups"
  ]
  console.log(CurrentPrivacy);
  const PrivacyOptions = ['Everyone','Contacts','Nobody'];

  return (
    <div className='Settings dashBoard'>
    {
      CurrentPrivacy===0&&
      <>
        <div className='SettingsHeader'>
            <IoIosArrowBack size={30} onClick={()=>{setSettings(0)}}/>
            <div>Privacy</div>
        </div>
        <div className='SettingsTypes'>
          <div className='PrivacyInner' >
              <div className='NotificationsText'>
                <div style={{fontSize:'22px',fontWeight:'500'}}>Last Seen</div>
                <div>{PrivacyOptions[LastSeen]}</div>
              </div>
              <IoIosArrowForward size={25} onClick={()=>{setPrivacy(1)}}/>
          </div>
          <div className='linesettings'></div>
          <div className='PrivacyInner'>
              <div className='NotificationsText'>
                <div style={{fontSize:'22px',fontWeight:'500'}}>Profile Photo</div>
                <div>{PrivacyOptions[ProfilePhoto]}</div>
              </div>
              <IoIosArrowForward size={25} onClick={()=>{setPrivacy(2)}}/>
          </div>
          <div className='linesettings'></div>
          <div className='PrivacyInner'>
              <div className='NotificationsText'>
                <div style={{fontSize:'22px',fontWeight:'500'}}>About</div>
                <div>{PrivacyOptions[About]}</div>
              </div>
              <IoIosArrowForward size={25} onClick={()=>{setPrivacy(3)}}/>
          </div>
          <div className='linesettings'></div>
          <div className='PrivacyInner'>
            <div className='NotificationsText'>
              <div style={{fontWeight:'600'}}>Read Reciepts</div>
            </div>
            <div className='NotificationsCheckbox'>
              {!readReciepts&& 
              <IoMdSquareOutline size={30} style={{color:themeColors[currentColorTheme]}} onClick={()=>setReadReceipts(true)}/>}
              {readReciepts&& 
              <IoIosCheckbox style={{color:themeColors[currentColorTheme]}} size={30} onClick={()=>setReadReceipts(false)}/>}
            </div>
          </div>
          <div className='linesettings'></div>
          <div className='PrivacyInner'>
              <div className='NotificationsText'>
                <div style={{fontSize:'22px',fontWeight:'500'}}>Groups</div>
                <div>{PrivacyOptions[Groups]}</div>
              </div>
              <IoIosArrowForward size={25} onClick={()=>{setPrivacy(4)}}/>
          </div>
          <div className='linesettings'></div>
          <div className='PrivacyInner'>
              <div className='NotificationsText'>
                <div style={{fontSize:'22px',fontWeight:'500'}}>Blocked Contacts</div>
              </div>
              <IoIosArrowForward size={25} onClick={()=>{setPrivacy(5)}}/>
          </div>
        </div>
      </>
    }
    {
      CurrentPrivacy===1?<Options PageName={'Last Seen'} description={description[1]} currentOption={LastSeen} updateOption={setLast} setPrivacy={setNewPrivacy}/>:
      CurrentPrivacy===2?<Options PageName={'Profile Photo'} description={description[2]} currentOption={ProfilePhoto} updateOption={setProfile} setPrivacy={setNewPrivacy}/>:
      CurrentPrivacy===3?<Options PageName={'About'} description={description[3]} currentOption={About} updateOption={setAboutState} setPrivacy={setNewPrivacy}/>:
      CurrentPrivacy===4?<Options PageName={'Groups'} description={description[4]} currentOption={Groups} updateOption={setGroupsState} setPrivacy={setNewPrivacy}/>:
      CurrentPrivacy===5&&<BlockedContacts setPrivacy={setPrivacy}/>
    }
    </div>
  )
}

export default Privacy