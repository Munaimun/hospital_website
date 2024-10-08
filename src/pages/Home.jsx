import { Link } from "react-router-dom";
import { FaBed, FaAmbulance, FaHospital } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image imports
import home_doctor from "../assets/home_doctor.jpg";
import eye_care from "../assets/eye_care.jpeg";
import physical_therapy from "../assets/physical_therapy.jpeg";
import dental_care from "../assets/dental_care.jpeg";
import diagnostic_test from "../assets/diagnostic_test.jpeg";
import skin_surgery from "/src/assets/skin_sugery.jpeg";
import surgery_service from "/src/assets/skin_sugery.jpeg";

// Array of quotes with corresponding images
const quotes = [
  {
    img: home_doctor,
    text: "Caring for the whole person, not just the body.",
  },
  {
    img: eye_care,
    text: "Vision is the art of seeing what is invisible to others.",
  },
  {
    img: physical_therapy,
    text: "Healing is a matter of time, but it is sometimes also a matter of opportunity.",
  },
];

const Home = () => {
  // Settings for the react-slick carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container mx-auto py-8 mt-14">
      {/* FIRST SECTION */}
      <section className="flex flex-col md:flex-row items-center md:justify-between mb-8">
        {/* Left Side - Quote */}
        <div className="md:w-1/2 mb-8 md:mb-0 px-4 text-center md:text-left">
          <p className="text-6xl text-sky-500 font-bold">Oebic Hospital</p>
          <blockquote className="text-2xl font-semibold text-primary mb-4">
            &quot;Your health is our top priority.&quot;
          </blockquote>
          <p className="text-lg text-gray-600 mb-6">
            At Oebic Hospital, we are dedicated to providing exceptional care
            with a personal touch.
          </p>
          <Link
            to="/departments"
            className="bg-sky-500 text-white py-2 px-6 rounded hover:bg-sky-600 transition-colors duration-300 inline-block"
          >
            Check Our Services
          </Link>
        </div>

        {/* Right Side - Doctor Image */}
        <div className="md:w-1/2 px-4 text-center">
          <img
            src={home_doctor}
            alt="Doctor"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Option 1: Hospitality */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaBed className="text-sky-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Hospitality</h3>
            <p className="text-gray-600 mb-4">
              Clinical excellence must be the priority for any health care
              service provider.
            </p>
            <Link
              to="/apply-bed"
              className="bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600 transition-colors duration-300 inline-block"
            >
              Apply for a Bed
            </Link>
          </div>

          {/* Option 2: Emergency Care */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaAmbulance className="text-sky-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
            <p className="text-gray-600 mb-4">
              Clinical excellence must be the priority for any health care
              service provider.
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Call Us: (123) 456-7890
            </p>
          </div>

          {/* Option 3: Chamber Service */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaHospital className="text-sky-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Chamber Service</h3>
            <p className="text-gray-600 mb-4">
              Clinical excellence must be the priority for any health care
              service provider.
            </p>
            <Link
              to="/appointment"
              className="bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600 transition-colors duration-300 inline-block"
            >
              Make an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* THIRD SECTION */}
      <section className="py-8">
        <div className="container mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Our Departments
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Explore our specialized departments, where we provide expert care
            tailored to your needs.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Each department is equipped with state-of-the-art facilities and a
            team of dedicated professionals.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Department 1: Eye Care */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={eye_care}
              alt="Eye Care"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Eye Care</h3>
            <p className="text-gray-600">
              Comprehensive eye care services including routine check-ups,
              treatments, and surgeries.
            </p>
          </div>

          {/* Department 2: Physical Therapy */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={physical_therapy}
              alt="Physical Therapy"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Physical Therapy</h3>
            <p className="text-gray-600">
              Expert physical therapy for rehabilitation, pain management, and
              improving mobility.
            </p>
          </div>

          {/* Department 3: Dental Care */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={dental_care}
              alt="Dental Care"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Dental Care</h3>
            <p className="text-gray-600">
              Comprehensive dental services including cleanings, fillings, and
              cosmetic treatments.
            </p>
          </div>

          {/* Department 4: Diagnostic Test */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={diagnostic_test}
              alt="Diagnostic Test"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Diagnostic Test</h3>
            <p className="text-gray-600">
              State-of-the-art diagnostic testing to identify and treat medical
              conditions.
            </p>
          </div>

          {/* Department 5: Skin Surgery */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={skin_surgery}
              alt="Skin Surgery"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Skin Surgery</h3>
            <p className="text-gray-600">
              Specialized skin surgery for cosmetic and medical needs.
            </p>
          </div>

          {/* Department 6: Surgery Service */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={surgery_service}
              alt="Surgery Service"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Surgery Service</h3>
            <p className="text-gray-600">
              Advanced surgical services with expert surgeons and cutting-edge
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Sliding Quotes */}
      <section className="py-8">
        <div className="container mx-auto">
          <Slider {...sliderSettings}>
            {quotes.map((quote, index) => (
              <div key={index} className="relative h-64">
                <img
                  src={quote.img}
                  alt="Health Quote"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-white text-2xl font-semibold">
                    {quote.text}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Home;
