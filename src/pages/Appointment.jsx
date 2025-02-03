import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Mail, User, Phone } from "lucide-react";
import axios from "axios"; // Import Axios

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });
  const [availableTimes, setAvailableTimes] = useState(timeSlots);
  const [confirmation, setConfirmation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchUnavailableSlots = async (date) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/appointments/list?date=${date}`);
      const bookedTimes = response.data.map(app => app.time);
      setAvailableTimes(timeSlots.filter(slot => !bookedTimes.includes(slot)));
    } catch (err) {
      console.error("Error fetching unavailable slots", err);
    }
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setFormData({ ...formData, date: selectedDate });
    fetchUnavailableSlots(selectedDate);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setConfirmation(null);
    setErrorMessage("");

    const today = new Date().toISOString().split("T")[0];
    if (formData.date < today) {
      setErrorMessage("You cannot select a past date.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/appointments/book", formData);
      setConfirmation(response.data.message);
      setFormData({ name: "", email: "", phone: "", date: "", time: "" });

      // Refresh available times after booking
      fetchUnavailableSlots(formData.date);
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Failed to book appointment.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl font-bold text-blue-900 text-center mb-6">
        Book an Appointment
      </motion.h1>

      <motion.form initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4 flex items-center border rounded-lg p-2">
          <User className="text-gray-500 mr-2" />
          <input type="text" name="name" placeholder="Full Name" className="w-full outline-none" required value={formData.name} onChange={handleChange} />
        </div>

        <div className="mb-4 flex items-center border rounded-lg p-2">
          <Mail className="text-gray-500 mr-2" />
          <input type="email" name="email" placeholder="Email Address" className="w-full outline-none" required value={formData.email} onChange={handleChange} />
        </div>

        <div className="mb-4 flex items-center border rounded-lg p-2">
          <Phone className="text-gray-500 mr-2" />
          <input type="tel" name="phone" placeholder="Phone Number" className="w-full outline-none" required value={formData.phone} onChange={handleChange} />
        </div>

        <div className="mb-4 flex items-center border rounded-lg p-2">
          <Calendar className="text-gray-500 mr-2" />
          <input type="date" name="date" className="w-full outline-none" required value={formData.date} onChange={handleDateChange} />
        </div>

        <div className="mb-4 flex items-center border rounded-lg p-2">
          <Clock className="text-gray-500 mr-2" />
          <select name="time" required value={formData.time} onChange={handleChange}>
            <option value="">Select Time Slot</option>
            {availableTimes.map((slot, index) => (
              <option key={index} value={slot}>{slot}</option>
            ))}
          </select>
        </div>

        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        {confirmation && <p className="text-green-600">{confirmation}</p>}

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition" disabled={loading}>
          {loading ? "Booking..." : "Confirm Appointment"}
        </button>
      </motion.form>
    </div>
  );
};

export default Appointment;
