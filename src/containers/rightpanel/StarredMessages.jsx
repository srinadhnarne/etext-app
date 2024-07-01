import React, { useState } from 'react'
import { inputThemes, messageThemes, themeColors, themes } from '../../assets/themecolors'
import { useTheme } from '../../context/useTheme';
import { useColorTheme } from '../../context/colorTheme';
import { IoIosArrowBack } from 'react-icons/io';
import {  personalChat } from '../../assets/dummydata';
import { useNavigate } from 'react-router-dom';
import { FaFile, FaFilePdf } from 'react-icons/fa6';
import { SiMicrosoftexcel, SiMicrosoftword } from 'react-icons/si';
import { TbCoinRupeeFilled } from 'react-icons/tb';
import { RiImage2Fill } from 'react-icons/ri';
import { useCurrentPage } from '../../context/useCurrentPage';

const StarredMessages = () => {
    const {currentTheme} = useTheme();
    const {currentColorTheme} = useColorTheme();
    const {setRightPanel} = useCurrentPage();
    const myUserId = '1';

    const navigate = useNavigate();

    const fetchDate = (val)=>{
        const DateArr = val.split('T')[0].split('-');
        const CurrDate = new Date();
        if(CurrDate.getFullYear()>Number(DateArr[0])) return `${DateArr[1]}/${DateArr[0]}`
        else if(CurrDate.getMonth()+1>Number(DateArr[1])) return `${DateArr[2]}/${DateArr[1]}`
        return DateArr[2];
    }

    const fetchTime = (val)=>{
        const TimeArr = val.split('T')[1].split('.')[0].split(':');
        // console.log(TimeArr);
        const hrs = TimeArr[0]<='12'?TimeArr[0]:Number(TimeArr[0])-12;
        return hrs+':'+TimeArr[1]+` ${TimeArr[0]>12?'p.m':'a.m'}`
    }

    let prevStarred = null;

    const handleStarredClick = (val)=>{
        document.getElementById(val).scrollIntoView();
    }

    return (
        <div className='RightSidePanel'>
            <div className='RightSidePanelHeader' style={{backgroundColor:`${themes[currentTheme]}`}}>
                <div className='RightSidePanelHeaderInner'>
                    <IoIosArrowBack size={25} onClick={()=>{setRightPanel(1)}} />
                    <div>Starred Messages</div>
                </div>
            </div>
            <div className='ChatMessages'>
                {/* Import messages and return divs */}
                {
                    personalChat &&
                    <div style={{ padding: '20px', height: 'inherit' }}>
                        {
                            personalChat.map((m)=>{
                                if(m.from===myUserId&&m.starred.from){
                                    if(prevStarred!==fetchDate(m.dateTime)) {
                                        prevStarred=fetchDate(m.dateTime);
                                        return(
                                            <>
                                                <div className='MessageDates'>
                                                    <div className='DateLine' ></div>
                                                    {fetchDate(m.dateTime)}
                                                    <div className='DateLine'></div>
                                                </div>
                                                <div className='messageBox rightAlign'>
                                                    <div className={`starredmessage ${m.from === myUserId ? 'right' : 'left'}`}
                                                        style={{ backgroundColor: messageThemes[currentTheme]}} onClick={()=>{handleStarredClick(m.id)}}>
                                                        <div className={`${m.from === myUserId ? 'right' : 'left'}`}>
                                                            {
                                                                m.dataType==='text'?m.message:
                                                                m.dataType==='img'?<img src={m.document} alt={<RiImage2Fill size={34} style={{color:'rgb(25, 118, 210)'}}/>} />:
                                                                m.dataType==='payment'?
                                                                <div className='PaymentDiv' style={{backgroundColor:'rgb(238, 238, 238,0.6)'}}>
                                                                    <div>
                                                                        <TbCoinRupeeFilled size={30} color={m.success?'rgb(76, 175, 80,0.8)':'rgb(244, 67, 54,0.8)'}/>
                                                                        {m.message}
                                                                    </div>
                                                                    <div>
                                                                        {
                                                                            m.success?'Success':'Failed'
                                                                        }
                                                                    </div>
                                                                </div>:
                                                                <div className='OtherFiles'>
                                                                    <div>
                                                                        {
                                                                            m.dataType==='pdf'?<FaFilePdf size={76} style={{color:'red'}}/>:
                                                                            m.dataType==='excel'?<SiMicrosoftexcel size={76} style={{color:'green'}}/>:
                                                                            m.dataType==='word'?<SiMicrosoftword size={76} style={{color:'blue'}}/>:
                                                                            <FaFile size={676}/>
                                                                        }
                                                                    </div>
                                                                    <div>
                                                                        {m.message}.{m.dataType}
                                                                    </div>
                                                                </div>
                                                            }
                                                        </div>
                                                        <div >{fetchTime(m.dateTime)}</div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    } 
                                    return (
                                        <div className='messageBox rightAlign'>
                                            <div className={`starredmessage ${m.from === myUserId ? 'right' : 'left'}`}
                                                style={{ backgroundColor: messageThemes[currentTheme]}} onClick={()=>{handleStarredClick(m.id)}}>
                                                <div className={`${m.from === myUserId ? 'right' : 'left'}`}>
                                                    {
                                                        m.dataType==='text'?m.message:
                                                        m.dataType==='img'?<img src={m.message} alt={<RiImage2Fill size={34} style={{color:'rgb(25, 118, 210)'}}/>} />:
                                                        m.dataType==='payment'?
                                                        <div className='PaymentDiv' style={{backgroundColor:'rgb(238, 238, 238,0.6)'}}>
                                                            <div>
                                                                <TbCoinRupeeFilled size={30} color={m.success?'rgb(76, 175, 80,0.8)':'rgb(244, 67, 54,0.8)'}/>
                                                                {m.message}
                                                            </div>
                                                            <div>
                                                                {
                                                                    m.success?'Success':'Failed'
                                                                }
                                                            </div>
                                                        </div>:
                                                        <div className='OtherFiles'>
                                                            <div>
                                                                {
                                                                    m.dataType==='pdf'?<FaFilePdf size={76} style={{color:'red'}}/>:
                                                                    m.dataType==='excel'?<SiMicrosoftexcel size={76} style={{color:'green'}}/>:
                                                                    m.dataType==='word'?<SiMicrosoftword size={76} style={{color:'blue'}}/>:
                                                                    <FaFile size={676}/>
                                                                }
                                                            </div>
                                                            <div>
                                                                {m.message}.{m.dataType}
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                                <div>{fetchTime(m.dateTime)}</div>
                                            </div>
                                        </div>
                                    )
                                } else if(m.to===myUserId&&m.starred.to){
                                    if(prevStarred!==fetchDate(m.dateTime)){
                                        prevStarred=fetchDate(m.dateTime)
                                        return(
                                            <>
                                            <div className='MessageDates'>
                                                <div className='DateLine' ></div>
                                                {fetchDate(m.dateTime)}
                                                <div className='DateLine'></div>
                                            </div>
                                            <div className='messageBox leftAlign'>
                                                <div className={`starredmessage ${m.from === myUserId ? 'right' : 'left'}`}
                                                    style={{ backgroundColor: themeColors[currentColorTheme]}} onClick={()=>{handleStarredClick(m.id)}}>
                                                    <div className={`${m.from === myUserId ? 'right' : 'left'}`}>
                                                        {
                                                            m.dataType==='text'?m.message:
                                                            m.dataType==='img'?<img src={m.message} alt={<RiImage2Fill size={34} style={{color:'rgb(25, 118, 210)'}}/>} />:
                                                            m.dataType==='payment'?
                                                            <div className='PaymentDiv' style={{backgroundColor:'rgb(238, 238, 238,0.6)'}}>
                                                                <div>
                                                                    <TbCoinRupeeFilled size={30} color={m.success?'rgb(76, 175, 80,0.8)':'rgb(244, 67, 54,0.8)'}/>
                                                                    {m.message}
                                                                </div>
                                                                <div>
                                                                    {
                                                                        m.success?'Success':'Failed'
                                                                    }
                                                                </div>
                                                            </div>:
                                                            <div className='OtherFiles'>
                                                                <div>
                                                                    {
                                                                        m.dataType==='pdf'?<FaFilePdf size={76} style={{color:'red'}}/>:
                                                                        m.dataType==='excel'?<SiMicrosoftexcel size={76} style={{color:'green'}}/>:
                                                                        m.dataType==='word'?<SiMicrosoftword size={76} style={{color:'blue'}}/>:
                                                                        <FaFile size={676}/>
                                                                    }
                                                                </div>
                                                                <div>
                                                                    {m.message}.{m.dataType}
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                    <div>{fetchTime(m.dateTime)}</div>
                                                </div>
                                            </div>
                                            </>
                                        )
                                    }
                                    return (
                                        <div className='messageBox leftAlign' >
                                            <div className={`starredmessage ${m.from === myUserId ? 'right' : 'left'}`}
                                                style={{ backgroundColor: themeColors[currentColorTheme]}} onClick={()=>{handleStarredClick(m.id)}}>
                                                <div className={`${m.from === myUserId ? 'right' : 'left'}`}>
                                                    {
                                                        m.dataType==='text'?m.message:
                                                        m.dataType==='img'?<img src={m.message} alt={<RiImage2Fill size={34} style={{color:'rgb(25, 118, 210)'}}/>} />:
                                                        m.dataType==='payment'?
                                                        <div className='PaymentDiv' style={{backgroundColor:'rgb(238, 238, 238,0.6)'}}>
                                                            <div>
                                                                <TbCoinRupeeFilled size={30} color={m.success?'rgb(76, 175, 80,0.8)':'rgb(244, 67, 54,0.8)'}/>
                                                                {m.message}
                                                            </div>
                                                            <div>
                                                                {
                                                                    m.success?'Success':'Failed'
                                                                }
                                                            </div>
                                                        </div>:
                                                        <div className='OtherFiles'>
                                                            <div>
                                                                {
                                                                    m.dataType==='pdf'?<FaFilePdf size={76} style={{color:'red'}}/>:
                                                                    m.dataType==='excel'?<SiMicrosoftexcel size={76} style={{color:'green'}}/>:
                                                                    m.dataType==='word'?<SiMicrosoftword size={76} style={{color:'blue'}}/>:
                                                                    <FaFile size={676}/>
                                                                }
                                                            </div>
                                                            <div>
                                                                {m.message}.{m.dataType}
                                                            </div>
                                                        </div>
                                                    }
                                                </div>
                                                <div>{fetchTime(m.dateTime)}</div>
                                            </div>
                                        </div>
                                    )
                                }
                                return <></>;
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default StarredMessages