'use client';
import 'tailwindcss/tailwind.css';
import axios from 'axios';
import BasicInfo from '../../components/basic-info';
import Location from '../../components/location';
import DateAndTime from '../../components/date-and-time';
import Price from '../../components/price';
import Description from '../../components/description';
import ImageUploader from '../../components/image-uploader';
import { useState } from 'react';

export default function CreateEvent() {
  const [eventTitle, setEventTitle] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [eventType, setEventType] = useState('type');
  const [location, setLocation] = useState('');
  const [dateAndTime, setDateAndTime] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState(null);

  const handleSaveClick = async () => {
    try {
      console.log('Sending data:', {
        eventTitle,
        organizer,
        eventType,
        location,
        dateAndTime,
        price,
        description,
        imageUrl,
      });
      const response = await axios.post(
        `http://localhost:3001/api/save-event-data`,
        {
          eventTitle,
          organizer,
          eventType,
          location,
          dateAndTime,
          price,
          description,
          imgUrl: imageUrl,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.data.success) {
        console.log('Event data saved successfully!');
      } else {
        console.error('Failed to save event data');
      }
    } catch (error) {
      console.error('Error saving event data:', error);
    }
  };
  return (
    <div className="px-5 flex flex-col items-center mt-12">
      <div>
        <BasicInfo
          eventTitle={eventTitle}
          setEventTitle={setEventTitle}
          organizer={organizer}
          setOrganizer={setOrganizer}
          eventType={eventType}
          setEventType={setEventType}
        />
        <Location location={location} setLocation={setLocation} />
        <DateAndTime
          dateAndTime={dateAndTime}
          setDateAndTime={setDateAndTime}
        />
        <Price price={price} setPrice={setPrice} />
        <Description
          description={description}
          setDescription={setDescription}
        />
        <ImageUploader setImageUrl={setImageUrl} />
      </div>
      <div className="mt-8">
        <button
          onClick={handleSaveClick}
          className="bg-[#f05537] text-white py-2 px-2 md:px-4 rounded-md hover:bg-[#f05537]/70 focus:outline-none focus:shadow-outline"
        >
          Save and Publish
        </button>
      </div>
    </div>
  );
}
