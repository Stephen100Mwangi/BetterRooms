import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const Hero001 = () => {

    return (
    <div className='bg-background h-[calc(100vh-120px)] px-[32px] flex flex-col relative z-[1000]'>
        {/* <div className='mt-[32px]'>
            <img src="\assets\logo.png" alt="" />
        </div> */}
        <div>
            <p className='text-2xl text-hero mt-20 font-medium z-[1000] relative'>Adventure awaits.Find your next unforgettable Airbnb.</p>
        </div>
        <div>
            <p className='text-3xl w-2/5 text-heroTitle leading-[50px] mt-10 font-bold'>Beyond Listings <br /> Beyond Limits: <br /> Your Perfect <br /> AirBNB Awaits</p>
        </div>

        <div>
            <p className='mt-6 w-2/5 text-justify font-light text-heroTitle'>
                Stop searching.Start Living.Discover hidden gems.charming studios and unforgettable adventures.Find an airbnb that feels like home no matter where you are.
            </p>
        </div>

        <div className='rounded-tl-none rounded-bl-full rounded-br-none rounded-tr-full w-1/2 h-20 absolute right-[50px] z-[100] top-8'>
            <img src="/assets/bed__.jpg" alt=""  className='rounded-tl-none rounded-bl-full rounded-br-none rounded-tr-full object-cover z-[0] rounded-2xl'/>
        </div>

    </div>
  )
}

export default Hero001
