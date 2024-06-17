/* eslint-disable no-unused-vars */
import React from 'react'
import { AiOutlineCopyright } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa6';
import { IoIosSend } from "react-icons/io";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-hero min-h-fit text-background flex flex-col space-y-20 px-8 py-24 pt-12 items-center justify-center max-md:pb-56'>
        <div className="newsLetter flex flex-col space-y-5">
            <h1 className='text-3xl text-red_500 text-center'>Subscribe to Our News Letter</h1>
            <div className="flex items-center justify-center space-x-10">
                <input type="text" placeholder='Input your email here' className='px-6 p-2 rounded-lg w-64 outline-none text-black'/>
                <div><IoIosSend className='text-2xl cursor-pointer'/></div>
            </div>
        </div>
        <div className="flex flex-row w-full justify-evenly items-start max-md:flex-col max-md:space-y-12 max-md:justify-center max-md:items-center">
            <div className="links flex flex-col space-y-5 items-start justify-center">
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/listings'>Our Listings</Link>
                <Link to='/testimonials'>Testimonials</Link>
                <Link to='/book'>Book Accommodation</Link>
            </div>
            <div className="flex flex-col space-y-5 items-start justify-start max-md:flex-row max-md:space-x-10 max-md:space-y-0 max-md:justify-center max-md:items-center">
                <a href=""><FaTwitter /></a>
                <a href=""><FaPinterest /></a>
                <a href=""><FaFacebook /></a>
                <a href=""><FaInstagram /></a>
            </div>
            <div className="contacts flex flex-col space-y-5 items-start justify-center">
                <a href="tel:+254758725032">+254758725032</a>
                <a href="mailto:mwangiwahome70@gmail.com">Email us via</a>
            </div>
        </div>
        <div className="flex items-center space-x-5 justify-center">
            <p>Copyright</p>
            <AiOutlineCopyright />
            <p>All rights reserved</p>
        </div>

      
    </div>
  )
}

export default Footer
