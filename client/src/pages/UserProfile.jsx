/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../features/users/UserSlice';
import { MdNightShelter, MdSearch } from "react-icons/md";
import PersonalFeed from './PersonalFeed';
import { FaAirbnb } from "react-icons/fa";
import { GiModernCity } from "react-icons/gi";
import { MdLocationPin } from "react-icons/md";
import { FaBed } from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";
import { MdStarRate } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { AiOutlineApartment } from "react-icons/ai";
import { GiBunkBeds } from "react-icons/gi";
import { GiDoorHandle } from "react-icons/gi";

import Swal from 'sweetalert2';

const UserProfile = () => {
    const [showBio,setShowBio] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const icon= "../public/assets/quit.png"

    const handleLogOut = async() => {

        await(
            Swal.fire({
                title: 'Seems you want to leave?',
                text: 'You will be redirected to another page.',
                iconHtml: <img src={icon} className='' alt="leave" />,
                // icon: 'info',
                showCancelButton: true,
                cancelButtonColor: '#0E77F4',
                confirmButtonColor:'#ef4444',
                confirmButtonText: 'Yes Log Me Out'
            }).then(result =>{
                if (result.isConfirmed) {
                    dispatch(logout({email:"",id:null,loggedIn:false}));
                    setTimeout(() => {
                      navigate("/login");
                    }, 3000);
                    
                }
            })
        )
      }


  return (
    <div className='flex flex-col min-h-screen bg-background px-8'>
        <Toaster></Toaster>
        <div className="navbar -mt-5 mb-24">
            <div className="relative w-full flex justify-end items-end space-y-6 flex-col">
                <div className=" absolute top-3 right-[4px] flex size-8 justify-center items-center rounded-full animate-ping border-hero border-2"></div>
                <div onClick={()=>setShowBio(!showBio)} className="absolute -top-4 right-0 cursor-pointer flex items-center bg-hero justify-center text-[30px] font-light text-background size-10 rounded-full overflow-clip animate-none">
                    SM
                </div>
                

                {
                    showBio && (
                        <div className="z-50 absolute bg-white top-10 right-0 personalBio shadow-base rounded-base p-4 flex flex-col space-y-4">
                            <p className="font-bold text-base">Stephen Mwangi</p>
                            <p className='font-medium text-sm'>Male</p>
                            <p className='font-light text-sm'>mwangiwahome70@gmail.com</p>
                            <p className='font-mono text-sm'>11324900</p>
                            <p className='cursor-pointer text-red font-light text-sm'>Change Password</p>
                            <div onClick={handleLogOut} className="cursor-pointer flex items-center justify-center space-x-3">
                               <p>Sign Out</p>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
        <div className='flex flex-col items-center justify-start space-y-12'>
            <div className="border-t-slate_500 search px-6 flex flex-row space-x-6 justify-center rounded-full shadow-xl items-center">
                <input type="text" placeholder='Type your search here' className='p-2 px-6 rounded-md outline-none bg-background bg-opacity-0'/>
                <MdSearch className='text-xl'/>
            </div>
            <div className='flex flex-row justify-evenly items-center w-full text-hero p-2 pb-4 border-b'>
                <div className='w-40 font-medium flex flex-col space-y-2 items-center justify-center text-center'>
                    <span className='text-center text-base'>AirBNB</span>
                    <div><FaAirbnb /></div>
                </div>
                <div className='font-medium text-hero flex-col space-y-2 text-base flex items-center justify-center text-center w-40'>
                    <span className='text-center text-base'>City</span>
                    <div><GiModernCity /></div>
                </div>
                <div className='font-medium text-base flex flex-col space-y-2 items-center justify-center text-center w-40'>
                    <span className='text-center text-base'>Location</span>
                    <div><MdLocationPin /></div>
                </div>
                <div className='font-medium text-base flex flex-col space-y-2 items-center justify-center text-center w-40'>
                    <span className='text-center text-base'>Property</span>
                    <div><AiOutlineApartment /></div>
                </div>
                <div className='font-medium text-base flex flex-col space-y-2 items-center justify-center w-40 text-center'>
                    <span className='text-center text-base'>Rooms</span>
                    <div><GiDoorHandle /></div>
                </div>
                <div className='font-medium text-base flex flex-col space-y-2 items-center justify-center text-center w-24'>
                    <span className='text-center text-base'>Availability</span>
                    <div><MdEventAvailable /></div>
                </div>
                <div className='font-medium text-base flex flex-col space-y-2 items-center justify-center text-center w-24'>
                    <span className='text-center text-base'>Price</span>
                    <div><MdAttachMoney /></div>
                </div>
                <div className='font-medium text-base flex flex-col space-y-2 items-center justify-center text-center w-24'>
                    <span className='text-center text-base'>Reviews</span>
                    <div><FaEye /></div>
                </div>
                <div className='font-medium text-base flex flex-col space-y-2 items-center justify-center text-center w-24'>
                    <span className='text-center text-base'>Nights</span>
                    <div><MdNightShelter /></div>
                </div>
                <div className='font-medium text-base flex flex-col space-y-2 items-center justify-center text-center w-24'>
                    <span className='text-center text-base'>Rating</span>
                    <div><MdStarRate /></div>
                </div>
                <div className='font-medium text-base flex flex-col space-y-2 items-center justify-center text-center w-24'>
                    <span className='text-center text-base'>Bedrooms</span>
                    <div><GiBunkBeds /></div>
                </div>
                <div className='font-medium text-base flex-col space-y-2 flex items-center justify-center text-center w-24'>
                    <span className='text-center text-base'>Beds</span>
                    <div><FaBed /></div>
                </div>
            </div>

            {/* To be updates Dynamically */}
            <PersonalFeed price={8900} output='Bema Ridges' nights={3} roomType='Hotel Room' reviews={8900} city='Liverpool' bedrooms={5} beds={5} rating={4.5} annualAvailability={60} propertyType='Apartments' neighborhood='Marseille'/>
        </div>

      
    </div>
  )
}

export default UserProfile
