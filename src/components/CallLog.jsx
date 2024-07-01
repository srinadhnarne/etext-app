import React, { useEffect, useState } from 'react'
import { useTheme } from '../context/useTheme'
import { inputThemes, modalThemes, themeColors } from '../assets/themecolors'
import { IoCall, IoSearch } from 'react-icons/io5'
import { useColorTheme } from '../context/colorTheme'
import { chats } from '../assets/dummydata'
import CallCard from './cards/CallCard'
import { Modal } from 'antd'
import ProfileCard from './cards/ProfileCard'
import { useCurrentPage } from '../context/useCurrentPage'

const CallLog = () => {
    const {currentTheme} = useTheme();
    const {currentColorTheme}= useColorTheme();

    const {setDashBoard} = useCurrentPage();

    useEffect(()=>{setDashBoard(2)},[]);

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const showModal = () => {
        setOpen(true);
      };
    
      const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
          setOpen(false);
          setConfirmLoading(false);
        }, 2000);
      };
    
      const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
      };
  return (
    <div className='CallLog dashBoard'>
        <div className='callog-box1'>
            <div className='CallLog-title'>
                <div>Call Log</div>
            </div>
            <div className='searchbar' style={{backgroundColor:`${inputThemes[currentTheme]}`}}>
                <IoSearch/>
                <input style={{backgroundColor:`${inputThemes[currentTheme]}`,color:currentTheme===0?'black':'white'}} placeholder='Search'/>
            </div>
            <div className='callLog-newcall' style={{color:themeColors[currentColorTheme]}}>
                <div onClick={showModal}>Start new Conversation</div>
                <div onClick={showModal}><IoCall size={17}/></div>
                <Modal
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    footer={null}
                    closeIcon={null}
                    className='newConversationModal'
                >
                    <p className='newConvmodalInner' style={{backgroundColor:modalThemes[currentTheme]}}>
                        <div className='searchbar' style={{backgroundColor:`${inputThemes[currentTheme]}`,width:'100%'}}>
                            <IoSearch color={`${currentTheme===0?'black':'white'}`}/>
                            <input style={{backgroundColor:`${inputThemes[currentTheme]}`,color:currentTheme===0?'black':'white'}}/>
                        </div>
                        <div className='allProfiles'>
                            {chats.map((c)=>(
                                <ProfileCard username={c.username} userid={c.userid} selectProfile={handleCancel}/>
                            ))}
                        </div>
                    </p>
                </Modal>
            </div>
            <div style={{width:"100%", height:"2px", backgroundColor:"gray"}}></div>
        </div>
        <div className='callog-box2'>
            {chats.map((c)=>(
                <CallCard username={c.username}/>
            ))}
        </div>
    </div>
  )
}

export default CallLog