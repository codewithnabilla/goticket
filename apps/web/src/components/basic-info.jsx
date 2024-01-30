export default function BasicInfo({
  eventTitle,
  setEventTitle,
  organizer,
  setOrganizer,
  eventType,
  setEventType,
}) {
  return (
    <div>
      <h1 className="text-3xl font-bold">Basic Info</h1>
      <p className="text-sm">
        Name your event and tell event-goers why they should come. Add details
        that highlight what makes it unique.
      </p>
      <div className="mt-8">
        <div>
          <p className="text-sm font-bold mb-3">Event title</p>
          <input
            id="eventTitle"
            name="eventTitle"
            type="text"
            className="w-full py-2 pl-2 pr-4 text-sm text-gray-800 bg-white focus:outline-[#1e0a3c] focus:bg-white focus:text-gray-900 border border-gray-300"
            placeholder="Be clear and descriptive."
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </div>
        <div>
          <p className="text-sm font-bold mb-3 mt-3">Organizer</p>
          <input
            id="organizer"
            name="organizer"
            type="text"
            className="w-full py-2 pl-2 pr-4 text-sm text-gray-800 bg-white focus:outline-[#1e0a3c] focus:bg-white focus:text-gray-900 border border-gray-300"
            placeholder="Tell attendees who is organizing this event."
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
          />
        </div>
        <div>
          <p className="text-sm font-bold mb-3 mt-3">Type event</p>
          <select
            id="eventType"
            name="eventType"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full py-2 pl-2 pr-4 text-sm text-gray-800 bg-white focus:outline-[#1e0a3c] focus:bg-white focus:text-gray-900 border border-gray-300"
          >
            <option value="type">Type</option>
            <option value="concert">Concert</option>
            <option value="festival">Festival</option>
            <option value="social gathering">Social Gathering</option>
            <option value="seminar">Seminar</option>
            <option value="networking event">Networking Event</option>
            <option value="tournament">Tournament</option>
          </select>
        </div>
        <div>
          {/* <button type="button" onClick={handleSaveClick}>
            Save Event Data
          </button> */}
        </div>
      </div>
    </div>
  );
}
