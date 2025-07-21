import React from "react";

const EventCardSkeleton = () => {
  return (
    <div className="w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[28vw] xl:w-[20vw] max-h-[70vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-pulse flex flex-col">


      {/* Image Skeleton */}
      <div className="h-[25vh] w-full bg-gray-200" />

      {/* Labels Skeleton */}
      <div className="flex flex-wrap px-2 py-1 gap-2 items-center">
        <div className="rounded-full bg-gray-300 w-[42px] h-[42px] sm:w-[3vw] sm:h-[3vw]" />
        <div className="rounded-2xl bg-gray-300 h-6 w-16" />
        <div className="rounded-2xl bg-gray-300 h-6 w-16" />
        <div className="rounded-2xl bg-gray-300 h-6 w-16" />
      </div>

      {/* Content Skeleton */}
      <div className="px-2 py-1 space-y-3 flex flex-col flex-1">
        {/* Title */}
        <div className="bg-gray-300 h-5 w-3/4 rounded" />

        {/* Time & Location */}
        <div className="w-full bg-[#4806ba4c] rounded-xl flex flex-col sm:flex-row px-2 py-2 gap-4 text-xs sm:text-sm max-h-[15vh]">
          <div className="sm:w-1/2 flex flex-col gap-2 border-b sm:border-b-0 sm:border-r border-gray-700 pr-2">
            <div className="h-4 bg-gray-300 w-24 rounded" />
            <div className="h-4 bg-gray-300 w-20 rounded" />
          </div>
          <div className="sm:w-1/2 flex items-center gap-2">
            <div className="h-4 w-4 bg-gray-300 rounded-full" />
            <div className="h-4 bg-gray-300 w-24 rounded" />
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex gap-2 text-white font-medium text-sm sm:text-base">
          <div className="w-1/2 h-10 bg-gray-300 rounded-xl" />
          <div className="w-1/2 h-10 bg-gray-300 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default EventCardSkeleton;
