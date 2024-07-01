import React from 'react'
import { useTheme } from '../context/useTheme';
import Sidebar from '../components/Sidebar';
import Chats from '../components/Chats';
import Chat from '../components/Chat';
import { useCurrentPage } from '../context/useCurrentPage';
import Groups from '../components/Groups';
import CallLog from '../components/CallLog';
import Settings from '../components/Settings';
import Notifications from '../components/allsettings/Notifications';
import Privacy from '../components/allsettings/Privacy'
import Security from '../components/allsettings/Security';
import Theme from '../components/allsettings/Theme'
import ChatWallpaper from '../components/allsettings/ChatWallpaper';
import Help from '../components/allsettings/Help';

const Layout = ({children}) => {
    const {currentTheme} = useTheme();
    const {ChatId,dashboard,RightPanel,Setting} = useCurrentPage();
    // console.log(dashboard);
  return (
    <div className={`${currentTheme===0?'light':'dark'} layout`}>
        <div className={(dashboard===3||((dashboard===0||dashboard===1)&&ChatId))&&'sm-hide'} style={{width:'129px'}}><Sidebar/></div>
        <div className='layoutChild'>
            {dashboard===0&&<Chats/>}
            {dashboard===1&&<Groups/>}
            {dashboard===2&&<CallLog/>}
            {
              dashboard===3&&(
                Setting===0?<Settings/>:
                Setting===1?<Notifications/>:
                Setting===2?<Privacy/>:
                Setting===3?<Security/>:
                Setting===4?<Theme/>:
                Setting===5?<ChatWallpaper/>:
                Setting===6&&<Help/>
              )
            }
            <div className={(dashboard>1||RightPanel!==0)&&`sm-hide`} style={{width:RightPanel!==0&&`635px`}}><Chat/></div>
            {RightPanel!==0&&<div >{children}</div>}
        </div>
    </div>
  )
}

export default Layout