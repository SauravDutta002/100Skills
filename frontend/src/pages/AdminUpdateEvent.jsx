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
    eventType: '',
  });

  const [eventImageFile, setEventImageFile] = useState(null);
  const [eventImageUrl, setEventImageUrl] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch existing event details
  const getEventById = async () => {
    try {
      const res = await axios.get(`https://one00skills.onrender.com/api/events/${id}`);
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
        eventType: event.eventType || '',
      });

      setEventImageUrl(event.eventImage || '');
    } catch (error) {
      console.error("Error fetching event:", error);
      toast.error("Failed to load event data");
    }
  };

  useEffect(() => {
    getEventById();
  }, []);

  // Upload image to Cloudinary when a new file is selected
  useEffect(() => {
    const uploadImage = async () => {
      if (!eventImageFile) return;

      const data = new FormData();
      data.append("file", eventImageFile);
      data.append("upload_preset", "eventApp");

      try {
        const res = await axios.post(
          "https://api.cloudinary.com/v1_1/dxtdpms7r/image/upload",
          data
        );
        setEventImageUrl(res.data.secure_url);
        toast.success("Image uploaded successfully");
      } catch (error) {
        console.error("Image upload failed:", error);
        toast.error("Image upload failed");
      }
    };

    uploadImage();
  }, [eventImageFile]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      eventImage: eventImageUrl || formData.eventImage,
    };

    try {
      const res = await axios.put(
        `https://one00skills.onrender.com/api/events/edit/${id}`,
        payload
      );

      if (res.status === 200) {
        toast.success("Event updated successfully");
        navigate("/");
      }
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Failed to update event");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="update-event-form space-y-4 p-4 max-w-xl mx-auto"
    >
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Event Title"
        required
      />
      <input
        type="text"
        name="organizer"
        value={formData.organizer}
        onChange={handleChange}
        placeholder="Organizer"
        required
      />
      <input
        type="text"
        name="mode"
        value={formData.mode}
        onChange={handleChange}
        placeholder="Mode (Online/Offline)"
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
      />
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="startTime"
        value={formData.startTime}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="endTime"
        value={formData.endTime}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="venue"
        value={formData.venue}
        onChange={handleChange}
        placeholder="Venue"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Event Description"
      />
      <input
        type="text"
        name="registerLink"
        value={formData.registerLink}
        onChange={handleChange}
        placeholder="Registration Link"
      />

      {/* Event Type Dropdown */}
      <div className="flex flex-col">
        <label className="font-semibold">Event Type</label>
        <select
          name="eventType"
          value={formData.eventType}
          onChange={handleChange}
          className="border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-amber-400"
        >
          <option value="hackathon">Hackathon</option>
          <option value="ideathon">Ideathon</option>
          <option value="workshop">Workshop</option>
          <option value="competition">Competition</option>
        </select>
      </div>

      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setEventImageFile(e.target.files[0])}
      />
      {eventImageUrl && (
        <img src={eventImageUrl} alt="Uploaded" className="max-w-xs rounded" />
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Update Event
      </button>
    </form>
  );
};

export default UpdateEvent;
