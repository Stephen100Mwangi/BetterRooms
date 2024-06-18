/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React, { useState } from 'react'
// import Optional from './Optional'
// import Mandatory from './Mandatory'
// import Payment from './Payment'
// import { FaMicrophoneLines } from "react-icons/fa6";
// import { HiMegaphone } from "react-icons/hi2";
// // import {useSpeechRecognition} from 'react-speech-recognition'

// // import SpeechRecognition from 'react-speech-recognition'

// const BookVoice = () => {

//   const [formData,setFormData] = useState({
//     city: "",
//     neighborhood: "",
//     roomType: "",
//     propertyType: "",
//     priceRange: "",
//     minimumReviews: 0,
//     availability: 0,
//     minimumRating: 1.0,
//     minimumNights: 0,
//     no_Beds: 0,
//     no_Bedrooms: 0
//   });

//   const titles = ["Mandatory Features", "Payment", "Optional Features"];
//   const [page, setPage] = useState(0);


//   const pageDisplay = () => {
//     if (page === 0) {
//         return <Mandatory formData={formData} setData={setFormData} />
//     } else if (page === 1) {
//         return <Payment formData={formData} setData={setFormData} />
//     } else {
//         return <Optional formData={formData} setData={setFormData} />
//     }
// }

//   const welcomeMessage = async()=>{
//     // speechSynthesis.
//   }
  
//   return (
//     <div className='min-h-[calc(100vh)] bg-background flex flex-col items-center space-x-2 space-y-8 pb-12 rounded-lg shadow-2xl'>
//             <div className="bg-white flex items-center w-[120px]">
//                 <div className='bg-hero h-1 rounded-full' style={{ width: page === 0 ? "40px" : page === 1 ? "80px" : "120px" }}></div>
//             </div>
//             <HiMegaphone className='text-4xl text-white cursor-pointer bg-hero rounded-full p-1' onClick={welcomeMessage} />
//             <div>
//                 {pageDisplay()}
//             </div>
//             <div className='footer flex space-x-5'>
//                 <button onClick={() => setPage((current) => current - 1)} disabled={page === 0} className='text-white bg-hero p-2 px-6 rounded-sm hover:rounded-full'>Previous</button>
//                 <button onClick={() => setPage((current) => current + 1)} className='text-white bg-hero p-2 px-6 rounded-sm hover:rounded-full'>
//                     {page === titles.length - 1 ? "Submit" : "Next"}
//                 </button>
//             </div>
//         </div>
//   )
// }


// export default BookVoice

// import React, { useEffect } from 'react'
// import alanBtn from "@alan-ai/alan-sdk-web";

// const BookVoice = () => {
//   useEffect(()=>{
//     alanBtn({
//       key: 'e60f596395d8f3ebb57fb2ea0221822c2e956eca572e1d8b807a3e2338fdd0dc/stage',
//       onCommand: (commandData) => {
//         if (commandData.command === 'go:back') {
//           // Call the client code that will react to the received command
//         }
//       }
//   });

//   })
//   return (
//     <div className='min-h-screen'>
      
//     </div>
//   )
// }

// export default BookVoice


import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const BookVoice = () => {
  useEffect(() => {
    const alanInstance = alanBtn({
      key: 'e60f596395d8f3ebb57fb2ea0221822c2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
          console.log('Go back command received');
          // Add functionality here to handle the go back command
        }
      },
    });

    return () => {
      alanInstance.deactivate();
    };
  }, []);

  return <div className='min-h-screen'>Book via voice</div>;
};

export default BookVoice;
