// import React, { useState } from 'react'
// import { FaHome } from "react-icons/fa";
// import { FaSearch } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaFilter } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
// const MobileNavbar = () => {
//     const navigate = useNavigate();
//     const [searchBar, setSearchBar] = useState(false);
    

//   return (
//  <div className="fixed bottom-0 left-0 w-full bg-white h-[8vh] z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] border-t border-gray-200 rounded-t-2xl backdrop-blur-sm">
//   <div className="flex items-center justify-around h-full px-6 text-gray-700 text-3xl">
//     <button onClick={()=>{navigate("/")}} className="hover:text-blue-500 transition-all duration-200"><FaHome /></button>
//     <button onClick={()=>{ setSearchBar((prev)=> !prev)}} className="hover:text-blue-500 transition-all duration-200"><FaSearch /></button>
    
//     {searchBar && 
//         <div className="fixed bottom-16 bg-white/90 left-0 w-full  h-[50vh] z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] border-t border-gray-200 rounded-t-2xl backdrop-blur-sm px-4 py-2">
//                 <div className='w-full '><input type="text" name="" id="" placeholder='Serach exiting events'  className='border px-2 py-0.5 rounded-2xl'/></div>
//                 <div className='h-full w-full'></div>
//         </div>
//     }




//     <button className="hover:text-blue-500 transition-all duration-200"><FaLocationDot /></button>
//     <button className="hover:text-blue-500 transition-all duration-200"><FaFilter /></button>
//   </div>
// </div>

//   )
// }

// export default MobileNavbar


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiOutlineHomeModern, HiMiniMagnifyingGlass, HiOutlineMapPin, HiMiniAdjustmentsHorizontal } from "react-icons/hi2";

const MobileNavbar = ({ mobileToggle, setMobileToggle }) => {
  const navigate = useNavigate();


  return (
    <>
      {/* Search Bar Popup */}

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 w-full h-[8vh] bg-white z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] border-t border-gray-200 rounded-t-2xl backdrop-blur-md">
        <div className="flex items-center justify-around h-full px-6 text-gray-700 text-3xl">
          <button onClick={() => {navigate("/") 
            setMobileToggle(false);
          }} className="hover:text-blue-600 transition-all duration-200">
            <HiOutlineHomeModern />
          </button>
          <button onClick={() => {setMobileToggle(true)}} className="hover:text-blue-600 transition-all duration-200">
            <HiMiniMagnifyingGlass />
          </button>
          <button onClick={()=>{setMobileToggle(false)}} className="hover:text-blue-600 transition-all duration-200">
            <HiOutlineMapPin />
          </button>
          <button onClick={()=>{setMobileToggle(false)}} className="hover:text-blue-600 transition-all duration-200">
            <HiMiniAdjustmentsHorizontal />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
