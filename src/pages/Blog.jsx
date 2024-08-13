import { useState } from "react";

import heart from "../assets/heart_health.jpeg";
import nutrition from "/src/assets/Nutrition _Diet.jpeg";
import meantal from "/src/assets/Mental_Wellness.jpeg";

const Blog = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const blogSections = [
    {
      title: "Heart Health",
      image: heart,
      briefText: "Learn how to maintain a healthy heart with our top tips.",
      fullText:
        "Heart health is vital for your overall well-being. Regular exercise, a balanced diet, and routine check-ups are key to preventing heart diseases. Don't ignore symptoms like chest pain or shortness of breath. Early intervention can save lives. It's important to be aware of your family's medical history, as genetics can play a significant role in your heart health. Managing stress, quitting smoking, and reducing alcohol intake are also essential steps to keep your heart in top condition. Additionally, staying informed about the latest advancements in heart care can help you make better decisions for your health.",
    },
    {
      title: "Nutrition and Diet",
      image: nutrition,
      briefText: "Discover the importance of a balanced diet in your life.",
      fullText:
        "A balanced diet provides essential nutrients that your body needs to function correctly. Include a variety of fruits, vegetables, whole grains, and proteins in your daily meals. Stay hydrated and limit the intake of processed foods and sugars. Understanding portion control and the benefits of organic foods can also contribute to better nutrition. Meal planning and mindful eating are effective strategies to maintain a healthy diet. Remember that small, consistent changes in your diet can lead to significant improvements in your overall health. Consulting with a nutritionist can provide personalized advice to meet your specific dietary needs.",
    },
    {
      title: "Mental Wellness",
      image: meantal,
      briefText: "Take steps to protect your mental health every day.",
      fullText:
        "Mental wellness is as important as physical health. Regular breaks, mindfulness practices, and staying connected with loved ones can help reduce stress. Seek professional help if you're experiencing prolonged feelings of sadness or anxiety. Building a support network, practicing gratitude, and engaging in hobbies that bring you joy can further enhance your mental well-being. Understanding the impact of social media and setting boundaries for technology use can also contribute to better mental health. Remember that it's okay to ask for help, and taking care of your mind is a vital part of leading a fulfilling life.",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl text-cyan-500 font-bold mb-4">Health Blogs</h2>
      {blogSections.map((section, index) => (
        <div
          key={index}
          className="mb-8 p-4 border rounded-lg shadow-md flex flex-col lg:flex-row"
        >
          <img
            src={section.image}
            alt={section.title}
            className="w-full lg:w-1/3 h-auto mb-4 lg:mb-0"
          />
          <div className="lg:ml-8 flex-grow">
            <h3 className="text-xl text-sky-500 font-semibold mb-2">
              {section.title}
            </h3>
            <p className="text-lg text-gray-600">
              {section.briefText}
              {expandedSection === index && (
                <span className="block mt-2">{section.fullText}</span>
              )}
            </p>
            <button
              onClick={() => toggleReadMore(index)}
              className="text-red-600 hover:text-blue-700 mt-2"
            >
              {expandedSection === index ? "Hide" : "Read..."}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
