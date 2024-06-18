import React, { useState } from 'react'
import '../../styles/Register.css'
import logo from '../../assets/logo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [gender,setGender] = useState("NA");
    const [security,setSecurity] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const {data} = await axios.post(`${process.env.REACT_APP_API}/v1/auth/register`,{
                name,email,password,phone,gender,security
            })
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
    <div className='register'>
        <div className="register-background"></div>
        <div className="register-body">
            <img src={logo} alt='Logo' style={{width:"100px"}}/>
            <h1>REGISTER</h1>
            <form className='registration-form' onSubmit={(e)=>{handleSubmit(e)}}>
                <input className='transparent-input' type='text' value={name} onChange={(e)=>{setName(e.target.value)}} placeholder='Name' required/>
                <input className='transparent-input' type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='E-mail' required/>
                <input className='transparent-input' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' required/>
                <input className='transparent-input' type='text' value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder='Mobile Number' required/>
                <div className='embedded-input'>
                    <label>Gender</label>
                    <select value={gender} onChange={(e)=>{setGender(e.target.value);}} required>
                        <option value={'NA'} defaultChecked={true}>Select</option>
                        <option value={'M'} >Male</option>
                        <option value={'F'} >Female</option>
                    </select>
                </div>
                <input className='transparent-input'  type='text' value={security} onChange={(e)=>{setSecurity(e.target.value)}} placeholder='Favourite Actor' required/>
                <div className='button'>
                    <button type='submit'>SUBMIT</button>
                </div>
                <div className='navigations' style={{gap:"0"}}>
                    Already have an account? <div className='link' style={{width:"4rem"}} onClick={()=>navigate('/login')}>Sign in</div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register