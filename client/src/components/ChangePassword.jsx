/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const ChangePassword = () => {
    const [email,setEmail] = useState("");
  return (
    <div className='flex flex-col space-y-16 justify-start pt-8 items-center h-screen'>
        <div>
            <img src="/assets/password.png" alt=""  className='w-64'/>
        </div>
        <div className='flex flex-col space-y-8 p-4 shadow-2xl rounded-sm'>
            <div className='flex flex-col space-y-3'>
                <label htmlFor="Email">Email</label>
                <input type="email" placeholder='Input your email' className='w-fit px-6 p-2 outline outline-hero outline-1' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            
            <button className='px-6 rounded-sm hover:rounded-full p-2 outline-none bg-hero text-white'>Submit</button>
        </div>
    </div>
  )
}

export default ChangePassword
