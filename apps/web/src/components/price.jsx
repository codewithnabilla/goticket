'use client';
import { useState } from 'react';

export default function Price({ price, setPrice }) {
  const [isPaid, setIsPaid] = useState('');

  const handlePaidClick = () => {
    setIsPaid(true);
  };

  const handleFreeClick = () => {
    setIsPaid(false);
  };
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold">Price</h1>
      <p className="text-sm">
        The price that must be paid to enter the event being held.
      </p>
      <div className="flex flex-row mt-8">
        <button
          onClick={handlePaidClick}
          className="px-10 py-3 outline outline-1 outline-gray-300 rounded-md mr-8 focus:bg-[#ebeefc] active:bg-[#ebeefc] focus:outline-[#1e0a3c]"
        >
          Paid
        </button>
        <button
          onClick={handleFreeClick}
          className="px-10 py-3 outline outline-1 outline-gray-300 rounded-md mr-8 focus:bg-[#ebeefc] active:bg-[#ebeefc] focus:outline-[#1e0a3c]"
        >
          Free
        </button>
      </div>
      <div className="mt-4">
        {isPaid ? (
          <div>
            <p>Price in Rupiah</p>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="Number"
              className="w-full py-2 pl-2 pr-4 text-sm text-gray-800 bg-white focus:outline-[#1e0a3c] focus:bg-white focus:text-gray-900 border border-gray-300"
            ></input>
          </div>
        ) : (
          <p className="mb-3 text-sm font-bold">Free</p>
        )}
      </div>
    </div>
  );
}
