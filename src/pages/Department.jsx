import { Link } from "react-router-dom";

// Dept images
import cardiology from "../assets/cardiology.jpeg";
import neurology from "../assets/neurology.jpeg";
import eye from "../assets/eye_care.jpeg";
import physical from "../assets/physical_therapy.jpeg";
import dental from "../assets/dental_care.jpeg";
import skin_surgery from "/src/assets/sergury_services.jpeg";

// Doctors images
import doc1 from "../assets/1 (2).png";
import doc2 from "../assets/2 (2).png";
import doc3 from "../assets/3 (1).png";
import doc4 from "../assets/4 (1).png";
import doc5 from "../assets/banner.png";
import doc6 from "../assets/banner2.png";

const Department = () => {
  const departments = [
    {
      name: "Cardiology",
      description:
        "Heart-related services including surgeries, checkups, and treatments.",
      img: cardiology,
    },
    {
      name: "Neurology",
      description:
        "Brain-related services including diagnostics, treatments, and surgeries.",
      img: neurology,
    },
    {
      name: "Eye Care",
      description: "Eye-related service",
      img: eye,
    },
    {
      name: "Physical Therapy",
      description:
        "Therapeutic services for improving physical function and well-being.",
      img: physical,
    },
    {
      name: "Dental Care",
      description: "Dental service",
      img: dental,
    },
    {
      name: "Skin Surgery",
      description: "Skin-related service",
      img: skin_surgery,
    },
  ];

  const doctors = [
    {
      name: "Dr. Rodro",
      expertise: "Cardiology",
      img: doc1,
    },
    {
      name: "Dr. Dihan",
      expertise: "Neurology",
      img: doc2,
    },
    {
      name: "Dr. Michael Johnson",
      expertise: "Physical Therapy",
      img: doc3,
    },
    {
      name: "Dr. Smith",
      expertise: "Eye Care",
      img: doc4,
    },
    {
      name: "Dr. Jane Doe",
      expertise: "Dental Care",
      img: doc5,
    },
    {
      name: "Dr. Jane Smith",
      expertise: "Skin Surgery",
      img: doc6,
    },
  ];

  return (
    <div className="container mx-auto py-8">
      {/* Department Section */}
      <section className="mb-8">
        <h2 className="text-2xl text-cyan-500 font-bold mb-4 text-center">
          Our Departments
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((department, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={department.img}
                  alt={department.name}
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold text-center">
                  {department.name}
                </h3>
                <p className="text-center">{department.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="mb-8">
        <h2 className="text-2xl text-cyan-500 font-bold mb-4 text-center">
          Our Doctors
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="border p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold text-center">
                  {doctor.name}
                </h3>
                <p className="text-center text-sky-500">{doctor.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Call & Appointment Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
        <div className="bg-sky-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Emergency Call</h3>
          <p className="text-lg mb-4">For any emergency, call us at:</p>
          <p className="text-2xl font-bold">+123 456 7890</p>
        </div>
        <div className="bg-teal-500 text-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2">Make an Appointment</h3>
          <p className="text-lg mb-4">Book your appointment with us:</p>
          <Link
            to="/appointment"
            className="bg-white text-sky-500 py-2 px-6 rounded hover:bg-gray-200 transition-colors duration-300 inline-block"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Department;
