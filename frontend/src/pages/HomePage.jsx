// import React, { useEffect, useState } from 'react'
// import EventCard from '../components/EventCard'
// import { BsFire } from "react-icons/bs";
// import axios from "axios";
// import HomeLoader from "../components/Loaders/HomeLoader"
// import Loader from '../components/Loader';
// import { useOutletContext } from "react-router-dom";
// import { CiVolumeHigh } from 'react-icons/ci';
// import { useNavigate } from "react-router-dom";
// import ErrorLoader from '../components/ErrorLoader';


// const HomePage = () => {
  
  
//   const Base_Url = "https://one00skills.onrender.com/api";
//   const navigate = useNavigate()
  
//   const { search } = useOutletContext()
//   //? All states
  
//   const [events, setEvents] = useState([])
//   const [loading, setLoading] = useState(true);
//   const [errorLoading, setErrorLoading] = useState(false);

//   //!API calling
// useEffect( () => {
  
//   const getAllEvents = async()=>{
//     try {
//       setLoading(true);
//       console.log("loading")
//       const response = await axios.get(`${Base_Url}/events/allevents`);
//       console.log(response.data)
//       setEvents(response.data)
//     } catch (error) {
//       alert("error fetching all events");
//     }
//     finally{
//       setLoading(false);
   
      
//     }
//   }
//   getAllEvents();

// }, [])

// const filteritems = events.filter((event) =>
//   (event?.eventName || "").toLowerCase().includes(search.toLowerCase())
// );
//   // console.log(filteritems)
//   console.log(filteritems.map((event) => event.eventName));

//   return (
//     <div className="min-h-screen w-full bg-[#edecec] px-4 sm:px-10 md:px-16 lg:px-20 py-6 ">
      
// {search && (

//   <div className="fixed inset-20 z-2 bg-white flex items-center justify-center">
//     <div className='text-black'>
//       {filteritems.length > 0 ? (filteritems.map((event)=>(
//         <div onClick={()=> navigate(`/event/${event._id}`)} className='text-black text-2xl'><div><img src={event.eventImage?.url} alt="" /></div>{event.eventName}<span></span></div>

//     ))) :   
//       <div>Event Not found</div>   
//     }   
//     </div>
//   </div>
 
// )}

//   <section className="w-full flex flex-col gap-5">
//     {/* Title */}
//     <div className="flex items-center gap-2 text-2xl sm:text-2xl md:text-3xl font-semibold">
//       <span className='text-2xl'>Trending Opportunity</span>
//       <BsFire className="text-red-500 animate-pulse" />
//     </div>

//     {/* Responsive Slider Grid */}
//     <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
//       {events.map((event) => (
//         <EventCard key={event._id} event={event} />
//       ))}
//     </div>
//   </section>

// </div>

//   )
// }

// export default HomePage


import React, { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import { BsFire } from "react-icons/bs";
import axios from "axios";
import HomeLoader from "../components/Loaders/HomeLoader";
import { useOutletContext, useNavigate } from "react-router-dom";
import ErrorLoader from '../components/ErrorLoader';

const HomePage = () => {
  const Base_Url = "https://one00skills.onrender.com/api";
  const navigate = useNavigate();
  const { search } = useOutletContext();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${Base_Url}/events/allevents`);
        setEvents(response.data);
      } catch (error) {
        alert("Error fetching events");
      } finally {
        setLoading(false);
      }
    };
    getAllEvents();
  }, []);

  const filteritems = events.filter((event) =>
    (event?.eventName || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-[#f4f4f4] px-4 sm:px-10 md:px-16 lg:px-20 py-6 font-sans transition-all duration-300">

      {/* Search Modal */}
      {/* {search && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-lg p-6 max-h-[80vh] w-full sm:w-[90%] md:w-[70%] overflow-auto animate-fadeIn scale-100">
            {filteritems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteritems.map((event) => (
                  <div
                    key={event._id}
                    onClick={() => navigate(`/event/${event._id}`)}
                    className="cursor-pointer p-2 border rounded-md hover:bg-gray-100 transition"
                  >
                    <img
                      src={event.eventImage?.url}
                      alt=""
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <p className="mt-2 text-lg font-medium">{event.eventName}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-lg font-semibold text-gray-700">No event found.</div>
            )}
          </div>
        </div>
      )} */}

{
  search && (
    <div className='fixed inset-0 mt-20 h-100  bg-green-300 z-30'></div>
  )
}
      {/* Trending Events */}
      <section className="w-full flex flex-col gap-5">
        <div className="flex items-center gap-2 text-2xl font-semibold px-4 md:p-0">
          <span>Trending Opportunity</span>
          <BsFire className="text-red-500 animate-pulse" />
        </div>

        {loading ? (
          <HomeLoader />
        ) : (
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start animate-fadeInSlow">
            {events.length > 0 ? (
              events.map((event) => (
                <EventCard className="h-20" key={event._id} event={event} />
              ))
            ) : (
              <div className="text-center text-gray-600 font-medium">No events available.</div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
