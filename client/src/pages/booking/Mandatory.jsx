import React from 'react'
import { MdEmail, MdPayment, MdPerson, MdPhone } from 'react-icons/md'

const Mandatory = ({formData,setData}) => {
  return (
    <form className='flex flex-col space-y-5 rounded-lg shadow-2xl p-6'>
        <h1 className='text-hero text-center font-medium text-2xl'>Mandatory Features</h1>
        <div className="flex rounded-lg ring-1 ring-hero p-2 justify-center items-center space-x-5">
            <MdPerson className='text-black'/>
            <input type="text" name="" id="" value={formData.name} onChange={(e)=>setData({...formData,name:e.target.value})} className='bg-white text-black outline-none bg-opacity-0' placeholder='Type your name'/>
        </div>
      
        <div className="flex rounded-lg ring-1 ring-hero p-2 justify-center items-center space-x-5">
            <MdEmail className='text-black'/>
            <input type="text" name="" id="" value={formData.email} onChange={(e)=>setData({...formData,email:e.target.value})} className='bg-white text-black outline-none bg-opacity-0' placeholder='Type your email'/>
        </div>
      
        <div className="flex rounded-lg ring-1 ring-hero p-2 justify-center items-center space-x-5">
            <MdPhone className='text-black'/>
            <input type="text" name="" id="" value={formData.phone} onChange={(e)=>setData({...formData,phone:e.target.value})} className='bg-white text-black outline-none bg-opacity-0' placeholder='Input your phone number Country code first'/>
        </div>
      
    </form>
  )
}

export default Mandatory
