import React from 'react';

const Pricing = () => {
  return (
    <div className='bg-white w-screen h-screen'>
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-2 sm:py-12 lg:px-8 bg-white w-screen">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Pricing Plans</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-center md:gap-8">
          <div className="rounded-2xl border border-red-600 p-6 shadow-sm ring-1 ring-red-600 sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Pro Plan
                <span className="sr-only">Plan</span>
              </h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">$30</strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-red-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-700">20 users included</span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-red-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-700">5GB of storage</span>
              </li>
              {/* Add more pricing details here */}
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-full border border-red-600 bg-red-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-red-700 hover:ring-1 hover:ring-red-700 focus:outline-none focus:ring active:text-red-500"
            >
              Get Started
            </a>
          </div>

          <div className="rounded-2xl border p-6 shadow-sm ring-1 sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Pro Plan
                <span className="sr-only">Plan</span>
              </h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">$30</strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-red-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-700">20 users included</span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-red-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-700">5GB of storage</span>
              </li>
              {/* Add more pricing details here */}
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-full border border-red-600 bg-red-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-red-700 hover:ring-1 hover:ring-red-700 focus:outline-none focus:ring active:text-red-500"
            >
              Get Started
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Starter Plan
                <span className="sr-only">Plan</span>
              </h2>
              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">$20</strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-red-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-700">10 users included</span>
              </li>
              <li className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-red-700"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-gray-700">2GB of storage</span>
              </li>
              {/* Add more pricing details here */}
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-full border border-red-600 bg-white px-12 py-3 text-center text-sm font-medium text-red-600 hover:ring-1 hover:ring-red-600 focus:outline-none focus:ring active:text-red-500"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
