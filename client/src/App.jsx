import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Login from './pages/Login'
import BasicInfo from './pages/userRegistation/BasicInfo'
import Register from './pages/Register'
import Chatbot from './components/Chatbot'
import Booking from './pages/Booking'
import Hero001 from './components/Hero001'
import Hero002 from './components/Hero002'
import Hero003 from './components/Hero003'

const App = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<h1><Home></Home></h1>}></Route>
            <Route path='/hero1' element={<h1><Hero001></Hero001></h1>}></Route>
            <Route path='/hero2' element={<h1><Hero002></Hero002></h1>}></Route>
            <Route path='/hero3' element={<h1><Hero003></Hero003></h1>}></Route>
            <Route path='/about' element={<h1><About></About></h1>}></Route>
            <Route path='/listings' element={<h1>Listings</h1>}></Route>
            <Route path='/testimonials' element={<Testimonials></Testimonials>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/chat' element={<Chatbot></Chatbot>}></Route>
            <Route path='/book' element={<Booking></Booking>}></Route>


            <Route path='*' element={<h1 className='text-red'>Page Not Found</h1>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
