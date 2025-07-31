import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileNavbar from './MobileNavbar';

const Layout = () => {
  const [search, setSearch] = useState("");
const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <div>

      <Navbar search = {search} setSearch={setSearch}/>
        
      <Outlet context={{search , setSearch , mobileToggle , setMobileToggle}}/>
        
      <Footer/>
            <div className="fixed bottom-0 left-0 w-full z-50 bg-white shadow-md md:hidden">
               <MobileNavbar mobileToggle={mobileToggle} setMobileToggle={setMobileToggle} />
            </div>
    </div>
  )
}

export default Layout
