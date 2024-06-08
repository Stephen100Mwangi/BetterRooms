/* eslint-disable no-unused-vars */
import React from 'react'

const PageNotFound = () => {
  return (
    <div className='h-[80vh] flex flex-col space-y-10 justify-start bg-background items-center'>
        <div className="text-red text-center flex items-center justify-center">Page Not Found</div>
        <div className="text-red text-center flex items-center justify-center">
            <img src="./public/assets/oops.png" alt="Page Not Found" className='w-64' />
        </div>
      
    </div>
  )
}

export default PageNotFound
