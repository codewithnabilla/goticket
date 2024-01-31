'use client';
import 'tailwindcss/tailwind.css';
import Sidebar from '@/app/components/sidebar';

export default function Transactions() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <h1>This is transactions</h1>
      </div>
    </>
  );
}
