import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const FaceScan = ({formData,setFormData}) => {
    const [faceScanSuccess,setFaceScan] = useState(false);
  return (
    <div className='bg-background h-fit pt-5 flex justify-center'>
            <form className='w-[338px] h-fit rounded-[10px] flex flex-col space-y-6 shadow-2xl justify-center py-[32px] px-[10px]'>
                <h1 className='text-hero text-3xl font-medium'>Scan Face Here</h1>
                <input type="checkbox" name="faceScan" id="" value={formData.faceScanSuccess} onChange={(e)=>setFormData({...formData,faceScanSuccess:e.target.value})} />
                {faceScanSuccess && alert("Hurray")}
                <div className="flex space-x-3">
                    <p className='text-black'>Already have an account</p>
                    <Link to='/login' className='text-hero'>Login Here</Link>
                </div>
            </form>
        </div>
  )
}

export default FaceScan
