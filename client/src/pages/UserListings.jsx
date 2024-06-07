/* eslint-disable no-unused-vars */
import React from 'react'
import ListingOutput from '../components/ListingOutput'
import { FaHeart, FaStar, FaThumbsUp } from 'react-icons/fa6'
import { IoReturnUpBack } from "react-icons/io5";

const UserListings = () => {
  return (
    <div className='flex flex-col space-y-10 px-8 bg-background min-h-screen'>
        <div className="title">
            <div className="flex justify-center items-center space-x-10 relative">
                <div className="back absolute top-4 left-0">
                    <IoReturnUpBack />
                </div>
                <h1 className='w-[360px] text-center font-bold text-3xl'>Available Homes That Suites <span className='decoration-clone text-red_500'>Your Search</span></h1>
            </div>
        </div>
        {/* To be updated dynamically using array.map() */}
        <div className="flex items-center justify-center gap-20 pb-20 pt-10 flex-wrap">
            <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/bed__.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
            <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/bed__.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
            <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/bed__.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
            <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/bed__.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
            <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/bed__.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
            <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/bed__.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
            <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/bed__.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
            <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/bed__.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
            <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/bed__.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
        </div>

        
      
    </div>
  )
}

export default UserListings
