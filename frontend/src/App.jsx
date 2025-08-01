import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import Uploadclod from "./components/Uploadclod"
import EventDetails from "./pages/EventDetails"
import AdminLogin from './pages/AdminLogin';
import AdminPannel from './pages/AdminPannel';
import AdminCreateEvent from './pages/AdminCreateEvent';
import HeadAdminDashboard from './pages/HeadAdminDashboard';
import NotFound from './pages/NotFound';
import AdminUpdateEvent from './pages/AdminUpdateEvent';
import HomePageEvents from './pages/HomePageEvents';
import Hackathons from './pages/Hakathons';
import SearchBar from './components/SearchBar';
import Ideathons from './pages/Ideathons';
const App = () => {


  
  return (
    <>
  
    <Routes>
      <Route  element={<Layout/>}>
      <Route path='/' element={<HomePageEvents/>} />
      <Route path='/hackathon' element={<Hackathons/>} />
      <Route path='/ideathons' element={<Ideathons/>} />
      <Route path='/event/:id' element={<EventDetails/>} />
      <Route path='/create' element={<Uploadclod/>} />
      <Route path='/clublogin' element={<AdminLogin/>} />
      <Route path='/AdminDashboard/:id' element={<AdminPannel/>}/>
      <Route path='/createvent' element={<AdminCreateEvent/>}/>
      <Route path='/headadmin' element={<HeadAdminDashboard/>}/>
      <Route path='/edit/:id' element={<AdminUpdateEvent/>}/>
      <Route path='/search' element={<SearchBar/>}/>

      <Route path='*' element={<NotFound/>}/>
      
      </Route>
    </Routes>
    
    </>

  )
}

export default App
