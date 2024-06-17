/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react'
import Optional from './Optional'
import Mandatory from './Mandatory'
import Payment from './Payment'

const BookText = () => {

    const [formData,setData] = useState({
        city:"",
        neighborhood:"",
        roomType:"",
        propertyType:"",
        priceRange:"",
        minimumReviews:0,
        availability:0,
        minimumRating:1.0,
        minimumNights:0,
        no_Beds:0,
        no_Bedrooms:0
    })

    const titles = ["Mandatory Features","Payment","Optional Features"];
    const [page,setPage] = useState(0);

    const pageDisplay = ()=>{
        if (page === 0) {
            return <Mandatory formData={formData} setData={setData} />
        }else if (page === 1) {
            return <Payment formData={formData} setData={setData}/>
        }else{
            return <Optional formData={formData} setData={setData}/>
        }
    }

  return (
    <div className='min-h-[calc(100vh-120px)] bg-background flex flex-col items-center space-x-2 space-y-8 pb-12 rounded-lg shadow-2xl'>
        <div className="bg-white flex items-center w-[120px]">
            <div className='bg-hero h-1 rounded-full' style={{width: page === 0? "40px": page === 1? "80px":"120px"}}></div>
        </div>
        <div>
            {pageDisplay()}
        </div>
        <div className='footer flex space-x-5'>
            <button onClick={()=>setPage((current) => current - 1)} disabled={page === 0} className='text-white bg-hero p-2 px-6 rounded-sm hover:rounded-full'>Previous</button>
            <button onClick={()=>setPage((current) => current + 1)} className='text-white bg-hero p-2 px-6 rounded-sm hover:rounded-full'>
                {page === titles.length-1?"Submit":"Next"}
            </button>
        </div>
        
        
      
    </div>
  )
}

export default BookText
