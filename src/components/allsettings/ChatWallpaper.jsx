import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import chatbackgrounds from '../../assets/chatbackgrounds/chatbackgrounds'
import { useChatWallpaper } from '../../context/useChatWallpaper'
import { useTheme } from '../../context/useTheme'
import { useNavigate } from 'react-router-dom'
import { useCurrentPage } from '../../context/useCurrentPage'

const ChatWallpaper = () => {
  const {currentWallpaperInd,setWallpaper} = useChatWallpaper();
  const {currentTheme} = useTheme();
  const navigate = useNavigate();
  const {setSettings} = useCurrentPage();
  return (
    <div className='Settings dashBoard'>
        <div className='SettingsHeader'>
            <IoIosArrowBack size={30} onClick={()=>{setSettings(0) }}/>
            <div>Chat Wallpaper</div>
        </div>
        <div>
          Choose Wallpaper
        </div>
        <div className='ChatWallpapers'>
          {
            chatbackgrounds.map((bg,ind)=>(
              <div className='ChatWallpaperCenter'>
                <div className='ChatWallpaperInner'
                    style={{
                      padding:'3px',
                      border:ind===currentWallpaperInd&&`2px solid`,
                      borderColor:currentTheme===0?'black':'white',
                    }}
                    onClick={()=>setWallpaper(ind)}>
                  <img className='WallpaperImg' src={bg} alt={bg}/>
                </div>

              </div>
            ))
          }
        </div>
    </div>
  )
}

export default ChatWallpaper