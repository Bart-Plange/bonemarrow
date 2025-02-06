import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import axios from "axios";
import { motion } from "framer-motion";

const AppointmentCalendar = ({ user, doctorId }) => {
  const [date, setDate] = useState(new Date());
  const [availableSlots, setAvailableSlots] = useState([]); // ✅ Ensure default value is an array
  const [selectedTime, setSelectedTime] = useState(null);
  const [confirmation, setConfirmation] = useState(null);
  const [error, setError] = useState(null); // ✅ Error state

  // Fetch available slots when date changes
  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const formattedDate = date.toISOString().split("T")[0];
        const response = await axios.get(`/api/appointments/available-slots/${doctorId}/${formattedDate}`);

        if (response.data.availableSlots) {
          setAvailableSlots(response.data.availableSlots);
        } else {
          setAvailableSlots([]); // ✅ Ensure it remains an array
        }
      } catch (err) {
        console.error("❌ Error fetching slots:", err);
        setAvailableSlots([]); // ✅ Prevent undefined state
        setError("Failed to load available slots.");
      }
    };

    if (doctorId) {
      fetchSlots();
    }
  }, [date, doctorId]);

  // Handle appointment booking
  const handleBookAppointment = async () => {
    if (!selectedTime) return;

    try {
      await axios.post("/api/appointments/book", {
        userId: user.id,
        doctorId,
        date: date.toISOString().split("T")[0],
        time: selectedTime,
      });
      setConfirmation("✅ Appointment booked successfully!");
      setError(null);
    } catch (error) {
      console.error("❌ Booking Error:", error);
      setConfirmation(null);
      setError(error.response?.data?.message || "Booking failed.");
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-blue-700">Book an Appointment</h2>

      {/* Calendar */}
      <Calendar
        onChange={setDate}
        value={date}
        className="mt-4 border rounded-lg w-full"
      />

      {/* Time Slots */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">Available Slots</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {availableSlots.length > 0 ? (
            availableSlots.map((slot, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(slot)}
                className={`px-3 py-2 rounded-md ${
                  selectedTime === slot ? "bg-blue-600 text-white" : "bg-gray-200"
                }`}
              >
                {slot}
              </button>
            ))
          ) : (
            <p className="text-gray-600">{error ? error : "No slots available"}</p>
          )}
        </div>
      </div>

      {/* Book Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBookAppointment}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md shadow-md"
      >
        Confirm Appointment
      </motion.button>

      {confirmation && <p className="mt-2 text-green-600">{confirmation}</p>}
      {error && <p className="mt-2 text-red-600">{error}</p>}
    </div>
  );
};

export default AppointmentCalendar;
