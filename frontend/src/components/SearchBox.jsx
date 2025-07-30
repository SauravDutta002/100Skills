// import React from 'react'
// import { TbWorldSearch } from "react-icons/tb";

// const SearchBox = () => {
//   return (
//     <div className='h-screen bg-green-50 px-2 py-4 '>
//         <div className='border px-4 py-2 w-full h-25 rounded flex items-center space-x-9'>
//             <div className='border rounded h-full w-20 '>
//                 <img src="" alt=""  className='h-full w-full object-cover'/>
//             </div>

//             <div>
//                 <div>text This is the date</div>
//                 <div className='flex gap-2'><div className='border rounded px-1  items-center'>online</div><div className='border rounded px-1  items-center'>Free</div></div>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default SearchBox


import React from 'react';
import { TbWorldSearch } from "react-icons/tb";

const SearchBox = () => {
  return (
    <div className="min-h-screen px-4 py-6 ">
 <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 shadow-sm bg-white w-full max-w-md">
      <input
        type="text"
        placeholder="Search events..."
        className="flex-1 outline-none bg-transparent text-sm px-2"
      />
      <TbWorldSearch className="text-xl text-gray-500" />
    </div>
      <div className="w-full max-w-xl bg-white shadow-md rounded-xl p-4 flex items-center gap-4 mt-5">
        {/* Image */}
        <div className="h-20 w-20 rounded-lg overflow-hidden border">
          <img
            src=""
            alt="Event"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1">
          <div className="text-lg font-semibold text-gray-800">
            Event Title Goes Here
          </div>
          <div className="text-sm text-gray-600 mb-2">📅 This is the date</div>
          <div className="flex gap-2">
            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full border border-green-300">
              Online
            </span>
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full border border-blue-300">
              Free
            </span>
          </div>
        </div>

        {/* Optional Icon */}
        <TbWorldSearch className="text-2xl text-gray-500" />
      </div>
    </div>
  );
};

export default SearchBox;
