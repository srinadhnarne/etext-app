import React, { useEffect, useState } from 'react'
import { useTheme } from '../context/useTheme';
import { useColorTheme } from '../context/colorTheme';
import { inputThemes, modalCardThemes, modalThemes, themeColors, titleThemes } from '../assets/themecolors';
import { IoArchiveOutline, IoSearch } from 'react-icons/io5';
import { chats, pinnedChats } from '../assets/dummydata';
import ChatCard from './cards/ChatCard';
import ProfileCard from './cards/ProfileCard';
import { Avatar, Button, Input, Modal } from 'antd';
import { AiOutlinePlus } from "react-icons/ai";
import { UserOutlined } from '@ant-design/icons';
import { RxCross2 } from "react-icons/rx";
import { useCurrentPage } from '../context/useCurrentPage';

const Groups = () => {
    const {currentTheme} = useTheme();
    const {currentColorTheme}= useColorTheme();
    const [groupName,setgroupName] = useState('');
    const [selectedUsers,setSelectedUsers] = useState([]);
    const [addUser,setaddUser] = useState('');
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const {setDashBoard} = useCurrentPage();

    useEffect(()=>{setDashBoard(1)},[]);

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
        setaddUser('');
        setSelectedUsers([]);
        setgroupName('');
        setOpen(false);
      };



      const handleFocus = (e)=>{
        const element = document.getElementById('span-input');
        e?.target?.id==='focused'?element.style.outline='1px rgba(38, 107, 255, 0.975) solid':
            element.style.outline='1px lightgray solid';
      }

      const handleAdd = (e)=>{
        if(e.key==='Enter') {
            setSelectedUsers([...selectedUsers,addUser]);
            setaddUser('');
        }
      }

      const handleDeleteUser = (e)=>{
        setSelectedUsers(selectedUsers.filter(u=>u!==e));
      }

      const handleInputFocus = ()=>{
        const element = document.getElementById('focused');
        element.focus();
      }

  return (
    <div className={`dashBoard`}>
        <div className='group-box1'>
            <div className='Chats-title'>
                <div>Groups</div>
            </div>
            <div className='searchbar' style={{backgroundColor:`${inputThemes[currentTheme]}`}}>
                <IoSearch/>
                <input style={{backgroundColor:`${inputThemes[currentTheme]}`,color:currentTheme===0?'black':'white'}} placeholder='Search'/>
            </div>
            <div className='callLog-newcall' style={{color:`${themeColors[currentColorTheme]}`}}>
                <div onClick={showModal}>Create new group</div>
                <div onClick={showModal}><AiOutlinePlus/></div>
                <Modal
                    open={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                    footer={null}
                    className='newGroupModal'
                >
                    <p className='newGroupInner' style={{backgroundColor:modalThemes[currentTheme], color:currentTheme===0?'black':'white'}} onClick={(e)=>handleFocus(e)}>
                        <h2 >
                            Create new group
                        </h2>
                        <div className='groupInputs'>
                            <div>
                                <div>
                                    Name
                                </div>
                                <Input value={groupName} onChange={(e)=>setgroupName(e.target.value)} placeholder="Group Name" style={{backgroundColor:`${inputThemes[currentTheme]}`,color:currentTheme===0?'black':'white'}}/>
                            </div>
                            <div>
                                <div>Members</div>
                                <span 
                                    style={{backgroundColor:`${inputThemes[currentTheme]}`,
                                            color:currentTheme===0?'black':'white'
                                        }}
                                        id='span-input'
                                        onClick={handleInputFocus}
                                >
                                    {selectedUsers?.map((u)=>(
                                        <div className='GroupProfilecard' style={{backgroundColor:modalCardThemes[currentTheme]}}>
                                            <div>
                                                <Avatar size={30} icon={<UserOutlined />}/>
                                            </div>
                                            <div>{u.substring(0,3)}{u.length>3&&'..'}</div>
                                            <Button onClick={()=>handleDeleteUser(u)} style={{padding:'5px',borderRadius:'50%', backgroundColor:'rgba(145, 158, 171, 0.2)'}}>
                                                <RxCross2 size={20} onClick={()=>handleDeleteUser(u)} style={{color:currentTheme===0?'black':'white'}}/>

                                            </Button>
                                        </div>
                                    ))}
                                    <Input id='focused' variant="borderless" onClick={(e)=>handleFocus(e)} 
                                        style={{color:currentTheme===0?'black':'white'}}
                                        onKeyDown={(e)=>handleAdd(e)}
                                        onChange={(e)=>setaddUser(e.target.value)}
                                        value={addUser}
                                    />
                                </span>
                            </div>
                            <div style={{display:'flex',justifyContent:'right'}}>
                                <Button 
                                    style={{
                                        border:`1px ${themeColors[currentColorTheme]} solid`, 
                                        color:`${themeColors[currentColorTheme]}`,
                                        backgroundColor:`${modalCardThemes[currentTheme]}`
                                    }}
                                >Create</Button>
                            </div>
                        </div>
                    </p>
                </Modal>
            </div>
            <div className='archive'>
                <div><IoArchiveOutline size={22}/></div>
                <div style={{color:themeColors[currentColorTheme]}}>Archived</div>
            </div>
            <div style={{width:"100%", height:"2px", backgroundColor:"gray"}}></div>
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
            <div className='allChatsTitle' style={{color:titleThemes[currentTheme]}}>All Groups</div>
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
    </div>
  )
}

export default Groups