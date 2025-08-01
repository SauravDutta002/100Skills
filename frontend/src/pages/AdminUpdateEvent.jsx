// import React, { useEffect, useState } from "react";
// import { FaUpload } from "react-icons/fa";
// import { FaImages } from "react-icons/fa6";
// import { LiaGlobeAmericasSolid } from "react-icons/lia";
// import { PiGlobeSimpleXBold } from "react-icons/pi";
// import { MdOutlineAttachMoney } from "react-icons/md";
// import { MdOutlineMoneyOff } from "react-icons/md";
// import { MdFileDownloadDone } from "react-icons/md";
// import {useLocation,useParams } from 'react-router-dom';

// import Loader from "../components/Loader";

// import axios from "axios";

// const AdminUpdateEvent = () => {

//   const { id } = useParams();
//     const location = useLocation();
// const { event } = location.state || {};
    
//     const [formData, setFormData] = useState({
//         eventName:"",
//         location:"",
//         registrationStartDate:"",
//         registrationEndDate:"",
//         eventDate:"",
//         registerLink:"",
//         mode:"",
//         paymentType:"",
//         eventDescription:"",
//         AdditionalInfo:"",
//         eventType:"",
       
//     });

    
//   useEffect(() => {
//     if (event) {
//       setFormData({
//         eventName: event.eventName || '',
//         eventDate: event.eventDate ? event.eventDate.slice(0, 10) : '',
//         eventImage: event.eventImage || '',
//         location: event.location || '',
//         registrationStartDate: event.registrationStartDate ? event.registrationStartDate.slice(0, 10) : '',
//         registrationEndDate: event.registrationEndDate ? event.registrationEndDate.slice(0, 10) : '',
//         registerLink: event.registerLink || '',
//         eventType : event.eventType || '',
//       });
//     }
//   }, [event]);

//     const REACT_APP_CLOUDINARY_CLOUD_NAME = "dkhgb2u6f";
//     const REACT_APP_CLOUDINARY_API_KEY ="145134119951375"

//     const [mode, setmode] = useState(null)
//     const [paymentType, setPaymentType] = useState(null);
//     const [eventImage, setEventImage] = useState(null);   
    
//     //cloud all thing here 

// const uploadToCloudinary = async (file) => {
//     try {
//         console.log(formData)
//         setloading(true);
//       const { data } = await axios.get("https://one00skills.onrender.com/api/cloudinary/signature");
//       const { signature, timestamp } = data;
      
//       const cloudName = REACT_APP_CLOUDINARY_CLOUD_NAME;
//       const apiKey = REACT_APP_CLOUDINARY_API_KEY;

//       const uploadData = new FormData();
//       uploadData.append("file", file);
//       uploadData.append("api_key", apiKey);
//       uploadData.append("timestamp", timestamp);
//       uploadData.append("signature", signature);
      

//       const res = await axios.post(
//         `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
//         uploadData
//       );

//       return res.data.secure_url;
      
//     } catch (err) {
//       console.error("Cloudinary upload failed:", err);
//     }
//     finally{
//         setloading(false);
//     }
//   };

  
//   const handleSubmit = async (e) => {
//       e.preventDefault();
//       // setLoading(true);
      
//       try {
//           const token = localStorage.getItem("token");
//           const eventImageUrl = await uploadToCloudinary(eventImage);
          
//           const payload = {
//         ...formData,
//         eventImage: eventImageUrl,

//       };

//       await axios.put(`https://one00skills.onrender.com/api/edit/${id}`, payload,{
//         headers: {
//         Authorization: `Bearer ${token}`
//         }
        
//     });

//       alert("Event Updated successfully!");
//       // setFormData({
//       //   eventName: "",
//       //   location: "",
//       //   registrationStartDate: "",
//       //   registrationEndDate: "",
//       //   eventDate: "",
//       //   registerLink: "",
//       //   mode,
//       //   paymentType,
//       //   eventDescription:"",
//       //   AdditionalInfo:"",
//       // });

//       setEventImage(null);

//     } catch (error) {
//       console.error("Error submitting event:", error);
//       alert("Something went wrong!");
//     } finally {
//     }
//   };


// const handelChange = (e)=>{
//     setFormData({...formData , [e.target.name] : e.target.value })
// }


// useEffect(() => {
//     console.log("Mode changed to:", mode);
//   }, [mode]);

//   //loader

//   const [loading, setloading] = useState(false);

