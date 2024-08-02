/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useState } from 'react'
import { MdLockPerson } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { useSelector, useDispatch } from 'react-redux';
import { login } from '../features/users/UserSlice';
import axios from 'axios'
import { FaRegEye } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginData,setLoginData] = useState("");

  const [loading,setLoading] = useState(false);
    
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [username,setUsername] = useState("")

  const [pass_data,setPassData] = useState(true);
  const showPassword = ()=>{
    setPassData(!pass_data)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!email){
      toast.error("Email cannot be empty");
      return;
    }
    if(!password){
      toast.error("Password cannot be empty");
      return;
    }
    if(!username){
      toast.error("Username cannot be empty");
      return;
    }

    setLoading(true);
    
    try {
      const response = await axios.post("http://localhost:6650/fetchUser", { email, password,username });
      if (!response.ok) {
        console.log("No response");
      }else{
        console.log("response found");
        setLoginData(response.json());
      }
      const user = response.data.user;

      if(user){
        dispatch(login({ email: user.email,username: user.user_name, id: user.id }));
        toast.success("Login Successful. Look at your camera to verify face");

        const faceScan = await axios.post("http://127.0.0.1:5005/login",{username});
        console.log(faceScan);
        if (faceScan.data.message === `User ${username} logged in successfully`) {
          setTimeout(() => {
            navigate("/profile");
            toast.success("Wohoo! 🤶🏽🎅🏽 Good to see you.Welcome")
          }, 2000);
        }else{
          toast.error(faceScan.data.message)
        }
        
      } else {
        toast.error(loginData.message);
      }
    } catch (error) {
      toast.error("An error occurred while logging in");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-background h-[calc(100vh-120px)] flex justify-center pt-5'>
      <Toaster />
      <form onSubmit={handleSubmit} className='w-[338px] max-md:w-[300px] h-fit mb-20 rounded-[10px] flex flex-col space-y-6 max-md:space-y-5 shadow-2xl justify-center items-center py-[24px] px-[10px] max-sm:w-[300px]'>
        <h1 className='text-hero text-2xl text-center font-medium max-md:text-xl'>Login Here</h1>
        <div className='w-[95%] flex px-[12px] py-[8px] space-x-[16px] bg-white items-center justify-normal'>
          <FaUser className='text-black'/>
          <input 
            type="text" 
            name="username" 
            id="username" 
            placeholder='Username' 
            className='bg-white bg-opacity-0 outline-none text-black w-full p-2 max-md:p-1' 
            autoComplete='off' 
            autoSave='off' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='w-[95%] flex px-[12px] py-[8px] space-x-[16px] bg-white items-center justify-normal'>
          <MdAlternateEmail className='text-black'/>
          <input 
            type="text" 
            name="email" 
            id="email" 
            placeholder='Email' 
            className='bg-white bg-opacity-0 outline-none text-black w-full p-2 max-md:p-1' 
            autoComplete='off' 
            autoSave='off' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='w-[95%] flex px-[12px] py-[8px] space-x-[16px] bg-white items-center justify-normal'>
          <MdLockPerson className='text-black'/>
          <input 
           type={pass_data? "password" : "text"} 
            name="password" 
            id="password" 
            placeholder='Password' 
            className='bg-white bg-opacity-0 outline-none text-black w-full p-2 max-md:p-1' 
            autoComplete='off' 
            autoSave='off' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaRegEye  className='cursor-pointer text-2xl' onClick={showPassword}/>
        </div>
        
        <button 
          type='submit' 
          className='bg-hero rounded-sm text-white shadow-2xl py-3 max-md:py-2 px-8 w-[95%] hover:rounded-full' 
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </button>
        <Link to='/forgot_password' className='cursor-pointer text-red_500'>Forgot password</Link>
        <div className="flex flex-row justify-center items-center space-x-3 max-sm:flex-col">
          <p className='text-black'>Don&apos;t have an account?</p>
          <Link to='/register' className='text-hero'>Register Here</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
