import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-sky-500 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Part */}
        <div className="text-lg font-bold text-white">
          <Link to="/">Oebic Hospital</Link>
        </div>

        {/* Burger Menu Icon for Mobile */}
        <div className="md:hidden">
          {!isOpen && (
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Middle Part - Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-grow justify-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0`}
        >
          <Link
            to="/"
            className="text-white hover:text-blue-700 transition-colors duration-300 block md:inline-block"
            onClick={() => setIsOpen(false)} // Close the menu on click
          >
            Home
          </Link>
          <Link
            to="/departments"
            className="text-white hover:text-blue-700 transition-colors duration-300 block md:inline-block"
            onClick={() => setIsOpen(false)} // Close the menu on click
          >
            Departments
          </Link>
          <Link
            to="/blog"
            className="text-white hover:text-blue-700 transition-colors duration-300 block md:inline-block"
            onClick={() => setIsOpen(false)} // Close the menu on click
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-700 transition-colors duration-300 block md:inline-block"
            onClick={() => setIsOpen(false)} // Close the menu on click
          >
            Contact
          </Link>

          {/* Mobile Menu - Appointment Button */}
          <Link
            to="/appointment"
            className="bg-white text-black py-2 px-4 rounded hover:bg-black hover:text-white transition-colors duration-300 block md:hidden"
            onClick={() => setIsOpen(false)} // Close the menu on click
          >
            Make an Appointment
          </Link>

          {/* Close Button - Appears at the end */}
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="text-white focus:outline-none mt-4 md:hidden"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
