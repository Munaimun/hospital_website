const About = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <div className="flex flex-col lg:flex-row items-center">
        <img
          src="https://via.placeholder.com/400"
          alt="About Us"
          className="w-full lg:w-1/2 h-auto mb-4 lg:mb-0"
        />
        <div className="lg:ml-8">
          <p className="text-lg text-gray-600">
            Our hospital is committed to providing exceptional care and service.
            Our team of highly qualified doctors and medical professionals are
            dedicated to ensuring the best outcomes for our patients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
