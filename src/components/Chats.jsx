import React, { useEffect, useState } from 'react'
import { IoIosCloudCircle } from "react-icons/io";
import { useTheme } from '../context/useTheme';
import {IoArchiveOutline, IoFilterSharp, IoSearch} from 'react-icons/io5'
import { RiChatNewFill  } from "react-icons/ri";
import { useColorTheme } from '../context/colorTheme';
import { chats, pinnedChats } from '../assets/dummydata';
import ChatCard from './cards/ChatCard';
import { inputThemes, titleThemes,themeColors,modalThemes } from '../assets/themecolors';
import { Button, Modal } from 'antd';
import ProfileCard from './cards/ProfileCard';
import { useDropDown } from '../context/useDropdown';
import { useCurrentPage } from '../context/useCurrentPage';

const Chats = () => {
    const {currentTheme} = useTheme();
    const {currentColorTheme}= useColorTheme();
    const {dashboard,setDashBoard} = useCurrentPage();

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const {ChatId} = useCurrentPage();
    const {handleClickOutside} = useDropDown();

    useEffect(()=>{
        setDashBoard(0);
    })

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

    const selectProfile = (user)=>{

    }

  return (
    <div className={`dashBoard ${ChatId&&'sm-hide'}`} id='dashboard' onClick={(e)=>{handleClickOutside(e)}}>
        <div className='chats-box1'>
            <div className='Chats-title'>
                <div>Chats</div>
                <div><IoIosCloudCircle color={currentTheme===0?'black':'white'}/></div>
            </div>
            <div className='searchbar' style={{backgroundColor:`${inputThemes[currentTheme]}`}}>
                <IoSearch/>
                <input style={{backgroundColor:`${inputThemes[currentTheme]}`,color:currentTheme===0?'black':'white'}} placeholder='Search'/>
                <IoFilterSharp/>
            </div>
            <div className='archive'>
                <div><IoArchiveOutline size={22}/></div>
                <div style={{color:themeColors[currentColorTheme]}}>Archived</div>
            </div>
            <div className='line2'></div>
        </div>
        {pinnedChats?.length>0&&<div className='pinnedChatsBox'>
            <div className='pinnedTitle' style={{color:titleThemes[currentTheme]}}>Pinned</div>
            <div className='pinnedChats'>
                {pinnedChats.map((c)=>(
                    <ChatCard 
                        userid={c.userid}
                        username={c.username}
                        lastmessage={c.lastmessage}
                        time={c.lastmessagetime}
                    />
                ))}
            </div>
        </div>}
        <div className='allChatsBox'>
            <div className='allChatsTitle' style={{color:titleThemes[currentTheme]}}>All Chats</div>
            <div className='allChats'>
                {chats.map((c)=>(
                    <ChatCard 
                        userid={c.userid}
                        username={c.username}
                        lastmessage={c.lastmessage}
                        time={c.lastmessagetime}
                        unreadCount={c.unreadCount}
                    />
                ))}
            </div>
        </div>
        {dashboard&&<Button className={`newchatIcon ${ChatId&&'sm-hide'}`} type='primary' style={{backgroundColor:themeColors[currentColorTheme]}} onClick={()=>showModal()}>
            <RiChatNewFill  size={25} color='#000000' style = {{transform: 'rotateY(180deg)' }} onClick={()=>showModal()}/>
        </Button>}
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
                    <ProfileCard username={c.username} userid={c.userid} />
                    ))}
                </div>
            </p>
        </Modal>
    </div>
  )
}

export default Chats