const Doctors = () => {
  const doctors = [
    {
      name: "Dr. John Doe",
      expertise: "Cardiology",
      department: "Heart",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Dr. Jane Smith",
      expertise: "Neurology",
      department: "Brain",
      img: "https://via.placeholder.com/150",
    },
    // Add more doctors as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Our Doctors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <img
              src={doctor.img}
              alt={doctor.name}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold">{doctor.name}</h3>
            <p>
              <strong>Expertise:</strong> {doctor.expertise}
            </p>
            <p>
              <strong>Department:</strong> {doctor.department}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
