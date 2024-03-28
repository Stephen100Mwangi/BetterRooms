import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex p-8 justify-between items-center bg-background'>
        <img src="/assets/logo.png" alt="" />

        <div className="flex space-x-5 text-black">
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/listings'>Our Listings</Link>
            <Link to='/testimonials'>Testimonials</Link>
            <Link to='/register'>Register/Login</Link>
        </div>
    </div>
  )
}

export default Navbar
