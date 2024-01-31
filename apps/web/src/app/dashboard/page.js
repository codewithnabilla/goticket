import 'tailwindcss/tailwind.css';
import Sidebar from '@/app/components/sidebar';

export default function Transactions() {
  return (
    <>
      <div className="flex bg-slate-100">
        <Sidebar />
        <div className="mx-auto my-auto">
          <p className="text-5xl text-red-600 font-semibold">
            Welcome to Dashboard
          </p>
        </div>
      </div>
    </>
  );
}
