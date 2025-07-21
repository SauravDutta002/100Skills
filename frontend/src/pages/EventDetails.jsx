import React, { useEffect, useState } from 'react'
import EventInfo from '../components/EventInfo'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Base_URL = "http://localhost:5000/api";

const EventDetails = () => {

  const { id } = useParams();
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    const getDataById = async () => {
      try {
        const response = await axios.get(`${Base_URL}/events/get/${id}`);
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
      <EventInfo  eventData ={eventData}/>
    </div>
  )
}

export default EventDetails;
