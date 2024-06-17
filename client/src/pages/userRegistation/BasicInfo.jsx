/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaEye, FaUser } from 'react-icons/fa';
import { MdLockPerson } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { FaRegEye } from "react-icons/fa";

const BasicInfo = ({formData, setFormData})=>{

    const [password_data,setPasswordData] = useState(true);
    const [pass_data,setPassData] = useState(true);
    const showPassword = ()=>{
        setPasswordData(!password_data)
    }
    const showConfirmPassword = ()=>{
        setPassData(!pass_data)
    }

   

    return(
        <div className='bg-background h-fit pt-5 flex justify-center'>
            <Toaster />
            <form className='w-[338px] max-md:w-[300px] px-4 max-md:px-3 h-fit rounded-[10px] flex flex-col space-y-6 shadow-2xl justify-center py-[24px] pt-[4px] max-sm:w-[300px]'>
                <h1 className='text-hero text-2xl text-center font-medium max-md:text-xl mt-5'>Register Here</h1>
                <div className='flex px-[12px] py-[6px] space-x-[16px] bg-white items-center justify-normal'>
                    <FaUser className='text-black'/>
                    <input type="text" name="name" id="name" placeholder='Name' className='py-2 bg-white bg-opacity-0 outline-none text-black w-full'  autoComplete='off' autoSave='off' value={formData.username} onChange={(e)=>setFormData({...formData,username:e.target.value})}/>
                </div>
                <div className='flex px-[12px] py-[6px] space-x-[16px] bg-white items-center justify-normal'>
                    <MdAlternateEmail className='text-black'/>
                    <input type="email" name="email" id="email" placeholder='Email' className='py-2 bg-white bg-opacity-0 outline-none  text-black w-full'  autoComplete='off' autoSave='off' value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
                </div>
                <div className='flex px-[12px] py-[6px] space-x-[16px] bg-white items-center justify-normal'>
                    <MdLockPerson className='text-black text-xl'/>
                    <input  type={password_data? "password" : "text"} name="password" id="password" placeholder='Password' className='py-2 bg-white bg-opacity-0 outline-none  text-black w-full'  autoComplete='off' autoSave='off' value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
                    <FaRegEye  className='cursor-pointer text-2xl' onClick={showPassword}/>
                </div>
                <div className='flex px-[12px] py-[6px] space-x-[16px] bg-white items-center justify-normal'>
                    <MdLockPerson className='text-black'/>
                    <input type={pass_data? "password" : "text"} name="confirm_password" id="confirm_password" placeholder='Confirm Password' className='py-2 bg-white bg-opacity-0 outline-none  text-black w-full'  autoComplete='off' autoSave='off' value={formData.confirm_password} onChange={(e)=>setFormData({...formData,confirm_password:e.target.value})}/>
                    <FaRegEye  className='cursor-pointer text-2xl' onClick={showConfirmPassword}/>
                </div>
                <div className="flex space-x-3 max-md:space-x-2 justify-center items-center">
                    <p className='text-black'>Already have an account</p>
                    <Link to='/login' className='text-hero'>Login Here</Link>
                </div>
            </form>
        </div>
    )
}

BasicInfo.propTypes = {
    formData: PropTypes.shape({
        username: PropTypes.string,
        email: PropTypes.string,
        password: PropTypes.string,
        confirm_password: PropTypes.string
    }).isRequired,
    setFormData: PropTypes.func.isRequired
}

export default BasicInfo