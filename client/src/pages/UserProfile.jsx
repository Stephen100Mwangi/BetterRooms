/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, userSlice } from '../features/users/UserSlice';
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
import { AiOutlineLogout } from "react-icons/ai";
import { FaCommentSlash } from "react-icons/fa6";

import Swal from 'sweetalert2';

const UserProfile = () => {
    const [showBio,setShowBio] = useState(false);
    const [showComment,setComment] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.value);

    const [message,setMessage] = useState('');

    // console.log(user);

    const handleLogOut = async() => {

        await(
            Swal.fire({
                title: 'Seems you want to leave?',
                text: 'You will be redirected to another page.',
                icon: 'info',
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
    const addComment = async () => {
        setComment(!showComment);
    }

    const sendComment = async(e)=>{
        e.preventDefault();
        const name = user.username;
        const email = user.email
        if (!name) {
            return toast.error("Name cannot be empty");
        }
        if (!email) {
            return toast.error("Email cannot be empty")
        }
        if (!message) {
            return toast.error("Message cannot be empty")
        }
        try {
           
            const response = await axios.post("http://localhost:6650/addComment",{ name,email,message });
            if (response.data.message === "Message cannot be empty"){
                return toast.error("Message cannot be empty")
            }

            if (response.data.message === "Comment created successfully") {
                setMessage("");
                return toast.success("Kudos. You just projected your voice.We value your feedback.")
            }

        } catch (error) {
            console.log("Error sending message");
            return toast.error("Error sending message")
        }
    }


  return (
    <div className='flex flex-col min-h-screen bg-background px-8 relative'>
        <Toaster></Toaster>

        {
            showComment && (
            <div className='flex flex-col space-y-5 p-5 rounded-lg shadow-lg items-center absolute right-64 top-5 w-fit h-fit bg-white'>
                <div className='relative w-full p-1 flex justify-end items-end text-red text-4xl cursor-pointer'onClick={()=>setComment(!showComment)}><FaCommentSlash  className='bg-white p-2 border border-hero rounded-full '/></div>
                <input readOnly className='w-fit px-6 p-2 rounded-full text-black outline outline-1 outline-hero' type="text" value={user.username}/>
                <input readOnly className='w-fit px-6 p-2 rounded-full text-black outline outline-1 outline-hero' type="text" name="" id="" value={user.email} />
                <textarea name="message" id="" cols="27" rows="5" className='bg-white text-black outline outline-1 outline-hero p-2 rounded-lg' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                <button className='rounded-sm p-2 px-6 bg-hero text-white hover:bg-white hover:text-hero hover:rounded-full hover:outline outline-1' onClick={sendComment}>Submit Comment</button>
            </div>

            )
        }

        
        
        <div className="navbar -mt-5 mb-24">
            <div className="relative w-full flex justify-end items-end space-y-6 flex-col">
                <div className=" absolute top-3 right-[4px] flex size-8 justify-center items-center rounded-full animate-ping border-hero border-2"></div>
                <div onClick={()=>setShowBio(!showBio)} className="absolute -top-4 right-0 cursor-pointer flex items-center bg-hero justify-center text-[30px] font-light text-background size-10 rounded-full overflow-clip animate-none">
                    SM
                </div>
                

                {
                    showBio && (
                        <div className="z-50 absolute bg-white top-10 right-0 personalBio shadow-base rounded-base p-4 flex flex-col space-y-4">
                            <p className="font-bold text-base">{user.username}</p>
                            <p className='font-light text-sm'>{user.email}</p>
                            {/* <p className='font-mono text-sm'>+254758725032</p> */}
                            <Link to='/change_password' className='cursor-pointer text-red font-light text-sm'>Change Password</Link>
                            <button className='px-6 p-2 bg-hero rounded-sm hover:rounded-full text-background' onClick={addComment}>Leave a comment</button>
                            <div onClick={handleLogOut} className="cursor-pointer rounded-sm hover:rounded-full flex items-center justify-center space-x-3 bg-red_500 py-2 text-white">
                               <p>Sign Out</p>
                               <div><AiOutlineLogout /></div>
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
