/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { FaMicrophoneLines } from "react-icons/fa6";


// eslint-disable-next-line react/prop-types
const Optional = ({formData,setData}) => {
  return (
    <form className='flex flex-col space-y-5 rounded-lg shadow-2xl p-6'>
        <h1 className='text-center text-2xl text-hero'>Other Features</h1>

        <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
            <label className='font-bold text-base' htmlFor="Minimum Availability(Days per Year)">Minimum Availability(Days per Year)</label>
            <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
                <input className='px-6 p-2 outline-hero min-w-56 mr-2' min={1} max={365} type="number" name="" value={formData.annual_availability}  onChange={(e)=>setData({...formData,annual_availability:e.target.value})} placeholder="0" />
                <div className="cursor-pointer"><FaMicrophoneLines /></div>
            </div>
        </div>
        <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
            <label className='font-bold text-base' htmlFor="Minimum Number of Reviews">Minimum Number of Reviews</label>
            <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
                <input className='px-6 p-2 outline-hero' type="number" min={1} value={formData.minimumReviews}  onChange={(e)=>setData({...formData,minimumReviews:e.target.value})} placeholder="50" />
                <div className="cursor-pointer"><FaMicrophoneLines /></div>
            </div>
        </div>
        <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
            <label className='font-bold text-base' htmlFor="Minimum Number of Beds">Minimum Number of Nights</label>
            <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
                <input className='px-6 p-2 outline-hero' type="number" min={1} value={formData.minimumNights}  onChange={(e)=>setData({...formData,minimumNights:e.target.value})} placeholder="1" />
                <div className="cursor-pointer"><FaMicrophoneLines /></div>
            </div>
        </div>
        <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
            <label className='font-bold text-base' htmlFor="Minimum Number of Beds">Minimum Rating</label>
            <div className="flex items-center justify-between bg-white px-6 pl-2 p-0">
                <input className='px-6 p-2 outline-hero' type='range' step={0.1} min={1.0} max={5.0} value={formData.minimumRating}  onChange={(e)=>setData({...formData,minimumRating:e.target.value})} placeholder="2.0" />
                <div className="cursor-pointer"><FaMicrophoneLines /></div>
            </div>
        </div>
        <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
            <label className='font-bold text-base' htmlFor="Minimum Number of Beds">Minimum Number of Beds</label>
            <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
                <input className='px-6 p-2 outline-hero' min={1} max={10} type="number" value={formData.no_Beds}  onChange={(e)=>setData({...formData,no_Beds:e.target.value})} placeholder="0" />
                <div className="cursor-pointer"><FaMicrophoneLines /></div>
            </div>
        </div>
        <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
            <label className='font-bold text-base' htmlFor="Minimum Number of Bedrooms">Minimum Number of Bedrooms</label>
            <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
                <input className='px-6 p-2 outline-hero' min={1} max={10} type="number" value={formData.no_Bedrooms}  onChange={(e)=>setData({...formData,no_Bedrooms:e.target.value})} placeholder="0" />
                <div className="cursor-pointer"><FaMicrophoneLines /></div>
            </div>
        </div>
    </form>
  )
}

Optional.propTypes = {
    formData: PropTypes.arrayOf(
      PropTypes.shape({
        city: PropTypes.string,
        neighborhood:PropTypes.string,
        roomType:PropTypes.string,
        propertyType:PropTypes.string,
        priceRange:PropTypes.string,
        minimumReviews:PropTypes.number,
        availability:PropTypes.number,
        minimumRating:PropTypes.number,
        minimumNights:PropTypes.number,
        no_Beds:PropTypes.number,
        no_Bedrooms:PropTypes.number,
        setData: PropTypes.any,
      })
    ),
  };

export default Optional
