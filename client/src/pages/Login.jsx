import React from 'react'
import { useState } from 'react'
import { MdLockPerson } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Login = () => {
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit = () => {

    }

  return (
    <div className='bg-background h-[calc(100vh-120px)] flex justify-center pt-5'>
         <form className='w-[338px] h-fit rounded-[10px] flex flex-col space-y-6 shadow-2xl justify-center items-center py-[32px] px-[10px]'>
                <h1 className='text-hero text-3xl font-medium'>Login Here</h1>
               
                <div className='flex px-[12px] py-[8px] space-x-[16px] rounded-xl bg-white items-center justify-normal'>
                    <MdAlternateEmail className='text-black'/>
                    <input type="text" name="email" id="email" placeholder='Email' className='bg-white bg-opacity-0 outline-none text-black' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='flex px-[12px] py-[8px] space-x-[16px] rounded-xl bg-white items-center justify-normal'>
                    <MdLockPerson className='text-black'/>
                    <input type="text" name="password" id="password" placeholder='Password' className='bg-white bg-opacity-0 outline-none text-black' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className='w-auto rounded-md bg-hero px-24 p-2'>Login</button>
                <div className="flex space-x-3">
                    <p className='text-black'>Do not have an account</p>
                    <Link to='/register' className='text-hero'>Register Here</Link>
                </div>
            </form>
      
    </div>
  )
}

export default Login

