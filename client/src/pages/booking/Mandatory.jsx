/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { MdLocationCity } from "react-icons/md";
// import { MdEmail, MdPayment, MdPerson, MdPhone } from 'react-icons/md'

// eslint-disable-next-line react/prop-types
const Mandatory = ({ formData, setData }) => {
  return (
    <form className="flex flex-col space-y-5 rounded-lg shadow-2xl p-6">
      <h1 className="text-hero text-center font-medium text-2xl">
        Mandatory Features
      </h1>
      <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
        <label className="font-bold text-base" htmlFor="Available places">Available Cities</label>
        <select
          name=""
          id=""
          className="px-6 p-2 outline-hero"
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
      </div>

      <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
        <label className="font-bold text-base" htmlFor="Available places">Available places</label>
        <select
          name=""
          id=""
          className="px-6 p-2 outline-hero"
          value={formData.neighborhood}
          onChange={(e) =>
            setData({ ...formData, neighborhood: e.target.value })
          }
        >
          <option value="Villa parks">Villa parks</option>
          <option value="Vipingo Gardens">Vipingo Gardens</option>
        </select>
      </div>

      <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
        <label className="font-bold text-base" htmlFor="Room Type">Room Type</label>
        <select
          name=""
          id=""
          className="px-6 p-2 outline-hero"
          value={formData.roomType}
          onChange={(e) => setData({ ...formData, roomType: e.target.value })}
        >
          <option value="Entire Home">Entire Home</option>
          <option value="Entire Home">Private room</option>
          <option value="Entire Home">Shared room</option>
          <option value="Entire Home">Hotel room</option>
        </select>
      </div>

      <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
        <label className='font-bold text-base' htmlFor="Property type">Property type</label>
        <select className="px-6 p-2 outline-hero" value={formData.propertyType} onChange={(e)=>setData({...formData,propertyType:e.target.value})}>
          <option value="Apartment">Apartment</option>
          <option value="House">House</option>
          <option value="Condo">Condo</option>
        </select>
      </div>
      <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
        <label className='font-bold text-base' htmlFor="Price Range">Price Range</label>
        <input min={10} max={1000} step={10} className='px-6 p-2 outline-hero' type="number" name="" value={formData.minimumReviews}  onChange={(e)=>setData({...formData,minimumReviews:e.target.value})} placeholder="Minimum Number of Reviews" />
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

export default Mandatory;
