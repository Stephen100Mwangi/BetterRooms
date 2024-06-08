/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const ListingOutput = ({image,price,reviews,rate,name,location,like,favorite,star,stars}) => {
  return (
    <div className='flex flex-col w-fit space-y-2 rounded-lg'>
        <div className="image w-[300px] h-[200px] rounded-lg mb-5">
            <img src={image} alt="Listing" className='object-cover w-[300px] h-[200px] rounded-lg' />
        </div>
        <div className='flex justify-between items-center'>
            <div className="flex items-center justify-center">
                <h1 className='text-lg font-medium'>{name}</h1>
            </div>
            <div className="flex justify-center items-center space-x-3">
                <div className='text-black cursor-pointer'>{like}</div>
                <div className='text-red_500 cursor-pointer'>{favorite}</div>
                <div className='text-hero cursor-pointer'>{star}</div>
            </div>
        </div>
        <div className="location">
            <h1 className='text-heroTitle text-sm'>{location}</h1>
        </div>
        <div className="flex space-x-5 items-center justify-start">
            <h1 className='text-hero text-base'>{rate}</h1>
            <div className='text-heroTitle flex justify-center text-sm items-center space-x-2'>
                <div>{stars}</div>
                <div>{stars}</div>
                <div>{stars}</div>
                <div>{stars}</div>
                <div>{stars}</div>
            </div>
        </div>

        <div>
            <h1 className='text-hero font-normal'>{reviews} reviews</h1>
        </div>

        <div>
            <h1 className='text-heroTitle font-normal text-base'>${price} per night</h1>
        </div>
    </div>
  )
}

ListingOutput.propTypes = {
    price: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
    image: PropTypes.element.isRequired,
    rate: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    like: PropTypes.element.isRequired,
    favorite: PropTypes.element.isRequired,
    star: PropTypes.element.isRequired,
    stars: PropTypes.element.isRequired
}
export default ListingOutput
