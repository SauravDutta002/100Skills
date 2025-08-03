// import React, { useEffect, useState } from 'react';
// import { TbWorldSearch } from "react-icons/tb";
// import { FaLaptopCode, FaChalkboardTeacher, FaQuestionCircle, FaTrophy } from "react-icons/fa";
// import axios from 'axios';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { FaLightbulb } from "react-icons/fa";

// const HomePageEvents = () => {
//   const Base_Url = "https://one00skills.onrender.com/api";

//   const [events, setEvents] = useState([]);
//   const [search, setSearch] = useState('');
//   const [loading, setLoading] = useState(true);

// //   const categories = [
// //     { name: 'Hackathons', color: 'bg-yellow-300', icon: <FaLaptopCode className="text-4xl" /> },
// //     { name: 'IdeaThon', color: 'bg-orange-300', icon: <FaLightbulb className="text-4xl text-yellow-200"  /> },
// //     { name: 'Workshops', color: 'bg-cyan-400/80', icon: <FaChalkboardTeacher className="text-4xl" /> },
// //     { name: 'Competitions', color: 'bg-purple-600/30', icon: <FaTrophy className="text-4xl text-amber-200" /> },
// //   ];

// const categories = [
//   {
//     name: 'Hackathons',
//     color: 'bg-gradient-to-r from-yellow-300 to-yellow-400',
//     icon: <FaLaptopCode className="text-4xl text-gray-800" />,
//   },
//   {
//     name: 'IdeaThon',
//     color: 'bg-gradient-to-r from-orange-400 to-yellow-300',
//     icon: <FaLightbulb className="text-4xl text-white" />,
//   },
//   {
//     name: 'Workshops',
//     color: 'bg-gradient-to-r from-cyan-400 to-teal-400',
//     icon: <FaChalkboardTeacher className="text-4xl text-white" />,
//   },
//   {
//     name: 'Competitions',
//     color: 'bg-gradient-to-r from-purple-500 to-pink-500',
//     icon: <FaTrophy className="text-4xl text-white" />,
//   },
// ];


//   useEffect(() => {
//     const getAllEvents = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`${Base_Url}/events/allevents`);
//         setEvents(response.data);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//         alert("Error fetching events");
//       } finally {
//         setLoading(false);
//       }
//     };

//     getAllEvents();
//   }, []);

//   // Slider configuration
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: true,
//     pauseOnHover: true,
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-6 text-gray-800">
      
//       {/* Search Box */}
//       <div className="flex items-center gap-2 bg-white rounded-xl shadow px-4 py-2 mb-6 ">
//         <TbWorldSearch className="text-xl text-gray-500" />
//         <input
//           type="text"
//           placeholder="Search for events..."
//           className="w-full border-none outline-none text-base"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Filter Tabs */}
//       <div className="flex gap-3 mb-6 flex-wrap">
//         <span className="px-4 py-1 bg-yellow-400 text-white rounded-full text-sm cursor-pointer">All</span>
//         <span className="px-4 py-1 bg-gray-200 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-cyan-400 hover:text-white transition">Hackathons</span>
//         <span className="px-4 py-1 bg-gray-200 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-orange-400 hover:text-white transition">Workshops</span>
//         <span className="px-4 py-1 bg-gray-200 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-yellow-400 hover:text-white transition">Quizzes</span>
//         <span className="px-4 py-1 bg-gray-200 text-gray-700 rounded-full text-sm cursor-pointer hover:bg-orange-300 hover:text-white transition">Competitions</span>
//       </div>

//       {/* Slider Section */}
//       <div className="bg-white rounded shadow-md h-40 overflow-hidden mb-2 flex flex-col justify-center ">
//         {loading ? (
//           <div className="text-center">Loading events...</div>
//         ) : (
//           <Slider {...sliderSettings}>
//             {events.map(event => (
//               <div key={event._id} className="flex justify-center items-center">
//                 <img
//                   src={event.eventImage?.url}
//                   alt={event.eventName}
//                   className="h-full w-full object-cover "
//                 />
//               </div>
//             ))}
//           </Slider>
//         )}
//       </div>

//       {/* Event Categories */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white px-2 py-2 rounded-xl">
//         {categories.map((category, idx) => (
//           <div
//             key={idx}
//             className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-md ${category.color} hover:scale-105 transition-transform duration-200`}
//           >
//             {category.icon}
//             <span className="mt-2 font-medium">{category.name}</span>
//           </div>
//         ))}
//       </div>
//       <div className='h-full bg-white rounded-xl'>
//         <div>Featured</div>
//         event card 
//       </div>
//     </div>
//   );
// };

// export default HomePageEvents;


import React, { useEffect, useState } from 'react';
import { FaLaptopCode, FaChalkboardTeacher, FaQuestionCircle, FaTrophy, FaLightbulb } from "react-icons/fa";
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import SearchBoxTop from '../components/SearchBoxTop';
import { BsTrophyFill } from "react-icons/bs";
import { MdOutlineMoneyOff, MdOutlineAttachMoney } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineArrowOutward } from "react-icons/md";
import api from "../api/axios"


