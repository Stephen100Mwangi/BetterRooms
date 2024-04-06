import React from 'react'
import { FaBook } from 'react-icons/fa'
import { HiMiniPencilSquare } from "react-icons/hi2";
import { RiUserVoiceFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Booking() {
  return (
    <div className='bg-background flex justify-center flex-col space-y-10 items-center h-[calc(100vh-120px)]'>
        <div className='text-center'>
            <p className='text-2xl text-black leading-10'>Welcome to Better Rooms. <br /> <span className='text-hero'>Book a room of your choice here</span></p>
        </div>
        <div className="flex space-x-10">
            <Link to='/voiceBook'>
                <div className='text-white bg-red_500 text-[18px] p-3 px-10 rounded-md shadow-2xl space-x-3 text-center flex-col space-y-5 justify-center flex items-center'>
                    <RiUserVoiceFill className='text-2xl'/>
                    <p className='font-semibold'>Book via voice-input</p>
                </div>
            </Link>

            <Link to='/bookText'>
                <div className='text-white bg-hero text-[18px] p-3 px-10 rounded-md shadow-2xl space-x-3 text-center flex-col space-y-5 justify-center flex items-center'>
                    <HiMiniPencilSquare className='text-2xl' />
                    <p className='font-semibold'>Book via text-input</p>
                </div>
            </Link>
           
           
        </div>
      
    </div>
  )
}

export default Booking
