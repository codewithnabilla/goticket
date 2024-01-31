'use client';
import Sidebar from '@/app/components/sidebar';
import { Menu, Search, X } from 'lucide-react';
import 'tailwindcss/tailwind.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const EventsList = () => {
  const [event, setEvent] = useState([]);

  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const response = await axios.get(
        'http://localhost:8000/events/organizer',
        {
          headers: headers,
        },
      );

      const fetchedData = response.data;
      setEvent(fetchedData);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="font-sans  flex flex-col mx-auto">
          <div className=" mx-auto px-4 sm:px-8">
            <div className="py-8 flex flex-col">
              <div className="my-1 mx-auto">
                <p className="font-bold text-3xl mx-auto text-red-600">
                  Your Events
                </p>
              </div>
              <div className="my-2 flex sm:flex-row flex-col mx-auto">
                <div className="flex flex-row mb-1 sm:mb-0">
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                  </div>
                </div>
                <div className="block relative">
                  <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-current text-gray-500"
                    >
                      <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                    </svg>
                  </span>
                  <input
                    placeholder="Search"
                    className=" sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                  />
                </div>
              </div>
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-500 text-left text-md font-semibold text-gray-100 uppercase tracking-wider">
                          Event
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-500 text-left text-md font-semibold text-gray-100 uppercase tracking-wider">
                          Organizer
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-500 text-left text-md font-semibold text-gray-100 uppercase tracking-wider">
                          Location
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-500 text-left text-md font-semibold text-gray-100 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-5 py-3 border-b-2 border-red-200 bg-red-500 text-left text-md font-semibold text-gray-100 uppercase tracking-wider">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {event.map((event) => (
                        <tr key={event.id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {event.eventTitle}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {event.organizer}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {event.location}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {event.price}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {new Date(event.dateAndTime).toLocaleString()}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventsList;
