import { useState } from "react";

const MakeAppointment = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, date, time, department, doctor, phoneNumber, email });
    alert("Appointment made successfully!");
  };

  return (
    <div className="flex justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg"
      >
        <h2 className="text-2xl text-sky-500 font-bold mb-4 text-center">
          Make an Appointment
        </h2>

        {/* Date and Time Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block">Pick Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block">Pick Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {/* Department and Doctor Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block">Select Department</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Department</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Neurology">Neurology</option>
              <option value="Orthopedics">Orthopedics</option>
            </select>
          </div>
          <div>
            <label className="block">Doctors</label>
            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Doctor</option>
              <option value="Dr. John Doe">Dr. John Doe</option>
              <option value="Dr. Jane Smith">Dr. Jane Smith</option>
            </select>
          </div>
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Your Name"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block">Phone Number</label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Your Phone Number"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Your Email"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600 transition-colors duration-300 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeAppointment;
