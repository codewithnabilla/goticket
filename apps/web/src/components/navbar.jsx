'use client';
import { Menu, Search, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  const brandText = isMobile ? 'gt.' : 'goticket.';
  return (
    <div class="flex mx-3 gap-2 md:gap-8 items-center mt-3">
      <div class="flex-none">
        <p className="font-mono font-extrabold text-[#f05537] text-xl">
          <Link href="/">{brandText}</Link>
        </p>
      </div>
      <div class="flex-1 w-32">
        <div className="relative text-gray-600 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Search className="w-6 h-6" />
          </span>
          <Link href="/event-list">
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-sm text-gray-800 bg-white rounded-xl focus:outline-none focus:bg-white focus:text-gray-900 border border-gray-300"
              placeholder="Search"
            />
          </Link>
        </div>
      </div>
      <div class="flex-1 w-32 ">
        <div className="hidden md:flex">
          <div className="flex-auto ">
            <Link className="hover:underline" href="/find-events">
              Find Events
            </Link>
          </div>
          <div className="flex-auto">
            <Link className="hover:underline" href="/create-events">
              Create Events
            </Link>
          </div>
          <div className="flex-auto">
            <Link className="hover:underline" href="/event-list">
              Event List
            </Link>
          </div>
          <div className="flex-auto ">
            <Link className="hover:underline" href="/">
              Log In
            </Link>
          </div>

          <div className="flex-auto ">
            <Link className="hover:underline" href="/">
              Sign Up
            </Link>
          </div>
        </div>
        {/* Mobile Menu Button */}
        <div className="flex items-center">
          <div className="flex-auto md:hidden ">
            <Link className="hover:underline " href="/">
              <p>Log In</p>
            </Link>
          </div>
          <div className="flex-auto md:hidden">
            <Link className="hover:underline" href="/">
              <p>Sign Up</p>
            </Link>
          </div>

          <button className="md:hidden" onClick={handleMobileMenuToggle}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                {/* Dropdown Items */}

                <Link
                  className="hover:underline block px-4 py-2  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  href="/find-events"
                >
                  Find Events
                </Link>
                <Link
                  className="hover:underline block px-4 py-2  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  href="/create-events"
                >
                  Create Events
                </Link>
                <Link
                  className="hover:underline block px-4 py-2  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  href="/event-list"
                >
                  Event List
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
