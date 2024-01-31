'use client';
import 'tailwindcss/tailwind.css';

import Sidebar from '@/app/components/sidebar';

export default function Statistics() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <h1>This is statistics</h1>
      </div>
    </>
  );
}
