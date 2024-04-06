import React from 'react'
import { MdPayment } from 'react-icons/md'

const Payment = ({formData,setData}) => {
  return (
    <form className='flex flex-col space-y-5 rounded-lg shadow-2xl p-6'>
        <h1 className='text-center text-2xl text-hero'>Select Payment Method</h1>
      
      <div className="flex px-[12px] py-[8px] space-x-[16px] rounded-xl bg-white items-center justify-normal">
            <MdPayment className='text-black'/>
            <input type="text" name="" id="" disabled className='bg-white text-black outline-none bg-opacity-0' placeholder='Payment Mode'/>
        </div>
        <div className="flex flex-col space-y-3">
            <div className="flex space-x-3">
                <input type="radio" name="creditCard" id="" value={formData.payment} onChange={()=>setData({...formData,payment:e.target.value})} />
                <span className='text-black'>Credit card</span>
            </div>
            <div className="flex space-x-3">
                <input type="radio" name="debitCard" id="" value={formData.payment} onChange={()=>setData({...formData,payment:e.target.value})} />
                <span className='text-black'>Debit card</span>
            </div>
            <div className="flex space-x-3">
                <input type="radio" name="bank" id="" value={formData.payment} onChange={()=>setData({...formData,payment:e.target.value})} />
                <span className='text-black'>Bank Account card</span>
            </div>
            <div className="flex space-x-3">
                <input type="radio" name="paypal" id="" value={formData.payment} onChange={()=>setData({...formData,payment:e.target.value})} />
                <span className='text-black'>Paypal</span>
            </div>
            <div className="flex space-x-3">
                <input type="radio" name="googlePay" id="" value={formData.payment} onChange={()=>setData({...formData,payment:e.target.value})} />
                <span className='text-black'>Google Pay</span>
            </div>
            <div className="flex space-x-3">
                <input type="radio" name="applePay" id="" value={formData.payment} onChange={()=>setData({...formData,payment:e.target.value})} />
                <span className='text-black'>Apple Pay</span>
            </div>
            <div className="flex space-x-3">
                <input type="radio" name="airCredits" id="" value={formData.payment} onChange={()=>setData({...formData,payment:e.target.value})} />
                <span className='text-black'>AirBNB Credits</span>
            </div>
        </div>
      
    </form>
  )
}

export default Payment
