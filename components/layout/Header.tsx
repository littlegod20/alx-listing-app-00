import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  const accommodationTypes = [
    "Rooms",
    "Mansion",
    "Countryside",
    "Villa",
    "Apartment",
    "Cabin",
    "Cottage"
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top section with logo, search, and auth */}
        <div className="flex items-center justify-between py-4 border-b">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-red-600">Airbnb</h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="w-full flex items-center border border-gray-300 rounded-full px-4 py-2 hover:shadow-md transition-shadow">
              <Image
                src="/assets/Linear/Search/Magnifer.svg"
                alt="Search"
                width={20}
                height={20}
                className="mr-2"
              />
              <input
                type="text"
                placeholder="Search destinations"
                className="flex-1 outline-none text-sm text-gray-900 placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Mobile Search Button */}
          <div className="md:hidden">
            <button className="flex items-center border border-gray-300 rounded-full px-4 py-2 hover:shadow-md transition-shadow">
              <Image
                src="/assets/Linear/Search/Magnifer.svg"
                alt="Search"
                width={16}
                height={16}
                className="mr-2"
              />
              <span className="text-sm text-gray-600">Search</span>
            </button>
          </div>

          {/* Sign In / Sign Up */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
              Sign in
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors">
              Sign up
            </button>
          </div>
        </div>

        {/* Accommodation Types */}
        <div className="flex items-center gap-6 py-4 overflow-x-auto scrollbar-hide">
          {accommodationTypes.map((type, index) => (
            <button
              key={index}
              className="flex-shrink-0 px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:border-b-2 hover:border-gray-900 transition-colors whitespace-nowrap"
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

