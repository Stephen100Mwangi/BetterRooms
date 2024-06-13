/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast';

const ForgotPassword = () => {

    const [email,setEmail] = useState("");

    const handlePassword = async(req,res)=>{
        try {
            const response = await fetch("http://localhost:6650/forgot_password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            
            const data = await response.json();
           
            if (response.ok) {
                toast.success("Password reset link sent to your email");
                
            } else {
                toast.error(data.message || "Error retrieving password");
            }
        } catch (error) {
            toast.error("Error retrieving password")
        }
    }
  return (
    <div className='flex flex-col space-y-16 justify-start pt-8 items-center h-screen'>
        <div>
            <img src="./public/assets/forgot.png" alt=""  className='w-64'/>
        </div>
        <Toaster />
        <div className='flex flex-col space-y-8 p-4 shadow-2xl rounded-sm'>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="Email">Email</label>
                <input type="email" placeholder='Input your email' className='w-fit px-6 p-2 outline outline-hero outline-1' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            
            <button onClick={handlePassword} className='px-6 rounded-sm hover:rounded-full p-2 outline-none bg-hero text-white'>Submit</button>
        </div>
    </div>
  )
}

export default ForgotPassword
