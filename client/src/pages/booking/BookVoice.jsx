// /* eslint-disable no-unused-vars */
// import { useState } from 'react'
// import SpeechToText from '../../hooks/useSpeechToText/SpeechToText';

// const BookVoice = () => {

//   const [formData,setData] = useState({
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

 
//   const {isListening,transcript,stopListening,startListening} = SpeechToText({continuous:true});
//   const startStopListening = ()=>{
//     isListening ? stopListening() : startListening()
//   }

//   const handleInputChange = (field, value) => {
//     setData((prev) => ({ ...prev, [field]: value }));
//   };

  
//   return (
//     <div className='min-h-[calc(100vh)] bg-background flex flex-col items-center space-x-2 space-y-8 pb-12 rounded-lg shadow-2xl'>
      
//       <form className="flex flex-col space-y-5 rounded-lg shadow-2xl p-6">
//       <h1 className="text-hero text-center font-medium text-2xl">
//         Mandatory Features
//       </h1>
//       <div className="flex flex-col space-y-2 px-[12px] py-[8px]">
//         <label className="font-bold text-base" htmlFor="Available places">Available Cities</label>
//         <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
//           <select
//             name=""
//             id=""
//             className="px-6 p-2 outline-hero min-w-56 mr-2"
//             value={formData.city}
//             onChange={(e) => setData({ ...formData, city: e.target.value })}
//           >
//             <option disabled>Select preferred city</option>
//             <option value="New York City">New York City</option>
//             <option value="Berlin">Berlin</option>
//             <option value="Paris">Paris</option>
//             <option value="Amsterdam">Amsterdam</option>
//             <option value="Sydney">Sydney</option>
//             <option value="Rome">Rome</option>
//             <option value="Tokyo">Tokyo</option>
//             <option value="Barcelona">Barcelona</option>
//             <option value="London">London</option>
//             <option value="Brussels">Brussels</option>
//           </select>
//           {/* <div className="cursor-pointer"><FaMicrophoneLines /></div> */}
//         </div>
//       </div>

//       <div className="flex flex-col space-y-2 px-[12px] py-[8px]">
//         <label className="font-bold text-base" htmlFor="Available places">Available places</label>
//         <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
//           <input
//             name=""
//             type='text'
//             id=""
//             className="px-6 p-2 outline-hero min-w-56 mr-2"
//             value={formData.neighborhood}
//             onChange={(e) =>
//               setData({ ...formData, neighborhood: e.target.value })
//             }
//           ></input>
//           <SpeechToText />
//         </div>
//       </div>

//       <div className="flex flex-col space-y-2 px-[12px] py-[8px]">
//         <label className="font-bold text-base" htmlFor="Room Type">Room Type</label>
//         <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
//           <select
//             name=""
//             id=""
//             className="px-6 p-2 outline-hero min-w-56 mr-2"
//             value={formData.roomType}
//             onChange={(e) => setData({ ...formData, roomType: e.target.value })}
//           >
//             <option value="Entire Home">Entire Home</option>
//             <option value="Private room">Private room</option>
//             <option value="Shared room">Shared room</option>
//             <option value="Hotel room">Hotel room</option>
//           </select>
//           <SpeechToText />
//         </div>
//       </div>

