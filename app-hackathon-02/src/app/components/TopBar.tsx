'use client';
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { useState } from 'react';

const TopBar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  return (
    <div className="bg-violet-700 text-white py-2 text-sm">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-4 whitespace-nowrap">

        <div className="flex items-center gap-6">

          <a href="mailto:talhakn061@gmail.com" className="flex items-center gap-2 hover:text-gray-200">
            <FaEnvelope />
            <span>talhakn061@gmail.com</span>
          </a>

          <a href="tel:1234567890" className="flex items-center gap-2 hover:text-gray-200">
            <FaPhoneAlt />
            <span>0123-4567890</span>
          </a>
        </div>


        <div className="flex items-center gap-4">

          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setLanguageDropdown(true)}
            onMouseLeave={() => setLanguageDropdown(false)}
          >
            <span>English</span>
            <span className="text-xs">▼</span>
            {languageDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2 z-50">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">English</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">Spanish</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">French</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">German</div>
              </div>
            )}
          </div>

          <div
            className="relative cursor-pointer flex items-center gap-1"
            onMouseEnter={() => setCurrencyDropdown(true)}
            onMouseLeave={() => setCurrencyDropdown(false)}
          >
            <span>USD</span>
            <span className="text-xs">▼</span>
            {currencyDropdown && (
              <div className="absolute top-8 bg-white text-black rounded shadow-md p-2 z-50">
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">USD</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">EUR</div>
                <div className="hover:bg-gray-200 px-4 py-1 cursor-pointer">GBP</div>
              </div>
            )}
          </div>

<li className="flex items-center gap-2 hover:text-gray-200">
  <Link href="/account">
    <FaUser />
  </Link>
</li>


        </div>
      </div>
    </div>
  );
};

export default TopBar;