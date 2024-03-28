import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Hero002 = () => {

  return (
    <div className='bg-background h-[calc(100vh-120px)] px-[32px] flex flex-col relative z-[1000] w-full'>
        {/* <div className='mt-[32px]'>
            <img src="\assets\logo.png" alt="" />
        </div> */}
        <div>
            <p className='text-2xl text-hero mt-20 font-medium z-[1000] relative'>Adventure awaits.Find your next unforgettable Airbnb.</p>
        </div>
        <div>
            <p className='text-3xl w-2/5 text-heroTitle leading-[50px] mt-10 font-bold'>Your Airbnb <br /> soulmate: We'll <br /> match you with <br /> your dream stay.</p>
        </div>

        <div>
            <p className='mt-6 w-2/5 text-justify font-light text-heroTitle'>
                Stop searching.Start Living.Discover hidden gems.charming studios and unforgettable adventures.Find an airbnb that feels like home no matter where you are.
            </p>
        </div>

        <div className='border-4 rounded-tl-[5rem] rounded-br-[5rem] w-[600px] h-[400px] absolute right-[32px] z-[100] top-8'>
            <img src="/assets/kitchen.jpg" alt=""  className='rounded-tl-[5rem] rounded-br-[5rem] object-cover h-[100%] w-[100%]'/>
        </div>
      
    </div>
  )
}

export default Hero002
