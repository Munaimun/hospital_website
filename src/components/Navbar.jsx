import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the mobile menu when a menu item is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-cyan-400 text-white fixed w-full z-20 top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              RaddSoft
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Menu links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link
                  to="/"
                  className="py-2 px-3 text-white md:p-0 hover:bg-gray-200 hover:text-sky-600 md:hover:bg-transparent hover:rounded-md transition duration-300 ease-in-out"
                  aria-current="page"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/departments"
                  className="py-2 px-3 text-white hover:bg-gray-200 hover:text-sky-600 md:hover:bg-transparent hover:rounded-md transition duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  Departments
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="py-2 px-3 text-white hover:bg-gray-200 hover:text-sky-600 md:hover:bg-transparent hover:rounded-md transition duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="py-2 px-3 text-white hover:bg-gray-200 hover:text-sky-600 md:hover:bg-transparent hover:rounded-md transition duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/appointment"
                  className="py-2 px-3 text-white hover:bg-gray-200 hover:text-sky-600 md:hover:bg-transparent hover:rounded-md transition duration-300 ease-in-out"
                  onClick={closeMenu}
                >
                  Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
