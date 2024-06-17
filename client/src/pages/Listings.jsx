/* eslint-disable no-unused-vars */
import React from 'react'
import { FaStar, FaHeart, FaThumbsUp } from 'react-icons/fa6'
import ListingOutput from '../components/ListingOutput'

const Listings = () => {
  return (
    <div className='min-h-[calc(100vh-120px)] bg-background p-[20px]'>
      <div className="flex flex-col space-y-3 m-5 mx-auto">
        <div className='w-full items-center justify-center flex'>
          <h1 className='w-[450px] leading-relaxed text-center font-bold text-3xl max-md:text-2xl'>Available Homes Awaiting You <span className='decoration-clone text-hero'>Home Away From Home</span></h1>
        </div>
        <div className="flex items-center justify-center gap-20 pb-20 pt-10 flex-wrap">
          <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/bed__.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
          <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/personalized.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
          <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/bed__.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
          <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/personal.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
          <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/sofa.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
          <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/bed__.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
          <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/kitchen.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
          <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/lights.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
          <ListingOutput name='Great Views Homes' location='Liverpool' star={<FaStar />} stars={<FaStar />} price={890} image="./public/assets/bed.jpg" rate={4.5} like={<FaThumbsUp />} reviews={7800} favorite={<FaHeart />}></ListingOutput>
        </div>
      </div>
    </div>
  )
}

export default Listings
