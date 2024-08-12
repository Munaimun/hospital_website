import { useState } from "react";

const MakeAppointment = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [doctor, setDoctor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, date, doctor });
    alert("Appointment made successfully!");
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Make an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-lg">Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-lg">Doctor</label>
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
        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeAppointment;
