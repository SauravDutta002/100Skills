import React, { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'
import { BsFire } from "react-icons/bs";
import axios from "axios";
import HomeLoader from "../components/Loaders/HomeLoader"
import Loader from '../components/Loader';
import { useOutletContext } from "react-router-dom";
import { CiVolumeHigh } from 'react-icons/ci';
import { useNavigate } from "react-router-dom";
import ErrorLoader from '../components/ErrorLoader';


const HomePage = () => {
  
  
  const Base_Url = "https://one00skills.onrender.com/api";
  const navigate = useNavigate()
  
  
  const { search } = useOutletContext()
  //? All states
  
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true);
  const [errorLoading, setErrorLoading] = useState(false);

  
  //!API calling
useEffect( () => {
  
  const getAllEvents = async()=>{
    try {
      setLoading(true);
      console.log("loading")
      const response = await axios.get(`${Base_Url}/events/allevents`);
      console.log(response.data)
      setEvents(response.data)
    } catch (error) {
      alert("error fetching all events");
    }
    finally{
      setLoading(false);
   
      
    }
  }
  getAllEvents();

 
}, [])


const filteritems = events.filter((event) =>
  (event?.eventName || "").toLowerCase().includes(search.toLowerCase())
);
  // console.log(filteritems)
  console.log(filteritems.map((event) => event.eventName));

  return (
    <div className="min-h-screen w-full bg-[#edecec] px-4 sm:px-10 md:px-16 lg:px-20 py-6 ">
      




{search && (

  <div className="fixed inset-20 z-2 bg-white flex items-center justify-center">
    <div className='text-black'>
      {filteritems.length > 0 ? (filteritems.map((event)=>(
        <div onClick={()=> navigate(`/event/${event._id}`)} className='text-black text-2xl'>{event.eventName}<span></span></div>

    ))) :   
      <div>Event Not found</div>   
    }   
    </div>
  </div>
 
)}

  <section className="w-full flex flex-col gap-5">
    {/* Title */}
    <div className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold">
      <span>Trending Opportunity</span>
      <BsFire className="text-red-500" />
    </div>

    {/* Responsive Slider Grid */}
    <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
      {events.map((event) => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  </section>

</div>

  )
}

export default HomePage