//   return (
//         <form onSubmit={handleSubmit} >
//              {loading && (
//   <div className="fixed inset-0 z-50 bg-white/80 flex items-center justify-center">
//     <Loader />
//   </div>
// )}
//     <div className="min-h-screen w-full px-4 py-6 font-mono bg-gray-100 flex flex-col lg:flex-row gap-4">
//       {/* Left Panel - Form */}
//       <div className="bg-white flex-1 rounded-2xl p-6 shadow-md">
//         <h2 className="text-3xl font-bold mb-6">Update Event</h2>

//         <div className="flex flex-col gap-5">
//           <div className="flex flex-col">
//             <label className="font-semibold">Event Name</label>
//             <input
//               type="text"
//               placeholder="Event Name"
//               name="eventName"
//               value={formData.eventName}
//               onChange={handelChange}
//               className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="font-semibold">Location</label>
//             <input
//               type="text"
//               placeholder="e.g., D2 Block"
//               name="location"
//               value={formData.location}
//               onChange={handelChange}
//               className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
//             />
//           </div>

//           {/* Mode */}

//           <div>
//             <label className="font-semibold">Mode</label>
//             <div className="flex gap-5">
//               <div className="">
//                 <button type="button" onClick={()=>{setmode("online")
//                  setFormData({ ...formData, mode: "online" });
                
//                 }} className={` flex  items-center gap-2  px-10 py-4 border  border-black transition-all ${mode == "online" ? "bg-blue-500 text-white " : ""} `}>
//                   {" "}
//                   <span>
//                     {" "}
//                     <LiaGlobeAmericasSolid className="text-2xl" />
//                   </span>{" "}
//                   Online
//                 </button>
//               </div>

//               <div className="">
//                 <button type="button" onClick={()=>{setmode("offline")
//                      setFormData({ ...formData, mode: "offline" })
                        
//                 }} className={`flex  items-center gap-2  px-10 py-4 border  border-black transition-all ${mode == "offline" ? "bg-blue-500 text-white " : ""}`}>
//                   {" "}
//                   <span>
//                     {" "}
//                     <PiGlobeSimpleXBold className="text-2xl" />
//                   </span>{" "}
//                   Offline
//                 </button>
//               </div>
//             </div>
//           </div>

//            {/*Event Type */}
//           <div className="flex flex-col">
//   <label className="font-semibold">Event Type</label>
//   <select
//     name="eventType"
//     value={formData.eventType}
//     onChange={handelChange}
//     className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
//   >
//     <option value="hackathon">Hackathon</option>
//     <option value="ideathon">Ideathon</option>
//     <option value="workshop">Workshop</option>
//     <option value="competition">Competition</option>
//   </select>
// </div>

//           <div className="flex flex-col">
//             <label className="font-semibold">Registration Link</label>
//             <input
//               type="url"
//               name="registerLink"
//               placeholder="https://example.com"
//               value={formData.registerLink}
//               onChange={handelChange}
//               className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"

//             />
//           </div>

//           <div>
//             <label className="font-semibold">Payment Type</label>
//             <div className="flex gap-5">
//               <div className="">
//                 <button type="button" onClick={()=>{
//                     setPaymentType("Free");
//                     setFormData({...formData , paymentType : "Free"})
//                 }} className= {`flex  items-center gap-2  px-10 py-2 border  border-black transition-all ${paymentType == "Free" ? "bg-green-500/90 text-white" : ""} `} >
             
//                     {" "}
//                   <span>
//                     {" "}
//                     <MdOutlineMoneyOff className="text-2xl" />
//                   </span>
//                   Free
//                 </button>
//               </div>

//               <div className="">
//                 <button type="button" onClick={()=>{
//                     setPaymentType("Paid");
//                     setFormData({...formData , paymentType : "Paid"})
//                 }}  className={`flex  items-center gap-2  px-10 py-2 border  border-black  transition-all ${paymentType == "Paid" ? "bg-red-500/90 text-white hover:none " : ""} `}>
//                   {" "}
//                   <span>
//                     {" "}
//                     <MdOutlineAttachMoney className="text-2xl" />
//                   </span>
//                   Paid
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <label className="font-semibold">Registration Start Date</label>
//             <input
//               type="date"
//               name="registrationStartDate"
//               className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
//               value={formData.registrationStartDate}
//               onChange={handelChange}
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="font-semibold">Registration End Date</label>
//             <input
//               type="date"
//               name="registrationEndDate"
//               value={formData.registrationEndDate}
//               onChange={handelChange}
//               className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="font-semibold">Event Date</label>
//             <input
//               type="date"
//               name="eventDate"
//               value={formData.eventDate}
//               onChange={handelChange}
//               className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label className="font-semibold">Event Description</label>
//             <textarea
//               rows="4"
//               name="eventDescription"
//               value={formData.eventDescription}
//               onChange={handelChange}
//               placeholder="Write a short description about the event..."
//               className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
//             />
//           </div>

