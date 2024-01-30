'use client';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function CreateEventList() {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [eventTypeFilter, setEventTypeFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/get-events`,
        );
        const data = response.data;
        console.log('Fetched events:', data.event);
        const fetchedEvents = data.event || [];
        fetchedEvents.sort(
          (a, b) => new Date(b.dateAndTime) - new Date(a.dateAndTime),
        );
        setEvents(fetchedEvents);
      } catch (error) {
        console.log('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);

  const filteredEvents = events.filter(
    (event) =>
      event.eventTitle.toLowerCase().includes(searchQuery.toLowerCase()) &&
      event.eventType.toLowerCase().includes(eventTypeFilter.toLowerCase()) &&
      event.location.toLowerCase().includes(locationFilter.toLowerCase()),
  );

  const handleClick = (event) => {
    setSelectedEvent(event);
  };

  const handleClose = () => {
    setSelectedEvent(null);
  };

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
      <input
        type="text"
        placeholder="Filter by event type..."
        value={eventTypeFilter}
        onChange={(e) => setEventTypeFilter(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      <input
        type="text"
        placeholder="Filter by location..."
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />
      {/* <div className="grid grid-flow-row md:grid-cols-4 gap-x-4 gap-y-8 justify-items-center">
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
      </div> */}
      <div className="grid grid-flow-row md:grid-cols-4 gap-x-4 gap-y-8 justify-items-center">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-md"
            onClick={() => handleClick(event)}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{event.eventTitle}</div>
              <p>{new Date(event.dateAndTime).toLocaleString()}</p>
              <p className="font-bold">{event.price}</p>
              <div className="border-t border-gray-200 my-4"></div>
              <p>{event.organizer}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <div className="font-bold text-xl mb-2">
              {selectedEvent.eventTitle}
            </div>
            <div className="text-gray-700 mb-4">
              <p className="font-bold">Date and Time</p>
              {new Date(selectedEvent.dateAndTime).toLocaleString()}
            </div>
            <div className="text-gray-700 mb-4 flex">
              <div className="flex-1">
                <p className="font-bold">Price: </p>
              </div>
              <div className="flex-1">{selectedEvent.price}</div>
            </div>
            <div className="text-gray-700 mb-4 flex">
              <div className="flex-1">
                <p className="font-bold">Location: </p>
              </div>
              <div className="flex-1">{selectedEvent.location}</div>
            </div>
            <div className="text-gray-700 mb-4">
              <p className="font-bold">Description:</p>
              {selectedEvent.description}
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="text-gray-700 mb-4">{selectedEvent.organizer}</div>
            <button
              onClick={handleClose}
              className="bg-gray-400 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* <Link href="/event-list/event-list-detail">
        <button>Klik</button>
      </Link> */}
    </div>
  );
}
