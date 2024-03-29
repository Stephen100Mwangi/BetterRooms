import React from 'react'
import { useState } from 'react';
import BasicInfo from './userRegistation/BasicInfo';
import FaceScan from './userRegistation/FaceScan';
import ConfirmRegister from './userRegistation/ConfirmRegister';

const Register = () => {

    const [page, setPage] = useState(0);
    const titles = ['Register Here','Scan Face', 'Confirm Registration']

    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        confirmRegistation: false,
        faceScanSuccess: false
    })

    const pageDisplay = ()=>{
        if (page === 0) {
            return <BasicInfo formData={formData} setFormData={setFormData} />
        }else if( page == 1){
            return <FaceScan  formData={formData} setFormData={setFormData}/>
        }else{
            return <ConfirmRegister formData={formData} setFormData={setFormData} />
        }
    }
  return (
    <div className='form w-full h-[calc(100vh-120px)] flex flex-col justify-center items-center bg-background relative max-sm:overflow-hidden
    '>
        <div className='w-[120px] items-start justify-start p-0 bg-white rounded-full fixed top-28 max-md:invisible'>
            <div className="progressbar rounded-full h-1 bg-hero" style={{width: page === 0? "40px":page === 1?"80px":"120px"}}></div>
        </div>
        
        <div className="formContainer flex flex-col space-y-5">
            {/* <div className="header">
                <h1>{titles[page]}</h1>
            </div> */}
            <div className="body">
                {pageDisplay()}
            </div>
            <div className="flex space-x-5 justify-center">
                <button onClick={()=> setPage((currentPage) => currentPage - 1)} disabled={page == 0}  className='bg-hero rounded-lg text-white shadow-2xl p-3 px-6'>Previous</button>
                <button onClick={()=> {
                    if (page === titles.length - 1) {
                        alert("Submitted")
                        
                    }else{
                        setPage((currentPage) => currentPage + 1)
                    }
                    

                }} className='bg-hero rounded-md text-white shadow-2xl p-3 items-center flex justify-center px-6'>{page === titles.length-1?"Submit":"Next"}</button>
            </div>
        </div>
        
    </div>
  )
}

export default Register
