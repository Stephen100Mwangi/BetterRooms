import React from 'react'
import { FaUser } from 'react-icons/fa';
import { MdLockPerson } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const BasicInfo = ({formData, setFormData})=>{

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
   
    return(
        <div className='bg-background h-fit pt-5 flex justify-center'>
            <form className='w-[338px] h-fit rounded-[10px] flex flex-col space-y-6 shadow-2xl justify-center py-[32px] px-[10px] max-sm:w-[300px]'>
                <h1 className='text-hero text-3xl font-medium'>Register Here</h1>
                <div className='flex px-[12px] py-[8px] space-x-[16px] rounded-xl bg-white items-center justify-normal'>
                    <FaUser className='text-black'/>
                    <input type="text" name="name" id="name" placeholder='Name' className='bg-white bg-opacity-0 outline-none text-black'  autoComplete='off' autoSave='off' value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
                </div>
                <div className='flex px-[12px] py-[8px] space-x-[16px] rounded-xl bg-white items-center justify-normal'>
                    <MdAlternateEmail className='text-black'/>
                    <input type="email" name="email" id="email" placeholder='Email' className='bg-white bg-opacity-0 outline-none  text-black'  autoComplete='off' autoSave='off' value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
                </div>
                <div className='flex px-[12px] py-[8px] space-x-[16px] rounded-xl bg-white items-center justify-normal'>
                    <MdLockPerson className='text-black'/>
                    <input type="password" name="password" id="password" placeholder='Password' className='bg-white bg-opacity-0 outline-none  text-black'  autoComplete='off' autoSave='off' value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
                </div>
                <div className="flex space-x-3">
                    <p className='text-black'>Already have an account</p>
                    <Link to='/login' className='text-hero'>Login Here</Link>
                </div>
            </form>
        </div>
    )
}

export default BasicInfo