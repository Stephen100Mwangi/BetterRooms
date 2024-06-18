/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import { MdPayment } from 'react-icons/md'

const Payment = ({formData,setData}) => {
  return (
    <form className='flex flex-col space-y-5 rounded-lg shadow-2xl p-6'>
        <h1 className='text-center text-2xl text-hero'>Select Payment Method</h1>
      
        <div className="flex px-6 p-2 space-x-[16px] outline-hero bg-white items-center justify-normal">
            <MdPayment className='text-black'/>
            <input type="text" name="" id="" disabled className='bg-white text-black outline-none bg-opacity-0' placeholder='Payment Mode'/>
        </div>
        <div className="flex flex-col space-y-3">
            <div className="flex space-x-3">
                <input type="radio" name="creditCard" id="" value="creditCard" onChange={(e)=>setData({...formData,payment:e.target.value})} />
                <span className='text-black'>Credit card</span>
            </div>
            <div className="flex space-x-3">
                <input type="radio" name="debitCard" id="" value="debitCard" onChange={(e)=>setData({...formData,payment:e.target.value})} />
                <span className='text-black'>Debit card</span>
            </div>
            <div className="flex space-x-3">
                <input type="radio" name="bank" id="" value="bank" onChange={(e)=>setData({...formData,payment:e.target.value})} />
                <span className='text-black'>Bank Account card</span>
            </div>
            <div className="flex space-x-3">
                <input type="radio" name="paypal" id="" value="paypal" onChange={(e)=>setData({...formData,payment:e.target.value})} />
                <span className='text-black'>Paypal</span>
            </div>
            <div className="flex space-x-3">
                <input type="radio" name="googlePay" id="" value="googlePay" onChange={(e)=>setData({...formData,payment:e.target.value})} />
                <span className='text-black'>Google Pay</span>
            </div>
            <div className="flex space-x-3">
                <input type="radio" name="applePay" id="" value="applePay" onChange={(e)=>setData({...formData,payment:e.target.value})} />
                <span className='text-black'>Apple Pay</span>
            </div>
            <div className="flex space-x-3">
                <input type="radio" name="airCredits" id="" value="airCredits" onChange={(e)=>setData({...formData,payment:e.target.value})} />
                <span className='text-black'>AirBNB Credits</span>
            </div>
        </div>
      
    </form>
  )
}

Payment.propTypes = {
    payment: PropTypes.string.isRequired
}

export default Payment
