import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { FaPlus } from "react-icons/fa6";
import { inputThemes, modalCardThemes, modalThemes, themeColors } from '../../assets/themecolors';
import { useColorTheme } from '../../context/colorTheme';
import { Avatar, Button, Modal } from 'antd';
import { IoClose, IoSearch } from 'react-icons/io5';
import { useTheme } from '../../context/useTheme';
import { chats } from '../../assets/dummydata';
import ProfileCard from '../../components/cards/ProfileCard';
import { RxCross2 } from 'react-icons/rx';
import { UserOutlined } from '@ant-design/icons';

const BlockedContacts = ({setPrivacy}) => {
    const [Blocked,setBlocked] = useState(['d','sf']);
    const {currentColorTheme} = useColorTheme();
    const {currentTheme} = useTheme();

    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const showModal = () => {
        setOpen(true);
    };
    
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    
    const handleCancel = () => {
        setOpen(false);
    };
    
    const selectProfile = (user)=>{
        console.log(user);
        if(user)setBlocked([...Blocked,user]);
        // Add api call and socket
        setOpen(false);
    }

    const handleDeleteUser = (e)=>{
        setBlocked(Blocked.filter(u=>u!==e));
        // Add api call and socket
    }


  return (
    <>
        <div className='SettingsHeader'>
            <IoIosArrowBack size={30} onClick={()=>{ setPrivacy(0)}}/>
            <div>Blocked Contacts</div>
        </div>
        <div className='callLog-newcall' style={{color:themeColors[currentColorTheme]}}>
            <div onClick={showModal}>Block New Contact</div>
            <FaPlus size={17} onClick={showModal}/>
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
                            <ProfileCard username={c.username} userid={c.userid} selectProfile={selectProfile}/>
                        ))}
                    </div>
                </p>
            </Modal>
        </div>
        {   Blocked?.length>0&&
            <div className='AllBlockedContacts'>
                {
                    Blocked.map((bc)=>(
                    <div className='BlockedContact' style={{backgroundColor:modalCardThemes[currentTheme]}}>
                        <div className='BlockedDetails' >
                            <Avatar size={40} icon={<UserOutlined />}/>
                            <div>{bc.substring(0,15)}{bc.length>3&&'..'}</div>
                        </div>
                        <div className='BlockedDetails' >
                            <Button onClick={()=>handleDeleteUser(bc)} style={{padding:'5px',borderRadius:'50%', backgroundColor:'rgba(145, 158, 171, 0.2)'}}>
                                <RxCross2 size={20} onClick={()=>handleDeleteUser(bc)} style={{color:currentTheme===0?'black':'white'}}/>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        }
    </>    
  )
}

export default BlockedContacts