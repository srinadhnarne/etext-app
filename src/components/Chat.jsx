import { Avatar, Badge, Button, Dropdown, Input, Progress, theme } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react'
import { VscDeviceCameraVideo } from 'react-icons/vsc'
import { inputThemes,  linkThemes,  messageThemes, modalCardThemes, paymentThemes, themeColors, themes } from '../assets/themecolors';
import { useTheme } from '../context/useTheme';
import { IoCallSharp, IoClose, IoDocumentTextSharp } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { IoIosArrowBack, IoIosArrowDown, IoMdClose, IoMdDocument } from 'react-icons/io';
import { useColorTheme } from '../context/colorTheme';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FiLink } from 'react-icons/fi';
import { FaAngleDown, FaFile, FaFilePdf, FaImages } from "react-icons/fa6";
import { chats, personalChat } from '../assets/dummydata';
import { useChatWallpaper } from '../context/useChatWallpaper';
import chatbackgrounds from '../assets/chatbackgrounds/chatbackgrounds';
import { useDropDown } from '../context/useDropdown';
import {  useNavigate } from 'react-router-dom';
import { useCurrentPage } from '../context/useCurrentPage';
import { MdOutlineFileDownload } from 'react-icons/md';
import { SiMicrosoftexcel, SiMicrosoftword } from 'react-icons/si';
import { TbCoinRupeeFilled, TbCurrencyRupee } from 'react-icons/tb';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
    const { currentTheme } = useTheme();
    const { currentColorTheme } = useColorTheme();
    const {currentWallpaperInd,setWallpaper} = useChatWallpaper();
    const myUSerId = '1';
    const [toUserName, setToUserName] = useState('');
    const { ChatId,setChatId,RightPanel,setRightPanel} = useCurrentPage();
    const {chatRef,chatDropDown,setChatDropDown} = useDropDown();
    const [starred,setStarred] = useState();
    const [sendMessage,setSendMessage] = useState('');

    const navigate = useNavigate();

    const [x, setX] = useState();
    const [y, setY] = useState();
    const [right,setRight] = useState();
    const [height,setHeight] = useState(16);

    const getPosition = (e) => {
        // console.log(e);
        // console.log(window.innerHeight);
        const x = e.clientX;
        setX(x);
        const y = e.clientY;
        setY(y);
        const classList = e.target.classList;
        if(classList?.value.includes('right')) setRight(-120);
        else setRight(0);
        if(window.innerHeight-y<200) setHeight(-200);
        else setHeight(10);
    };
    
    window.onresize=()=>{
        const element = document.getElementById(starred);
        if(element){
            setX(element.offsetLeft);
            setY(element.offsetTop);
        }
        if(window.innerWidth<=800)setRightPanel(0);
    }

    const [Attach,setAttach] = useState(null);
    const [doc,setDoc] = useState(null);

    const handleAttach = (e)=>{
        if(Attach!==null) setAttach(null);
        else setAttach({x:e.clientX,y:e.clientY})
    }

    const AttachDiv = 
    <div className='attachDiv' style={{
    }}>
        <div className='attachInner'>
            <div style={{padding:'6px',backgroundColor:paymentThemes[currentTheme],borderRadius:'8px'}}>
                <label >
                    <input type='file' name='photo' accept='image/*' multiple={true} onChange={(e)=>{setDoc(e.target.files);}} hidden/>
                    <FaImages size={30} color='rgb(0,114,187)'/>
                </label>
            </div>
            <div>Image</div>
        </div>
        <div className='attachInner'>
            <div style={{padding:'6px',backgroundColor:paymentThemes[currentTheme],borderRadius:'8px'}}>
                <label>
                    <input type='file' name='doc' multiple={true} onChange={(e)=>{setDoc(e.target.files);}} hidden/>
                    <IoDocumentTextSharp size={30} color='rgb(224,60,49)' />
                </label>
            </div>
            <div>Document</div>
        </div>
    </div>



    // To be updated after integrationg with Backend
    const StarMessage = ()=>{
        personalChat.map((item)=>{
            if(item.id===starred){
                if(item.from.id===myUSerId) item.starred.from.id=true;
                if(item.to.id===myUSerId) item.starred.to.id=true;
            }
            return 1;
        })
        setChatDropDown(false);
    }

    // To be updated after integrationg with Backend
    const handleReactionClick = (e)=>{
        const find = personalChat.findIndex((item)=>(
            item.id===starred&&
            item?.reactions?.map((r)=>(
                r===e.emoji
            )))
        )
        if(find===-1){personalChat.map((item)=>{
            if(item.id===starred){
                if(item?.reactions.length>0) item.reactions.push(e.emoji);
                else {
                    item={...item,reactions:[e.emoji]};
                }
            }
        })} else {
            personalChat[find].reactions.filter((item)=>(item!==e.emoji));
            console.log(personalChat[find]);
        }
        return 1;
    }


    const [Reply,setReply] = useState(null);
    const replyDiv = 
    <div className='replyDiv' id={Reply}>
        {
            <div className='replyDivInner' 
                style={{
                    backgroundColor:paymentThemes[currentTheme],
                    borderLeft:`2px ${themeColors[currentColorTheme]} solid`
                }}
            >
                <div>
                    <div style={{color:themeColors[currentColorTheme]}}>
                        {
                            Reply&&personalChat[Reply].from.name
                        }
                    </div>
                    <IoClose size={20} onClick={()=>{setReply(null)}}/>
                </div>
                <div>
                    {Reply&&personalChat[Reply].dataType!=='text'&&
                    <div>
                        {
                            personalChat[Reply].dataType==='img'?
                                <img src={personalChat[Reply].document} alt='reply_img'/>:
                            personalChat[Reply].dataType==='pdf'?
                                <FaFilePdf id={personalChat[Reply].id} size={26} style={{color:'red'}}/>:
                            personalChat[Reply].dataType==='excel'?
                                <SiMicrosoftexcel id={personalChat[Reply].id} size={26} style={{color:'green'}}/>:
                            personalChat[Reply].dataType==='word'?
                                <SiMicrosoftword id={personalChat[Reply].id} size={26} style={{color:'blue'}}/>:
                            personalChat[Reply].dataType==='payment'?
                                <TbCoinRupeeFilled id={personalChat[Reply].id} size={30} color={personalChat[Reply].success?'rgb(76, 175, 80,0.8)':'rgb(244, 67, 54,0.8)'}/>:
                            <FaFile id={personalChat[Reply].id} size={26}/>
                        }
                    </div>}
                    <div>
                        {personalChat[Reply]?.message?.length>100?personalChat[Reply]?.message.substr(0,100):personalChat[Reply]?.message}
                    </div>
                </div>
            </div>
        }
    </div>
    const handleReply = ()=>{
        const dv = document.getElementById(`${starred}message`)||document.getElementById(`${starred}`);
        const ind = Number(dv.id.replace('message',''))-1;
        setReply(ind);
        setChatDropDown(false);
    }

    const DropDownMenu = 
    <div className='DropDownMenu'
        style={{width:'auto',
                top:`${y+(height/2)}px`,
                left:`${x+right}px`,
                backgroundColor:currentTheme===0?'#ffffff':'#206E99',
                borderRadius:'4px',
            }}
            ref={chatRef}
    >
        <div className='DropDownMenuItem' onClick={()=>handleReply()}>Reply</div>
        <div className='DropDownMenuItem'  onClick={()=>{StarMessage()}}>Star Message</div>
    </div>


    const getChats = () => {
        const chat = chats.filter((c) => {
            return c.userid === ChatId
        });
        setToUserName(chat[0]?.username);
    }

    useEffect(() => {
        getChats();
        document.getElementsByClassName('ChatMessages')[0]?.scrollTo(window.innerWidth,window.innerHeight);
    }, [ChatId]);

    const timeRef = useRef();
    const isLongPress = useRef(false);

    const startTimer = ()=>{
        timeRef.current = setTimeout(()=>{
            isLongPress.current = true;
        },200);
    }

    const handleMobile = (e)=>{
        if(isLongPress.current) handleClick(e);
        isLongPress.current=false;
    }

    const handleClick = (e)=>{
        // console.log(e)
        getPosition(e);
        setChatDropDown(true);
        // console.log(x,y);
        setStarred(e.target.id||
            e.target.parentNode.id||
            e.target.parentNode.parentNode.id);
    }

    const handleWidth = (e)=>{
        const element = document.getElementById(e.target.id);
        document.getElementById(e.target.id).style.height='26px';
        document.getElementById(e.target.id).style.height=(element.scrollHeight)+'px';
    }

    const fetchDate = (val)=>{
        const DateArr = val.split('T')[0].split('-');
        const CurrDate = new Date();
        if(CurrDate.getFullYear()>Number(DateArr[0])) return `${DateArr[1]}/${DateArr[0]}`
        // else if(CurrDate.getMonth()+1>Number(DateArr[1])) return `${DateArr[2]}/${DateArr[1]}`
        // return DateArr[2];
        return `${DateArr[2]}/${DateArr[1]}`
    }

    const fetchTime = (val)=>{
        const TimeArr = val.split('T')[1].split('.')[0].split(':');
        // console.log(TimeArr);
        const hrs = TimeArr[0]<='12'?TimeArr[0]:Number(TimeArr[0])-12;
        return hrs+':'+TimeArr[1]+` ${TimeArr[0]>12?'p.m':'a.m'}`
    }

    
    const [DownLoaded,setDownloaded] = useState(0);
    const handleDownload = ()=>{
        let it = 1;
        const temp = setInterval(()=>{
            setDownloaded(it=it+40);
            if(it>=100) {clearInterval(temp);}
        },1000);
    }

    const [expandedImgUrl,setImageUrl] = useState(null);
    const expandedImage = 
    <div className='expandedView'>
        <div onClick={()=>setImageUrl(null)}>
            <IoMdClose size={26}/>
        </div>
        <img src={expandedImgUrl} alt='expanded_img'/>
    </div>
    const handleImageView = (imgurl)=>{
        setImageUrl(imgurl);
    }


    return (
        <>
            {ChatId != null && 
            <div className={`ChatContainer`}>
                    <EmojiPicker 
                    style={{
                        width: 'fit-content',
                        zIndex:'999',
                        position:'fixed',
                        top:`${y+(height/2)-50}px`,
                        left:`${x+350>window.innerWidth?window.innerWidth-350:x}px`,
                    }}
                    autoFocusSearch={false}
                    theme={currentTheme===1?'dark':'light'}
                    ref={chatRef}
                    open={chatDropDown}
                    reactionsDefaultOpen={true}
                    allowExpandReactions={false}
                    onReactionClick={(e)=>{handleReactionClick(e)}}
                />
                <div className='Chat' id='chat'>
                    <div className='ChatHeader' style={{ backgroundColor: `${themes[currentTheme]}` }}>
                        <div className='chatHeaderDetails1'>
                            {/* Activity Update & Details */}
                            {<IoIosArrowBack size={25} className='lg-hide' onClick={()=>{setChatId(null);navigate(-1)}}/>}
                            <Badge dot='show' offset={[-5, 42]} color='green'><Avatar size={52} icon={<UserOutlined />} /></Badge>
                            <div className='ChatHeaderUserDetail'>
                                <div>{toUserName}</div>
                                <div>Activity</div>
                            </div>
                        </div>
                        <div className='chatHeaderDetails2'>
                            <div className='chatHeaderIcons '>
                                <VscDeviceCameraVideo size={25} />
                                <IoCallSharp size={25} />
                                <CiSearch className='sm-hide' size={25} />
                            </div>
                            {RightPanel===0 && <div style={{ height: '48px', width: '2px', backgroundColor: 'gray' }}></div>}
                            {RightPanel===0 && <div>
                                <IoIosArrowDown size={25} onClick={() => {setRightPanel(1);}} />
                            </div>}
                        </div>
                    </div>
                    <div className='ChatMessages' style={{
                        backgroundImage:`url(${chatbackgrounds[currentWallpaperInd]})`
                    }} onScroll={()=>setChatDropDown(false)}>
                        {/* Import messages and return divs */}
                        {
                            personalChat &&
                            <div style={{ padding: '20px', height: 'inherit' }}>
                                {personalChat.map((m,ind) => (
                                    <>
                                        {(ind===0||fetchDate(m.dateTime)!==fetchDate(personalChat[ind-1].dateTime))&&
                                        <div className='MessageDates'>
                                            <div className='DateLine' ></div>
                                            {fetchDate(m.dateTime)}
                                            <div className='DateLine'></div>
                                        </div>}
                                        <div className={`messageBox ${m.from.id === myUSerId ? 'rightAlign' : 'leftAlign'}`} >
                                                <div className='messageInfo'>
                                                    <div className='messageInner'>
                                                        { m.from.id === myUSerId && 
                                                        <div id={m.id} className={`HoverDisplay sm-hide ${m.from.id === myUSerId ? 'right' : 'left'}`}  onClick={(e)=>{handleClick(e)}}>
                                                            <FaAngleDown id={m.id} className={`${m.from.id === myUSerId ? 'right' : 'left'}`} />
                                                        </div>}
                                                        <div id={m.id}  className={`message ${m.from.id === myUSerId ? 'right' : 'left'}`}
                                                            style={{ backgroundColor: `${m.from.id === myUSerId ? messageThemes[currentTheme] : themeColors[currentColorTheme]}` }}
                                                            onMouseDown={(e)=>{startTimer(e)}} onTouchStart={(e)=>{startTimer(e)}} 
                                                            onMouseUp={()=>{clearTimeout(timeRef.current)}} onTouchEnd={()=>{clearTimeout(timeRef.current)}}
                                                            onClick={(e)=>handleMobile(e)}
                                                        >
                                                            <div className={`${m.from.id === myUSerId ? 'right' : 'left'}`} id={`${m.id}message`}>
                                                                {
                                                                    m.dataType==='text'?m.message:
                                                                    m.dataType==='img'?<div id={m.id} onClick={()=>{!isLongPress.current&&handleImageView(m.document)}}><img src={m.document} alt='img' /></div>:
                                                                    m.dataType==='payment'?
                                                                    <div id={m.id} className='PaymentDiv' style={{backgroundColor:'rgb(238, 238, 238,0.6)'}}>
                                                                        <div>
                                                                            <TbCoinRupeeFilled id={m.id} size={30} color={m.success?'rgb(76, 175, 80,0.8)':'rgb(244, 67, 54,0.8)'}/>
                                                                            {m.message}
                                                                        </div>
                                                                        <div>
                                                                            {
                                                                                m.success?'Success':'Failed'
                                                                            }
                                                                        </div>
                                                                    </div>:
                                                                    <div id={m.id} className='OtherFiles'>
                                                                        <div >
                                                                            {
                                                                                m.dataType==='pdf'?<FaFilePdf id={m.id} size={76} style={{color:'red'}}/>:
                                                                                m.dataType==='excel'?<SiMicrosoftexcel id={m.id} size={76} style={{color:'green'}}/>:
                                                                                m.dataType==='word'?<SiMicrosoftword id={m.id} size={76} style={{color:'blue'}}/>:
                                                                                <FaFile id={m.id} size={676}/>
                                                                            }
                                                                            {DownLoaded===0?<MdOutlineFileDownload onClick={()=>handleDownload()} size={34}/>
                                                                                :
                                                                                <Progress size={44} dataType="circle" percent={DownLoaded} />
                                                                            }
                                                                        </div>
                                                                        <div>
                                                                            {m.message}.{m.dataType}
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                            <div id={m.id} className={`time ${m.from.id === myUSerId ? 'right' : 'left'}`} >{fetchTime(m.dateTime)}</div>
                                                        </div>
                                                        { m.to.id === myUSerId && 
                                                        <div id={m.id} className={`HoverDisplay sm-hide ${m.from.id === myUSerId ? 'right' : 'left'}`}  onClick={(e)=>{handleClick(e)}} >
                                                            <FaAngleDown id={m.id} className={`${m.from.id === myUSerId ? 'right' : 'left'}`} />
                                                        </div>}
                                                    </div>
                                                    {/* Message Reaction */}
                                                    {m?.reactions?.length>0&&<div className='messageReactions'
                                                        style={{justifyContent:m.from.id===myUSerId?'flex-end':'flex-start'}}
                                                    >
                                                        <div className='ReactionIcons'
                                                            style={{ backgroundColor: themes[currentTheme]}}
                                                        >
                                                            {m.reactions.map((ico)=>(
                                                                <div>{ico}</div>
                                                            ))}
                                                        </div>
                                                    </div>}
                                                </div>
                                        </div>
                                    </>
                                ))}
                                {chatDropDown&&DropDownMenu}
                            </div>
                        }
                        {expandedImgUrl&&expandedImage}
                    </div>
                    <div className='ChatReplySend' style={{ backgroundColor: `${themes[currentTheme]}` }}>
                        {Reply&&replyDiv}
                        {Attach&&AttachDiv}
                        <div className='ChatsendMessage'>
                            <div className='inputsDiv' style={{ backgroundColor: `${inputThemes[currentTheme]}`, width: sendMessage?'850px':'920px' }}>
                                <FiLink size={24} color={`${themeColors[currentColorTheme]}`} onClick={(e)=>{handleAttach(e)}}/>
                                <textarea
                                    id='MessageInput'
                                    style={{ backgroundColor: `${inputThemes[currentTheme]}`, color: currentTheme === 0 ? 'black' : 'white' }} 
                                    onChange={(e)=>{handleWidth(e);setSendMessage(e.target.value)}}
                                    onClick={()=>{document.getElementsByClassName('ChatMessages')[0]?.scrollTo(window.innerWidth,window.innerHeight);}}
                                    value={sendMessage}
                                ></textarea>
                                {(sendMessage.length===0||(sendMessage.length>0&&!isNaN(Number(sendMessage))))&&
                                    <Button 
                                        style={{ background: 'transparent',
                                        color:inputThemes[1-currentTheme], 
                                        border: 'none',
                                        boxShadow:'none',
                                        height:'29px',
                                        width:'50px'
                                    }}
                                    >
                                        <TbCurrencyRupee size={30} />
                                    </Button>}
                            </div>
                            { sendMessage.length>0&&
                                <Button style={{ background: `${themeColors[currentColorTheme]}`, height: '40px', border: 'none', marginRight: '10px' }}>
                                    <RiSendPlaneFill size={20} />
                                </Button>
                            }
                        </div>
                    </div>
                </div>
                {/* {rightPanel && <div className='rightPanel'><RightSidePanel setSide={setSide} /></div>} */}
            </div>
            }
            {
                !ChatId&&
                <div className='ChatContainer'>
                    
                </div>
            }
        </>
    )
}

export default Chat