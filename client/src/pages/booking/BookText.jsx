/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import Optional from './Optional'
import Mandatory from './Mandatory'
// import Payment from './Payment'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import UserListings from '../UserListings'

export const UserListingsContext = createContext();

const BookText = () => {

    const navigate = useNavigate();
    const [userRequestedData,setUserRequestedData] = useState([]);

    const [formData,setData] = useState({
        city:"",
        neighborhood:"",
        roomType:"",
        propertyType:"",
        // priceRange:"",
        min_priceRange: 0,
        max_priceRange: 0,
        minimumReviews:0,
        annual_availability:0,
        minimumRating:1.0,
        minimumNights:0,
        no_Beds:0,
        no_Bedrooms:0
    })

    const titles = ["Features","Other Features"];
    const [page,setPage] = useState(0);

    const pageDisplay = ()=>{
        if (page === 0) {
            return <Mandatory formData={formData} setData={setData} />
        }else if (page === 1) {
            // return <Payment formData={formData} setData={setData}/>
            return <Optional formData={formData} setData={setData}/>
        }else{
            // return <Optional formData={formData} setData={setData}/>
        }
    }

    const handle_BNBBooking = async () =>{
        const {
            city,
            neighborhood,
            roomType,
            propertyType,
            // priceRange,
            min_priceRange,
            max_priceRange,
            // payment,
            minimumReviews,
            annual_availability,
            minimumRating,
            minimumNights, 
            no_Beds, 
            no_Bedrooms 
    
        }  = formData;
    
        if (!city || !neighborhood || !roomType || ! min_priceRange || !max_priceRange || !propertyType || !minimumNights || !minimumRating || !minimumReviews || !annual_availability || !no_Bedrooms || !no_Beds) {
            return toast.error("All fields must me completed")
        }

        if (annual_availability > 365) {
            return toast.error("Annual availability cannot exceed 365")
        }

        setUserRequestedData(formData);

        toast.success("Hurray.About to view your AirBNB choice.Redirecting to another page")

        setTimeout(() => {
            navigate("/listing_output");
        }, 5000);
       
    }



  return (
    <div className='min-h-[calc(100vh-120px)] bg-background flex flex-col items-center space-x-2 space-y-8 pb-12 rounded-lg shadow-2xl'>
        <div className="bg-white flex items-center w-[120px]">
            <div className='bg-hero h-1 rounded-full' style={{width: page === 0? "40px": page === 1? "80px":"120px"}}></div>
        </div>
        <Toaster></Toaster>
        <div>
            {pageDisplay()}
        </div>
        <div className='footer flex space-x-5'>
            <button onClick={()=>setPage((current) => current - 1)} disabled={page === 0} className='text-white bg-hero p-2 px-6 rounded-sm hover:rounded-full'>Previous</button>
            <button 
                onClick={()=>{
                    if (page === titles.length - 1) {
                        handle_BNBBooking();
                      } else {
                        setPage((current) => current + 1);
                      }

                }}
           
                className='text-white bg-hero p-2 px-6 rounded-sm hover:rounded-full'>
                {page === titles.length-1?"Submit":"Next"}
            </button>
            <UserListingsContext.Provider value={userRequestedData}></UserListingsContext.Provider>
        </div>
        
        
      
    </div>
  )
}


export default BookText
