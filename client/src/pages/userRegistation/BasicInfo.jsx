/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
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
            <form className='w-[338px] h-fit rounded-[10px] flex flex-col space-y-6 shadow-2xl justify-center py-[24px] pt-[4px] px-[10px] max-sm:w-[300px]'>
                <h1 className='text-hero text-2xl text-center font-medium'>Register Here</h1>
                <div className='flex px-[12px] py-[6px] space-x-[16px] rounded-xl bg-white items-center justify-normal'>
                    <FaUser className='text-black'/>
                    <input type="text" name="name" id="name" placeholder='Name' className='py-2 bg-white bg-opacity-0 outline-none text-black w-full'  autoComplete='off' autoSave='off' value={formData.username} onChange={(e)=>setFormData({...formData,username:e.target.value})}/>
                </div>
                <div className='flex px-[12px] py-[6px] space-x-[16px] rounded-xl bg-white items-center justify-normal'>
                    <MdAlternateEmail className='text-black'/>
                    <input type="email" name="email" id="email" placeholder='Email' className='py-2 bg-white bg-opacity-0 outline-none  text-black w-full'  autoComplete='off' autoSave='off' value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
                </div>
                <div className='flex px-[12px] py-[6px] space-x-[16px] rounded-xl bg-white items-center justify-normal'>
                    <MdLockPerson className='text-black'/>
                    <input type="password" name="password" id="password" placeholder='Password' className='py-2 bg-white bg-opacity-0 outline-none  text-black w-full'  autoComplete='off' autoSave='off' value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
                </div>
                <div className='flex px-[12px] py-[6px] space-x-[16px] rounded-xl bg-white items-center justify-normal'>
                    <MdLockPerson className='text-black'/>
                    <input type="password" name="confirm_password" id="confirm_password" placeholder='Confirm Password' className='py-2 bg-white bg-opacity-0 outline-none  text-black w-full'  autoComplete='off' autoSave='off' value={formData.confirm_password} onChange={(e)=>setFormData({...formData,confirm_password:e.target.value})}/>
                </div>
                <div className="flex space-x-3 justify-center items-center">
                    <p className='text-black'>Already have an account</p>
                    <Link to='/login' className='text-hero'>Login Here</Link>
                </div>
            </form>
        </div>
    )
}

BasicInfo.propTypes = {
    formData:PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string,
        confirm_password: PropTypes.string
    }))
}

export default BasicInfo