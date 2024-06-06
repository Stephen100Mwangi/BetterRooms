/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { MdLockPerson } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../features/users/UserSlice';

const Login = () => {

  const user = useSelector((state)=>state.user.value)
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = async (e) => {
      e.preventDefault();
     
      dispatch(login({email:email,id:89}));
      toast.success("Login Successful")
      setTimeout(() => {
        navigate("/profile");
      }, 3000);

    }

    
    console.log(user);

  return (
    <div className='bg-background h-[calc(100vh-120px)] flex justify-center pt-5'>
      <Toaster />
         <form className='w-[338px] h-fit rounded-[10px] flex flex-col space-y-6 shadow-2xl justify-center items-center py-[32px] px-[10px] max-sm:w-[300px]'>
                <h1 className='text-hero text-3xl font-medium'>Login Here</h1>
               
                <div className='flex px-[12px] py-[8px] space-x-[16px] rounded-xl bg-white items-center justify-normal'>
                    <MdAlternateEmail className='text-black'/>
                    <input type="text" name="email" id="email" placeholder='Email' className='bg-white bg-opacity-0 outline-none text-black' autoComplete='off' autoSave='off' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='flex px-[12px] py-[8px] space-x-[16px] rounded-xl bg-white items-center justify-normal'>
                    <MdLockPerson className='text-black'/>
                    <input type="password" name="password" id="password" placeholder='Password' className='bg-white bg-opacity-0 outline-none text-black' autoComplete='off' autoSave='off' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type='submit' onClick={handleSubmit} className='bg-hero rounded-md text-white shadow-2xl py-3 w-full'>Login</button>
                <div className="flex space-x-3">
                    <p className='text-black'>Do not have an account</p>
                    <Link to='/register' className='text-hero'>Register Here</Link>
                </div>
            </form>
      
    </div>
  )
}

export default Login

