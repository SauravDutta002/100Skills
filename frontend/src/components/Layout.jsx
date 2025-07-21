import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileNavbar from './MobileNavbar';

const Layout = () => {
  const [search, setSearch] = useState("");

  return (
    <div>

      <Navbar search = {search} setSearch={setSearch}/>
        
      <Outlet context={{search , setSearch}}/>
        
      <Footer/>
            <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-md md:hidden">
               <MobileNavbar />
            </div>
    </div>
  )
}

export default Layout
