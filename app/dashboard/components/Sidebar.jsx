"use client"
import { useState } from 'react';
import { FaHome, FaSignOutAlt, FaHistory, FaMoneyBill, FaRobot, FaUser} from "react-icons/fa";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex sm:h-screen fixed w-16 sm:w-min flex-col justify-between border-e bg-white">
      <div>
        <div className="inline-flex size-16 items-center justify-between px-4 py-3 md:mt-4 md:px-6 md:py-4">
          
          <button
            className="block md:hidden text-gray-500 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="border-t border-gray-500">
        <div
          className={`px-2 md:px-4 ${
            isMenuOpen
              ? 'absolute top-14 left-0 w-full bg-white z-10 border-t border-gray-200 md:static md:border-none'
              : 'hidden md:block'
          }`}
        >
          <div className="py-4 md:py-6">
            {/* Home Link */}
            <a
              href="/"
              className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700 md:justify-start"
            >
              <FaHome className='h-6 w-6' />
              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs group-hover:visible font-medium text-white">
                General
              </span>
            </a>
            </div>
            <ul className="space-y-1 border-t border-gray-100 pt-4 md:border-none md:pt-6">
            <li>
              <a
                href="/dashboard/trained"
                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 md:justify-start"
              >
                {/* Trained Models Icon */}
                <FaHistory className='h-6 w-6'/>
                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs group-hover:visible font-medium text-white">
                  Trained Models
                </span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard/premium"
                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 md:justify-start"
              >
                {/* Trained Models Icon */}
                  <FaMoneyBill className='h-6 w-6'/>
                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs group-hover:visible font-medium text-white">
                Premium
                </span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard/trainmodel"
                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 md:justify-start"
              >
                {/* Trained Models Icon */}
                <FaRobot className='h-6 w-6'/>
                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs group-hover:visible font-medium text-white">
                Train Models
                </span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700 md:justify-start"
              >
                {/* Trained Models Icon */}
                <FaUser className='h-6 w-6'/>
                <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs group-hover:visible font-medium text-white">
                Account
                </span>
              </a>
            </li>
            {/* Add more links here */}
             
              <li>
              <form action="#">
              <button
            type="submit"
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700 md:justify-start"
          >
            <FaSignOutAlt className='h-6 w-6' />
            <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs group-hover:visible font-medium text-white">
              Logout
            </span>
          </button>

        </form>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2 md:p-4">
        
      </div>
    </div>
  );
};

export default Sidebar;