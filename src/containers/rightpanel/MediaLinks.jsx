import React, { useEffect, useState } from 'react'
import { useTheme } from '../../context/useTheme';
import { useColorTheme } from '../../context/colorTheme';
import { linkThemes, messageThemes, modalCardThemes, modalThemes, themeColors, themes } from '../../assets/themecolors';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import chatbackgrounds from '../../assets/chatbackgrounds/chatbackgrounds'
import { AiOutlineLink } from 'react-icons/ai';
import { MdOutlineFileDownload, MdOutlineFileDownloadDone } from 'react-icons/md';
import { Progress } from 'antd';
import { FaFilePdf, } from 'react-icons/fa6';
import {SiMicrosoftexcel,SiMicrosoftword} from 'react-icons/si'
import { RiImage2Fill } from 'react-icons/ri';
import { useCurrentPage } from '../../context/useCurrentPage';

const MediaLinks = () => {
    const {currentTheme} = useTheme();
    const {currentColorTheme} = useColorTheme();
    const [currentMedia,setCurrentMedia] = useState(0);
    const {setRightPanel} = useCurrentPage();
    const navigate = useNavigate();

    const [DownLoaded,setDownloaded] = useState(0);


    //Api calls for images,links,images

    const handleClick = (val)=>{
        setCurrentMedia(val);
    }

    const handleDownload = ()=>{
        let it = 1;
        const temp = setInterval(()=>{
            setDownloaded(it=it+40);
            if(it>=100) {clearInterval(temp);}
        },1000);
    }

    const fileFormat = 'png';

    const link = "Link1 xzzczczzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz......";

    return (
        <div className='RightSidePanel'>
            <div className='RightSidePanelHeader' style={{backgroundColor:`${themes[currentTheme]}`}}>
                <div className='RightSidePanelHeaderInner'>
                    <IoIosArrowBack size={25} onClick={()=>{setRightPanel(1)}} />
                        <div></div>
                </div>
            </div>
            <div className='MediaHeader'>
                <div  id='0' className='MediaHeaderItem' style={{borderBottom:currentMedia===0&&`3px ${themeColors[currentColorTheme]} solid`}} onClick={()=>handleClick(0)}>Media</div>
                <div id='1' className='MediaHeaderItem' style={{borderBottom:currentMedia===1&&`3px ${themeColors[currentColorTheme]} solid`}} onClick={()=>handleClick(1)}>Links</div>
                <div id='2' className='MediaHeaderItem' style={{borderBottom:currentMedia===2&&`3px ${themeColors[currentColorTheme]} solid`}} onClick={()=>handleClick(2)}>Docs</div>
            </div>
            <div className='MediaDetails'>
                {
                    currentMedia===0&&
                    <div className='MediaItems'>
                        {<div className='MediaItem'>
                            <div className='imgGrid'>
                                <img src={chatbackgrounds[0]} alt='media'/>
                            </div>
                        </div>}
                    </div>
                }
                {
                    currentMedia===1&&
                    <div className='MediaLinks'>
                        {<div className='LinkItem'>
                            <div className='LinkContent'>
                                <div 
                                    style={{
                                        backgroundColor:linkThemes[currentTheme],
                                        borderRadius:'6px',
                                        padding:'8px'
                                    }}
                                >
                                    <AiOutlineLink size={40}/>
                                </div>
                                <div className="linkCard">
                                    <div>Link</div>
                                    <a 
                                    href='/' target='__blank' 
                                    style={{textDecoration:'none',color:themeColors[currentColorTheme]}}
                                    >
                                        Link Short Form
                                    </a>
                                </div>
                            </div>
                        </div>}
                    </div>
                }
                {
                    currentMedia===2&&
                    <div className='MediaDocs'>
                        {<div className='DocItem'>
                            <div className='DocImage'>
                                <img src={chatbackgrounds[0]} alt='media'/>
                            </div>
                            <div className='DocDetails'>
                                <div className='DocDetailsLeft'>
                                    <div>
                                        {fileFormat==='png'&&<RiImage2Fill size={34} style={{color:'rgb(25, 118, 210)'}}/>}
                                        {fileFormat==='pdf'&&<FaFilePdf size={34} style={{color:'red'}}/>}
                                        {fileFormat==='excel'&&<SiMicrosoftexcel size={34} style={{color:'green'}}/>}
                                        {fileFormat==='word'&&<SiMicrosoftword size={34} style={{color:'blue'}}/>}
                                    </div>
                                    <div>Title</div>
                                </div>
                                <div className='DocDownloadIcon'>
                                    {DownLoaded===0&&<MdOutlineFileDownload onClick={()=>handleDownload()} size={34}/>}
                                    {
                                        DownLoaded>=1&&DownLoaded<100&&<Progress size={50} type="circle" percent={DownLoaded} />
                                    }
                                    {DownLoaded>=100&&<MdOutlineFileDownloadDone size={34} />}

                                </div>
                            </div>
                        </div>}
                    </div>
                }
            </div>
        </div>
    )
}

export default MediaLinks