const HomePageEvents = () => {
   const { mobileToggle , setMobileToggle} = useOutletContext();

  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [openSearch, setOpenSearch] = useState(false);

  const upadteOpensearch = ()=>{
    setOpenSearch(false);
    setMobileToggle(false);
  }

    const navigate = useNavigate();

     const eventDetails = (id) => {
    navigate(`/event/${id}`);
  };

  const categories = [
    {
      name: 'Hackathons',
      color: 'bg-gradient-to-r from-yellow-300 to-yellow-400',
      icon: <FaLaptopCode className="text-4xl text-blue-400" />,
      path : "/hackathon",
    },
    {
      name: 'IdeaThon',
      color: 'bg-gradient-to-r from-orange-400 to-yellow-300',
      icon: <FaLightbulb className="text-4xl text-yellow-400 " />,
      path : "/ideathons",

    },
    {
      name: 'Workshops',
      color: 'bg-gradient-to-r from-cyan-400 to-teal-400',
      icon: <FaChalkboardTeacher className="text-4xl text-green-500" />,
      path : "/workshops",

    },
    {
      name: 'Competitions',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      icon: <FaTrophy className="text-4xl text-yellow-400" />,
      path : "/competitions",
    },
  ];

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/events/allevents`);
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
        alert("Error fetching events");
      } finally {
        setLoading(false);
      }
    };

    getAllEvents();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="min-h-screen bg-gray-100  text-gray-800 font-mono">
      {/* {(openSearch || mobileToggle) ? (<SearchBar upadteOpensearch={upadteOpensearch} />) : ( */}
   <div className="w-fit px-4 py-2 bg-blue-500 text-white rounded-br-2xl shadow-md flex items-center gap-2">
  <span className="text-base md:text-lg font-semibold">Let's Win</span>
  <BsTrophyFill className="text-yellow-400 text-xl md:text-2xl" />
</div>

         <div className='px-4 py-6'>


 

      <SearchBoxTop/>


      <div className="bg-white rounded-xl shadow-md h-40 overflow-hidden mb-6 flex flex-col justify-center">
  {loading ? (
    <div className="text-center">Loading events...</div>
  ) : (
    <Slider {...sliderSettings}>
      {events.map(event => (
        <div onClick={()=>{eventDetails(event._id)}} key={event._id} className="h-40 w-full flex justify-center items-center mt-2">
          <img
            src={event.eventImage?.url}
            alt={event.eventName}
            className="h-full w-full object-cover "
          />
        </div>
      ))}
    </Slider>
  )}
</div>


      {/* Event Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white px-2 py-2 rounded-xl mb-6 ">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-200 border`}
            onClick={()=>{
              navigate(category.path)
            }}
          >
            {category.icon}
            <span className="mt-2 font-medium">{category.name}</span>
          </div>
        ))}
      </div>

      {/* Featured Events Horizontal Scroll */}
      <div className="mt-6 bg-white py-1 rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-gray-800 mb-3 border-l border-amber-500">Featured Events</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-300">
          {events.slice(0, 10).map(event => (
            <div 
            key={event._id}
            className="min-w-[280px] max-w-sm bg-white rounded-xl shadow-md snap-start flex-shrink-0"
            onClick={()=>{eventDetails(event._id)}}
            >
              <img
                src={event.eventImage?.url}
                alt={event.eventName}
                className="h-40 w-full object-cover rounded-t-xl"
              />
              <div className="px-4 py-2 flex flex-col ">
                <h3 className="text-lg font-bold text-gray-800">{event.eventName}</h3>
                <div className='flex gap-1 items-center mb-3'> <CiLocationOn/> <span>{event.location}</span></div>
                <div className='flex gap-2'>
                   {event.paymentType === "Free" ? (
                            <span className="px-2 rounded-2xl border border-gray-600 flex items-center gap-1 h-6">
                              <MdOutlineMoneyOff className="text-red-400" />  Free
                            </span>
                          ) : (
                            <span className="px-2 rounded-2xl border border-gray-600 flex items-center gap-1 h-6">
                               <MdOutlineAttachMoney className="text-green-400" /> Paid
                            </span>
                          )}
                  
                          {event.mode === "online" ? (
                            <span className="px-2 rounded-2xl border border-gray-600 h-6 text-blue-500 flex items-center">
                              Online
                            </span>
                          ) : (
                            <span className="px-2 rounded-2xl border border-gray-600 h-6 flex items-center">
                              Offline
                            </span>
                          )}

                          <div className='w-full flex justify-end '><MdOutlineArrowOutward className='text-2xl border rounded-full '/></div>
               </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        </div>


      {/* )} */}
      
    </div>
  );
};

export default HomePageEvents;
