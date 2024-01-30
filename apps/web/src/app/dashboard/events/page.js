import Sidebar from '@/app/components/sidebar';
import { Menu, Search, X } from 'lucide-react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';

export default function Events() {
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
                          Date
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-500 text-left text-md font-semibold text-gray-100 uppercase tracking-wider">
                          Event
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-500 text-left text-md font-semibold text-gray-100 uppercase tracking-wider">
                          Sold
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-red-500 text-left text-md font-semibold text-gray-100 uppercase tracking-wider">
                          Gross
                        </th>
                        <th className="px-5 py-3 border-b-2 border-red-200 bg-red-500 text-left text-md font-semibold text-gray-100 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Jan 1, 2024
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Event A
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            100
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Rp200.000,00
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            Available
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                    <span className="text-xs xs:text-sm text-gray-900">
                      Showing 1 to 4 of 50 Entries
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                      <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                        Prev
                      </button>
                      <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div classNameName="flex flex-col mx-auto">
          <p classNameName="font-bold text-3xl my-10 mx-auto text-red-600">
            Your Events
          </p>
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full border-collapse border border-gray-200">
              <thead className="bg-red-500">
                <tr>
                  <th className="px-4 py-2 text-base font-semibold text-gray-100 uppercase">
                    Date
                  </th>
                  <th className="px-4 py-2 text-base font-semibold text-gray-100 uppercase">
                    Event
                  </th>
                  <th className="px-4 py-2 text-base font-semibold text-gray-100 uppercase">
                    Sold
                  </th>
                  <th className="px-4 py-2 text-base font-semibold text-gray-100 uppercase">
                    Gross
                  </th>
                  <th className="px-4 py-2 text-base font-semibold text-gray-100 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-2 whitespace-nowrap">Jan 1, 2024</td>
                  <td className="px-4 py-2 whitespace-nowrap">Event A</td>
                  <td className="px-4 py-2 whitespace-nowrap">100</td>
                  <td className="px-4 py-2 whitespace-nowrap">Rp20.000,00</td>
                  <td className="px-4 py-2 whitespace-nowrap">Sold Out</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    </>
  );
}
