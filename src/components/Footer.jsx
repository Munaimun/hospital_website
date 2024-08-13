import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">
            <FaMapMarkerAlt className="inline-block mr-2" />
            123 Health Street, Wellness City, ST 12345
          </p>
          <p className="mb-2">
            <FaPhone className="inline-block mr-2" />
            (123) 456-7890
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-sky-500"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-sky-500"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white hover:text-sky-500"
            >
              <FaYoutube className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Departments</h3>
          <ul>
            <li className="mb-2 hover:text-sky-500">
              <Link to="/departments/eye-care">Eye Care</Link>
            </li>
            <li className="mb-2 hover:text-sky-500">
              <Link to="/departments/physical-therapy">Physical Therapy</Link>
            </li>
            <li className="mb-2 hover:text-sky-500">
              <Link to="/departments/dental-care">Dental Care</Link>
            </li>
            <li className="mb-2 hover:text-sky-500">
              <Link to="/departments/diagnostic-test">Diagnostic Test</Link>
            </li>
            <li className="mb-2 hover:text-sky-500">
              <Link to="/departments/skin-surgery">Skin Surgery</Link>
            </li>
            <li className="mb-2 hover:text-sky-500">
              <Link to="/departments/surgery-service">Surgery Service</Link>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="mb-4">
            Oebic Hospital is committed to providing top-quality healthcare with
            compassion and care. Our state-of-the-art facilities and expert
            staff ensure that you receive the best possible treatment.
          </p>
          <p>
            <Link to="/about" className="text-sky-500 hover:text-sky-600">
              Learn more about us
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-gray-400 mt-8 text-center">
        <p>&copy; 2024 Oebic Hospital. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
