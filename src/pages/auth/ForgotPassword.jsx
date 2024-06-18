import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../../assets/logo.png'
import '../../styles/ForgotPassword.css'
import axios from 'axios';

const ForgotPassword = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [security,setSecurity] = useState("");
    
    const navigate = useNavigate();

    const handleForgotPassword = async (e)=>{
        e.preventDefault();
        try {
            const {data} = await axios.put(`${process.env.REACT_APP_API}/v1/auth/reset-password`,{
                email,password,security
            });
            if(data?.success){
                alert(data?.message);
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
            alert(error?.response?.data?.message);
        }
    }

  return (
    <div className='forgot'>
        <div className="forgot-background"></div>
        <div className="forgot-body">
            <img src={logo} alt='Logo' style={{width:"150px"}}/>
            <form className='forgot-form' onSubmit={(e)=>{handleForgotPassword(e)}}>
                <input className='transparent-input' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
                <input className='transparent-input' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='New Password'/>
                <input className='transparent-input' type='text' value={security} onChange={(e)=>{setSecurity(e.target.value)}} placeholder='Favourite Actor'/>
                <div className='button'>
                    <button type='submit'>UPDATE</button>
                </div>
                <div className='navigations'>
                    <div className='link' style={{width: "4rem" }} onClick={()=>navigate('/login')}>Login</div>
                    <div> | </div>
                    <div className='link' style={{width: "4rem" }}onClick={()=>navigate('/register')}>Sign Up</div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ForgotPassword