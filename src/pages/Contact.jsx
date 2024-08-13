import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Contact Us</h2>
      <div className="flex flex-col lg:flex-row justify-around gap-8">
        {/* Contact Form Section */}
        <div className="lg:w-1/2">
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-lg"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-2 border rounded-lg"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-sky-500 border border-sky-500 py-2 px-4 hover:bg-sky-500 hover:text-white transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="lg:w-1/2">
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-sky-500 text-2xl mr-4" />
              <div>
                <p className="font-bold">Address:</p>
                <p>123 Health St., Wellness City, Country</p>
              </div>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-sky-500 text-2xl mr-4" />
              <div>
                <p className="font-bold">Phone:</p>
                <p>+123 456 7890</p>
              </div>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-sky-500 text-2xl mr-4" />
              <div>
                <p className="font-bold">Email:</p>
                <p>contact@oebichospital.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
