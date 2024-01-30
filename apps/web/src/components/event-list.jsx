import Link from 'next/link';

export default function EventList({ events }) {
  return (
    <div className="mt-10 mx-5 mb-10">
      <h1 className="text-2xl font-bold mb-5">Popular Events</h1>
      <div className="grid grid-flow-row md:grid-cols-4 gap-x-4 gap-y-8 justify-items-center">
        {events.map((event) => (
          <div
            key={event.id}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-md"
          >
            <img className="w-full" src={event.img} alt={event.alt} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{event.title}</div>
              <div>
                <p className="text-gray-700 text-base">{event.date}</p>
                <p className="font-bold">{event.price}</p>
              </div>
              <div className="border-t border-gray-200 my-4"></div>
              <p>{event.organize}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="bg-[#f05537] text-white py-2 px-4 rounded-md hover:bg-[#f05537]/70 mt-8">
          <Link href="/event-list">Jelajah ke lebih banyak event</Link>
        </button>
      </div>
    </div>
  );
}
