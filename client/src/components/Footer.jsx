/* eslint-disable no-unused-vars */
import React from 'react'
import { AiOutlineCopyright } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa6';
import { IoIosSend } from "react-icons/io";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-hero bg-opacity-95 text-background flex flex-col space-y-16 px-8 py-8 pt-24 items-center justify-center'>
        <div className="newsLetter flex flex-col space-y-5">
            <h1 className='text-3xl text-red_500'>Subscribe to Our News Letter</h1>
            <div className="flex items-center justify-center space-x-10">
                <input type="text" placeholder='Input your email here' className='px-6 p-2 rounded-lg w-64 outline-none text-black'/>
                <div><IoIosSend className='text-2xl cursor-pointer'/></div>
            </div>
        </div>
        <div className="flex w-full justify-evenly items-start">
            <div className="links flex flex-col space-y-5 items-start justify-center">
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/listings'>Our Listings</Link>
                <Link to='/testimonials'>Testimonials</Link>
                <Link to='/book'>Book Accommodation</Link>
            </div>
            <div className="socials flex flex-col space-y-5 items-start justify-start">
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
