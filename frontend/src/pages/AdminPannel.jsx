import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiCirclePlus } from "react-icons/ci";
import axios from 'axios';

const Base_URL = "https://one00skills.onrender.com/api";

const AdminPannel = () => {
  const [clubData, setClubData] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchMyEvents = async () => {
      try {
        const res = await axios.get(`${Base_URL}/my`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setClubData(res.data);
      } catch (err) {
        console.error("Error fetching events:", err);
        alert("Error fetching your events.");
      }
    };

    fetchMyEvents();
  }, []);

  const deleteEvent = async (eventId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this event?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${Base_URL}/delete/${eventId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Deleted");
      setClubData(prev => prev.filter(event => event._id !== eventId));
    } catch (error) {
      alert("Error deleting event");
      console.error("Error deleting event:", error);
    }
  };

  return (
    <div className="w-full min-h-screen px-4 py-4 bg-gray-100">
      {/* Header */}
      <div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 bg-gray-300 rounded-full overflow-hidden border">
            <img src="" alt="club logo" className="w-full h-full object-cover" />
          </div>
          <div className="text-xl font-bold text-blue-600">CLUB NAME</div>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/createvent")}
            className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
          >
            Create New <CiCirclePlus size={20} />
          </button>
          <GiHamburgerMenu className="text-2xl text-gray-700 sm:hidden" />
        </div>
      </div>

      {/* Events Table */}
      <div className="bg-white mt-6 p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Current Events</h2>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
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
                        src={event.eventImage.url}
                        alt="event"
                        className="h-28 w-full object-cover rounded-md"
                      />
                    </td>
                    <td className="px-4 py-3 border">{event.eventName}</td>
                    <td className="px-4 py-3 border">
                      {new Date(event.eventDate).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 border">
                      <button
                        onClick={() => navigate(`/edit/${event._id}`, { state: { event } })}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mr-2 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteEvent(event._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No events found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden flex flex-col gap-4">
          {clubData.length > 0 ? (
            clubData.map((event, index) => (
              <div key={index} className="border rounded-lg p-3 shadow-sm">
                <img
                  src={event.eventImage.url}
                  alt="event"
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h3 className="text-lg font-semibold text-blue-600">{event.eventName}</h3>
                <p className="text-gray-700 mb-2">
                  {new Date(event.eventDate).toLocaleDateString()}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/edit/${event._id}`, { state: { event } })}
                    className="flex-1 bg-blue-500 text-white py-1 rounded hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteEvent(event._id)}
                    className="flex-1 bg-red-500 text-white py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No events found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPannel;
