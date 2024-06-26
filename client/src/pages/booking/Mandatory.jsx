/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { FaMicrophoneLines } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Mandatory = ({ formData, setData }) => {
  return (
    <form className="flex flex-col space-y-5 rounded-lg shadow-2xl p-6">
      <h1 className="text-hero text-center font-medium text-2xl">
        Mandatory Features
      </h1>
      <div className="flex flex-col space-y-2 px-[12px] py-[8px]">
        <label className="font-bold text-base" htmlFor="Available places">Available Cities</label>
        <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
          <select
            name=""
            id=""
            className="px-6 p-2 outline-hero min-w-56 mr-2"
            value={formData.city}
            onChange={(e) => setData({ ...formData, city: e.target.value })}
          >
            <option disabled>Select preferred city</option>
            <option value="New York City">New York City</option>
            <option value="Berlin">Berlin</option>
            <option value="Paris">Paris</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Sydney">Sydney</option>
            <option value="Rome">Rome</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Barcelona">Barcelona</option>
            <option value="London">London</option>
            <option value="Brussels">Brussels</option>
          </select>
          {/* <div className="cursor-pointer"><FaMicrophoneLines /></div> */}
        </div>
      </div>

      <div className="flex flex-col space-y-2 px-[12px] py-[8px]">
        <label className="font-bold text-base" htmlFor="Available places">Available places</label>
        <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
          <input
            name=""
            type='text'
            id=""
            className="px-6 p-2 outline-hero min-w-56 mr-2"
            value={formData.neighborhood}
            onChange={(e) =>
              setData({ ...formData, neighborhood: e.target.value })
            }
          ></input>
          {/* <div className="cursor-pointer"><FaMicrophoneLines /></div> */}
        </div>
      </div>

      <div className="flex flex-col space-y-2 px-[12px] py-[8px]">
        <label className="font-bold text-base" htmlFor="Room Type">Room Type</label>
        <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
          <select
            name=""
            id=""
            className="px-6 p-2 outline-hero min-w-56 mr-2"
            value={formData.roomType}
            onChange={(e) => setData({ ...formData, roomType: e.target.value })}
          >
            <option value="Entire Home">Entire Home</option>
            <option value="Private room">Private room</option>
            <option value="Shared room">Shared room</option>
            <option value="Hotel room">Hotel room</option>
          </select>
          {/* <div className="cursor-pointer"><FaMicrophoneLines /></div> */}
        </div>
      </div>

      <div className="flex flex-col space-y-2 px-[12px] py-[8px]">
        <label className='font-bold text-base' htmlFor="Property type">Property type</label>
        <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
          <select className="px-6 p-2 outline-hero min-w-56 mr-2" value={formData.propertyType} onChange={(e)=>setData({...formData,propertyType:e.target.value})}>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Condo">Condo</option>
          </select>
          {/* <div className="cursor-pointer"><FaMicrophoneLines /></div> */}
        </div>
      </div>
      <div className="flex flex-col space-y-2 px-[12px] py-[8px]">
        <label className='font-bold text-base' htmlFor="Price Range">Minimum Price Range</label>
        <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
          <input
              min={10}
              type="range"
              max={formData.max_priceRange}
              step={10}
              className='px-6 p-2 outline-hero min-w-56 mr-2'
              name="max_priceRange"
              value={formData.min_priceRange}
              onChange={(e)=>setData({...formData,min_priceRange:e.target.value})}
              placeholder="Minimum price range" />
            <span className="ml-4">{formData.min_priceRange}</span>
          {/* <div className="cursor-pointer"><FaMicrophoneLines /></div> */}
        </div>
      </div>
      <div className="flex flex-col space-y-2 px-[12px] py-[8px]">
        <label className='font-bold text-base' htmlFor="Price Range">Maximum Price Range</label>
        <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
          <input
              min={formData.min_priceRange}
              max={1000}
              step={10}
              className='px-6 p-2 outline-hero min-w-56 mr-2'
              type="range"
              name="max_priceRange"
              value={formData.max_priceRange}
              onChange={(e)=>setData({...formData,max_priceRange:e.target.value})}
              placeholder="Minimum price range" />
            <span className="ml-4">{formData.max_priceRange}</span>
          {/* <div className="cursor-pointer"><FaMicrophoneLines /></div> */}
        </div>
      </div>

    </form>
  );
};

Mandatory.propTypes = {
  formData: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string,
      neighborhood:PropTypes.string,
      roomType:PropTypes.string,
      propertyType:PropTypes.string,
      // priceRange:PropTypes.string,
      min_priceRange: PropTypes.number,
      max_priceRange: PropTypes.number,
      minimumReviews:PropTypes.number,
      annual_availability:PropTypes.number,
      minimumRating:PropTypes.number,
      minimumNights:PropTypes.number,
      no_Beds:PropTypes.number,
      no_Bedrooms:PropTypes.number,
      setData: PropTypes.any,
    })
  ),
};

export default Mandatory;