//             <div className="flex flex-col">
//             <label className="font-semibold">Additional  Description</label>
//             <textarea
//               rows="4"
//               name="AdditionalInfo"
//               value={formData.AdditionalInfo}
//               onChange={handelChange}
//               placeholder="Write a short description about the event..."
//               className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
//             />
//           </div>

//           <div>
//              <button type="submit" className="px-10 py-4 border flex items-center gap-2 text-xl text-bold"><span>Update</span><MdFileDownloadDone className="text-2xl"/></button>

//           </div>
//         </div>
//       </div>

//       {/* Right Panel - Image Upload */}
//       <div className="bg-white flex-1 rounded-2xl p-6 shadow-md flex flex-col items-center justify-center h-screen">
//         <h2 className="text-2xl font-bold mb-6">Upload Event Poster</h2>

//         <div className="w-full max-w-sm flex flex-col items-center gap-6 border rounded-lg p-6 bg-gray-50">
//           <div className="text-5xl text-gray-400">
//             <FaImages />
//           </div>
//           <input type="file" accept="image/*" className="hidden" id="eventPoster" onChange={(e) => setEventImage(e.target.files[0])} />
//           <label htmlFor="eventPoster">
//             <div className="px-8 py-2 bg-amber-400 rounded shadow-md text-white hover:bg-amber-500 flex items-center gap-2">
//             <FaUpload /> Upload
//           </div>
//           </label>
//           <div>{eventImage ? eventImage.name : " "}</div>
//         </div>
        
//       </div>

    
//     </div>
//       </form>
//   );
// };

// export default AdminUpdateEvent;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    organizer: '',
    mode: '',
    category: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    venue: '',
    description: '',
    registerLink: '',
    eventImage: '',
    eventType: '', // <-- Added eventType here
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const [eventImage, setEventImage] = useState('');
  const [eventImageUrl, setEventImageUrl] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fetch event by ID
  const getEventById = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/event/${id}`);
      const event = res.data;
      setFormData({
        title: event.title || '',
        organizer: event.organizer || '',
        mode: event.mode || '',
        category: event.category || '',
        startDate: event.startDate || '',
        endDate: event.endDate || '',
        startTime: event.startTime || '',
        endTime: event.endTime || '',
        venue: event.venue || '',
        description: event.description || '',
        registerLink: event.registerLink || '',
        eventImage: event.eventImage || '',
        eventType: event.eventType || '', // Load eventType
      });
      setEventImageUrl(event.eventImage || '');
    } catch (error) {
      console.error("Error fetching event:", error);
    }
  };

  useEffect(() => {
    getEventById();
  }, []);

  // Upload image to Cloudinary
  const uploadImage = async () => {
    if (!eventImage) return;
    const data = new FormData();
    data.append("file", eventImage);
    data.append("upload_preset", "eventApp");
    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dxtdpms7r/image/upload",
        data
      );
      setEventImageUrl(res.data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    uploadImage();
  }, [eventImage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        eventImage: eventImageUrl,
      };
      const res = await axios.put(`http://localhost:8000/api/event/${id}`, payload);
      if (res.status === 200) {
        toast.success("Event updated successfully");
        navigate("/");
      }
    } catch (error) {
      console.error("Error updating event:", error);
      toast.error("Failed to update event");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="update-event-form">
      <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Event Title" required />
      <input type="text" name="organizer" value={formData.organizer} onChange={handleChange} placeholder="Organizer" required />
      <input type="text" name="mode" value={formData.mode} onChange={handleChange} placeholder="Mode" />
      <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
      <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
      <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
      <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} required />
      <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} required />
      <input type="text" name="venue" value={formData.venue} onChange={handleChange} placeholder="Venue" />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Event Description" />
      <input type="text" name="registerLink" value={formData.registerLink} onChange={handleChange} placeholder="Registration Link" />

      {/* ✅ Event Type dropdown */}
      <select
        name="eventType"
        value={formData.eventType}
        onChange={(e) => {
          console.log("Selected eventType:", e.target.value);
          handleChange(e);
        }}
        required
      >
        <option value="">Select Event Type</option>
        <option value="hackathon">Hackathon</option>
        <option value="ideathon">Ideathon</option>
        <option value="seminar">Seminar</option>
        <option value="workshop">Workshop</option>
      </select>

      <input type="file" onChange={(e) => setEventImage(e.target.files[0])} />
      {eventImageUrl && (
        <img src={eventImageUrl} alt="Uploaded Event" style={{ maxWidth: "200px" }} />
      )}

      <button type="submit">Update Event</button>
    </form>
  );
};

export default UpdateEvent;
