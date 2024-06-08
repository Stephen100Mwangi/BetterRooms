/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { GiBunkBeds } from "react-icons/gi";

const PersonalFeed = ({output,price,roomType,city,neighborhood,propertyType,annualAvailability,reviews,nights,rating,beds,bedrooms}) => {
  return (
    <div className='flex flex-row justify-evenly items-center w-full'>
        <h1 className='font-semibold text-base flex items-center justify-center w-40 text-center'>{output}</h1>
        <div className='font-medium text-hero w-40 text-base flex items-center justify-center text-center'>{city}</div>
        <div className='font-normal text-base w-40 flex items-center justify-center text-center'>{neighborhood}</div>
        <div className='font-normal text-base w-40 flex items-center justify-center text-center'>{propertyType}</div>
        <div className='font-normal text-base w-40 flex items-center justify-center text-center'>{roomType}</div>
        <div className='font-normal text-base w-24 flex items-center justify-center text-center'>{annualAvailability}</div>
        <div className='font-medium text-base w-24 flex items-center justify-center text-center'>${price}</div>
        <div className='font-normal text-base w-24 flex items-center justify-center text-center'>{reviews}</div>
        <div className='font-normal text-base w-24 flex items-center justify-center text-center'>{nights}</div>
        <div className='font-sans text-base w-24 flex items-center justify-center text-center'>{rating}</div>
        <div className='font-mono text-base w-24 flex items-center justify-center text-center'>{bedrooms}</div>
        <div className='font-mono text-base w-24 flex items-center justify-center text-center'>{beds}</div>
    </div>
  )
}

PersonalFeed.propTypes = {
    output: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    roomType: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    neighborhood: PropTypes.string.isRequired,
    propertyType: PropTypes.string.isRequired,
    annualAvailability: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    nights: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    beds: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired
}

export default PersonalFeed
