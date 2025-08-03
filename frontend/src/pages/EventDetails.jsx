import React, { useEffect, useState } from 'react'
import EventInfo from '../components/EventInfo'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import api from "../api/axios"

const EventDetails = () => {

  const { id } = useParams();
  const [eventData, setEventData] = useState([]);
  
   useEffect(() => {
    window.scrollTo(0, 0); // 👈 this forces scroll to top when component loads
  }, []);

  useEffect(() => {
    const getDataById = async () => {
      try {
        const response = await api.get(`/events/get/${id}`);
        setEventData(response.data);
      } catch (error) {
        console.log(error);
        alert("Error fetching the event by id");
      }
    };
    getDataById();
  }, [id]);

  return (
    <div>
      <EventInfo eventData ={eventData}/>
    </div>
  )
}

export default EventDetails;
