import React, { useEffect, useState } from 'react';
// import testImg from "../assets/testimg.jpeg";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiCirclePlus } from "react-icons/ci";
import axios from 'axios';
import { useParams } from 'react-router-dom';



const Base_URL = "https://one00skills.onrender.com/api";

const AdminPannel = () => {
  // const {id} = useParams();
  const [clubData, setClubData] = useState([]);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchMyEvents = async () => {
      try {
        const res = await axios.get(`${Base_URL}/my`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setClubData(res.data); 
        console.log("Fetched Events:", res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
        alert("Error fetching your events.");
      }
    };

    fetchMyEvents();
  }, []);


  const deleteEvent= async(eventId)=>{
    console.log("Deleting event with ID:", eventId);

    try {
       const confirm = window.confirm("Are you sure you want to delete this event?");
    if (!confirm) return;

      const deleteEventById = await axios.delete(`${Base_URL}/delete/${eventId}` , {
         headers: {
        Authorization: `Bearer ${token}`, 
      },

      });
      
      alert("Deleted");
      setClubData (prev => prev.filter(event => event._id !== eventId));
      
    } catch (error) {
      alert("error");
      console.error("Error deleting event:", error);
    }
  }

  return (
    <div className="h-screen w-full px-4 py-2 flex flex-col gap-2">
      {/* Header Section */}
      <div className='bg-white h-[25%] w-full flex items-center px-2 rounded-xl gap-4'>
        <div className='flex items-center gap-2'>
          <div className='h-[92%] w-[10%] border rounded-xl px-0.5 py-0.5'>
            <img src={testImg} alt="club logo" className='h-full w-full object-cover rounded-xl' />
          </div>
          <div className='font-bold text-2xl'>
            <span>CLUB NAME</span>
          </div>
        </div>

        <div className='w-[20%]'>
          <button
            onClick={() => navigate("/createvent")}
            className='border px-2 py-2 rounded flex items-center gap-1'
          >
            Create New <span className='text-2xl'><CiCirclePlus /></span>
          </button>
        </div>

        <div className='pr-2 flex h-full py-1 justify-start'>
          <span className='text-3xl'><GiHamburgerMenu /></span>
        </div>
      </div>

      {/* Events Table Section */}
      <div className='bg-white h-full w-full px-2 rounded-xl flex flex-col gap-4'>
        <div className='px-2 py-2'>
          <span className='text-2xl font-semibold'>Your Current Events</span>
        </div>

        <div className="w-full overflow-x-auto rounded-lg shadow border">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="px-4 py-3 border">Event Image</th>
                <th className="px-4 py-3 border">Event Name</th>
                <th className="px-4 py-3 border">Event Date</th>
                <th className="px-4 py-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clubData.length > 0 ? (
                clubData.map((event, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 border w-[30%]">
                      <img
                        src={event.eventImage || testImg}
                        alt="event"
                        className="h-50 w-90 object-cover rounded-md"
                      />
                    </td>
                    <td className="px-4 py-3 border">{event.eventName}</td>
                    <td className="px-4 py-3 border">
                      {new Date(event.eventDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 border">
                      <button onClick={()=>{navigate(`/edit/${event._id}`, { state: { event } })}} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        Edit
                      </button>
                      <button onClick={()=>{
                        deleteEvent(event._id);
                      }} className="bg-red-500 text-white px-3 py-1 rounded ml-2 hover:bg-red-600">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-3 border text-center" colSpan={4}>
                    No events found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPannel;
