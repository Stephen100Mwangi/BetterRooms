/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import { MdLockClock, MdMoney } from 'react-icons/md'
import { FaIdCard } from "react-icons/fa";
import PropTypes from 'prop-types'


// eslint-disable-next-line react/prop-types
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

        <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
            <label className='font-bold text-base' htmlFor="Minimum Availability(Days per Year)">Minimum Availability(Days per Year)</label>
            <input className='px-6 p-2 outline-hero' min={1} max={365} type="number" name="" value={formData.availability}  onChange={(e)=>setData({...formData,availability:e.target.value})} placeholder="0" />
        </div>
        <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
            <label className='font-bold text-base' htmlFor="Minimum Number of Reviews">Minimum Number of Reviews</label>
            <input className='px-6 p-2 outline-hero' type="number" min={1} value={formData.minimumReviews}  onChange={(e)=>setData({...formData,minimumReviews:e.target.value})} placeholder="50" />
        </div>
        <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
            <label className='font-bold text-base' htmlFor="Minimum Number of Beds">Minimum Number of Nights</label>
            <input className='px-6 p-2 outline-hero' type="number" min={1} value={formData.minimumNights}  onChange={(e)=>setData({...formData,minimumNights:e.target.value})} placeholder="1" />
        </div>
        <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
            <label className='font-bold text-base' htmlFor="Minimum Number of Beds">Minimum Rating</label>
            <input className='px-6 p-2 outline-hero' type='range' step={0.1} min={1.0} max={5.0} value={formData.minimumRating}  onChange={(e)=>setData({...formData,minimumRating:e.target.value})} placeholder="2.0" />
        </div>
        <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
            <label className='font-bold text-base' htmlFor="Minimum Number of Beds">Minimum Number of Beds</label>
            <input className='px-6 p-2 outline-hero' min={1} max={10} type="number" value={formData.no_Beds}  onChange={(e)=>setData({...formData,no_Beds:e.target.value})} placeholder="0" />
        </div>
        <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
            <label className='font-bold text-base' htmlFor="Minimum Number of Bedrooms">Minimum Number of Bedrooms</label>
            <input className='px-6 p-2 outline-hero' min={1} max={10} type="number" value={formData.no_Bedrooms}  onChange={(e)=>setData({...formData,no_Bedrooms:e.target.value})} placeholder="0" />
        </div>
        {/* <MdLockClock className='text-black'/>
            <select name="bookType" id="" className='bg-white text-black outline-none bg-opacity-0' >
                <option value="timing" disabled>Time you wish to spend</option>
                <option value="instantBook">Instant Book</option>
                <option value="reservation">Reservation Request</option>
            </select> */}
        {/* <div className="flex px-[12px] py-[8px] space-x-[16px] rounded-xl bg-white items-center justify-normal">
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
        </div> */}
        {/* <div className="flex px-[12px] py-[8px] space-x-[16px] rounded-xl bg-white items-center justify-normal">
            <FaIdCard className='text-black' onClick={handleUploadClick}/>
            <input ref={idRef} type="file" name="" id="" className='bg-white text-black outline-none bg-opacity-0' style={{ display: 'none', visibility:'hidden' }} placeholder='Time you wish to spend'/>
            <input type="text" name="" id="" disabled className='bg-white text-black outline-none bg-opacity-0' placeholder="Upload your Country's ID card"/>
        </div> */}
      
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
