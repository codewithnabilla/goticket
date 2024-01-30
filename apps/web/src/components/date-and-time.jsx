'use client';
export default function DateAndTime({ dateAndTime, setDateAndTime }) {
  const handleChange = (e) => {
    const dateTimeValue = e.target.value;
    setDateAndTime(dateTimeValue);
  };

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold">Date and time</h1>
      <p className="text-sm">
        Tell event-goers when your event starts and ends so they can make plans
        to attend.
      </p>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Date:</label>
        <input
          type="datetime-local"
          value={dateAndTime}
          onChange={handleChange}
          className="mt-1 p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}
