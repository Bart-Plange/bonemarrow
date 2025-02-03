import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-lg rounded-xl py-16 px-12 max-w-5xl mx-auto border border-gray-200 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side - Text Content */}
      <div className="md:w-2/3 text-center md:text-left">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
          Prioritize Your Health Today!
        </h2>
        <p className="text-gray-700 text-lg">
          Book an appointment with our experts or reach out to us for 
          personalized care and guidance.
        </p>
      </div>

      {/* Right Side - Buttons */}
      <div className="flex flex-col md:w-1/3 gap-4 mt-6 md:mt-0">
        <Link
          to="/appointment"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-md text-center"
        >
          Book an Appointment
        </Link>
        <Link
          to="/contact"
          className="bg-green-600 hover:bg-green-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-md text-center"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default CTA;
