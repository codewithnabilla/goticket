'use client';
import { useState } from 'react';

export default function Location({ location, setLocation }) {
  const [content, setContent] = useState(null);
  const handleVenueClick = () => {
    setContent('Venue Location');
  };

  const handleOnlineClick = () => {
    setContent('Link Streaming');
  };
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold">Location</h1>
      <p className="text-sm">
        Help people in the area discover your event and let attendees know where
        to show up.
      </p>
      <div className="flex flex-row mt-8">
        <button
          onClick={handleVenueClick}
          className="px-10 py-3 outline outline-1 outline-gray-300 rounded-md mr-8 focus:bg-[#ebeefc] active:bg-[#ebeefc] focus:outline-[#1e0a3c]"
        >
          Venue
        </button>
        <button
          onClick={handleOnlineClick}
          className="px-10 py-3 outline outline-1 outline-gray-300 rounded-md mr-8 focus:bg-[#ebeefc] active:bg-[#ebeefc] focus:outline-[#1e0a3c]"
        >
          Online Event
        </button>
      </div>
      <div className="mt-4">
        {content && (
          <div>
            <p className="mb-3 text-sm font-bold">{content}</p>
            <input
              type="text"
              className="w-full py-2 pl-2 pr-4 text-sm text-gray-800 bg-white focus:outline-[#1e0a3c] focus:bg-white focus:text-gray-900 border border-gray-300"
              placeholder={content}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
