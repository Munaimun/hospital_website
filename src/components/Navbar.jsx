import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-sky-500 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Part */}
        <div className="text-lg font-bold text-primary">
          <Link to="/">Oebic Hospital</Link>
        </div>

        {/* Middle Part */}
        <div className="flex flex-grow justify-center space-x-4">
          <Link
            to="/"
            className="text-white hover:text-blue-700 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/doctors"
            className="text-white hover:text-blue-700 transition-colors duration-300"
          >
            Doctors
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-blue-700 transition-colors duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-700 transition-colors duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Right Part */}
        <div>
          <Link
            to="/appointment"
            className="bg-white text-black py-2 px-4 rounded hover:bg-sky-600 transition-colors duration-300"
          >
            Make an Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
