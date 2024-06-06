/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Listings from './pages/Listings'
import Login from './pages/Login'
import Register from './pages/Register'
import Chatbot from './components/Chatbot'
import Hero001 from './components/Hero001'
import Hero002 from './components/Hero002'
import Hero003 from './components/Hero003'
import BookVoice from './pages/booking/BookVoice'
import Booking from './pages/booking/Booking'
import BookText from './pages/booking/BookText'
import BookResult from './pages/booking/BookResult'
import ProtectedRoute from './components/ProtectedRoute'
import UserProfile from './pages/UserProfile'




const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<><Home></Home></>}></Route>
            <Route path='/hero1' element={<><Hero001></Hero001></>}></Route>
            <Route path='/hero2' element={<><Hero002></Hero002></>}></Route>
            <Route path='/hero3' element={<><Hero003></Hero003></>}></Route>
            <Route path='/about' element={<><About></About></>}></Route>
            <Route path='/listings' element={<Listings />}></Route>
            <Route path='/testimonials' element={<Testimonials></Testimonials>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/chat' element={<Chatbot></Chatbot>}></Route>
            <Route path='/voiceBook' element={<BookVoice />}></Route>
           
            

            {/* Protect Route to ensure user is logged in */}
            <Route path='' element={<ProtectedRoute />}>
              <Route path='/bookText' element={<BookText />}></Route>
              <Route path='/bookResult' element={<BookResult />}></Route>
              <Route path='/book' element={<Booking />}></Route>
              <Route path='/profile' element={<UserProfile />}></Route>
            </Route>


            <Route path='*' element={<h1 className='text-red'>Page Not Found</h1>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
