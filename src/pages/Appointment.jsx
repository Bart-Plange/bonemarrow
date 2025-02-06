import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Mail, User, Phone, MapPin } from "lucide-react";
import axios from "axios";
import { AppointmentHero } from "../components";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [confirmation, setConfirmation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const defaultSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

  // Fetch available time slots when date is selected
  useEffect(() => {
    if (formData.date) {
      const fetchAvailableSlots = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/appointments/available-slots/${formData.date}`);
          setAvailableTimes(response.data.availableSlots.length ? response.data.availableSlots : defaultSlots);
        } catch (error) {
          console.error("❌ Error fetching available slots:", error);
          setAvailableTimes(defaultSlots);
        }
      };
      fetchAvailableSlots();
    }
  }, [formData.date]);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setConfirmation(null);
    setErrorMessage("");

    const today = new Date().toISOString().split("T")[0];
    if (formData.date < today) {
      setErrorMessage("❌ You cannot select a past date.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/appointments/book", formData);
      setConfirmation(response.data.message);
      setFormData({ name: "", email: "", phone: "", date: "", time: "" });
      setAvailableTimes(defaultSlots); // Reset available times
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "❌ Failed to book appointment.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-50">
      <AppointmentHero />

      {/* Contact Information */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Get in Touch</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <div className="flex items-center">
            <Phone className="text-blue-600 mr-2" />
            <p className="text-gray-700">+1 800-641-1234</p>
          </div>
          <div className="flex items-center">
            <Mail className="text-blue-600 mr-2" />
            <p className="text-gray-700">info@example.com</p>
          </div>
          <div className="flex items-center">
            <MapPin className="text-blue-600 mr-2" />
            <p className="text-gray-700">54 Berrick 2nd Street, Boston, MA</p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <div id="appointment-form" className="flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Book an Appointment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-4 text-gray-500" />
              <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleChange} className="w-full pl-10 p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-600" />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-4 text-gray-500" />
              <input type="email" name="email" placeholder="Email Address" required value={formData.email} onChange={handleChange} className="w-full pl-10 p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-600" />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-3 top-4 text-gray-500" />
              <input type="tel" name="phone" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} className="w-full pl-10 p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-600" />
            </div>

            {/* Select Date */}
            <div className="relative">
              <Calendar className="absolute left-3 top-4 text-gray-500" />
              <input type="date" name="date" required value={formData.date} onChange={handleChange} className="w-full pl-10 p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-600" />
            </div>

            {/* Select Time */}
            <div className="relative">
              <Clock className="absolute left-3 top-4 text-gray-500" />
              <select name="time" required value={formData.time} onChange={handleChange} className="w-full pl-10 p-3 border rounded-md outline-none focus:ring-2 focus:ring-blue-600">
                <option value="">Select Time Slot</option>
                {availableTimes.length > 0 ? (
                  availableTimes.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                  ))
                ) : (
                  <option disabled>No available slots</option>
                )}
              </select>
            </div>
          </div>

          <button type="submit" className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
            {loading ? "Booking..." : "Confirm Appointment"}
          </button>

          {errorMessage && <p className="text-red-600 mt-2 text-center">{errorMessage}</p>}
          {confirmation && <p className="text-green-600 mt-2 text-center">{confirmation}</p>}
        </motion.form>
      </div>
    </div>
  );
};

export default Appointment;
