import React from "react";
import axios from "axios";
// import testImg from "../assets/testimg.jpeg";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMoneyOff, MdOutlineAttachMoney } from "react-icons/md";
import { GoClock } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import Countdown from "./Countdown";
import { LuAlarmClock } from "react-icons/lu";
import { FaRegCircleDot } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const eventDetails = () => {
    navigate(`/event/${event._id}`);
  };

  return (
    <div className="w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[28vw] xl:w-[20vw] max-h-[70vh] bg-white rounded-2xl font-mono shadow-2xl overflow-hidden flex flex-col">
      {/* Event Image */}
      <div className="h-[25vh] w-full overflow-hidden px-0.5 py-0.5">
        <img
          src={event.eventImage.url} 
          alt="Event"
          className="object-cover h-full w-full rounded-t-2xl"
        />
      </div>

      {/* Labels */}
      <div className="flex text-xs sm:text-sm px-2 py-1 gap-2 items-center">
        <span className="border border-gray-600 rounded-full w-[42px] h-[42px] sm:w-[3vw] sm:h-[3vw] overflow-hidden flex items-center justify-center">
          {/* <img src="" alt="Organizer" className="object-cover w-full h-full" /> */}
          <HiAcademicCap className="text-xl"/>
        </span>

        {event.paymentType === "Free" ? (
          <span className="px-2 rounded-2xl border border-gray-600 flex items-center gap-1 h-6">
            Free <MdOutlineMoneyOff className="text-red-400" />
          </span>
        ) : (
          <span className="px-2 rounded-2xl border border-gray-600 flex items-center gap-1 h-6">
            Paid <MdOutlineAttachMoney className="text-green-400" />
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
{Date.now() < new Date(event.registrationEndDate).getTime() ? (
  <span className="px-2 py-1 rounded-full text-[10px] border border-red-500 text-red-500 flex items-center gap-1 whitespace-nowrap ml-auto">
    <FaRegCircleDot className="animate-pulse text-[10px]" />
    Live
  </span>
) : (
  <span className="px-2 py-0.5 rounded-full text-[10px] bg-red-500 text-white flex items-center whitespace-nowrap ml-auto">
    Ended
  </span>
)}

      </div>

      {/* Main Content */}
      <div className="px-2 py-1 space-y-3 flex flex-col flex-1">
        {/* Title */}
        <div className="text-black font-bold text-sm sm:text-base md:text-lg truncate">
          {event.eventName}
        </div>

        {/* Time & Location */}
        {/* <div className="w-full bg-[#4806ba4c] rounded-xl flex  sm:flex-row px-10 py-2 gap-2 text-xs sm:text-sm max-h-[15vh] overflow-hidden items-center justify-between  ">
          <div className="sm:w-1/2 flex flex-col gap-2 border-r sm:border-b-0 sm:border-r border-gray-700 pr-2 ">
            <span className="flex items-center gap-1">
              Ends In <GoClock />
            </span>
            <div className="space-x-2 font-bold text-xs">
              <Countdown
                startDate={event.registrationStartDate}
                endDate={event.registrationEndDate}
              />
            </div>
          </div>

          <div className="sm:w-1/2 flex items-center gap-1 overflow-hidden">
            <CiLocationOn className="text-lg shrink-0" />
            <div className="truncate text-xs sm:text-sm">
              {event.location || "Online"}
            </div>
          </div>
        </div> */}

        <div className="flex items-center gap-2">
          <LuAlarmClock className="text-xl"/> <Countdown
                startDate={event.registrationStartDate}
                endDate={event.registrationEndDate}
              />
        </div>
        <div className="flex items-center gap-2">
          <CiLocationOn className="text-xl"/>  <div className="truncate text-xs sm:text-sm">
              {event.location || "Online"}
            </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex gap-2 text-white font-medium text-sm sm:text-base">
          <a
            href={event.registerLink}
            className="w-1/2 bg-[#270165] h-10 rounded-xl flex items-center justify-center"
          >
            Register Now
          </a>
          <button
            onClick={eventDetails}
            className="w-1/2 h-10 rounded-xl flex items-center justify-center text-black border border-[#270165]"
          >
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
