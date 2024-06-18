import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../../styles/Login.css'
import logo from '../../assets/logo.png'
import axios from 'axios';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async(e)=>{
        e.preventDefault();
        try {
            const {data} = await axios.post(`${process.env.REACT_APP_API}/v1/auth/login`,{
                email,password
            })
            if(data?.success){
                alert(data?.message);
                console.log(data?.user,data?.token);
                localStorage.setItem('eT-auth',JSON.stringify(data));
            }
        } catch (error) {
            console.log(error);
            alert(error?.response?.data?.message);
        }
    }

  return (
    <div className='login'>
        <div className="login-background"></div>
        <div className="login-body">
            <img src={logo} alt='Logo' style={{width:"150px"}}/>
            <form className='login-form' onSubmit={(e)=>{handleLogin(e)}}>
                <input className='transparent-input' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' />
                <input className='transparent-input' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>
                <div className='button'>
                    <button type='submit'>LOGIN</button>
                </div>
                <div className='navigations'>
                    <div className='link' style={{width: "8rem" }} onClick={()=>navigate('/forgot-password')}>Forgot Password</div>
                    <div> | </div>
                    <div className='link' style={{width: "8rem", justifyContent:"flex-start"}} onClick={()=>navigate('/register')}>Sign Up</div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login