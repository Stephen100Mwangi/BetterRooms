import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Hero003 = () => {

    return (
    <div className='bg-background h-[80vh] px-[32px] flex flex-col relative z-[1000]'>
        <div>
            <p className='text-2xl text-hero mt-20 font-medium z-[1000] relative'>Adventure awaits.Find your next unforgettable Airbnb.</p>
        </div>
        <div>
            <p className='text-3xl w-2/5 text-heroTitle leading-[50px] mt-10 font-bold relative'>Airbnb smarter: <br /> Find the perfect fit, <br />faster.</p>
        </div>

        <div>
            <p className='mt-6 w-2/5 text-justify font-light text-heroTitle relative'>
                Stop searching.Start Living.Discover hidden gems.charming studios and unforgettable adventures.Find an airbnb that feels like home no matter where you are.
            </p>
        </div>

        <div className='border-4 rounded-tl-full rounded-tr-full rounded-br-[5rem] w-[600px] h-[550px] absolute right-[32px] z-[100] -top-20'>
            <img src="/assets/bed_.jpg" alt=""  className='rounded-tl-full rounded-tr-full object-cover h-[100%] w-[100%]'/>
        </div>
      
    </div>
  )
}

export default Hero003

