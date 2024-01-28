export default function Sidebar() {
  return (
    <>
      <div className="font-poppins antialiased">
        <div className="flex flex-row">
          <div
            className="bg-white h-screen md:block shadow-xl px-3 py-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
            x-show="sidenav"
          >
            <div className="flex flex-col space-y-2">
              <a
                href="/dashboard/"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-red-600 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
              >
                <span className="pl-2">Create Event</span>
              </a>
              <a
                href="/dashboard/events"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-red-600 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
              >
                <span className="pl-2">Your Events</span>
              </a>
              <a
                href="/dashboard/transactions"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-red-600 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
              >
                <span className="pl-2">Transactions</span>
              </a>
              <a
                href="/dashboard/statistics"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-red-600 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
              >
                <span className="pl-2">Statistics</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
