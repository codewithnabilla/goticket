'use client';
import 'tailwindcss/tailwind.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
export default function CreateEventList() {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/get-events`,
        );
        const data = response.data;
        console.log('Fetched events:', data.event);
        const fetchedEvents = data.event || [];
        setEvents(fetchedEvents);
      } catch (error) {
        console.log('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) =>
    event.eventTitle.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="mt-10 mx-5 mb-10">
      <h2 className="text-2xl font-bold mb-5">Event List</h2>
      <input
        type="text"
        placeholder="Search events..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <div className="grid grid-flow-row md:grid-cols-4 gap-x-4 gap-y-8 justify-items-center">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-md"
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{event.eventTitle}</div>
              <div className="border-t border-gray-200 my-4"></div>
              <p>{event.organizer}</p>
              <p>{event.eventType}</p>
              <p>{event.location}</p>
              <p>{new Date(event.dateAndTime).toLocaleString()}</p>
              <p>{event.price}</p>
              <p>{event.description}</p>
              {event.imageUrl && (
                <img
                  src={event.imageUrl}
                  alt={event.eventTitle}
                  className="mt-4 w-full"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
