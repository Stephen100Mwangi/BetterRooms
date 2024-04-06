import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const BookResult = () => {
  return (
    <div className='min-h-[calc(100vh-120px)] bg-background p-[20px]'>
      <div className="flex flex-wrap">
        
        <div className="flex flex-col space-y-3 m-5 mx-auto">
          <div className='w-[300px] h-[200px] rounded-lg border'>
            <Link><img src="/assets/kitchen.jpg" alt="" className='h-[100%] w-[100%] object-cover rounded-lg'/></Link>
          </div>

          <div className="location flex justify-between w-[300px]">
            <p className='text-black font-bold'>Location</p>
            <div className="rating flex space-x-3 items-center">
              <div className="rate flex">
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
              </div>
              <div className="rate__figure font-normal text-hero">4.5</div>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
              <div className="capacity">
                <p className='text-hero font-light'>2 persons</p>
              </div>
              <div className="price">
                <p className='text-hero font-light'>$45 per night per person</p>
              </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3 m-5 mx-auto mx-10">
          <div className='w-[300px] h-[200px] rounded-lg border'>
            <img src="/assets/bed__.jpg" alt="" className='h-[100%] w-[100%] object-cover rounded-lg'/>
          </div>

          <div className="location flex justify-between w-[300px]">
            <p className='text-black font-bold'>Location</p>
            <div className="rating flex space-x-3 items-center">
              <div className="rate flex">
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
              </div>
              <div className="rate__figure font-normal text-hero">4.5</div>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
              <div className="capacity">
                <p className='text-hero font-light'>2 persons</p>
              </div>
              <div className="price">
                <p className='text-hero font-light'>$45 per night per person</p>
              </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3 m-5 mx-auto">
          <div className='w-[300px] h-[200px] rounded-lg border'>
            <img src="/assets/personal.jpg" alt="" className='h-[100%] w-[100%] object-cover rounded-lg'/>
          </div>

          <div className="location flex justify-between w-[300px]">
            <p className='text-black font-bold'>Location</p>
            <div className="rating flex space-x-3 items-center">
              <div className="rate flex">
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
              </div>
              <div className="rate__figure font-normal text-hero">4.5</div>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
              <div className="capacity">
                <p className='text-hero font-light'>2 persons</p>
              </div>
              <div className="price">
                <p className='text-hero font-light'>$45 per night per person</p>
              </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3 m-5 mx-auto">
          <div className='w-[300px] h-[200px] rounded-lg border'>
            <img src="/assets/lights.jpg" alt="" className='h-[100%] w-[100%] object-cover rounded-lg'/>
          </div>

          <div className="location flex justify-between w-[300px]">
            <p className='text-black font-bold'>Location</p>
            <div className="rating flex space-x-3 items-center">
              <div className="rate flex">
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
              </div>
              <div className="rate__figure font-normal text-hero">4.5</div>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
              <div className="capacity">
                <p className='text-hero font-light'>2 persons</p>
              </div>
              <div className="price">
                <p className='text-hero font-light'>$45 per night per person</p>
              </div>
          </div>
        </div>

        <div className="flex flex-col space-y-3 m-5 mx-auto">
          <div className='w-[300px] h-[200px] rounded-lg border'>
            <img src="/assets/relax_.jpg" alt="" className='h-[100%] w-[100%] object-cover rounded-lg'/>
          </div>

          <div className="location flex justify-between w-[300px]">
            <p className='text-black font-bold'>Location</p>
            <div className="rating flex space-x-3 items-center">
              <div className="rate flex">
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
                <FaStar className='text-hero'/>
              </div>
              <div className="rate__figure font-normal text-hero">4.5</div>
            </div>
          </div>

          <div className="flex flex-col space-y-1">
              <div className="capacity">
                <p className='text-hero font-light'>2 persons</p>
              </div>
              <div className="price">
                <p className='text-hero font-light'>$45 per night per person</p>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BookResult
