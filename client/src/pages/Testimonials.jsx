/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState , useEffect} from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";
import axios from "axios"
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import avatar from '/assets/avatar.svg'

const Testimonials = () => {

  const [show,setShow] = useState(true);
  const [user_comments,setUserComments] = useState([]);

  const handleComments = async()=>{
    try {
      const response = await axios.get("http://localhost:6650/fetchComments");
     if (response.data.message === "No comments to show") {
      return toast.custom("No comments just yet")
     }

     if (response.data.message === "Comments fetched successfully") {
      const newComments = response.data.comments;
      setUserComments(newComments);

     }
    } catch (error) {
      toast.error("Error fetching comments")
    }
  }

  useEffect(()=>{
    handleComments();
  },[])

  
  return (
    <div className='py-2 pt-0 max-md:p-5 min-h-[calc(100vh-120px)] bg-background p-[20px] h-fit max-md:h-fit'>

      <h1 className='text-center text-3xl text-black mb-10 font-bold max-md:text-2xl'>Don't Just Take Our Word For It: <span className='text-hero'>Guest Testimonials</span> </h1>
      <Toaster />
      <div className="bg-[url('/assets/blue.jpg')] bg-cover bg-center bg-no-repeat rounded-lg shadow-2xl w-full overflow-auto scrollbar-hide p-6 h-[calc(65vh)] flex flex-wrap justify-center items-center gap-16 max-md:p-4 max-md:flex max-md:overflow-x-scroll">
        {
          user_comments.map((item,index) =>(
            <div key={index} className="shadow-2xl flex flex-col space-y-8 justify-center items-center w-[300px] min-w-[300px] min-h-[350px] p-4 rounded-lg border-none bg-background relative">
            <div>
              <img src={avatar} alt="" className='size-12 rounded-full object-cover -top-5  left-[40%] absolute' />
            </div>
            <div className='flex justify-center items-center'>
              <p className='text-hero font-medium text-center my-1'>{item.name}</p>
            </div>
            <div className="content">
            <p className='text-black font-medium text-left leading-7 cursor-pointer' onClick={() => setShow(!show)} style={show?{ WebkitLineClamp: 5, overflow: 'hidden', display: '-webkit-box', WebkitBoxOrient: 'vertical' }:{}}>{item.message}</p>
            </div>
            <div className="flex space-x-3 text-hero my-10">
              {item.email}
            </div>
            <div className="flex space-x-3 text-hero my-10">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
            </div>
          </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonials
