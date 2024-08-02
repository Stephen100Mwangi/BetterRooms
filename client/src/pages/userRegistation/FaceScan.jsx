/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { json, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
// import { LuScanFace } from "react-icons/lu";

const FaceScan = ({formData,setFormData}) => {

  console.log(formData);
  const username = formData.username;
  const name = formData.name;
  const email = formData.email;
  const password = formData.password;

  useEffect(()=>{
    
    if (username && name && email && password) {
      toast.success("All fields are ok. Continue to face scan");
    }else{
      toast.error("Previous fields must be complete")
    }

  },[username,name,email,password])

  return (
    <div className='bg-background h-fit pt-5 flex justify-center'>
            <form className='w-[338px] h-fit rounded-[10px] flex flex-col space-y-6 shadow-2xl justify-center py-[32px] px-[10px] max-sm:w-[300px]'>
                <h1 className='text-hero text-2xl text-center font-medium'>Scan Face Here</h1>

                <div className='flex flex-col space-y-3 justify-center items-center'>
                  <div>Scan Face</div>
                  {/* <LuScanFace className='text-red' /> */}
                </div>
                <input type="checkbox"
                      checked={formData.faceScanSuccess}
                      onChange={()=> setFormData({...formData,faceScanSuccess: !formData.faceScanSuccess})} />
                <div className="flex space-x-3">
                    <p className='text-black'>Already have an account</p>
                    <Link to='/login' className='text-hero'>Login Here</Link>
                </div>
            </form>
        </div>
  )
}

FaceScan.propTypes = {
  formData: PropTypes.shape({
    faceScanSuccess: PropTypes.bool
  }).isRequired,
  setFormData: PropTypes.func.isRequired
}

export default FaceScan