//       <div className="flex flex-col space-y-2 px-[12px] py-[8px]">
//         <label className='font-bold text-base' htmlFor="Property type">Property type</label>
//         <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
//           <select className="px-6 p-2 outline-hero min-w-56 mr-2" value={formData.propertyType} onChange={(e)=>setData({...formData,propertyType:e.target.value})}>
//             <option value="Apartment">Apartment</option>
//             <option value="House">House</option>
//             <option value="Condo">Condo</option>
//           </select>
//           <SpeechToText />
//         </div>
//       </div>
//       <div className="flex flex-col space-y-2 px-[12px] py-[8px]">
//         <label className='font-bold text-base' htmlFor="Price Range">Minimum Price Range</label>
//         <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
//           <input
//               min={10}
//               type="range"
//               max={formData.max_priceRange}
//               step={10}
//               className='px-6 p-2 outline-hero min-w-56 mr-2'
//               name="max_priceRange"
//               value={formData.min_priceRange}
//               onChange={(e)=>setData({...formData,min_priceRange:e.target.value})}
//               placeholder="Minimum price range" />
//             <span className="ml-4">{formData.min_priceRange}</span>
//             <SpeechToText />
//         </div>
//       </div>
//       <div className="flex flex-col space-y-2 px-[12px] py-[8px]">
//         <label className='font-bold text-base' htmlFor="Price Range">Maximum Price Range</label>
//         <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
//           <input
//               min={formData.min_priceRange}
//               max={1000}
//               step={10}
//               className='px-6 p-2 outline-hero min-w-56 mr-2'
//               type="range"
//               name="max_priceRange"
//               value={formData.max_priceRange}
//               onChange={(e)=>setData({...formData,max_priceRange:e.target.value})}
//               placeholder="Minimum price range" />
//             <span className="ml-4">{formData.max_priceRange}</span>
//             <SpeechToText />
//         </div>
//       </div>
//        <h1 className='text-center text-2xl text-hero'>Other Features</h1>

//         <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
//             <label className='font-bold text-base' htmlFor="Minimum Availability(Days per Year)">Minimum Availability(Days per Year)</label>
//             <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
//                 <input className='px-6 p-2 outline-hero min-w-56 mr-2' min={1} max={365} disabled={formData.annual_availability > 365} type="number" name="" value={formData.annual_availability}  onChange={(e)=>setData({...formData,annual_availability:e.target.value})} placeholder="0" />
//                 <SpeechToText />
//             </div>
//         </div>
//         <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
//             <label className='font-bold text-base' htmlFor="Minimum Number of Reviews">Minimum Number of Reviews</label>
//             <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
//                 <input className='px-6 p-2 outline-hero' type="number" min={1} value={formData.minimumReviews}  onChange={(e)=>setData({...formData,minimumReviews:e.target.value})} placeholder="50" />
//                 <SpeechToText />
//             </div>
//         </div>
//         <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
//             <label className='font-bold text-base' htmlFor="Minimum Number of Beds">Minimum Number of Nights</label>
//             <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
//                 <input className='px-6 p-2 outline-hero' type="number" min={1} value={formData.minimumNights}  onChange={(e)=>setData({...formData,minimumNights:e.target.value})} placeholder="1" />
//                 <SpeechToText />
//             </div>
//         </div>
//         <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
//             <label className='font-bold text-base' htmlFor="Minimum Number of Beds">Minimum Rating</label>
//             <div className="flex items-center justify-between bg-white px-6 pl-2 p-0">
//                 <input 
//                     className='px-6 p-2 outline-hero'
//                     type='range'
//                     step={0.1}
//                     min={1.0}
//                     max={5.0}
//                     value={formData.minimumRating}
//                     onChange={(e)=> setData({...formData,minimumRating:e.target.value})}
//                     placeholder="1.0" />
//                 <span className="ml-4">{formData.minimumRating}</span>
//                 <SpeechToText />
//             </div>
//         </div>
//         <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
//             <label className='font-bold text-base' htmlFor="Minimum Number of Beds">Minimum Number of Beds</label>
//             <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
//                 <input className='px-6 p-2 outline-hero' min={1} max={10} type="number" value={formData.no_Beds}  onChange={(e)=>setData({...formData,no_Beds:e.target.value})} placeholder="0" />
//                 <SpeechToText />
//             </div>
//         </div>
//         <div className="flex flex-col space-y-4 px-[12px] py-[8px]">
//             <label className='font-bold text-base' htmlFor="Minimum Number of Bedrooms">Minimum Number of Bedrooms</label>
//             <div className="flex items-center justify-between bg-white px-6 pl-0 p-0">
//                 <input disabled={isListening} className='px-6 p-2 outline-hero' min={1} max={10} type="number" value={isListening ? formData.no_Bedrooms + (transcript.length ? (formData.no_Bedrooms.length?" ":"")+ transcript:""):formData.no_Bedrooms}  onChange={(e)=>setData({...formData,no_Bedrooms:e.target.value})} placeholder="0" />
//                 <div onClick={()=>startStopListening()}><SpeechToText /></div>
//             </div>
//         </div>

//     </form>
//     </div>
//   )
// }


// export default BookVoice