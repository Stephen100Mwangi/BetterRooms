import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";

const Testimonials = () => {

  const [show,setShow] = useState(true);
  return (
    <div className='p-8 py-2 pt-0 bg-background max-md:p-5'>

      <h1 className='text-center text-3xl text-black mb-10 font-bold'>Don't Just Take Our Word For It: <span className='text-hero'>Guest Testimonials</span> </h1>

      <div className="bg-[url('/assets/blue.jpg')] bg-cover bg-center bg-no-repeat rounded-lg shadow-2xl w-full overflow-auto scrollbar-hide p-6 h-[calc(65vh)] flex flex-wrap justify-center items-center gap-16 max-md:p-4 max-md:flex max-md:overflow-x-scroll">
        <div className="shadow-2xl flex flex-col space-y-8 justify-center items-center w-[300px] min-w-[300px] min-h-[350px] p-4 rounded-lg border-none bg-background relative">
          <div>
            <img src="/assets/face.jpg" alt="" className='size-12 rounded-full object-cover -top-5  left-[40%] absolute' />
          </div>
          <div className='flex justify-center items-center'>
            <p className='text-hero font-medium text-center my-1'>Stephen Mwangi</p>
          </div>
          <div className="content">
          <p className='text-black font-medium text-left leading-7' onClick={() => setShow(!show)} style={show?{ WebkitLineClamp: 5, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical' }:{}}>The Airbnb was truly a Home away from Home. Johnson Brookes was my host and I must say Woow! He was such an amazing host during my stay.Without a doubt I would recommend anyone visiting London to consider booking a slot at Daima Comforts.</p>
          </div>
          <div className="flex space-x-3 text-hero my-10">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
          </div>
          
        </div>
        <div className="shadow-2xl flex flex-col space-y-8 justify-center items-center w-[300px] min-w-[300px] min-h-[350px] p-4 rounded-lg border-none bg-background relative">
          <div>
            <img src="/assets/face4.jpg" alt="" className='size-12 rounded-full object-cover -top-5  left-[40%] absolute' />
          </div>
          <div className='flex justify-center items-center'>
            <p className='text-hero font-medium text-center my-1'>Sarah Jacobs</p>
          </div>
          <div className="content">
          <p className='text-black font-medium text-left leading-7' onClick={() => setShow(!show)} style={show?{ WebkitLineClamp: 5, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical' }:{}}>Ever heard of phenomenal? Well You need to visit Banjo Homes.The staff at this home are welcoming, cool and charming. Saying that Banjo Homes is wonderful is a downgrade.This is place is exquisite.</p>
          </div>
          <div className="flex space-x-3 text-hero my-10">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
          </div>
          
        </div>
        <div className="shadow-2xl flex flex-col space-y-8 justify-center items-center w-[300px] min-h-[350px] p-4 rounded-lg border-none bg-background relative">
          <div>
            <img src="/assets/face3.jpg" alt="" className='size-12 rounded-full object-cover -top-5  left-[40%] absolute' />
          </div>
          <div className='flex justify-center items-center'>
            <p className='text-hero font-medium text-center my-1'>Kate Morgan</p>
          </div>
          <div className="content">
          <p className='text-black font-medium text-left leading-7' onClick={() => setShow(!show)} style={show?{ WebkitLineClamp: 5, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical' }:{}}>I am ashamed to not know that @7Homes exists. If you are visiting Kenya consider value for your money.And where else to spend your time other that 7Homes a place live with the greenery of the forested area an aura of life and cool waters of Lake Victoria .Phenomenal Simple Phenomenal</p>
          </div>
          <div className="flex space-x-3 text-hero my-10">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
          </div>
          
        </div>
        <div className="shadow-2xl flex flex-col space-y-8 justify-center items-center w-[300px] min-h-[350px] p-4 rounded-lg border-none bg-background relative">
          <div>
            <img src="/assets/face5.jpg" alt="" className='size-12 rounded-full object-cover -top-5  left-[40%] absolute' />
          </div>
          <div className='flex justify-center items-center'>
            <p className='text-hero font-medium text-center my-1'>Samson Ndegwa</p>
          </div>
          <div className="content">
          <p className='text-black font-medium text-left leading-7' onClick={() => setShow(!show)} style={show?{ WebkitLineClamp: 5, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical' }:{}}>
            Forget stuffy hotels, in London I found the magic of Daima Comforts! It wasn't just an Airbnb, it was like Bilbo Baggins' cozy hobbit hole in the heart of the city. My host, Johnson Brookes, deserves a standing ovation for his hospitality!  If you're ever on a quest through London, skip the mundane and bed down at Daima Comforts. It'll be an adventure fit for a hobbit (or anyone who appreciates a delightful stay)!</p>
          </div>
          <div className="flex space-x-3 text-hero my-10">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
          </div>
          
        </div>
        <div className="shadow-2xl flex flex-col space-y-8 justify-center items-center w-[300px] min-h-[350px] p-4 rounded-lg border-none bg-background relative">
          <div>
            <img src="/assets/face2.jpg" alt="" className='size-12 rounded-full object-cover absolute -top-5 left-[40%]' />
          </div>
          <div className='flex justify-center items-center'>
            <p className='text-hero font-medium text-center my-1'>Kamau Muthii</p>
          </div>
          <div className="content">

            <p className='text-black font-medium text-left leading-7' onClick={() => setShow(!show)} style={show?{ WebkitLineClamp: 5, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical' }:{}}>
              In London, I stumbled upon a hidden gem: Daima Comforts! It wasn't just an Airbnb, it was a portal to a cozy, homey wonderland. And Johnson Brookes, the host? Well, let's just say he deserves a medal for hospitality! If you're ever adventuring through London, ditch the ordinary and book a stay at Daima Comforts. Trust me, it'll be like stepping into a warm hug from the city itself.
            </p>
          </div>
          
          <div className="flex space-x-3 text-hero my-10">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Testimonials
