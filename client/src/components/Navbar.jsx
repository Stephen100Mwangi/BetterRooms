/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import { MdMenu } from 'react-icons/md'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [mobile,setMobile] = useState(false)
  const user = useSelector((state)=>state.user.value);
  const userLoggedIn = user.loggedIn;
  return (
    <div className='flex p-8 justify-between items-center bg-background relative w-full'>
        <img src="/assets/logo.png" alt="" />

        <div className="flex space-x-5 text-black visible max-lg:invisible">
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/listings'>Our Listings</Link>
            <Link to='/testimonials'>Testimonials</Link>
            <Link to='/book'>Book Accommodation</Link>
            {
              userLoggedIn &&  <Link to='/profile' className='text-red'>Sign Out</Link>
            }
            {
              !userLoggedIn &&  <Link to='/register'>Register/Login</Link>
            }
           
        </div>
        {
          !mobile && <MdMenu className='text-hero absolute top-7 right-7 invisible max-lg:visible' onClick={()=>setMobile(!mobile)} />
        }

        {/* Mobile Phone */}
        {
          mobile && (
          <div className="flex text-black bg-background rounded-md flex-col space-y-5 text-justify absolute right-5 top-5 shadow-2xl z-[900] p-5 invisible max-lg:visible">
            {mobile && <MdClose className='text-hero absolute right-2 top-2' onClick={()=>setMobile(!mobile)} />}
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/listings'>Our Listings</Link>
            <Link to='/testimonials'>Testimonials</Link>
            <Link to='/book'>Book Accommodation</Link>
            {
              userLoggedIn &&  <Link to='/profile' className='text-red'>Sign Out</Link>
            }
            {
              !userLoggedIn &&  <Link to='/register'>Register/Login</Link>
            }
          </div>

          )
        }
        

    </div>
  )
}

export default Navbar
