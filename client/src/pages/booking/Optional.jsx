import React, { useRef } from 'react'
import { MdLockClock, MdMoney } from 'react-icons/md'
import { FaIdCard } from "react-icons/fa";


const Optional = ({formData,setData}) => {
    const idRef = useRef(null);
    const handleUploadClick = () => {
        if (idRef.current) {
          idRef.current.click();
        }
      };
  return (
    <form className='flex flex-col space-y-5 rounded-lg shadow-2xl p-6'>
        <h1 className='text-center text-2xl text-hero'>Optional Features</h1>
        <div className="flex px-[12px] py-[8px] space-x-[16px] rounded-xl bg-white items-center justify-normal">
            <MdLockClock className='text-black'/>
            <select name="bookType" id="" className='bg-white text-black outline-none bg-opacity-0' >
                <option value="timing" disabled>Time you wish to spend</option>
                <option value="instantBook">Instant Book</option>
                <option value="reservation">Reservation Request</option>
            </select>
        </div>
        <div className="flex px-[12px] py-[8px] space-x-[16px] rounded-xl bg-white items-center justify-normal">
            <MdMoney className='text-black'/>
            <select name="bookType" id="" className='bg-white text-black outline-none bg-opacity-0' >
                <option disabled className='bg-hero text-white'>Price per person</option>
                <option value="$125">$125 (Small- Fits 2 adults)</option>
                <option value="$60">$60 (Large- Fits 6 adults)</option>
                <option value="$89">$89 (Hotel room fits 2 adults)</option>
                <option value="instantBook"  disabled className='bg-hero text-white'>Price per night</option>
                <option value="$314">$314 (1-night stay)</option>
                <option value="$213">$213 (7-night stay)</option>
                <option value="$169">$169 (30-night stay)</option>
            </select>
        </div>
        <div className="flex px-[12px] py-[8px] space-x-[16px] rounded-xl bg-white items-center justify-normal">
            <FaIdCard className='text-black' onClick={handleUploadClick}/>
            <input ref={idRef} type="file" name="" id="" className='bg-white text-black outline-none bg-opacity-0' style={{ display: 'none', visibility:'hidden' }} placeholder='Time you wish to spend'/>
            <input type="text" name="" id="" disabled className='bg-white text-black outline-none bg-opacity-0' placeholder="Upload your Country's ID card"/>
        </div>
      
    </form>
  )
}

export default Optional
