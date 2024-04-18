"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";

const Navbar = () => {

  const {data, status} = useSession()
  console.log(status)



  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-red-400 font-extrabold text-3xl" href="/">
              AlchemistAI
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-5 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-red-500/75"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-red-500/75"
                    href="#"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-red-500/75"
                    href="#"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-red-500/75"
                    href="#"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                {status === "authenticated" ? (
                  <a
                  className="rounded-md bg-red-400 hover:bg-gray-100 px-5 py-2.5 text-sm font-medium text-white shadow hover:text-red-500"
                  href="/dashboard"
                >
                  Dashboard
                </a>
                 ) : (
                  <a
                  className="rounded-md bg-red-400 hover:bg-gray-100 px-5 py-2.5 text-sm font-medium text-white shadow hover:text-red-500"
                  href="/auth"
                >
                  Login
                </a>
                )}
                

                

                {/* <div className="hidden sm:flex">
                  <a
                    className="rounded-md bg-gray-100 hover:bg-red-400 hover:text-white  px-5 py-2.5 text-sm font-medium text-red-400"
                    href="/dashboard"
                  >
                    Try Out
                  </a>
                </div> */}
              </div>

              <div className="block md:hidden">
                <button
                  className="block md:hidden rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
                {/* Conditionally render the menu based on isMenuOpen */}
                {isMenuOpen && (
                  <div className="relative">
                    <div
                      className="absolute end-0 h-48  z-20 mt-2 w-32 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                      role="menu"
                    >
                      <div className="p-2">
                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          About
                        </a>

                        <a
                          href="#"
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          Services
                        </a>

                        <a
                          className="rounded-md bg-red-400 hover:bg-gray-100 px-5 py-2.5  text-sm font-medium text-white shadow hover:text-red-500"
                          href="/auth"
                        >
                          Login
                        </a>
                      </div>

                      <div className="pt-4">
                        <a
                          className="rounded-md bg-gray-100 hover:bg-red-400 hover:text-white  px-5 py-2.5 text-sm font-medium text-red-400"
                          href="/dashboard"
                        >
                          Try Out
                        </a>
                      </div>
                    </div>
                  </div>
                )}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
