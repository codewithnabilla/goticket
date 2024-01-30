'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
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
  const heroImage = isMobile ? '/hero.jpg' : '/hero2.png';
  return (
    <div className="relative mt-5">
      <img src={heroImage} alt="concert" className="w-full h-auto" />
      <button className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f05537] text-white py-2 px-2 md:px-4 rounded-md hover:bg-[#f05537]/70 focus:outline-none focus:shadow-outline">
        <Link href="/event-list">
          <p className="text-xs md:text-base">Find your next events</p>
        </Link>
      </button>
    </div>
  );
}
