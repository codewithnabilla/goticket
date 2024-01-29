import Sidebar from '@/app/components/sidebar';

export default function Events() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col mx-auto">
          <p className="font-bold text-3xl my-10 mx-auto text-red-600">
            Your Events
          </p>
          <div class="overflow-x-auto">
            <table class="table-auto min-w-full border-collapse border border-gray-200">
              <thead class="bg-red-500">
                <tr>
                  <th class="px-4 py-2 text-base font-semibold text-gray-100 uppercase">
                    Date
                  </th>
                  <th class="px-4 py-2 text-base font-semibold text-gray-100 uppercase">
                    Event
                  </th>
                  <th class="px-4 py-2 text-base font-semibold text-gray-100 uppercase">
                    Sold
                  </th>
                  <th class="px-4 py-2 text-base font-semibold text-gray-100 uppercase">
                    Gross
                  </th>
                  <th class="px-4 py-2 text-base font-semibold text-gray-100 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr>
                  <td class="px-4 py-2 whitespace-nowrap">Jan 1, 2024</td>
                  <td class="px-4 py-2 whitespace-nowrap">Event A</td>
                  <td class="px-4 py-2 whitespace-nowrap">100</td>
                  <td class="px-4 py-2 whitespace-nowrap">Rp20.000,00</td>
                  <td class="px-4 py-2 whitespace-nowrap">Sold Out</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
